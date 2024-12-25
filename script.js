const inputbox = document.querySelector("#inputbox");
const listcontainer = document.querySelector("#list");
function addTask(){
    if(inputbox.value === ''){
        alert("You must write something to be able to add to the list.")
    }
    else{
        let Li = document.createElement("li");
        Li.textContent = inputbox.value;
        listcontainer.appendChild(Li);
        let remove = document.createElement("span");
        remove.textContent = "\u00d7";
        Li.appendChild(remove)
    }
    inputbox.value = '';
    }
    listcontainer.addEventListener("click", function(clear){
        if(clear.target.tagName === 'LI'){
            clear.target.classList.toggle("checked");
        }
        else if(clear.target.tagName === "SPAN"){
            clear.target.parentElement.remove();
        }
    }, false);
    inputbox.addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            addTask();
        }
    });