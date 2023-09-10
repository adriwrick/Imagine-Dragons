//song list
let All_song = [
   {
     name: "Believer",
     path: "1.mp3",
     img: "2.jpg",
     singer: "Imagine Dragons"
   },
   {
     name: "Bones",
     path: "2.mp3",
     img: "3.jpg",
     singer: "Imagine Dragons"
   },
   {
     name: "Enemy",
     path: "3.mp3",
     img: "3.jpg",
     singer: "Imagine Dragons"
   },
   {
     name: "Radioactive",
     path: "4.mp3",
     img: "1.jpg",
     singer: "Imagine Dragons"
   },
   {
     name: "Natural",
     path: "5.mp3",
     img: "4.jpg",
     singer: "Imagine Dragons"
   },
   {
    name: "Birds",
    path: "6.mp3",
    img: "4.jpg",
    singer: "Imagine Dragons"
   },
   {
    name: "Follow You",
    path: "7.mp3",
    img: "3.jpg",
    singer: "Imagine Dragons"
   },
   {
    name: "I'm So Sorry",
    path: "8.mp3",
    img: "2.jpg",
    singer: "Imagine Dragons"
   },
   {
    name: "Lonely",
    path: "9.mp3",
    img: "3.jpg",
    singer: "Imagine Dragons"
   },
   {
    name: "Whatever It Takes",
    path: "10.mp3",
    img: "1.jpg",
    singer: "Imagine Dragons"
   },
   {
    name: "It's Time",
    path: "music/11.mp3",
    img: "1.jpg",
    singer: "Imagine Dragons"
   },
   {
    name: "My Life",
    path: "12.mp3",
    img: "3.jpg",
    singer: "Imagine Dragons"
   },
   {
    name: "Thunder",
    path: "13.mp3",
    img: "2.jpg",
    singer: "Imagine Dragons"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/