let $container = $('.container');
let $date = $('#currentDay');

$date.text(moment().format('dddd MMMM Do'));
console.log()



$(document).ready( () => {
    let STARTING_HOUR = 9; // Start at 9 AM
    let MAX_HOUR = 17;  // End at 5 PM

    for (let i = STARTING_HOUR; i <= MAX_HOUR; i++) {
        let $div = $('<div>');

        $div.height('50px')
        $div.css('background-color', )

        $div.text(moment(i + ":00", 'hh:mm').format('hh:mm a'))

        $container.append($div);
        
    }
})