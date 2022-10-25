import myJson from '../data/GreenVision.json' assert {type: 'json'};

const text = [];

myJson.forEach(el => {
    // console.log(el);
    text.push(el.Column6);
    text.push(el.Column8);
    text.push(el.Column10);
    text.push(el.Column12);
});

// console.log(text);

let arrStart = [];
let addEnd = [];
let dataTreg = [];
let newArrString = [];
let arrText = [];
let itemArr = []

text.forEach((el, index) => {
    if(el != undefined) {
        // console.log(el);
        arrText.push(el.split(''));
    }
});

console.log(arrText);


// arrText.forEach(el => {
//     itemArr.push(el)
// })

itemArr = arrText.join()

console.log(arrText);

let a = itemArr.split(',')

a.forEach((el, index) => {
    // console.log(el);
    
        if(el === '[') {
            arrStart.push(index);
        } 
        if(el === ']') {
            addEnd.push(index + 1);
        };
})

function teg() {
    arrStart.forEach((el, index) => {
        dataTreg.push(a.slice(arrStart[index], addEnd[index]));
    })
}
teg();

dataTreg.forEach(el => {
    if(el !== '') {
        if(!(newArrString.includes(el))) {
            newArrString.push(el.join('').split(','));
        }
    }
});




let s = []

newArrString.forEach(el => {
    console.log(s.includes(el[0]));
    if(!(s.includes(el[0]))) {{
        s.push(el[0]) 
    }}
    

})

console.log(s);
console.log(newArrString);

const contHtml = document.querySelector('[data-wrp]');

s.forEach(el => contHtml.innerHTML += "<p>" + el + "</p>")