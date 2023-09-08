
let todo = document.querySelector('#todo');
let temp = document.querySelector('#temp');

todo.addEventListener('keyup', function(e){
    if(e.key === "Enter"){
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (todo) => {
    let tempItem = document.createElement("li");
    tempItem.innerHTML = `${todo} <i>`;

    temp.addEventListener('click', function(){
        temp.classList.toggle('done');
    });

    tempItem.querySelector('i').addEventListener('click', function(){
        tempItem.remove();
    });

    temp.appendChild(tempItem);
};

let tellErrors = () => {
    console.error("An error occurred.");
};

tellErrors();
