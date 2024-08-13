
      const tasks = [];
      function loadFromLocalStorage(){
        const allTasks=JSON.parse(localStorage.getItem('allTasks'));  
        if(allTasks) {
            tasks.push(...allTasks)
        }   
        loadTasks()
    }
    loadFromLocalStorage();

      function loadTasks() {
       localStorage.setItem('allTasks',JSON.stringify(tasks));
        const tasksContainer = document.getElementById('tasks-container');
        tasksContainer.innerHTML = '';
        for (const task of tasks) {
          tasksContainer.innerHTML += `
           <div class="todo-item">
            ${task}
            <button class="del-btn" type="button" ><img src="trash.png" onclick="deleteTasks('${task}')" class="img"/>
                </button>
            </div>
   `;
        }
      }
     
      function deleteTasks(task) {
        const taskIndex=tasks.indexOf(task);
        tasks.splice(taskIndex,1);
        loadTasks();
      }
      function addTask(){
    const taskInputElement =document.getElementById("input");
    const addedtask = taskInputElement.value;
    
    if(!addedtask){
        alert("Please enter a task");
        return;
    }
    
    tasks.push( addedtask);
    loadTasks();
    taskInputElement.value='';
    }
   