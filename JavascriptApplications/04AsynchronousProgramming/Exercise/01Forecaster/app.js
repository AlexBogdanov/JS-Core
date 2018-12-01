// Get req available locations V
// Check location V
// Get req today and upcoming if location valid V
// Render data V
// Handle error V
// Render error V

// Get available locations: https://judgetests.firebaseio.com/locations.json
// Get location today`s weather: https://judgetests.firebaseio.com/forecast/today/{code}.json
// Get location upcoming weather: https://judgetests.firebaseio.com/forecast/upcoming/{code}.json
const host = 'https://judgetests.firebaseio.com';
let validLocations;
let $current = $('#current');
let $upcoming = $('#upcoming');
const symbols = {
    'Sunny': '&#x2600;',
    'Partly sunny': '&#x26C5;',
    'Overcast': '&#x2601;',
    'Rain': '&#x2614;',
    'Degrees': '&#176;'
};

$.get(remote('locations'))
    .then(data => validLocations = data)
    .catch(handleError);

function attachEvents() {
    $('#submit').on('click', handleLocation);
}

function handleLocation() {
    const inputLocation = $('#location').val();
    let isValidLocation = false;
    let locationCode;
    validLocations.forEach(location => {
        if (!isValidLocation) {
            if (inputLocation === location.name) {
                isValidLocation = true;
                locationCode = location.code;
            }
        }
    });

    if (isValidLocation) {
        let weatherTodayReq = $.get(remote(`forecast/today/${locationCode}`));
        let weatherUpcomingReq = $.get(remote(`forecast/upcoming/${locationCode}`));
        Promise.all([weatherTodayReq, weatherUpcomingReq])
            .then(handleRequests)
            .catch(handleError);
    } else {
        handleError();
    }
}

function handleRequests([today, upcoming]) {
    const currentSymbol = symbols[today.forecast.condition];
    const currentLocation = today.name;
    const currentTemperature = `${today.forecast.low}${symbols.Degrees} / ${today.forecast.high}${symbols.Degrees}`;
    const currentCondition = today.forecast.condition;
    $current.empty();
    $current.append(renderCurrent(currentSymbol, currentLocation, currentTemperature, currentCondition));

    $upcoming.empty();
    $upcoming.append('<div class="label">Three-day forecast</div>');
    upcoming.forecast.forEach(forecast => {
        const upcomingSymbol = symbols[forecast.condition];
        const upcomingTemperature = `${forecast.low}${symbols.Degrees} / ${forecast.high}${symbols.Degrees}`;
        const upcomingCondition = forecast.condition;
        $upcoming.append(renderUpcoming(upcomingSymbol, upcomingTemperature, upcomingCondition));
    });

    $('#forecast').show();
}

function renderCurrent(symbol, location, temperature, condition) {
    return `<div class="label">Current conditions</div>
        <span class="condition symbol">${symbol}</span>
        <span class="condition">
            <span class="forecast-data">${location}</span>
            <span class="forecast-data">${temperature}</span>
            <span class="forecast-data">${condition}</span>
        </span>`;
}

function renderUpcoming(symbol, temperature, condition) {
    return `<span class="upcoming">
            <span class="symbol">${symbol}</span>
            <span class="forecast-data">${temperature}</span>
            <span class="forecast-data">${condition}</span>
        </span>`;
}

function handleError() {
    $current.empty();
    $upcoming.empty();
    $('#forecast').text('Error');
    $('#forecast').show();
}

function remote(appdata) {
    return `${host}/${appdata}.json`;
}