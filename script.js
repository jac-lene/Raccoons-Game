//Code
    //DRY

//Board
    //add to artwork
       //add "bitemarks" to the hit div to visualize chomp

//GAMEPLAY
    //hone in Guess Zone when dog gets hit

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
let elem1 = undefined;

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

// for (let i = 0; i <= 131; i++) {
//     let horizDivs = document.createElement("div")
//     horizDivs.className = `horiz${i} sq${i} horizDiv`
//     document.querySelector(".horizBoundBox").appendChild(horizDivs)
// }

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
        if ((hasDog(event.target) == false) && (placed1 === false) && !(event.target.classList.contains("grillBoundBox"))) {
        placed1 = true;
        countdown++
        let hd1 = document.querySelector(".hotdog1");
        hd1.style.cursor = "auto";
        event.target.appendChild(hd1);
        raccoonHide(rac1);
        startAlert();
        }
    })
    }
)

document.querySelector(".hotdog2").addEventListener('click',(event) => {
    document.querySelector(".grillBoundBox").addEventListener('click', (event) => {    
        if ((hasDog(event.target) == false) && (placed2 == false) && !(event.target.classList.contains("grillBoundBox"))) {
        placed2 = true;
        countdown++
        let hd2 = document.querySelector(".hotdog2");
        hd2.style.cursor = "auto";
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
        hd3.style.cursor = "auto";
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
    elem.children[i].style.backgroundColor = "rgb(8, 225, 41)";
    elem.children[i].style.padding = "0px";
    elem.children[i].style.borderRadius = "0%";
    elem.children[i].style.margin = "1px";
}

//line up w grid
elem.style.right = "3px";

//check overlap
if ((overlap(rac1, rac2) === true) || (overlap(rac1, rac3) === true)){
    raccoonHide(elem);
}
}

//overlap function
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


//test button
// document.querySelector(".test1").addEventListener('click', (event) => {
// })
// document.querySelector(".test2").addEventListener('click', (event) => {
//     console.log(getBoundingClientRect()
// })
// document.querySelector(".test3").addEventListener('click', raccoon3Hide)

function racTurn() {
    if (window.innerWidth < 800) {
        document.querySelector(".grillContainer").style.borderTop = "8px dotted black";
        document.querySelector(".yardContainer").style.borderBottom = "0px";
    } else {
    document.querySelector(".grillContainer").style.borderTop = "0px";
    document.querySelector(".grillContainer").style.borderBottom = "8px dotted black";
    document.querySelector(".yardContainer").style.borderBottom = "0px";
    }
}

function dogTurn() {
    document.querySelector(".yardContainer").style.borderBottom = "8px dotted black";
    document.querySelector(".grillContainer").style.borderTop = "0px";
    document.querySelector(".grillContainer").style.borderBottom = "0px";
}

//Raccoon Guess
    //function
function raccoonGuess() {
    if (game !== 0) {
    guessed = false;
    document.querySelector(".infoBox").style.display = 'none';

    let randomPlace = Math.floor(Math.random() * 252);
   
   //find coordinates of random Div
    var offsets = document.querySelector(`.grillDiv.sq${randomPlace}`).getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    var topCenter = top + 5;
    var leftCenter = left + 12;
    let element = document.elementFromPoint(leftCenter, topCenter)
    console.log(top, left, topCenter, leftCenter, offsets, element)

   //find top element at that location
   if (element === null) {
       raccoonGuess();
   } else {
    let classArr = element.classList;
   
   //variable for element using classes from class list
    let foundElem = document.querySelectorAll(`.${classArr[0]}`);

    //if there's a dog hit, continue search on a different zone
    //break board into thirds to hone down search


    if (classArr.contains("dog") && !(classArr.contains("dogHit"))) {
        foundElem[0].style.opacity = 0;
        foundElem[1].style.opacity = 0;
        // foundElem[0].style.maskImage = "url(mask.png)";
        // foundElem[1].style.maskImage = "url(mask.png)";
        // foundElem[0].style.backgroundColor = "black";
        // foundElem[1].style.backgroundColor = "black";
        foundElem[0].classList.add("dogHit");
        foundElem[1].classList.add("dogHit");
        hdHitArr.push(foundElem[0]);
        console.log(hdHitArr);
        setTimeout(winConditions, 800);
        // document.querySelector(".infoBox").innerHTML = `You got got!`;
        setTimeout(dogTurn, 1200);
        setTimeout(lemonThrow, 1200)
        } else if (classArr.contains("miss") || classArr.contains("dogHit")) {
            raccoonGuess();
        } else {
            foundElem[0].style.backgroundColor = "grey";
            foundElem[0].classList.add("miss");
            // document.querySelector(".infoBox").innerHTML = `A snatch and miss.`;
            setTimeout(dogTurn, 1200);
            setTimeout(lemonThrow, 1200)
        }
}}}
//RACCOON GUESS END!!

//Lemon Throw (User's Turn)
function lemonThrow() {
    if (game !== 0) {
    // document.querySelector(".infoBox").innerHTML = `Fight off the rodents!`;
    document.querySelector(".infoBox").style.display = 'none';
    document.querySelector(".yardContainer").addEventListener('click', (event) => {
        //if to prevent clicks on random stuff
 if ((game !== 0) && (guessed === false) && !(event.target.classList.contains("miss")) && !(event.target.classList.contains("raccHit")) && !(event.target.classList.contains("yardBoundBox")) && !(event.target.classList.contains("raccoon1")) && !(event.target.classList.contains("raccoon2")) && !(event.target.classList.contains("raccoon3"))) {

    guessed = true;

        if (!(event.target.classList.contains("raccoon")) || (event.target.classList.contains("r2")) || (event.target.classList.contains("r10")) || (event.target.classList.contains("r12"))) {
            event.target.classList.add("miss");
            event.target.style.backgroundColor = "greenyellow";
            event.target.style.opacity = 1;
            document.querySelector(".infoBox").innerHTML = `No dice. I think I hear something shuffling around the grill...`;
            setTimeout(racTurn, 1000);
            setTimeout(raccoonGuess, 2000)
        } else {
            event.target.style.backgroundColor = "darkred";
            event.target.style.opacity = 1;
            event.target.style.borderRadius = "0%";
            event.target.classList.add("raccHit");
            raccHitArr.push(event.target);
            console.log(raccHitArr);
            document.querySelector(".infoBox").innerHTML = `Got 'em! Now they're gonna be mad...`;
            setTimeout(winConditions, 800);
            setTimeout(racTurn, 1000);
            setTimeout(raccoonGuess, 2000)
            }
        }})}}
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
        document.querySelector(".infoBox").style.height = '200px';
        document.querySelector(".infoBox").style.marginBottom = "40px";
        document.querySelector("h1").style.marginBottom = "25px";
        document.querySelector(".infoBox").style.borderRadius = '50%';
    }
}

// start alert
function startAlert() {
    if ((countdown === 3) && (game !== 0)) {
        document.querySelector(".infoBox").innerHTML = `<p class="info">those raccoons are hiding out here somewhere... toss a lemon into the backyard and see if you can hit one<p>`;
        gameStarted = true;
        resizeInfo();
        setTimeout(dogTurn, 4000);
        setTimeout(lemonThrow, 4000)
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
if (raccHitArr.length === 1) {
    game = 0;
    document.querySelector(".winner").style.display = "block";
} else if (hdHitArr.length === 1) {
    game = 0;
    document.querySelector(".loser").style.display = "block";
}
}

//exit buttons
document.querySelector(".exit1").addEventListener('click', function() {
    document.querySelector(".winner").style.display = "none";
})
document.querySelector(".exit2").addEventListener('click', function() {
    document.querySelector(".loser").style.display = "none";
})
document.querySelector(".exit3").addEventListener('click', function() {
    document.querySelector(".welcome").style.display = "none";
})