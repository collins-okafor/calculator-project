const button = document.querySelector(".button");
const input = document.querySelector(".num")
const evaluate = document.querySelector(".evaluate")
let sumAll = document.querySelector("#equal")
const negativeSign = document.querySelector("#sign")

button.addEventListener("click", (e) => {
    let number = e.target.innerText;
    if(e.target === e.currentTarget) return; //To target only the children

    if (number === "+/-"){
        number = "-"
    };

    input.innerText += number;
    console.log(input.innerText);

    sumAll.addEventListener("click", ()=>{
        let a = eval(input.innerText)
        evaluate.innerText = a;
    })

    if(number === "AC"){
        input.innerText = "";
        evaluate.innerText = "";
    }
})

