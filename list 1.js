
function taskTitleValidation()
{
     var reg =/[A-Za-z]+[0-9]?/;
    var taskTitle = document.getElementById("task").value;
    if (reg.test(taskTitle)==false) {
        alert("Please enter task title");
        return false;
    }
    return true;
    }
function taskDescrepValid()
{
    var descerp = document.getElementById("description").value;
    if (descerp=="") {
        alert("Please enter task description");
        return false;
    }
    return true;
}
function addNewTask()
{
    var taskTitle = document.getElementById("task").value;
    var descerp = document.getElementById("description").value;
    var taskarr = [taskTitle,descerp];
  
    var deleteBtn='<button  id="delete" onclick="deleteTask(this)"  > Delete</button>';
    var editBtn = '<button  id="edit" onclick="editTask()"> Edit</button>';
    
    taskarr= taskarr.concat(deleteBtn,editBtn);
    var table = document.getElementById("table1");
    
    var row;
    
    row = table.insertRow();
    for (var i =0; i<taskarr.length ; i++)
    {
        var cell = row.insertCell();
        cell.innerHTML = taskarr[i];
    }
    
table.appendChild(row);

    
}
function deleteTask(r)
{
    var table = document.getElementById("table1");
    table.deleteRow(r.parentNode.parentNode.rowIndex);
 
    }

function editTask()
{
    var table = document.getElementById("table1");
    
    for(var i =0 ; i<table.rows.length ; i++)
    {
        table.rows[i].onclick = function()
    {
          

    document.getElementById("task").value=this.cells[0].innerHTML ;
    document.getElementById("description").value= this.cells[1].innerHTML;
}
    }
}
