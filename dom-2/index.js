

let btn=document.querySelector('button');
let coun=0;
let h1=document.querySelector('h1');
let inn=document.querySelector('.inner')

btn.addEventListener('click',function(){
    //  btn.removeEventListener('click');
   

     btn.disabled=true;
let num=50+(Math.floor(Math.random()*50));
let tim=`this  download  takes ${num/10} seconds...`;
console.log(num);

btn.innerText=`Downloading… ${num/10}s left`;
  let int=  setInterval(function(){
  coun++;
        // console.log(coun);
        h1.textContent=coun+'%';
        inn.style.width=coun+'%';
   

    },num);

setTimeout(function(){
   clearInterval(int); 
  
   btn.innerHTML='Downloded..';
   btn.style.opacity=0.5;
   console.log(tim);
},num*100);
})