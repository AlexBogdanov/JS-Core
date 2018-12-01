function getInfo() {
    let url = 'https://judgetests.firebaseio.com/businfo/';
    let busStop = $('#stopId').val();
    $('#buses').empty();
    $.get(`${url}${busStop}.json`)
        .then(data => {
            $('#stopName')
                .text(data.name);
            Object.keys(data.buses).forEach(bus => {
                $('<li>')
                    .text(`Bus ${bus} arrives in ${data.buses[bus]} minutes`)
                    .appendTo($('#buses'));
            });
        }).catch(err => {
            $('#stopName')
                .text('Error');
        });
}