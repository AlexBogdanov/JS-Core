function search() {
    let input = $('#searchText').val();
    $('#towns').css('font-weight', '');
    let towns = $(`#towns li:contains(${input})`)
    .css('font-weight', 'bold');
    $('#result').text(towns.length + ' maches found.');
}