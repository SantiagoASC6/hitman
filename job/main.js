let first = document.getElementById("title_input");
first.addEventListener("keyup", chris)

function chris(){
    let main = document.getElementById("main_title");
    main.innerText = first.value;
}

let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");

let button = document.getElementById("submit_button")
button.addEventListener("click", buttonPress)

function buttonPress(event){
    event.preventDefault
    if(title_input == "" || noun.value == "" || verb.value == "" || adjective.value == ""){
        alert("You're dumb")
    }
    else{
        alert("Last night I ate a " + noun.value + ", and today I just had to " + verb.value + ". What a " + adjective.value + " day!")
    }
}

