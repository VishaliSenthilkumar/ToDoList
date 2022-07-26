let input = document.querySelector(".item")
let addBtn = document.querySelector(".btn-add")
let container = document.querySelector(".container")
let footer = document.querySelector(".tail")

addBtn.addEventListener("click", function(){
    if(input.value.trim() != 0)
    {
        let newItem = document.createElement('div') ;
        newItem.classList.add("new-item");
        newItem.innerHTML = ` 
        <p>${input.value}</p>
        <div class="new-btn">
        <button><i class="fa-solid fa-pen-to-square pen"></i></button>
        <button><i class="fa-solid fa-xmark xmark"></i></button>
        </div>`;
        container.appendChild(newItem);
        input.value="";
    }
    else
    {
        alert('Please enter a task');
    }
})

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains("fa-pen-to-square"))
    {
        e.target.parentElement.parentElement.parentElement.classList.toggle("completed");
    }
    if(e.target.classList.contains("fa-xmark"))
    {
        e.target.parentElement.parentElement.parentElement.remove();
    }
})

let removeAll = document.querySelector(".removeAll");
removeAll.addEventListener("click", function(){
    if(container.innerHTML!=0){
        container.innerHTML=" ";
    }
    else{
        alert("There is no task to delete")
    }
})