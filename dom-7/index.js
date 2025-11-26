const reels = [
  {

    isMuted: true,
    username: "travel_with_arya",
    likeCount: 9321,
    isLiked: false,
    commentCount: 312,
    caption: "Exploring nature heals the soul 🌿✨",
    video: "./reels/1.mp4",
    userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Unsplash image
    shareCount: 120,
    isFollowed: false,
     isAutoplay:true
   
  },
  {
    isMuted: true,
    username: "foodie_radhika",
    likeCount: 12876,
    isLiked: true,
    commentCount: 549,
    caption: "Cheese burst pizza lovers raise your hand! 🍕🙌",
      video: "./reels/2.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 203,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "fitness_aditya",
    likeCount: 8644,
    isLiked: false,
    commentCount: 228,
    caption: "No excuses. Just consistency 🏋️‍♂️🔥",
        video: "./reels/3.mp4",
    userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=100&h=100",
    shareCount: 84,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "dance_with_sana",
    likeCount: 15230,
    isLiked: true,
    commentCount: 731,
    caption: "This choreography made my day 💃✨",
       video: "./reels/4.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=100&h=100",
    shareCount: 265,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "tech_sam",
    likeCount: 5210,
    isLiked: false,
    commentCount: 190,
    caption: "New AI tools dropping every week 🤖⚡",
       video: "./reels/5.mp4",
    userProfile: "https://images.unsplash.com/photo-1654944989990-9da8fa364ca1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 69,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "pet_world",
    likeCount: 18944,
    isLiked: true,
    commentCount: 1021,
    caption: "Golden retrievers are pure happiness 🐶💛",
      video: "./reels/6.mp4",
    userProfile: "https://images.unsplash.com/photo-1707119269306-f4ee0564ba29?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 443,
    isFollowed: true,
   
  },
  {
    isMuted: true,
    username: "style_by_meera",
    likeCount: 9432,
    isLiked: true,
    commentCount: 382,
    caption: "Saree never goes out of style 💖✨",
     video: "./reels/7.mp4",
    userProfile: "https://images.unsplash.com/photo-1721461975113-b5bdeb915503?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 164,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "coding_with_kabir",
    likeCount: 6102,
    isLiked: false,
    commentCount: 247,
    caption: "Learn JavaScript with small projects 💻🔥",
      video: "./reels/3.mp4",
    userProfile: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 95,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "music_riya",
    likeCount: 17655,
    isLiked: true,
    commentCount: 892,
    caption: "Old Hindi songs hit differently 🎶❤️",
    video: "./reels/5.mp4",
    userProfile: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 381,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "gaming_arjun",
    likeCount: 13480,
    isLiked: false,
    commentCount: 613,
    caption: "Victory tastes sweeter when it's clutch 😎🎮",
      video: "./reels/4.mp4",
    userProfile: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 274,
    isFollowed: false
  }
];


// let arr=[10,20,30,40];




let allreals=document.querySelector('.all-rels');
// let sum='';
// reels.forEach(function(val,ind){
//     // console.log('hello');

//     console.log(val);

//     sum=sum+`     <div class="reel">
//                   <video autoplay loop muted src="${val.video}"></video>
//                 <div class="bottom">

//             <div class="top">
//                <div class="round">
// <img src="https://images.unsplash.com/photo-1534008757030-27299c4371b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
//                 </div>
//                 <h3> twerter</h3>
//               <button>Follow</button>
//                  </div>
              
//                 <p>Lorem ipsum dolor sijhkdjhkdhakhakddhakd   </p>
//                 </div>
                
//              <div class="right">
//                    <div id='${ind}'class="like">
//                     <h4 class="like-icon"><i class="ri-heart-line"></i></h4>
//                     <h6>562</h6>
//                    </div>
//                    <div class="comment">
//                     <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
//                     <h6>232</h6>
//                    </div>
//                    <div class="share">
//                     <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
//                     <h6>32</h6>
//                    </div>
//                     <div class="menu">
//                     <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
              
//                    </div>
//              </div>


//                 </div>`;
// })
// console.log(sum);

// allreals.innerHTML=sum;

function addData(){
  let sum='';
reels.forEach(function(val,ind){
    // console.log('hello');

    // console.log(val);

    sum=sum+`   
       
    <div class="reel">
     
                  <video class='reel-video' autoplay loop ${val.isMuted?'muted':" "} src="${val.video}"></video>
                 <div id="${ind}" class="mutedd">

                 ${val.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
                    
                </div>

                  <div class="bottom">

            <div class="top">
               <div class="round">
<img src="${val.userProfile}" alt="">
                </div>
                <h3>${val.username}</h3>
              <button class="btn" id='${ind}'>${val.isFollowed?'Unfollow':'Follow'}</button>
                 </div>
              
                <p>${val.caption}</p>
                </div>
                
             <div class="right">
                   <div  id='${ind}' class="like">
                    <h4 class="like-icon">${val.isLiked?'<i class="ri-heart-fill love"></i>':'<i class="ri-heart-line"></i>'}</h4>
                    <h6>${val.likeCount}</h6>
                   </div>
                   <div id='${ind}' class="comment">
                    <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                    <h6>${val.commentCount}</h6>
                   </div>
                   <div class="share">
                    <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                    <h6>${val.shareCount}</h6>
                   </div>
                    <div class="menu">
                    <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
              
                   </div>
             </div>


                </div>`;
})
// console.log(sum);

allreals.innerHTML=sum;
}

addData();


allreals.addEventListener('click',function(detls){
  console.log(detls.target.id);
console.dir(detls.target);



// let vid = document.querySelector("#myVideo");

// vid.forEach{function(){

// }}
//   if (vid.paused) {
//         vid.play();
//         icon.innerHTML = '<i class="ri-pause-fill"></i>';
//     } else {
//         vid.pause();
//         icon.innerHTML = '<i class="ri-play-fill"></i>';
//     }

if(detls.target.className=='reel-video'){
let vid = detls.target.closest(".reel-video");
    if (!vid) return; // if not clicked on video, exit

    let overlay = vid.parentElement.querySelector(".play-overlay");

    if (vid.paused) {
        vid.play();
        overlay.innerHTML = '<i class="ri-pause-fill"></i>';
    } else {
        vid.pause();
        overlay.innerHTML = '<i class="ri-play-fill"></i>';
    }

    overlay.style.opacity = 1;

    setTimeout(() => {
        overlay.style.opacity = 0;
    }, 400);
}

    


console.log(typeof(reels[detls.target.id].isLiked));
console.dir(detls.target);
console.dir(detls.target.className);
console.log(reels[detls.target.id].isMuted)


if(detls.target.className=='mutedd'){
let mutedd=document.querySelector('.mutedd');
console.dir(detls.target);
console.log(mutedd);
    if(!reels[detls.target.id].isMuted){
      reels[detls.target.id].isMuted=true;

    }
else{
  reels[detls.target.id].isMuted=false;
      // mutedd.innerHTML='<i class="ri-volume-up-fill"></i>';
}
    addData();
}
// if (detls.target.classList.contains('mutedd')) {

//     let index = detls.target.id;              // reel index
//     let muteBtn = detls.target;               // clicked button

//     if (!reels[index].isMuted) {              // currently unmuted → mute now
//         reels[index].isMuted = true;
//         muteBtn.innerHTML = '<i class="ri-volume-mute-fill"></i>'; 
//     } 
//     else {                                    // currently muted → unmute now
//         reels[index].isMuted = false;
//         muteBtn.innerHTML = '<i class="ri-volume-up-fill"></i>';
//     }

//     addData();
// }


if(detls.target.className=='like'){
   if(! reels[detls.target.id].isLiked){
 reels[detls.target.id].likeCount++;
 reels[detls.target.id].isLiked=true;


  }
else{
   reels[detls.target.id].likeCount--;
 reels[detls.target.id].isLiked=false;

}
addData();
}


if(detls.target.className=='comment'){
  //  if(! reels[detls.target.id].commentCount){
 reels[detls.target.id].commentCount++;
//  reels[detls.target.id].isLiked=true;
addData();
  // }
}

if(detls.target.className=='btn'){
if(! reels[detls.target.id].isFollowed){
 reels[detls.target.id].isFollowed='Unfollow';
 reels[detls.target.id].isFollowed=true;

  }
else{
   reels[detls.target.id].isFollowed='Follow';
  //  reels[detls.target.id].likeCount--;
//  reels[detls.target.id].isLiked=false;
   reels[detls.target.id].isFollowed=false;


}
addData();
}


 




 reels[detls.target.id].commentCount++;

  console.log(reels[detls.target.id]);





})

















// let button=document.querySelectorAll('button');
// // console.log(button);
// // console.log(button[0]);

// button.forEach(function(val){
//    val.addEventListener('click',function(){
// console.dir(val);
//     if(val.innerText=='Follow'){
//  val.innerText='Unfollow';
//     }
   
//    else{
//      val.innerText='Follow';
//    }

// })

// })

// let a=0;
// button.addEventListener('click',function(){
//     // console.log('clicked');

//     if(a===0){
// button.innerText='Unfollow';
// a=1;
//     }
//     else{
//         button.innerText='Follow';
//     a=0;
//     }


// })
