let btn=document.querySelector('button');
let main=document.querySelector('main');


btn.addEventListener('click',function(){
    let div=document.createElement('div');
    div.style.height='50px';
    div.style.width='50px';
    div.style.backgroundColor='red';

    let x=Math.random()*100;
    let y=Math.random()*100;
  let c1
    div.style.left=x+'%';
    div.style.top=y+'%';

 div.style.position='absolute';
    main.appendChild(div);
     console.log(div);
  main.style.backgroundColor='black';
})