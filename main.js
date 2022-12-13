import ScoreboardView from "./scoreboard/ScoreboardView.js";

let playerOneScore = 1;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;
let playerFiveScore = 0;
let playerSixScore = 0;


const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Team A", "Team B", "Team C", "Team D", "Team E", "Team F", (player, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	if (player === "one") {
		playerOneScore = Math.max(playerOneScore + difference, 0);
	} 

	if (player === "two") {
		playerTwoScore = Math.max(playerTwoScore + difference, 0);
	} 

	if (player === "three") {
		playerThreeScore = Math.max(playerThreeScore + difference, 0);
	} 

	if (player === "four") {
		playerFourScore = Math.max(playerFourScore + difference, 0);
	} 

	if (player === "five") {
		playerFiveScore = Math.max(playerFiveScore + difference, 0);
	} 
	
	if (player === "six") {
		playerSixScore = Math.max(playerSixScore + difference, 0);
	} 
	

	view.update(playerOneScore, playerTwoScore, playerThreeScore, playerFourScore, playerFiveScore, playerSixScore);
});

