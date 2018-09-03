let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let botDoorPath = "https://tinyurl.com/y9lwh5nw";
let beachDoorPath = "https://tinyurl.com/ybvmvzsu";
let spaceDoorPath = "https://tinyurl.com/y7hgrf6j";

let closedDoorPath = "https://tinyurl.com/y7xqbmpg";

let openDoor1;
let openDoor2;
let openDoor3;

let startButton = document.getElementById('start');

let numClosedDoors = 3;



const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;

  } else if (choreDoor === 1) {
   	openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;

  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;

  }
};

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  }
  return true;
};

const playDoor = () => {
  if (numClosedDoors === 0) {

    gameOver('win');
  }
  numClosedDoors -= 1;
};



door1.onclick = () => {
  if (!isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
  playDoor();

  }
};
door2.onclick = () => {
  if (!isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
	playDoor();

  }
};
door3.onclick = () => {
  if (!isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
	playDoor();

  }
};

const gameOver = (str) => {
  if (str === 'win') {
    startButton.innerHTML = "You win! Play again?";
  }
};
randomChoreDoorGenerator();
