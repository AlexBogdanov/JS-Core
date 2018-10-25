function search() {
    let input = $('#searchText').val();
    $('#towns li').css('font-weight', '');
    let matchedTowns = $(`#towns li:contains(${input})`)
    .css('font-weight', 'bold');
    
    $('#result').text(`${matchedTowns.length} matches found.`);
}