// let arr=[
//     {
//         user:'ram',
//         age:19,
//         city:'kolkata'
//     },
//        {
//         user:'Sam',
//         age:18,
//         city:'mumbi'
//     },
//        {
//         user:'akash',
//         age:21,
//         city:'delhi'
//     },
//        {
//         user:'rajib',
//         age:20,
//         city:'bhopal'
//     }
// ];

// console.log(arr[2].city);


// sum=0;
// arr.forEach((element) => {
    
//     sum=sum+element.age;
// });

// console.log(sum);



let people = [
  {
    fullName: "Aarav Sharma",
    profession: "Frontend Developer",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description: "Aarav is a passionate frontend developer who loves creating smooth and interactive user interfaces.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Meera Patel",
    profession: "UI/UX Designer",
    tags: ["Figma", "Wireframing", "Prototyping"],
    description: "Meera designs clean and modern user experiences focusing on usability and beauty.",
    image: "https://images.unsplash.com/photo-1763063556535-5f6174a5c5d4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Rohan Verma",
    profession: "Backend Developer",
    tags: ["Node.js", "MongoDB", "Express"],
    description: "Rohan builds scalable backend systems and robust APIs.",
    image: "https://plus.unsplash.com/premium_photo-1682430333521-0a4f4f3c610e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Sara Khan",
    profession: "Data Analyst",
    tags: ["Python", "Pandas", "Visualization"],
    description: "Sara analyzes large datasets to uncover trends and insights fertfdd fgr5rt.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    fullName: "Kunal Singh",
    profession: "Full Stack Developer",
    tags: ["MERN", "API", "Cloud"],
    description: "Kunal works on end-to-end development from frontend UI to backend APIs.",
    image: "https://images.unsplash.com/photo-1661051830189-54dfcfcf3a0f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];


sum='';
people.forEach(function(val,inx){
 sum=sum+` <div class="card"> <img src="${val.image}" alt=""><h3>${val.fullName}</h3><h4>${val.profession}</h4> <h5>${people[inx].tags}</h5><p>${val.description}</p></div>`;
console.log(inx);
//  console.log(val.tags);
console.log(people[inx].tags);

for(let i=0; i<=val.tags.length ;i++){
// console.log(people[inx].tags[i]);
}


 val.tags.forEach(function(elm){
  // console.log(elm);
  //  sum=sum+` <div class="card"> <img src="${val.image}" alt=""><h3>${val.fullName}</h3><h4>${val.profession}</h4><h5></h5><p>${val.description}</p></div>`;

 })
})


console.log(sum);


let main=document.querySelector('main');

main.innerHTML=sum;























