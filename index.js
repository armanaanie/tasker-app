const taskForm= document.getElementById('taskForm');
const taskInput= document.getElementById('taskInput');
const taskList= document.getElementById('taskList');
const totalTask=document.getElementById('totalTask')
function updateTotal(){
    totalTask.innerText= taskList.children.length
}
function createTask(taskText){
const li= document.createElement("li");
const span=document.createElement("span");
const actions=document.createElement("div");
actions.className="actions";

span.textContent=taskText;

const doneBtn= document.createElement("button");
doneBtn.innerText="Done";
doneBtn.className="done-Btn";

const deleteBtn= document.createElement("button");
deleteBtn.innerText="Delete";
deleteBtn.className="delete-Btn"


const editBtn= document.createElement("button");
editBtn.innerText="Edit";
editBtn.className="edit-Btn"

deleteBtn.addEventListener("click", ()=>{
    li.remove()

    updateTotal()
});

doneBtn.addEventListener("click",()=>{
  span.classList.toggle("completed") ;
updateTotal()

});


actions.appendChild(doneBtn);
actions.appendChild(deleteBtn);
li.appendChild(span);
li.appendChild(actions);
taskList.appendChild(li);







}
taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();

const taskText=taskInput.value

  createTask(taskText);
  input.value= ""
})
