function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    let interval = null;
    let sec = 0;

    $('#start-timer').on('click', () => {
        if (interval === null) {
            interval = setInterval(increment, 1000);
        }
    });

    $('#stop-timer').on('click', () => {
        clearInterval(interval);
        interval = null;
    });

    function increment() {
        sec++;
        $(hours).text(('0' + Math.floor(sec / 60 / 60)).slice(-2));
        $(minutes).text(('0' + Math.floor((sec / 60) % 60)).slice(-2));
        $(seconds).text(('0' + Math.floor(sec % 60)).slice(-2));
    }
}