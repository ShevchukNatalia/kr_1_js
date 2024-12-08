//Add EventListeners to buttons
document.getElementById("button_add").addEventListener("click",getElement );
// To clear the error message
document.getElementById("new_value").addEventListener("focus",() =>{
    document.getElementById("error_msg").textContent = "";
} );
document.getElementById("sort_name").addEventListener("click",sortByName );
document.getElementById("sort_value").addEventListener("click",sortByValue );
document.getElementById("button_delete").addEventListener("click",deleteLiItem );

function getElement(){
    // Get value from input
    let inputVal = document.getElementById("new_value").value;
    let regex = /^[a-zA-Z0-9]+\s*=\s*[a-zA-Z0-9]+$/;
    if(regex.test(inputVal)){
        inputVal = inputVal.replace(/\s*=\s*/, '=');
        // Creating <li> element, add checkbox and value, push to <ul>
        let liElem = document.createElement("li");
        // Adding a checkbox for easy deletion of items.
        let checkElem = document.createElement("input");
        checkElem.type="checkbox";
        liElem.appendChild(checkElem);
        let textElem = document.createTextNode(inputVal);
        liElem.appendChild(textElem);
        liElem.style.listStyleType = "none";
        document.getElementById("list").appendChild(liElem);
        // Clear input
        document.getElementById("new_value").value = "";
        document.getElementById("error_msg").textContent = "";
    }else {
        document.getElementById("error_msg").textContent = "Wrong format: Name=Value"
    }
}

// function sort by Name
// Since Name is the first part of the string, it does not need to be split.
function sortByName(){
    let sortName = [];
    let ulElem = document.getElementById("list");
    let liElems = ulElem.getElementsByTagName("li");
    for (const liElem of liElems) {
        sortName.push(liElem.textContent);
    }
    // For correct comparison, I reduce to one register
     createLiList(sortName.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));
}

// function sort by Value
function sortByValue(){
    let sortValue = [];
    let ulElem = document.getElementById("list");
    let liElems = ulElem.getElementsByTagName("li");
    for (const liElem of liElems) {
        sortValue.push(liElem.textContent);
    }
    sortValue = sortValue.sort((a, b) => {
        return a.toLowerCase().split("=")[1].localeCompare(b.toLowerCase().split("=")[1]);
    });
    createLiList(sortValue);
}

 //  To avoid duplicating code
function createLiList(valueArray){
    let ulElem = document.getElementById("list");
    //Clearing the list
    while (ulElem.firstChild) {
        ulElem.removeChild(ulElem.firstChild);
    }
    for (const  element of valueArray) {
        let liElem = document.createElement("li");
        let checkElem = document.createElement("input");
        checkElem.type="checkbox";
        liElem.appendChild(checkElem);
        let textElem = document.createTextNode(element);
        liElem.appendChild(textElem);
        liElem.style.listStyleType = "none";
        ulElem.appendChild(liElem);
    }
}

//Function delete
// I find all the <li> elements and check the checkboxes in them
function deleteLiItem(){
    let ulElem = document.getElementById("list");
    let liElems = ulElem.getElementsByTagName("li");
    for (const liElem of liElems) {
        let checkBox = liElem.querySelector("input[type='checkbox']");
        if(checkBox.checked){
            ulElem.removeChild(liElem);
        }
    }
}
