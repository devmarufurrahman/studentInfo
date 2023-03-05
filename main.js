import studentData from "./data.json" assert { type: "json" };

let body = document.querySelector("#tbody");

for (let i = 0; i < studentData.length; i++) {
  let tr = document.createElement("tr");

  let nameTd = document.createElement("td");
    nameTd.innerHTML = studentData[i].name;
    tr.appendChild(nameTd);

    let rollTd = document.createElement("td");
    rollTd.innerHTML = studentData[i].Roll;
    tr.appendChild(rollTd);


    let regTd = document.createElement("td");
    regTd.innerHTML = studentData[i].Reg;
    tr.appendChild(regTd);


    let depTd = document.createElement("td");
    depTd.innerHTML = studentData[i].Department;
    tr.appendChild(depTd);


    
    let SemesterTd = document.createElement("td");
    SemesterTd.innerHTML = studentData[i].Semester;
    tr.appendChild(SemesterTd);


    let SesTd = document.createElement("td");
    SesTd.innerHTML = studentData[i].Session;
    tr.appendChild(SesTd);

  body.appendChild(tr);
}

// studentData.map((e) => {
//   let tr = document.createElement("tr");

//   let nameTd = document.createElement("td");
//   nameTd.innerHTML = e.name;
//   tr.appendChild(nameTd);
//   let rollTd = document.createElement("td");
//   rollTd.innerHTML = e.Roll;
//   tr.appendChild(rollTd);

//   body.appendChild(tr);
// });
