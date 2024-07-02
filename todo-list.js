let inputs=document.getElementById("inp");
let text=document.querySelector(".text");

function Add(){
    if(inputs.value==""){
        alert("please Enter Task");
    }
    else{
        let newEle=document.createElement("ul")
        newEle.innerHTML=`${inputs.value} <button>delete</button>`;
        text.appendChild(newEle);
        newEle.querySelector("button").addEventListener("click",remove)
        function remove(){
            newEle.remove();
        }
    }
}