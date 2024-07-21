
let value = document.getElementById("value");
let header = document.getElementById("header");
let alla = document.querySelectorAll("header a");
let content = document.getElementById("content");
let container = document.getElementById("container")
let research = document.getElementById("research")
let btn = document.getElementById("btn")
let download = document.querySelectorAll(".down .download")
let footer = document.getElementById("footer")
let like = document.getElementById("like")
let dislike = document.getElementById("dislike")
let resultlike = document.getElementById("resultLike")
let resultdislike = document.getElementById("resultDislike")
let request = document.getElementById("request")
let thank = document.getElementById("thank")
let visitor = document.getElementById("visitor")
let textcool = document.getElementById("textcool")


 
  textcool.innerHTML+=window.prompt("أدخل اسمك");

  




function result(){

   let search = document.getElementById("inp").value.toUpperCase();
   let games = document.querySelectorAll(".container .card .gamename .result")
   let card = document.querySelectorAll(".card")


   for(i = 0 ; i<games.length;i++){
    
     if(games[i].innerHTML.toUpperCase().indexOf(search) >= 0){

         card[i].style.display=""

      }else{

         card[i].style.display="none"
      }

   //    if(games[i].innerHTML.toUpperCase().indexOf(search) != search.value){
   //       container.innerHTML="<h3 id = mistake>،عفوا لا يوجد ما تبحث عنه <br> جرب ابحث عن لعبة أخرى</h3>"
        
   //    }else{
         
  
   //    }
  
    }


}
  
btn.onclick=function(){
   
  let search = document.getElementById("inp").value.toUpperCase();
  let card = document.querySelectorAll(".card")
  let games = document.querySelectorAll(".container .card .gamename .result")

    result();

    

    if(search.value == null){
      card[i].style.display=""
    }
  

  
}



// if(localStorage.Like !=""){
//   resultlike.innerHTML=JSON.parse(localStorage.Like) 
// }

// let number = 0;
// function Like(){

//   number= resultlike.innerHTML =JSON.parse(localStorage.Like)
//   number++;
//   resultlike.innerHTML=number;
 
//   localStorage.setItem("Like",JSON.stringify(number))
 
//    like.style.display="none"
//    dislike.style.display="none"

//    resultlike.style.display=""
//    resultdislike.style.display=""
// }

// if(localStorage.Dislike !=""){
//   resultdislike.innerHTML=JSON.parse(localStorage.getItem("Dislike"))
// }

// let number2 = 0;
// function Dislike(){
  
//   number2= resultdislike.innerHTML =JSON.parse(localStorage.Dislike)  

//   number2++;

//   resultdislike.innerHTML=number2;

//   localStorage.setItem("Dislike",JSON.stringify(number2))
 
//   like.style.display="none"
//   dislike.style.display="none"

//   resultlike.style.display=""
//   resultdislike.style.display=""
// }
if(localStorage.Like !=""){
  resultlike.innerHTML=JSON.parse(localStorage.Like)
}

 
let number3 = 0;

function happy(){

 number3 = resultlike.innerHTML =JSON.parse(localStorage.Like)
 number3++;
 resultlike.innerHTML=number3;
 localStorage.setItem("Like",JSON.stringify(number3))
 

   resultlike.style.display=""
   resultdislike.style.display=""



  //  let empty = "none"
  // localStorage.setItem("empty",empty)

  
  like.style.display="none"
  dislike.style.display="none"
  resultlike.style.display=""
  resultdislike.style.display=""
  thank.style.display=""
}

  
if(localStorage.DisLike !=""){
  resultdislike.innerHTML=localStorage.DisLike
}



let number4 =0;

function sads(){
 
  number4 = resultdislike.innerHTML=localStorage.DisLike
  number4++;
  resultdislike.innerHTML=number4
 
  localStorage.setItem("DisLike",number4)

  like.style.display="none"
  dislike.style.display="none"
  resultlike.style.display=""
  resultdislike.style.display=""
  thank.style.display=""
}

alla.forEach( a =>{
    value.addEventListener("input", function(){
       a.classList.toggle("link")
   
    })
   })

   // games.forEach( game =>{
   //  game.addEventListener("click", function(){
    
   
   //  })
   // })

 


value.oninput=function(){
   let games = document.querySelectorAll(".container .card .gamename .result")
   let data = document.querySelectorAll(".container .card .gamename .video")
   let area = document.querySelectorAll(".container .card .data .area")
   let volume = document.querySelectorAll(".container .card .data .volume")



   let mistake = document.getElementById("mistake")
    header.classList.toggle("normal");
    content.classList.toggle("change");
    container.classList.toggle("hard");
    research.classList.toggle("hard");
    footer.classList.toggle("organise")
  
    
    for(let i = 0;i<download.length;i++){
      download[i].classList.toggle("load")
    }
    for(let z = 0;z<games.length;z++){
      games[z].classList.toggle("videoname")
    }
    for(let y = 0;y<data.length;y++){
      data[y].classList.toggle("videoname")
    }
    for(let j = 0;j<data.length;j++){
      area[j].classList.toggle("videoname")
    }
  
    for(let l = 0;l<data.length;l++){
      volume[l].classList.toggle("videoname")
    }
   
}




  window.addEventListener("online",function(){

    header.style.display="";
    content.style.display="";
    container.style.display="";
    research.style.display="";
    

  });
  window.addEventListener("offline",function(){
 

    header.style.display="none";
    content.style.display="none";
    container.style.display="none";
    research.style.display="none";
    document.body.innerHTML="<div class='offline'><h3>Check the internet cable</h3></div>"
});
 if(localStorage.suc !=""){
  visitor.innerHTML=localStorage.suc
 }

let experience = 5;
window.onload=function(){
 experience= visitor.innerHTML=localStorage.suc
 experience++;
 visitor.innerHTML=experience
 localStorage.setItem("suc",experience)
  
}

window.onscroll=function(){

  let card = document.querySelectorAll(".card")
  if(scrollY >=200){
    for(let i = 0 ; i<card.length;i++){

     card[i].classList.add("alpha")
     card[i].classList.add("rotate")
   
    //  card[i].classList.add("move")
    }
 
  }
  if(scrollY <=200){
    for(let i = 0 ; i<card.length;i++){

      card[i].classList.remove("alpha")
      card[i].classList.remove("rotate")
  
    //  card[i].classList.remove("move")
    }
   
  }

 }
 window.onload=function(){
  
    scroll({
      top:0,
      behavior:"smooth"
    })
  
 }

 


// if(night==1){
//   let games = document.querySelectorAll(".container .card .gamename .result")
//   let data = document.querySelectorAll(".container .card .gamename .video")
//   let area = document.querySelectorAll(".container .card .data .area")
//   let volume = document.querySelectorAll(".container .card .data .volume")


//   let mistake = document.getElementById("mistake")
//    header.classList.toggle("normal");
//    content.classList.toggle("change");
//    container.classList.toggle("hard");
//    research.classList.toggle("hard");
//    footer.classList.toggle("organise")
 
   
//    for(let i = 0;i<download.length;i++){
//      download[i].classList.toggle("load")
//    }
//    for(let z = 0;z<games.length;z++){
//      games[z].classList.toggle("videoname")
//    }
//    for(let y = 0;y<data.length;y++){
//      data[y].classList.toggle("videoname")
//    }
//    for(let j = 0;j<data.length;j++){
//      area[j].classList.toggle("videoname")
//    }
 
//    for(let l = 0;l<data.length;l++){
//      volume[l].classList.toggle("videoname")
//    }
 
// }











