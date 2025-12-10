
let output = document.getElementById('output');
let storyOutput = document.getElementById('MainStory');
let music = null;

let backgroundAudio = new Audio("./Audio/Background.mp3");

function clearScreen() {
    output.style.display = "none";
    generateContent();
    loadGSAP(music);
}

document.getElementById("noMusic").addEventListener("click", () => {
    music = false;
    console.log("Musik:", music);
    clearScreen();
});

document.getElementById("music").addEventListener("click", () => {
    music = true;
    console.log("Musik:", music);
    clearScreen();
});

function generateContent() {
    let temp = "";

    temp += '<div id="Banner" class="hero-banner"> <h1>Scroll down to Begin</h1> </div>';


    if(music) {
        temp += `
            <div class="freq-container" aria-hidden="true">
                <span class="bar" style="--d:0ms"></span>
                <span class="bar" style="--d:80ms"></span>
                <span class="bar" style="--d:160ms"></span>
                <span class="bar" style="--d:240ms"></span>
                <span class="bar" style="--d:320ms"></span>
                <span class="bar" style="--d:400ms"></span>
                <span class="bar" style="--d:480ms"></span>
                <span class="bar" style="--d:560ms"></span>
            </div>`;

            backgroundAudio.play();
            backgroundAudio.volume = 0.1;
        temp += `</div><img id="muteBtn" class="playButton" src="./Images/Pokeball.png" alt="Musik Noten"></div>`;
    }

    temp += '<div id="CardsOutput">'

    for(let i = 0; i < 7; i++) {
        temp += `
        <div class="story-box" style="background-color: ${storyData[i].color}"> 
            <h2>${storyData[i].title}</h2>
            <img src="${storyData[i].imageUrl}" alt="${storyData[i].title}">
            <p>${storyData[i].text}</p>
            ${storyData[i].audioUrl ? `
                <div class="panel__audio">
                    <span class="panel__audio-label">Audio für diese Box:</span> 
                    <audio class="audio-colum" src="${storyData[i].audioUrl}" preload="metadata" controls></audio>
                </div>
            ` : ''}
        `

        if(i == 1) {
            temp += `<img class="decoration-img" src="./Images/Pikachu.gif" alt=""></img>`;
        }else if(i == 4) {
            temp += `<img class="decoration-img" src="./Images/Pokemon-Trainer.gif" alt=""></img>`;
        }else if(i == 6) {
            temp += `<img class="decoration-img" src="./Images/Mew.gif" alt=""></img>`;
        }
        temp += '</div>';
    }
    temp += '</div>'
    
     temp += '<button onclick="restartStory()" id="reloadBtn" class="reload-button">Startseite ↻</button>';
    temp += `<div id="EndBanner" class="hero-banner"> <h1>Ende der Geschichte</h1> </div>`;
    storyOutput.innerHTML = temp;

    if(music) {
        let btn = document.getElementById("muteBtn");
        if(btn) {
            btn.addEventListener("click", toggleMute);
        }
    }



    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 50);

}

let isMuted = false;
function toggleMute() {
    isMuted = !isMuted;
    
    if(backgroundAudio) backgroundAudio.muted = isMuted;

    document.querySelectorAll("audio").forEach(audio => {
        audio.muted = isMuted;
    });

    let btn = document.getElementById("muteBtn");
    if(btn) {
        if(isMuted) {
            btn.style.animationPlayState = "paused";
            btn.style.filter = "grayscale(100%)";
        } else {
            btn.style.animationPlayState = "running";
            btn.style.filter = "none";
        }
    }


    let freqContainer = document.querySelector(".freq-container");
    if(freqContainer) {
        if (isMuted) {
            freqContainer.style.display = "none";
        } else {
            freqContainer.style.display = "flex";
        }
    }
}



function loadGSAP(music) {
    let booleanMusic = music;
    console.log("Musik beim Laden von GSAP:", booleanMusic);
    gsap.registerPlugin(ScrollTrigger);
    let panels = document.querySelectorAll(".story-box");
    for (let i = 0; i < panels.length; i++) {

        let panel = panels[i];
        
        let isEven = i % 2 === 0;
        let xStart = isEven ? -400 : 400;
        let rotStart = isEven ? -15 : 15;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: panel,
                start: "center center",
                end: "center top",
                markers: false,
                scrub: 1
            }
        });

        tl.fromTo(panel, 
            {
                opacity: 0,
                x: xStart,
                y: 100,
                rotation: rotStart,
                scale: 0.5
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                duration: 1.2,
                ease: "power2.out"
            }
        );

        let deco = panel.querySelector(".decoration-img");
        if(deco) {
            tl.fromTo(deco, 
                { scale: 0, rotation: -180, opacity: 0 },
                { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
                "<0.2"
            );
        }

        tl.to(panel, {
            duration: 5 
        })
        .to(panel, {
            opacity: 0,
            scale: 0.5,
            y: -100,
            rotation: -rotStart,
            duration: 4, 
            ease: "power1.inOut"
        });

        let boxAudio = panel.querySelector("audio");
        if (boxAudio) {
            ScrollTrigger.create({
                trigger: panel,
                start: "center center",
                end: "center top",
                onEnter: () => {
                    if (booleanMusic) {
                        boxAudio.currentTime = 0;
                        boxAudio.play().catch(e => console.log(e));
                    }
                },
                onLeave: () => {
                    boxAudio.pause();
                    boxAudio.currentTime = 0;
                    if (booleanMusic) backgroundAudio.play();
                },
                onEnterBack: () => {
                    if (booleanMusic) {
                        backgroundAudio.pause();
                        boxAudio.currentTime = 0;
                        boxAudio.play();
                    }
                },
                onLeaveBack: () => {
                    boxAudio.pause();
                    boxAudio.currentTime = 0;
                    if (booleanMusic) backgroundAudio.play();
                }
            });
        }
    }
}

function toggleMusic() {
    if(backgroundAudio.paused) {
        backgroundAudio.play();
    } else {
        backgroundAudio.pause();
    }
}

let reloadBtn = document.getElementById("reloadBtn");
function restartStory() {
    location.reload();
}