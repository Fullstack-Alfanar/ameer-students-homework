var sum = 0;
var arr;
if(localStorage.getItem('storedata') != null)
{
  arr=JSON.parse(localStorage.getItem('storedata'));
 
}
// IN IF (FOR OLD DATA)

else 
{
  arr=[];
}

function stam_func() {
  let elemnts = [];
  elemnts[0] = document.getElementById("student");
  elemnts[1] = document.getElementById("score");
  elemnts[2] = document.getElementById("mytable");
  if (elemnts[0].value == "") {
    alert("please enter a student name");
  } else if (elemnts[1].value == "") {
    alert("please enter a student score");
  } else if (isNaN(elemnts[1].value)) {
    alert("please enter a number for score");
  } else {
    let ele1 = document.createElement("label");
    let ele2 = document.createElement("label");
    let ele3 = document.createElement("td");
    let ele4 = document.createElement("td");
    let ele5 = document.createElement("tr");
    ele1.textContent = elemnts[0].value;
    ele2.textContent = elemnts[1].value;
    ele3.appendChild(ele1);
    ele4.appendChild(ele2);
    ele5.appendChild(ele3);
    ele5.appendChild(ele4);
    elemnts[2].appendChild(ele5);

    sum += Number(elemnts[1].value);
    var lines = elemnts[2].getElementsByTagName("tr");
    let x1 = document.getElementById("num");
    x1.textContent = lines.length;
    let x2 = document.getElementById("avg");
    x2.textContent = sum / lines.length;
    let y={
      studentname:  elemnts[0].value,
      studentscore:  elemnts[1].value,
      studentnumber: lines.length,
      studentaverage: x2.textContent  
    }

    arr.push(y);
    elemnts[0].value="";
    elemnts[1].value="";

    localStorage.setItem('storedata', JSON.stringify(arr));
  }
}
