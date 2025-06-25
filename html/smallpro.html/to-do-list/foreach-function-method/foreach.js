const todolist = [{
    name: 'make dinner',
    duedate: '2021-12-24'
},{
    name: 'Wash dishes',
    duedate: '2021-12-24'
}];

rendertodolist();

function rendertodolist() {

    let todolisthtml = '';

    todolist.forEach((todoObject, index) => {
        const { name, duedate} = todoObject;
        const html = `
        <div>${name}</div>
        <div> ${duedate} </div>
        <button  
        class="delete-button js-delete-todo-button">DELETE</button>
         `;
        todolisthtml += html;

    });

    console.log(todolisthtml);

    document.querySelector('.js-todo-list').innerHTML = todolisthtml;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deletebutton, index) => {
            deletebutton.addEventListener('click',()=>{
                todolist.splice(index, 1);
            rendertodolist();
            });
        });
}

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
    addtodo();
});



function addtodo() {
    const inputelement = document.querySelector('.js-name-input');

    let name = inputelement.value; // value - text in the text box

    const dateinputelement = document.querySelector('.js-duedate-input');
    const duedate = dateinputelement.value;

    todolist.push({
      //  name: name,
      //  duedate: duedate
      name,
      duedate
    }
    );
    console.log(todolist);

    inputelement.value = '';

    rendertodolist();

}
