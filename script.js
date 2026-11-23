let size = 16
const squareParent = document.querySelector(".squareParent")

for (let i=0;i<size*size;i++) {
    const squareChild = document.createElement("div")
    squareParent.appendChild(squareChild)

    squareChild.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = 'black';
    
});

    squareChild.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = 'white';
    
});
}

