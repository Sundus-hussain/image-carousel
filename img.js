
let reviews=[
    {
        img:"3-nature-wallpaper-mountain.jpeg",
        description:"Nature!!!"
    },
    {
        img:"Altja_jõgi_Lahemaal.jpeg",
        description:"Don't destroy the nature..."
    },
    {
        img:"road-1072821__480.jpeg",
        description:"Beautiful!!!"
    },
    {
        img:"ff69cbeda3be509c5cd6cf8f4df92654.jpeg",
        description:"Just Perfect!"
    }
];

let img=document.querySelector(".img");
let description=document.getElementById("description");

//buttons
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");

let currentItem=0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
})

function showPerson(person){
    let item=reviews[currentItem];
    img.src=item.img
    description.textContent=item.description
}

next.addEventListener('click',function(){
    currentItem++
    if(currentItem >reviews.length-1){
        currentItem = 0;
    }
    showPerson(currentItem)

})

prev.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length-1
    }
    showPerson(currentItem);
})