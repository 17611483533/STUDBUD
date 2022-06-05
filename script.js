//First part: Add a new Task
//Task name, Duedate, Weighting

const form = document.getElementById("Addtask1");
const button = document.querySelector("#taskform > button")
var taskName1 = document.getElementById("taskName1");
var tasklist = document.getElementById("tasklist");
var Date1 = document.getElementById("Date1");
var Weighting = document.getElementById("Weighting");
const button2 = document.querySelector("#taskform > button")



form.addEventListener("submit", function(event){
  event.preventDefault();
  let task = taskName1.value;
  let dueDate = Date1.value;
  let weightList = 
  Weighting.options[Weighting.selectedIndex].value;
  addTask(task, dueDate, weightList, false);
  console.log(tasklist);
})
//The order of tasks based on their weighting
var taskListArray = [Weighting.selectedIndex];

taskListArray.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(taskListArray);



//The new task will shown on the right side.
function addTask(taskDescription, dueDate, weightList) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    taskDescription,
    dueDate,
    dateCreated, 
    weightList,
  };
  taskListArray.push(task);
  renderTask(task);
tasklist.style.color = 'black';
}

function renderTask(task){
 let item = document.createElement("li");
  item.innerHTML = "<p>" + task.taskDescription + "</p>";
  tasklist.appendChild(item);
  item.style. fontSize="1.2rem";

  

   let item2 = document.createElement("li");
  item2.innerHTML = "<p>" + task.dueDate +task.weightList+ "</p>";
  tasklist.appendChild(item2);
  item2.style. fontSize="1rem";

//Cancel button: The user can delete their task on the Task list.
  let calButton = document.createElement("button");
  let calButtonText = document.createTextNode("Cancel");
  calButton.appendChild(calButtonText);
item2.appendChild(calButton);
calButton.style.width = '5rem'; 
calButton.style.height = '2.5rem'; 
calButton.style.background = '#bfbfbf'; 
calButton.style.color = 'white'; 
calButton.style.fontSize = '1rem';
calButton.style.borderRadius = '15px';
calButton.style.border='none';
calButton.style.margin='1rem 1rem 0rem 14.5rem';
  
  calButton.addEventListener("click", function(event){
    event.preventDefault();
    item2.remove();
    item.remove();
  })
  form.reset();

//Finish button: The user can click finish button, and the task name will change the color Which means this task has been finished.
let finButton = document.createElement("button")
let finButtonText = document.createTextNode("Finish");
finButton.appendChild(finButtonText);
  item2.appendChild(finButton);
finButton.style.width = '5rem'; 
finButton.style.height = '2.5rem'; 
finButton.style.background = '#0084ff'; 
finButton.style.color = 'white'; 
finButton.style.fontSize = '1rem';
finButton.style.borderRadius = '15px';
finButton.style.border='none';

finButton.addEventListener("click", function(){
const tasklist = document.getElementById('tasklist');

  tasklist.style.color = '#007bff';

  });
  form.reset();
}



//Pomodoro
var Timecount = document.getElementById('Timecount');
var saveTime = document.getElementById('saveTime');
const startbtn = document.querySelector("startbtn");
const stopbtn = document.querySelector("stopbtn");

var Switch = 1;
function TimeStart(Sec) { 
  if (!document.getElementById) return false;
  if (!document.getElementById('Timecount')) return false;

  //Set up the Time
  document.querySelector('#startbtn').onclick = function() {
  if(Switch){
    Timecount.innerHTML = parseInt(Sec / 60) + ':' +(Sec % 60 + '0');
    function pomoTime(Sec) {
    var minute = parseInt(Sec / 60);
    var second = Sec % 60;
 //If the second is less than 10, The Timecount will change to minute+0+second
      if (minute > 0 && second >= 10) {
        Timecount.innerHTML = minute + ':' + second;
      }else if (minute > 0 && second < 10 && second >= 0) {
        Timecount.innerHTML = minute + ':' + '0' + second;
      } 
    }

    var TimeInter = setInterval(function () {  
      Sec--;
      pomoTime(Sec);
      //Every seconds. based on the time, not too fast or lower
      },1000);  
      
    }
  }
  //When the user click stop button, and the time will stop
  //However, there are some errors. I am so sorry, I tried.
  document.querySelector('#stopbtn').onclick = function() {
  var check = null;
   clearInterval(check);
   check = null;
   document.getElementById('Timecount').innerHTML = '25' + ':' + '00';
return pomoTime(Sec);
    
}
}


//Dictionary

function wordSearch(){
   document.getElementById('result').style.visibility ='visible';
   
   var word = document.getElementById('word');
   var synonyms = document.getElementById('synonyms');
   var phonetic = document.getElementById('phonetic');
   var definition = document.getElementById('definition');
   var SearchWord = document.getElementById('searchBox1').value;
   
   //online api
   var request = new XMLHttpRequest();
   request.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/'+SearchWord, true);
   request.onload = function() {
   
     var data = JSON.parse(this.response);
     if (request.status >= 200 && request.status < 400) {

//Output from the dictionary api
   word.innerHTML = data[0].word;

   phonetic.innerHTML = data[0].phonetic;
   
       definition.innerHTML = data[0].meanings[0].definitions[0].definition;

       synonyms.innerHTML = data[0].meanings[0].definitions[0].synonyms;
       
     }else{
       word.innerHTML = "Error";

       phonetic.innerHTML = "Error";
    definition.innerHTML = "Error";   
       synonyms.innerHTML = "Error"; 
     }
       
   }
   

   request.send();
}

