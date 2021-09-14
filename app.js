$(() => {
    $('form').on('submit', (event) => {
        const inputValue = $('#input-box').val()
        event.preventDefault();
        $(event.currentTarget).trigger('reset');
        console.log(inputValue)
        makeTask(inputValue)
    })
    $('.complete').on("click", (event) => {
        completeTask(event)
    })
    $('.remove').on("click", (event) => {
        removeTask(event)
    })
})

function makeTask(input) {
    const newTask = $('<div>').addClass("item")
    newTask.append($("<p>").text(input))
    newTask.append($("<button>").text('Completed').addClass("complete").on("click", (event) => {
        completeTask(event)
    }))
    $("#toDo").append(newTask)
}

function completeTask(event) {
    $(event.currentTarget).text('remove').addClass("remove").removeClass("complete").on("click", (event) => {
        removeTask(event)
    })
    $('#done').append($(event.currentTarget).parent())
}

function removeTask(event) {
    $(event.currentTarget).parent().remove()

}