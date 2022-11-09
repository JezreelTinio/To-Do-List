window.addEventListener('load', () => {
    let form = document.querySelector("#new-task-form");
    let input = document.querySelector("#new-task-input");
    let list_el = document.querySelector("#lists");
    
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    let count = list_el.childElementCount;

    if(count === 5){
        input.setAttribute("disabled","");
        alert("Limit Reached");
    }
        let list = input.value;
        if (!list) {
            alert("Fill out the list");
            return;
        }       
        let list_elem = document.createElement("div");
        list_elem.classList.add("list");

        let list_content_el = document.createElement("div")
        list_content_el.classList.add("content");
        

        list_elem.appendChild(list_content_el);

        let list_input_el = document.createElement("input");
        list_input_el.classList.add("text");
        list_input_el.type= "text";
        list_input_el.value = list;
        list_input_el.setAttribute ("readonly", "readonly");

        list_content_el.appendChild(list_input_el);

        let list_actions_el = document.createElement("div")
        list_actions_el.classList.add("actions");

        let list_edit_el = document.createElement("button");
        list_edit_el.classList.add("edit");
        list_edit_el.innerHTML = "Edit";

        list_delete_el = document.createElement("button");
        list_delete_el.classList.add("delete");
        list_delete_el.innerHTML = "Delete";

        list_actions_el.appendChild(list_edit_el);
        list_actions_el.appendChild(list_delete_el);

        list_elem.appendChild(list_actions_el);
        list_el.appendChild(list_elem);

        input.value = "";

        list_edit_el.addEventListener('click', () => {
            if(list_edit_el.innerText.toLowerCase() == "edit")
            {
                list_input_el.removeAttribute("readonly");
                list_input_el.focus();
                list_edit_el.innerText = "Save";
            } else {
                list_input_el.setAttribute("readonly", "readonly");
                list_edit_el.innerText = "Edit";
            }
        });
                list_delete_el.addEventListener('click', () => {
                list_el.removeChild(list_elem);
            })

    })
})