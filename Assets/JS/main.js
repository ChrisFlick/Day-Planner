let $container = $('.container');
let $date = $('#currentDay');

let tasks = localStorage.getItem('tasks')

if (tasks) {
    tasks = JSON.parse(tasks)
} else {
    tasks = [];
}


$date.text(moment().format('dddd MMMM Do'));



$(document).ready( () => {
    let STARTING_HOUR = 9; // Start at 9 AM
    let MAX_HOUR = 17;  // End at 5 PM

    for (let i = STARTING_HOUR; i <= MAX_HOUR; i++) { // Loop through and create calander.
        let $time = $('<div>');
        let $task = $('<div>')
        let $form = $('<form>')
        let $input = $('<textarea>')
        let $submit = $('<button>')
        let $icon = $('<i>')

        let iTime = moment(i + ":00", 'hh').format('HH');
        let currentTime = moment().format('HH');
    


        $time.attr('class', 'hour')

        $time.text(moment(i + ":00", 'hh:mm').format('hh:mm a'))

        $task.attr('class', 'row')

        $task.css('border-color', 'white');
        $task.css('border-style', 'solid');

        if ( iTime === currentTime ) { // If the current time matches the calender time being iterated on make the background color grey
            $task.attr('class', 'present')
        } else if (iTime < currentTime) { // If the current time has pased the iterated calender time make the background grey
            $task.attr('class', 'past')
        } else { // Otherwise future time will have a green background
            $task.attr('class', 'future')
        }

        $input.attr('type', 'text')
        $input.attr('id', 'task-' + i)
        
        if (tasks[i]) { // Check to see if a task has been saved and fill the textarea
            $input.text(tasks[i]);
        }

        $icon.attr('class', 'fa fa-floppy-o fa-2x')


        $submit.css('position', 'relative')
        $submit.attr('type', 'submit')
        $submit.attr('class', "btn btn-primary float-right saveBtn")
        
        $submit.attr('id', "button-" + i)
        $submit.append($icon)

        


        // Append DOM
        $container.append($task);
        
        $task.append($time)
        $task.append($form)

        $form.append($input);
        $form.append($submit)    
        
    }

    $('button').on('click', function(event) {
        event.preventDefault();

        let id = $(this).attr('id')
        id = id.split('-');
        id = id[1];
        
        tasks[id] = $('#task-' + id).val();
        localStorage.setItem('tasks', JSON.stringify(tasks))


    });
})