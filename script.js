//Code
    //DRY
    //ReadMe

//Board

//GAMEPLAY
    //hone in Guess Zone when dog gets hit

// Stretch Goals

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
let divHitArr = [];
let rac1Arr = [];
let rac2Arr = [];
let rac3Arr = [];
let hd1Arr = [];
let hd2Arr = [];
let hd3Arr = [];
let leftTurns = 0;
let centerTurns = 0;
let rightTurns = 0;
let game = 1;

//Hotdog variables
let dog1 = document.querySelector(".hotdog1");
let dog2 = document.querySelector(".hotdog2");
let dog3 = document.querySelector(".hotdog3");

//Raccoons variables
let rac1 = document.querySelector(".raccoon1");
let rac2 = document.querySelector(".raccoon2");
let rac3 = document.querySelector(".raccoon3");

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

for (let i = 0; i <= 83; i++) {
    let zoneDivs = document.createElement("div")
    zoneDivs.className = `left${i} sq${i} zoneDiv`
    document.querySelector(".leftBoundBox").appendChild(zoneDivs)
}

for (let i = 0; i <= 83; i++) {
    let zoneDivs = document.createElement("div")
    zoneDivs.className = `center${i} sq${i} zoneDiv`
    document.querySelector(".centerBoundBox").appendChild(zoneDivs)
}

for (let i = 0; i <= 83; i++) {
    let zoneDivs = document.createElement("div")
    zoneDivs.className = `right${i} sq${i} zoneDiv`
    document.querySelector(".rightBoundBox").appendChild(zoneDivs)
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
dog1.addEventListener('click', (event) => {
    document.querySelector(".grillBoundBox").addEventListener('click', (event) => {    
            if ((hasDog(event.target) == false) && (placed1 === false) && !(event.target.classList.contains("grillBoundBox"))) {
                placed1 = true;
                countdown++
                dog1.style.cursor = "auto";
                event.target.appendChild(dog1);
                raccoonHide(rac1);
                startAlert();
            }
        })
    })

dog2.addEventListener('click', (event) => {
    document.querySelector(".grillBoundBox").addEventListener('click', (event) => { 
            if ((hasDog(event.target) == false) && (placed2 == false) && !(event.target.classList.contains("grillBoundBox"))) {
            placed2 = true;
            countdown++
            dog2.style.cursor = "auto";
            event.target.appendChild(dog2);
            raccoonHide(rac2);
            startAlert();
        }
    })
})

dog3.addEventListener('click', (event) => {
    document.querySelector(".grillBoundBox").addEventListener('click', (event) => {   
        if ((hasDog(event.target) == false) && (placed3 == false) && !(event.target.classList.contains("grillBoundBox"))) {
        placed3 = true;
        countdown++
        dog3.style.cursor = "auto";
        event.target.appendChild(dog3);
        raccoonHide(rac3);
        startAlert();
        }
    })
})

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

//check raccoon overlap
if ((overlap(rac1, rac2) === true) || (overlap(rac1, rac3) === true) || (overlap(rac2, rac3) === true)){
    raccoonHide(elem);
}
}
//END RACCOON HIDE


//overlap function
function overlap(el1, el2) {
    let div1 = el1.getBoundingClientRect();
    let div2 = el2.getBoundingClientRect();
    // console.log(div1, div2)
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


//big if/then
//zones start transparent

//if nothing hit, do big board guess
    //if hit, make board opaque and left board guess 


  //if there's a dog hit, continue search on a different zone
    //break board into thirds to hone down search



// document.querySelector(".test1").addEventListener('click', raccoonGuess)

//function for raccoon play

// function raccoonPlay(elem, num) {
//     let randomPlace = Math.floor(Math.random() * num);
//     let grillSquare = document.querySelector(elem + randomPlace).classList;
       
//        //find coordinates of random Div
//         var offsets = document.querySelector(elem + randomPlace).getBoundingClientRect();
//         var top = offsets.top;
//         var left = offsets.left;
//         var topCenter = top + 5;
//         var leftCenter = left + 12;
//         let element = document.elementFromPoint(leftCenter, topCenter)
//         // console.log(elem+randomPlace, element)
    
//        //find top element at that location
//        if (element === null) {
//            raccoonPlay();
//        } else {
//         let classArr = element.classList;
       
//        //variable for element using classes from class list
//         let foundElem = document.querySelectorAll(`.${classArr[0]}`);
    
//         if (classArr.contains("dog") && !(classArr.contains("dogHit"))) {
//             for (let i = 0; i <= 1; i++) {
//                 foundElem[i].style.opacity = 0;
//                 foundElem[i].classList.add("dogHit");
//             }
//             hdHitArr.push(foundElem[0]);
//             console.log(hdHitArr);
//             divHitArr.unshift(classArr[0]);
//             // console.log(divHitArr);
//             setTimeout(winConditions, 800);
//             // document.querySelector(".infoBox").innerHTML = `You got got!`;
//             setTimeout(dogTurn, 1200);
//             setTimeout(lemonThrow, 1200)
//             } else if (classArr.contains("miss") || classArr.contains("dogHit")) {
//                 raccoonGuess();
//             } else {
//                 foundElem[0].style.backgroundColor = "grey";
//                 foundElem[0].classList.add("miss");
//                 // document.querySelector(".infoBox").innerHTML = `A snatch and miss.`;
//                 setTimeout(dogTurn, 1200);
//                 setTimeout(lemonThrow, 1200)
//             }
//     }
// }

// function topDogHit(elem) {
//     let children = document.querySelector(elem).children;
//     for (let i = 0; i < children.length; i++) {

//     var offsets = children[i].getBoundingClientRect();
//     var top = offsets.top;
//     var left = offsets.left;
//     var topCenter = top + 5;
//     var leftCenter = left + 12;
//     let topElement = document.elementFromPoint(leftCenter, topCenter)
//     // console.log(children[i], topElement)

//    //find top element at that location
//    if (topElement === null) {
//        dogHit(elem)
//    } else {
//     let classArr = topElement.classList; 
//     if (classArr.contains("dogHit") === true) {
//         return true
//     } 
//     }
//    }
// }


// // function dogHit(elem) {
    
//     let children = document.querySelector(elem).children;
//     for (let i = 0; i < children.length; i++) {

//     if (children[i].classList.contains("dogHit")) {
//             return true
//         } else {return false}




//     }
// }

// function honeIn(elem) {
//     let newElem = elem.split()
//     // let element = document.querySelector(`.${newElem}`)

//     console.log(newElem)

// //    //find top element at that location
// //    if (element === null) {
// //        raccoonGuess();
// //    } else {
// //     let classArr = element.classList;
   
// //    //variable for element using classes from class list
// //     let foundElem = document.querySelectorAll(`.${classArr[0]}`);

// //     if (classArr.contains("dog") && !(classArr.contains("dogHit"))) {
// //         for (let i = 0; i <= 1; i++) {
// //             foundElem[i].style.opacity = 0;
// //             foundElem[i].classList.add("dogHit");
// //         }
// //         hdHitArr.push(foundElem[0]);
// //         console.log(hdHitArr);
// //         divHitArr.unshift(hdHitArr[0]);
// //         // console.log(divHitArr);
// //         setTimeout(winConditions, 800);
// //         // document.querySelector(".infoBox").innerHTML = `You got got!`;
// //         setTimeout(dogTurn, 1200);
// //         setTimeout(lemonThrow, 1200)
// //         } else if (classArr.contains("miss") || classArr.contains("dogHit")) {
// //             raccoonGuess();
// //         } else {
// //             foundElem[0].style.backgroundColor = "grey";
// //             foundElem[0].classList.add("miss");
// //             // document.querySelector(".infoBox").innerHTML = `A snatch and miss.`;
// //             setTimeout(dogTurn, 1200);
// //             setTimeout(lemonThrow, 1200)
// //         }
// //     }
// }

  // if (!dogHit(".leftBoundBox") && !topDogHit(".leftBoundBox") && !dogHit(".centerBoundBox") && !topDogHit(".centerBoundBox") && !dogHit(".rightBoundBox") && !topDogHit(".rightBoundBox")) {
// } else 


// function test for thirded board
//     function raccoonGuess() {
//         if (game !== 0) {
//         guessed = false;
//         document.querySelector(".infoBox").style.display = 'none';

//         raccoonPlay(".grillDiv.sq", 252)

//         if (topDogHit(".grillContainer")) {
//             honeIn(divHitArr[0])
//             console.log("dog hit!", (divHitArr[0]))
//         }

    
//     // if (topDogHit(".leftBoundBox")) {
//     //     raccoonPlay(".left", 84);
//     //     console.log("left");
//     //     leftTurns++;
//     //     console.log(leftTurns);
        
//     // } else if (topDogHit(".centerBoundBox") && centerTurns === 0) {
//     //     // if (centerTurns === 4) {
//     //     //     raccoonPlay(".grillDiv.sq", 252)
//     //     // }
//     //     raccoonPlay(".center", 84)
//     //     console.log("center")
//     //     centerTurns++;
//     //     console.log(centerTurns);
//     // } else if (topDogHit(".rightBoundBox") && rightTurns === 0) {
//     //     // if (rightTurns === 4) {
//     //     //     raccoonPlay(".grillDiv.sq", 252)
//     //     // }
//     //     raccoonPlay(".right", 84)
//     //     console.log("right")
//     //     rightTurns++;
//     //     console.log(rightTurns);
        
//     // }
//     else {
//         console.log("something wrong")
//     }
      
    
//     } 
// }
// END THIRDED GUESS
 

//REAL raccoon guess
function raccoonGuess() {
    if (game !== 0) {
        
    guessed = false;
    document.querySelector(".scoreBox").style.display = 'block';
    document.querySelector(".infoBox").style.display = 'none';

    let randomPlace = Math.floor(Math.random() * 252);
   
   //find coordinates of random Div
    var offsets = document.querySelector(`.grillDiv.sq${randomPlace}`).getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    var topCenter = top + 5;
    var leftCenter = left + 12;
    let element = document.elementFromPoint(leftCenter, topCenter)
    // console.log(top, left, topCenter, leftCenter, offsets, element)

   //find top element at that location
   if (element === null) {
       raccoonGuess();
   } else {
    let classArr = element.classList;
   
   //variable for element using classes from class list
    let foundElem = document.querySelectorAll(`.${classArr[0]}`);

    if (classArr.contains("dog") && !(classArr.contains("dogHit"))) {
        for (let i = 0; i <= 1; i++) {
            foundElem[i].style.opacity = 0;
            foundElem[i].classList.add("dogHit");
        }
        hdHitArr.push(foundElem[0]);
        console.log(hdHitArr);
        setTimeout(winConditions, 800);
        // document.querySelector(".infoBox").innerHTML = `You got got!`;
        setTimeout(dogTurn, 1200);
        setTimeout(lemonThrow, 1200)
        score();
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
        
    document.querySelector(".scoreBox").style.display = 'block';
    document.querySelector(".infoBox").style.display = 'none';

    document.querySelector(".yardContainer").addEventListener('click', (event) => {
        //if to prevent clicks on random stuff
 if ((game !== 0) && (guessed === false) && !(event.target.classList.contains("miss")) && !(event.target.classList.contains("raccHit")) && !(event.target.classList.contains("yardBoundBox")) && !(event.target.classList.contains("raccoon1")) && !(event.target.classList.contains("raccoon2")) && !(event.target.classList.contains("raccoon3"))) {

    guessed = true;

        if (!(event.target.classList.contains("raccoon")) || (event.target.classList.contains("r2")) || (event.target.classList.contains("r10")) || (event.target.classList.contains("r12"))) {
            event.target.classList.add("miss");
            event.target.style.backgroundColor = "greenyellow";
            event.target.style.opacity = 1;
            // document.querySelector(".infoBox").innerHTML = `No dice. I think I hear something shuffling around the grill...`;
            setTimeout(racTurn, 1000);
            setTimeout(raccoonGuess, 2000)
            setTimeout(raccoonGuess, 2000)
            setTimeout(raccoonGuess, 2000)
        } else {
            event.target.style.backgroundColor = "darkred";
            event.target.style.opacity = 1;
            event.target.style.borderRadius = "0%";
            event.target.classList.add("raccHit");
            raccHitArr.push(event.target);
            console.log(raccHitArr);
            score();
            // document.querySelector(".infoBox").innerHTML = `Got 'em! Now they're gonna be mad...`;
            setTimeout(winConditions, 800);
            setTimeout(racTurn, 1000);
            setTimeout(raccoonGuess, 2000)
            setTimeout(raccoonGuess, 2000)
            setTimeout(raccoonGuess, 2000)
            }
        }})}}
//LEMON THROW END!!

//Click Test for Classes (inessential to game)
function clickTest(elem) {
    console.log(elem.className)
}

document.querySelector(".grillContainer").addEventListener('click', (event) => {
    clickTest(event.target)
})

document.querySelector(".yardContainer").addEventListener('click', (event) => {
    clickTest(event.target)
})

function score() {
    document.querySelector("h1").style.marginBottom = "10px";
    document.querySelector(".score").innerHTML = `<p>SCORE: ${raccHitArr.length} to  ${hdHitArr.length}<p>`;
}

// start alert
function startAlert() {
    if ((countdown === 3) && (game !== 0)) {
        document.querySelector(".infoBox").style.height = '200px';
        document.querySelector(".infoBox").style.marginBottom = "40px";
        document.querySelector("h1").style.marginBottom = "25px";
        document.querySelector(".infoBox").style.borderRadius = '50%';
        document.querySelector(".infoBox").innerHTML = `<p class="info">Those raccoons are hiding out here somewhere...<p>`;
        gameStarted = true;
        setTimeout(score, 2000);
        setTimeout(dogTurn, 2000);
        setTimeout(lemonThrow, 2000)
    }
}

//reset button
document.querySelector(".reset").addEventListener('click', (event) => {
    location.reload();
})

//Win Conditions


function winConditions() {
    console.log(raccHitArr.length, hdHitArr.length)
if (raccHitArr.length >= 14) {
    game = 0;
    document.querySelector(".winner").style.display = "block";
} else if (hdHitArr.length >= 14) {
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