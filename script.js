//Code
    //DRY

//Board
    //FIND FONT
    //prevent overlap
    //add to artwork
       //add "bitemarks" to the hit div to visualize chomp

//GAMEPLAY
 //Guessing
    //work  on turn taking process

// Stretch Goals   
    //div element that gets unhidden for a hit/miss notification, click to hide again
    //drag and drop or option to rotate https://www.kirupa.com/html5/drag.htm
    //win screen???
    //audio

//global variables
let gameStarted = false;
let countdown = 0;
let placed1 = false;
let placed2 = false;
let placed3 = false;
let hide1 = false;
let hide2 = false;
let hide3 = false;
let guessed = false;
let raccHitArr = [];
let hdHitArr = [];
let game = 1;

//Divs for Boards
for (let i = 0; i <= 251; i++) {
    let yardDivs = document.createElement("div")
    yardDivs.className = `yardDiv sq${i}`
    document.querySelector(".yardContainer").appendChild(yardDivs)
}

for (let i = 0; i <= 175; i++) {
    let yardDivs = document.createElement("div")
    yardDivs.className = `yardBoundDiv sq${i}`
    document.querySelector(".yardBoundBox").appendChild(yardDivs)
}

for (let i = 0; i <= 251; i++) {
    let grillDivs = document.createElement("div")
    grillDivs.className = `grill${i} sq${i} grillDiv`
    document.querySelector(".grillContainer").appendChild(grillDivs)
}

for (let i = 0; i <= 101; i++) {
    let grillDivs = document.createElement("div")
    grillDivs.className = `grillBound${i} sq${i} grillBoundDiv`
    document.querySelector(".grillBoundBox").appendChild(grillDivs)
}

//Class Check Functions

function hasDog(elem) {
    if (elem.matches(".dog")) {
        return true
    } return false
}

function hasRac(elem) {
    if (elem.matches(".raccoon")) {
        return true
    } return false
}

//HotDog Placement
document.querySelector(".hotdog1").addEventListener('click',(event) => {
    document.querySelector(".grillBoundBox").addEventListener('click', (event) => {    
        if ((hasDog(event.target) == false) && (placed1 == false) && !(event.target.classList.contains("grillBoundBox"))) {
        placed1 = true;
        countdown++
        let hd1 = document.querySelector(".hotdog1");
        event.target.appendChild(hd1);
        raccoonHide(rac1);
        startAlert();
        }
    })
})

document.querySelector(".hotdog2").addEventListener('click',(event) => {
    document.querySelector(".grillBoundBox").addEventListener('click', (event) => {    
        if ((hasDog(event.target) == false) && (placed2 == false) && !(event.target.classList.contains("grillBoundBox"))) {
        placed2 = true;
        countdown++
        let hd2 = document.querySelector(".hotdog2");
        event.target.appendChild(hd2);
        raccoonHide(rac2);
        startAlert();
        }
    })
})

document.querySelector(".hotdog3").addEventListener('click',(event) => {
    document.querySelector(".grillBoundBox").addEventListener('click', (event) => {    
        if ((hasDog(event.target) == false) && (placed3 == false) && !(event.target.classList.contains("grillBoundBox"))) {
        placed3 = true;
        countdown++
        let hd3 = document.querySelector(".hotdog3");
        event.target.appendChild(hd3);
        raccoonHide(rac3);
        startAlert();
        }
    })
})

//Raccoons variables
let rac1 = document.querySelector(".raccoon1");
let rac2 = document.querySelector(".raccoon2");
let rac3 = document.querySelector(".raccoon3");

//Raccoon Hide

function raccoonHide(elem) {
    //randomly generate div number
let randomPlace = Math.floor(Math.random() * 176);
let position = `div.yardBoundDiv.sq${randomPlace}`

//place raccoon at random spot
    if (!document.querySelector(position).hasChildNodes()){ 
        document.querySelector(position).appendChild(elem);
    }


//make transparent 
for (let i = 0; i < elem.children.length; i++) {
    elem.children[i].style.opacity = 0.5;}

//
if ((overlap(rac1, rac2) === true) || (overlap(rac1, rac3) === true)){
    raccoonHide(elem);
}
}

//raccoon overlap check
function overlap(el1, el2) {
    let div1 = el1.getBoundingClientRect();
    let div2 = el2.getBoundingClientRect();
    console.log(div1, div2)
return !(
    div1.top + 2 > div2.bottom -2 ||
    div1.right - 2 < div2.left + 2 ||
    div1.bottom - 2 < div2.top + 2||
    div1.left + 2 > div2.right - 2) 
}

// test button
    document.querySelector(".test2").addEventListener('click', allHide);

function allHide() {
    raccoon1Hide()
    raccoon2Hide()
    raccoon3Hide()
    console.log(overlap(rac1, rac2), overlap(rac2, rac3), overlap(rac1, rac3))
}
//test button
// document.querySelector(".test1").addEventListener('click', (event) => {
//     let rac = document.querySelector(".raccoon3")
//     let racChild = rac.children;
//     for (let i = 0; i < racChild.length; i++) {
//         racChild[i].style.opacity = 0;
//     }
//     console.log(racChild)
// })
// document.querySelector(".test2").addEventListener('click', (event) => {
//     console.log(getBoundingClientRect()
// })
// document.querySelector(".test3").addEventListener('click', raccoon3Hide)

//Raccoon Guess
    //function
function raccoonGuess() {
    if (game !== 0) {
    guessed = false;
    let randomPlace = Math.floor(Math.random() * 252);
   
   //find coordinates of random Div
    var offsets = document.querySelector(`.grillDiv.sq${randomPlace}`).getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    var topCenter = top + 5;
    var leftCenter = left + 12;
    let element = document.elementFromPoint(leftCenter, topCenter)

   //find top element at that location
   if (element.classList === null) {
       raccoonGuess();
   } else {
    let classArr = element.classList;
   
   //variable for element using classes from class list
    let foundElem = document.querySelectorAll(`.${classArr[0]}`);

    if (classArr.contains("dog") && !(classArr.contains("dogHit"))) {
        foundElem[0].style.opacity = 0.2;
        foundElem[1].style.opacity = 0.2;
        foundElem[0].classList.add("dogHit");
        foundElem[1].classList.add("dogHit");
        hdHitArr.push(foundElem[0]);
        console.log(hdHitArr);
        setTimeout(winConditions, 800);
        document.querySelector(".infoBox").innerHTML = `You got got!`;
        setTimeout(lemonThrow, 800)
        } else if (classArr.contains("miss") || classArr.contains("dogHit")) {
            raccoonGuess();
        } else {
            foundElem[0].style.backgroundColor = "grey";
            foundElem[0].classList.add("miss");
            document.querySelector(".infoBox").innerHTML = `A snatch and miss.`;
            setTimeout(lemonThrow, 800)
        }
}}}
//RACCOON GUESS END!!

//Lemon Throw (User's Turn)
function lemonThrow() {
    if (game !== 0) {
    document.querySelector(".infoBox").innerHTML = `Fight off the rodents!`;
    document.querySelector(".yardContainer").addEventListener('click', (event) => {

        //if to prevent clicks on random stuff
 if ((game !== 0) && (guessed === false) && !(event.target.classList.contains("miss")) && !(event.target.classList.contains("raccHit")) && !(event.target.classList.contains("yardBoundBox")) && !(event.target.classList.contains("raccoon1")) && !(event.target.classList.contains("raccoon2")) && !(event.target.classList.contains("raccoon3"))) {

        //local variables
    guessed = true;

    // if (event.target.classList.contains("raccoon")) {
    //           //find board element
    // var offsets = event.target.getBoundingClientRect();
    // var bottom = offsets.bottom;
    // var left = offsets.left;
    // var bottomCenter = bottom - 10;
    // var leftCenter = left + 14;
    // }
    // event.target.style.zIndex = -99;
    // let boardDiv = document.elementFromPoint(leftCenter, bottomCenter)
    // console.log(`event target: ${event.target.classList}, element from point: ${boardDiv.classList}`)

    //   //find top element at that location
    // if (boardDiv.classList === null) {
    //     lemonThrow();} 
    // else { 
        //if miss, else hit
        if (!(event.target.classList.contains("raccoon")) || (event.target.classList.contains("r2")) || (event.target.classList.contains("r10")) || (event.target.classList.contains("r12"))) {
            event.target.classList.add("miss");
            event.target.style.backgroundColor = "greenyellow";
            event.target.style.opacity = 1;
            document.querySelector(".infoBox").innerHTML = `No dice. I think I hear something shuffling around the grill...`;
            setTimeout(raccoonGuess, 1000)
        } else {
            event.target.style.backgroundColor = "darkred";
            event.target.style.opacity = 1;
            event.target.style.borderRadius = "0%";
            event.target.classList.add("raccHit");
            raccHitArr.push(event.target);
            console.log(raccHitArr);
            document.querySelector(".infoBox").innerHTML = `Got 'em! Now they're gonna be mad...`;
            setTimeout(winConditions, 800);
            setTimeout(raccoonGuess, 1000)
            }
        }})}}
    // }) 
// }
// }
//LEMON THROW END!!

//Click Test for Classes
function clickTest(elem) {
    console.log(elem.className)
}

document.querySelector(".grillContainer").addEventListener('click', (event) => {
    clickTest(event.target)
})

document.querySelector(".yardContainer").addEventListener('click', (event) => {
    clickTest(event.target)
})

//Resize Infobox after game starts
function resizeInfo() {
    if (gameStarted === true) {
        document.querySelector(".infoBox").style.height = '100px';
        document.querySelector(".infoBox").style.marginBottom = "15px";
        document.querySelector("h1").style.marginBottom = "15px";
    }
}

// start alert
function startAlert() {
    if ((countdown === 3) && (game !== 0)) {
        document.querySelector(".infoBox").innerHTML = `those raccoons are hiding out here somewhere..... <br><br>toss a lemon into the backyard and see if you can hit one`;
        gameStarted = true;
        resizeInfo();
        setTimeout(lemonThrow, 1000)
    }
}

//reset button
document.querySelector(".reset").addEventListener('click', (event) => {
    // countdown = 0;
    // guessed = false;
    location.reload();
})

//Win Conditions
function winConditions() {
    console.log(raccHitArr.length, hdHitArr.length)
if (raccHitArr.length === 5) {
    game = 0;
    alert(`HOTDOG WINS! You really are the grill master.`)
    document.querySelector(".infoBox").innerHTML = `Press RESET to play again!`;
} else if (hdHitArr.length === 5) {
    game = 0;
    alert(`RACCOON WINS! Those grubby paws are good for something.`)
    document.querySelector(".infoBox").innerHTML = `Press RESET to play again!`;
}
}


