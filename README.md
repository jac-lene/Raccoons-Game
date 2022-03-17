# Raccoons

Link to Play: https://pages.git.generalassemb.ly/jac-lene/project1/

## Images

![new-game](/imgs/1.png)
![gameplay](/imgs/2.png)
![end-screen](/imgs/3.png)

## Objective
Defend your grill from the raccoons in your yard! 

## Code Styles
* HTML
* Javascript
* CSS

## Playing the Game
<i>Raccoons</i> follows the structure of gaming classic <i>Battleship</i>, set in a brand new environment.

To start, click a hotdog in the banner and place it on the grill. After all three are placed, gameplay begins! 

You can toss a lemon into the backyard (our version of firing into enemy waters) and the square will go red if you've hit a furry friend. 

The raccoons then volley back, grabbing at your grill to snatch a bite of a hotdog. If they successfully chomp, the hit zone will disappear from the grill board.

Each player has three "pieces" that each contain nine hit zones. A winner is announced after you or your opponent hits (or eats!) more than half of the other's pieces.

## Wireframes
The original concept for the game included some more detailed artwork, but I found that simplicity was an asset to gameplay. 

![wireframes](/imgs/HOTDOGS.png)

## Teachable Moments
A crucial tool needed to complete this project was ".getBoundingClientRect( )". Utilizing information from the bounding rectangles of raccoons, hotdogs, and other elements of the game I created the "guessing" AI for the raccoon player. 

This tool was also helpful for the raccoon hiding function - randomly assigning locations to raccoons sometimes created overlaps which interfered with the game. Understanding where the raccoons were located and creating a conditional to keep them separate streamlined and simplified game functionality.

Another helpful tool was keeping some empty buttons in the DOM so I could assign functions for testing outside of the normal turn taking structure. This allowed me to hone the raccoon guessing and hiding functions as well as test out some other elements of the game before firing them within the program order. 



