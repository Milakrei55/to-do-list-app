// javascript for to do list app

function newItem() {
    let inputValue = $('#input').val();
    let li = $(`<li>${inputValue}</li>`);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let list = $('#list');
        list.append(li);
    }
    function crossOut() {
        li.toggleClass("strike");
    }
    li.on('dblclick', crossOut);

    let crossOutButton = $(`<crossoutbutton>X</crossoutbutton>`)
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.remove();
    }
    $('#list').sortable();

}