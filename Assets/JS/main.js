let $container = $('.container');
let $date = $('#currentDay');

$date.text(moment().format('dddd MMMM Do'));



$(document).ready( () => {
    let STARTING_HOUR = 9; // Start at 9 AM
    let MAX_HOUR = 17;  // End at 5 PM

    for (let i = STARTING_HOUR; i <= MAX_HOUR; i++) {
        let $time = $('<div>');
        let $task = $('<div>')

        let iTime = moment(i + ":00", 'hh').format('HH');
        let currentTime = moment().format('HH');
      
        // 
        // $div.css('background-color', "lightgrey")

        $time.height('50px')
        $time.width('100px')

        $time.css('background-color', 'white')

        $time.css('border-top', "solid")
        $time.css('border-right', "solid")

        $time.css('border-color', "lightgrey")

        $time.text(moment(i + ":00", 'hh:mm').format('hh:mm a'))

        $task.height('55px')

        $task.css('border-color', 'white');
        $task.css('border-style', 'solid')

        if ( iTime === currentTime ) { // If the current time matches the calender time being iterated on make the background color grey
            $task.css('background-color', 'red')
        } else if (iTime < currentTime) { // If the current time has pased the iterated calender time make the background grey
            $task.css('background-color', 'lightgrey')
        } else { // Otherwise future time will have a green background
            $task.css('background-color', 'green')
        }
        
        $container.append($task);
        $task.append($time)
        
    }
})