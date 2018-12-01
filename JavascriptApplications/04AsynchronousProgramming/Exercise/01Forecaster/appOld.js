function attachEvents() {
    const availableLocationUrl = 'https://judgetests.firebaseio.com/locations.json';
    // Get current weather: https://judgetests.firebaseio.com/forecast/today/{code}.json 
    // Get upcoming weather: https://judgetests.firebaseio.com/forecast/upcoming/{code}.json 
    const weatherBaseUrl = 'https://judgetests.firebaseio.com/forecast/';

    const symbols = {
        'Sunny': '&#x2600;', // ☀
        'Partly sunny': '&#x26C5;', // ⛅
        'Overcast': '&#x2601;', // ☁
        'Rain': '&#x2614;', // ☂
        'Degrees': '&#176;'
    };



    $('#submit ').on('click', getWeather);

    function getWeather() {
        let location = $('#location').val();
        $.get(availableLocationUrl)
            .then(data => {
                let isValidLocation = false;
                let validLocation = '';
                let locationCode = '';
                Object.keys(data).forEach(key => {
                    if (!isValidLocation) {
                        validLocation = data[key].name;
                        locationCode = data[key].code;
                        isValidLocation = validLocation === location ? true : false;
                    }
                });
                if (isValidLocation) {
                    handleLocation(locationCode);
                } else {
                    handleError();
                }
            }).catch(err => handleError);
    }

    function handleLocation(code) {
        let currentWeather = $.get(`${weatherBaseUrl}/today/${code}.json`);
        let upcomingWeather = $.get(`${weatherBaseUrl}/upcoming/${code}.json`);
        Promise.all([currentWeather, upcomingWeather])
            .then(data => handleWeather(data))
            .catch(handleError);
    }

    function handleWeather([currWeather, upWeather]) {
        // Current weather
        $('#forecast').show();
        $('#current').empty();
        $('#current').append(
            $('<div>')
                .attr('class', 'label')
                .text('Current conditions')
        );
        const location = currWeather.name;
        const weather = currWeather.forecast.condition;
        const temperature = currWeather.forecast.low + symbols.Degrees + ' / ' + currWeather.forecast.high + symbols.Degrees;
        $(`<span>${symbols[weather]}</span>`)
            .attr('class', 'condition symbol')
            .appendTo($('#current'));
        let $current = $('<span>').attr('class', 'condition');
        $('<span>')
            .attr('class', 'forecast-data')
            .text(location)
            .appendTo($current);
        $(`<span>${temperature}</span>`)
            .attr('class', 'forecast-data')
            .appendTo($current);
        $('<span>')
            .attr('class', 'forecast-data')
            .text(weather)
            .appendTo($current);
        $current.appendTo($('#current'));

        // Upcoming weather
        $('#upcoming').empty();
        $('#upcoming').append(
            $('<div>')
                .attr('class', 'label')
                .text('Three-day forecast')
        );
        upWeather.forecast.forEach(day => {
            const weather = day.condition;
            const temperature = day.low + symbols.Degrees + ' / ' + day.high + symbols.Degrees;
            let $upcoming = $('<span>').attr('class', 'upcoming');
            $(`<span>${symbols[weather]}</span>`)
                .attr('class', 'symbol')
                .appendTo($upcoming);
            $(`<span>${temperature}</span>`)
                .attr('class', 'forecast-data')
                .appendTo($upcoming);
            $('<span>')
                .attr('class', 'forecast-data')
                .text(weather)
                .appendTo($upcoming);
            $upcoming.appendTo('#upcoming');
        });
    }

    function handleError() {
        $('#current').empty();
        $('#upcoming').empty();
        $('#current').append('<div>Error</div>');
        $('#forecast').show();
    }
}