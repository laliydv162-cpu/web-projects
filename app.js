let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=='BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});
