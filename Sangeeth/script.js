// // // // // console.log("welcome to Sangeeth");
// // // // // let songIndex=0;
// // // // // let audioElement=new Audio('2.mp3.mp3');
// // // // // let masterPlay=document.getElementById('masterPlay');
// // // // // let myProgressBar=document.getElementById('myProgressBar');
// // // // // let gif=document.getElementById('gif');
// // // // // let songItem=Array.from(document.getElementById('songItem'));


// // // // // let songs=[
// // // // //     {songName:"Neenu Nanna Saviganasu",filePath:"2.mp3.mp3",coverPath:"2.jpg"},
// // // // //     {songName:"Manase Manase",filePath:"3.mp3",coverPath:"3.jpg"},
// // // // //     {songName:"Rangeride",filePath:"4 Rangeride.mp3",coverPath:"4.jpg"},
// // // // //     {songName:"Madarangi",filePath:"5 - Madarangi.mp3",coverPath:"5.jpg"},
// // // // //     {songName:"Chaltha Chaltha",filePath:"6- Chaltha Chaltha.mp3",coverPath:"6.jpg"},
// // // // //     {songName:"Gaganave Baagi",filePath:"8 Gaganave Baagi.mp3",coverPath:"8.jpg"},
// // // // //     {songName:"Ninna Snehadinda",filePath:"9 - Ninna Snehadinda.mp3",coverPath:"9.jpg"}
// // // // // ]
// // // // // songItem.forEach((element,i)=>{
// // // // //    console.log(element,i);
// // // // //    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
// // // // //    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
// // // // // })

// // // // // // audioElement.play();
// // // // // //play pause
// // // // // masterPlay.addEventListener('click',()=>{
// // // // //     if(audioElement.paused||audioElement.currentTime<=0){
// // // // //         audioElement.play();
// // // // //         masterPlay.classList.remove('fa-play-circle');
// // // // //         masterPlay.classList.add('fa-pause-circle');
// // // // //         gif.style.opacity=1;

// // // // //     }
// // // // //     else{
// // // // //         audioElement.pause();
// // // // //         masterPlay.classList.remove('fa-pause-circle');
// // // // //         masterPlay.classList.add('fa-play-circle');
// // // // //         gif.style.opacity=0;
        
// // // // //     }
// // // // // })
// // // // // //Listen to events
// // // // // audioElement.addEventListener('timeupdate',()=>{
// // // // // //    console.log('timeupdate');
// // // // //    //update seek bar
// // // // //    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
// // // // // //    console.log(progress);
// // // // //    myProgressBar.value=progress;
// // // // // })
// // // // // myProgressBar.addEventListener('change',()=>{
// // // // //     audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
// // // // // })
// // // // 
// // // document.addEventListener('DOMContentLoaded', () => {
// // //     console.log("welcome to Sangeeth");
// // //     let songIndex = 0;
// // //     let audioElement = new Audio('2.mp3.mp3');
// // //     let masterPlay = document.getElementById('masterPlay');
// // //     let myProgressBar = document.getElementById('myProgressBar');
// // //     let gif = document.getElementById('gif');
// // //     let songItems = Array.from(document.getElementsByClassName('songItem'));

// // //     let songs = [
// // //         {songName: "Neenu Nanna Saviganasu", filePath: "2.mp3.mp3", coverPath: "2.jpg"},
// // //         {songName: "Manase Manase", filePath: "3.mp3", coverPath: "3.jpg"},
// // //         {songName: "Rangeride", filePath: "4 Rangeride.mp3", coverPath: "4.jpg"},
// // //         {songName: "Madarangi", filePath: "5 - Madarangi.mp3", coverPath: "5.jpg"},
// // //         {songName: "Chaltha Chaltha", filePath: "6- Chaltha Chaltha.mp3", coverPath: "6.jpg"},
// // //         {songName: "Gaganave Baagi", filePath: "8 Gaganave Baagi.mp3", coverPath: "8.jpg"},
// // //         {songName: "Ninna Snehadinda", filePath: "9 - Ninna Snehadinda.mp3", coverPath: "9.jpg"}
// // //     ];

// // //     songItems.forEach((element, i) => {
// // //         element.getElementsByTagName("img")[0].src = songs[i].coverPath;
// // //         element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// // //     });

// // //     // play/pause functionality
// // //     masterPlay.addEventListener('click', () => {
// // //         if (audioElement.paused || audioElement.currentTime <= 0) {
// // //             audioElement.play();
// // //             masterPlay.classList.remove('fa-play-circle');
// // //             masterPlay.classList.add('fa-pause-circle');
// // //             gif.style.opacity = 1;
// // //         } else {
// // //             audioElement.pause();
// // //             masterPlay.classList.remove('fa-pause-circle');
// // //             masterPlay.classList.add('fa-play-circle');
// // //             gif.style.opacity = 0;
// // //         }
// // //     });

// // //     // Listen to events
// // //     audioElement.addEventListener('timeupdate', () => {
// // //         // update seek bar
// // //         let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
// // //         myProgressBar.value = progress;
// // //     });

// // //     myProgressBar.addEventListener('change', () => {
// // //         audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// // //     });

// // //     const makeAllPlays = () => {
// // //         Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
// // //             if (element.classList.contains('fa-pause-circle')) {
// // //                 element.classList.remove('fa-pause-circle');
// // //                 element.classList.add('fa-play-circle');
// // //             }
// // //         });
// // //     };

// // //     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
// // //         element.addEventListener('click', (e) => {
// // //             console.log(e.target);
// // //             makeAllPlays();
// // //             e.target.classList.remove('fa-play-circle');
// // //             e.target.classList.add('fa-pause-circle');
// // //             audioElement.src='4 Rangeride.mp3';
// // //             audioElement.currentTime=0;
// // //             audioElement.play();
// // //         });
// // //     });
// // // });
// //
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("welcome to Sangeeth");
//     let songIndex = 0;
//     let audioElement = new Audio('2.mp3.mp3');
//     let masterPlay = document.getElementById('masterPlay');
//     let myProgressBar = document.getElementById('myProgressBar');
//     let gif = document.getElementById('gif');
//     let songItems = Array.from(document.getElementsByClassName('songItem'));

//     let songs = [
//         {songName: "Neenu Nanna Saviganasu", filePath: "2.mp3.mp3", coverPath: "2.jpg"},
//         {songName: "Marali Manasaagide", filePath: "7 Marali Manasaagide.mp3", coverPath: "7.jpg"},
//         {songName: "Rangeride", filePath: "4 Rangeride.mp3", coverPath: "4.jpg"},
//         {songName: "Madarangi", filePath: "5 - Madarangi.mp3", coverPath: "5.jpg"},
//         {songName: "Chaltha Chaltha", filePath: "6- Chaltha Chaltha.mp3", coverPath: "6.jpg"},
//         {songName: "Gaganave Baagi", filePath: "8 Gaganave Baagi.mp3", coverPath: "8.jpg"},
//         {songName: "Ninna Snehadinda", filePath: "9 - Ninna Snehadinda.mp3", coverPath: "9.jpg"}
//     ];

//     songItems.forEach((element, i) => {
//         element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//         element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
//     });

//     // play/pause functionality
//     masterPlay.addEventListener('click', () => {
//         if (audioElement.paused || audioElement.currentTime <= 0) {
//             audioElement.play();
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//             gif.style.opacity = 1;
//         } else {
//             audioElement.pause();
//             masterPlay.classList.remove('fa-pause-circle');
//             masterPlay.classList.add('fa-play-circle');
//             gif.style.opacity = 0;
//         }
//     });

//     // Listen to events
//     audioElement.addEventListener('timeupdate', () => {
//         // update seek bar
//         let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//         myProgressBar.value = progress;
//     });

//     myProgressBar.addEventListener('change', () => {
//         audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
//     });

//     const makeAllPlays = () => {
//         Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//             if (element.classList.contains('fa-pause-circle')) {
//                 element.classList.remove('fa-pause-circle');
//                 element.classList.add('fa-play-circle');
//             }
//         });
//     };

//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
//         element.addEventListener('click', (e) => {
//             console.log(e.target);
//             makeAllPlays();
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             audioElement.src = songs[index].filePath;
//             audioElement.currentTime = 0;
//             audioElement.load(); // load the new audio source
//             audioElement.addEventListener('canplay', () => {
//                 audioElement.play();
//                 masterPlay.classList.remove('fa-play-circle');
//                 masterPlay.classList.add('fa-pause-circle');
//                 gif.style.opacity = 1;
//             }, { once: true });
//         });
//     });
// });
// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex>6){
//         songIndex=0
//     }else{
//         songIndex+=1;
//     }
// })
document.addEventListener('DOMContentLoaded', () => {
    console.log("welcome to Sangeeth");
    let songIndex = 0;
    let audioElement = new Audio('2.mp3.mp3');
    let masterPlay = document.getElementById('masterPlay');
    let myProgressBar = document.getElementById('myProgressBar');
    let gif = document.getElementById('gif');
    let masterSongName=document.getElementById('masterSongName');
    let songItems = Array.from(document.getElementsByClassName('songItem'));

    let songs = [
        {songName: "Neenu Nanna Saviganasu", filePath: "2.mp3.mp3", coverPath: "2.jpg"},
        {songName: "Marali Manasaagide", filePath: "7 Marali Manasaagide.mp3", coverPath: "7.jpg"},
        {songName: "Rangeride", filePath: "4 Rangeride.mp3", coverPath: "4.jpg"},
        {songName: "Madarangi", filePath: "5 - Madarangi.mp3", coverPath: "5.jpg"},
        {songName: "Chaltha Chaltha", filePath: "6- Chaltha Chaltha.mp3", coverPath: "6.jpg"},
        {songName: "Gaganave Baagi", filePath: "8 Gaganave Baagi.mp3", coverPath: "8.jpg"},
        {songName: "Ninna Snehadinda", filePath: "9 - Ninna Snehadinda.mp3", coverPath: "9.jpg"}
    ];

    songItems.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    });

    // play/pause functionality
    masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    });

    // Listen to events
    audioElement.addEventListener('timeupdate', () => {
        // update seek bar
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress;
    });

    myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    });

    const makeAllPlays = () => {
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            if (element.classList.contains('fa-pause-circle')) {
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
            }
        });
    };

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
        element.addEventListener('click', (e) => {
            console.log(e.target);
            makeAllPlays();
            
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[index].filePath;
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.load(); // load the new audio source
            audioElement.addEventListener('canplay', () => {
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
            }, { once: true });
        });
    });

    document.getElementById('next').addEventListener('click', () => {
        if (songIndex >= songs.length - 1) {
            songIndex = 0;
        } else {
            songIndex += 1;
        }
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.load(); // load the new audio source
        audioElement.addEventListener('canplay', () => {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }, { once: true });
    });

    document.getElementById('previous').addEventListener('click', () => {
        if (songIndex <= 0) {
            songIndex = songs.length - 1;
        } else {
            songIndex -= 1;
        }
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.load(); // load the new audio source
        audioElement.addEventListener('canplay', () => {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }, { once: true });
    });
});
