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
//
var taskListArray = [Weighting.selectedIndex];

taskListArray.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(taskListArray);



//
function addTask(taskDescription, dueDate, weightList, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    taskDescription,
    dueDate,
    dateCreated, 
    weightList,
    completionStatus
  };
  taskListArray.push(task);
  renderTask(task);
  //下面这一行是我后加的
tasklist.style.color = 'black';
}

function renderTask(task){
  // Create HTML elements
  let item = document.createElement("li");
  item.innerHTML = "<p>" + task.taskDescription + "</p>";
  tasklist.appendChild(item);
  
  //我加的
  item.style. fontSize="1.2rem";

  

   let item2 = document.createElement("li");
  item2.innerHTML = "<p>" + task.dueDate +task.weightList+ "</p>";
  tasklist.appendChild(item2);
  
  //我加的
  item2.style. fontSize="1rem";



  
  // Extra Task DOM elements
  let calButton = document.createElement("button");
  let calButtonText = document.createTextNode("Cancel");
  calButton.appendChild(calButtonText);
  //摁钮位 我加//我加的
  item2.appendChild(calButton);
  

  

calButton.style.width = '5rem'; 
calButton.style.height = '2.5rem'; 
calButton.style.background = '#bfbfbf'; 
calButton.style.color = 'white'; 
calButton.style.fontSize = '1rem';
calButton.style.borderRadius = '15px';
calButton.style.border='none';
  

calButton.style.margin='1rem 1rem 0rem 14.5rem';
  
  // Event Listeners for DOM elements
  calButton.addEventListener("click", function(event){
    event.preventDefault();
    item2.remove();
    item.remove();
  })
 

  // Clear the input form
  form.reset();

  //下面是finish：
let finButton = document.createElement("button")
let finButtonText = document.createTextNode("Finish");
finButton.appendChild(finButtonText);
  item2.appendChild(finButton);

  //外观

finButton.style.width = '5rem'; 
finButton.style.height = '2.5rem'; 
finButton.style.background = '#0084ff'; 
finButton.style.color = 'white'; 
finButton.style.fontSize = '1rem';
finButton.style.borderRadius = '15px';
finButton.style.border='none';


  
//我加的
finButton.addEventListener("click", function(){
const tasklist = document.getElementById('tasklist');

  


  tasklist.style.color = '#007bff';

  });
 

  // Clear the input form
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

  document.querySelector('#startbtn').onclick = function() {
  if(Switch){
    Timecount.innerHTML = parseInt(Sec / 60) + ':' +(Sec % 60 + '0');
    function pomoTime(Sec) {
    var minute = parseInt(Sec / 60);
    var second = Sec % 60;

      if (minute > 0 && second >= 10) {
        Timecount.innerHTML = minute + ':' + second;
      }else if (minute > 0 && second < 10 && second >= 0) {
        Timecount.innerHTML = minute + ':' + '0' + second;
      } 
    }

    var TimeInter = setInterval(function () {  
      Sec--;
      pomoTime(Sec);
      },1000);  
      //Every seconds
    }
  }
  document.querySelector('#stopbtn').onclick = function() {
  var check = null;
   clearInterval(check);
   check = null;
   document.getElementById('Timecount').innerHTML = '25' + ':' + '00';
return pomoTime(Sec);
    
}
}


//dictionary


function wordSearch(){
   document.getElementById('result').style.visibility ='visible';
   
   var word = document.getElementById('word');
   var synonyms = document.getElementById('synonyms');
   var phonetic = document.getElementById('phonetic');
   
 var definition = document.getElementById('definition');


   
   var SearchWord = document.getElementById('searchBox1').value;
   
   var request = new XMLHttpRequest();
   request.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/'+SearchWord, true);
   request.onload = function() {
   
     var data = JSON.parse(this.response);
     if (request.status >= 200 && request.status < 400) {

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

//music
