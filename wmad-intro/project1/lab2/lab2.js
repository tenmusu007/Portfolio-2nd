
let meal ={
    name:"",
    price:"",
    popularity:""
}
// let parentEl = document.getElementById("parent");
// let addTable = document.createElement("table");
// let addTr = document.createElement("tr");
// let addTh = document.createElement("th");
// addTh.innerHTML = "Name";
// let addTd = document.createElement("td")
// addTd.innerHTML = "Pizza"
// let addTd2 = document.createElement("td")
// addTd2.innerHTML = "Hamburger"


// parentEl.appendChild(addTable);
// addTable.appendChild(addTr);
// addTr.appendChild(addTh);
// addTr.appendChild(addTd);
// addTr.appendChild(addTd2);


let parentEl = document.getElementById("parent");
let addTable = document.createElement("table");
let addTr = document.createElement("tr");
let addTh = document.createElement("th");
addTh.innerHTML = "Name";
let addTh1 = document.createElement("th")
addTh1.innerHTML = "Price";
let addTh2 = document.createElement("th")
addTh2.innerHTML = "Popularity";


parentEl.appendChild(addTable);
addTable.appendChild(addTr);
addTr.appendChild(addTh);
addTr.appendChild(addTh1);
addTr.appendChild(addTh2);

let addTr1 = document.createElement("tr");
let addTd = document.createElement("td");
addTd.innerHTML = "Pizza";
let addTd1 = document.createElement("td")
addTd1.innerHTML = "14";
let addTd2 = document.createElement("td")
addTd2.innerHTML = "High";

addTable.appendChild(addTr1);
addTr1.appendChild(addTd);
addTr1.appendChild(addTd1);
addTr1.appendChild(addTd2);

let addTr2 = document.createElement("tr");
let addTd1_1 = document.createElement("td");
addTd1_1.innerHTML = "Hamburger";
let addTd1_2 = document.createElement("td")
addTd1_2.innerHTML = "8";
let addTd2_2 = document.createElement("td")
addTd2_2.innerHTML = "High";

addTable.appendChild(addTr2);
addTr2.appendChild(addTd1_1);
addTr2.appendChild(addTd1_2);
addTr2.appendChild(addTd2_2);

addTr1.addEventListener("mouseover",function(event){
    event.target.style.backgroundColor = "orange";
})
addTr1.addEventListener("mouseout",function(event){
    event.target.style.backgroundColor = "white"
    console.log("hello")
})
addTr2.addEventListener("mouseover",function(event){
    event.target.style.backgroundColor = "orange";
})
addTr2.addEventListener("mouseout",function(event){
    event.target.style.backgroundColor = "white"
})
