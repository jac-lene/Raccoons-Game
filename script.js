
// game can parse where users lemons land in the yard and registers it as a hit or miss
// game can parse where raccoons grabs are on the grill and register them as a hit or miss
// visual cues when a raccoon has been successfully hit or when they have run away.
// visual cues when a hotdog has been bitten or eaten.
// basic artwork to get the game concept across

//Board
    //"splat" image
    //"chomp" code for hotdog
    //alert when you're down a whole "piece"
    //win/lose alert
    //raccoon guess alert or animation
    //stretch goal - div element that gets unhidden for a hit/miss notification, click to hide again
    //Stretch goal - drag and drop

//GAMEPLAY
 //Placement

 //Guessing
    //turntaking element
        //find way to slow down raccoon guessing process?? delay? 
    //randomly generated raccoon guesses
        //searches for "hotdog" class on div to determine hit
        //changes color/disappears to indicate a hit
        //changes div class to indicate hit
            //stretch goal: add "bitemarks" to the hit div to visualize chomp
    //takes user input "click" for yard guess
        //searches for "raccoon" class on div to determine hit
        //changes div class to indicate hit
        //click highlights a div, changes color to indicate a hit
            //stretch goal: add splat image on "hit"

 //Winning Conditions
    //checks divs for dogHit or raccHit classes, if either reach 9, announce winner
    //stretch goal - win screen???
    
// Stretch Goals   
    // maybe animation???
    //drag animation https://www.kirupa.com/html5/drag.htm




//global variables
let gameStarted = false;
let turns = 0;
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

//turns
// function turnRules() {
//     if (gameStarted == true) {
//         if (turns % 2 === 0) {
//             turns++
//              setTimeout(lemonThrow, 1500);
//         } else {
//             turns++
//              setTimeout(raccoonGuess, 1500);
//     }}
// }
// turnRules();

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
        raccoon1Hide();
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
        raccoon2Hide();
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
        raccoon3Hide();
        startAlert();
        }
    })
})

//Raccoons variables
let rac1 = document.querySelector(".raccoon1");
let rac2 = document.querySelector(".raccoon2");
let rac3 = document.querySelector(".raccoon3");

//Raccoon Hide
function raccoon1Hide() {
    //randomly generate div number
let randomPlace = Math.floor(Math.random() * 176);
let position = `div.yardBoundDiv.sq${randomPlace}`

//place raccoon at random spot
    let rac = document.querySelector(".raccoon1");
    document.querySelector(position).appendChild(rac);
    // rac.style.border = "1px solid black"

//make transparent 
for (let i = 0; i < rac.children.length; i++) {
    rac.children[i].style.opacity = 0;}
}

function raccoon2Hide() {
    //randomly generate div number
let randomPlace = Math.floor(Math.random() * 176);
let position = `div.yardBoundDiv.sq${randomPlace}`

//place raccoon at random spot
let rac = document.querySelector(".raccoon2");
document.querySelector(position).appendChild(rac);
// rac.style.border = "1px solid black"

//make transparent 
for (let i = 0; i < rac.children.length; i++) {
    rac.children[i].style.opacity = 0;}
}

function raccoon3Hide() {
    //randomly generate div number
let randomPlace = Math.floor(Math.random() * 176);
let position = `div.yardBoundDiv.sq${randomPlace}`

//place raccoon at random spot
let rac = document.querySelector(".raccoon3");
document.querySelector(position).appendChild(rac);
// rac.style.border = "1px solid black"

//make transparent 
for (let i = 0; i < rac.children.length; i++) {
    rac.children[i].style.opacity = 0;}
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
    //test button
    // document.querySelector(".test2").addEventListener('click', winConditions);

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
 if ((game !== 0) && (guessed === false) && !(event.target.classList.contains("miss")) && !(event.target.classList.contains("raccHit")) && !(event.target.classList.contains("yardBoundBox")) && !(event.target.classList.contains("raccoon1")) && !(event.target.classList.contains("raccoon2")) && !(event.target.classList.contains("raccoon3")) && !(event.target.classList.contains("raccoons"))) {

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
        if (!event.target.classList.contains("raccoon")) {
            event.target.classList.add("miss");
            event.target.style.backgroundColor = "greenyellow";
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
if (raccHitArr.length >= 5) {
    game = 0;
    alert(`HOTDOG WINS! You really are the grill master.`)
    document.querySelector(".infoBox").innerHTML = `Press RESET to play again!`;
} else if (hdHitArr.length >= 5) {
    game = 0;
    alert(`RACCOON WINS! Those grubby paws are good for something.`)
    document.querySelector(".infoBox").innerHTML = `Press RESET to play again!`;
}
}


