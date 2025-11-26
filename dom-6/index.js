
let button=document.querySelectorAll('button');
let a=10;
let b=20;
let c=a+b;
let h3=document.querySelector('h3');


button.forEach(function(elem){
    console.log(elem);
    elem.addEventListener('click',function(val){
    // console.log('hello');
  console.log(val.target.id);

h3.textContent +=val.target.id;
// console.log(abc);

if(val.target.id=='20'){
   
let result=eval(h3.textContent);
console.log(result);

}
});
})

