let doorsOpen = false;
let isMoving = false;
let targetFloor = null;

function moveToFloor(floor) {
    if (isMoving || doorsOpen) return;

    isMoving = true;
    targetFloor = floor;

    const escalator = document.getElementById('escalator');
    const chain = document.querySelector('.chain-container');
    const manImage = document.getElementById('man-image');
    const floorLabels = document.querySelectorAll('.floor-label');

    let bottomValue = '0px';
    let topValue = '0px';

    switch (floor) {
        case 4:
            bottomValue = '400px';
            topValue = '-400px';
            break;
        case 3:
            bottomValue = '300px';
            topValue = '-300px';
            break;
        case 2:
            bottomValue = '200px';
            topValue = '-200px';
            break;
        case 1:
            bottomValue = '100px';
            topValue = '-100px';
            break;
        case 0:
            bottomValue = '0px';
            topValue = '0px';
            break;
    }

    escalator.style.bottom = bottomValue;
    chain.style.top = topValue;

    floorLabels.forEach(label => label.style.display = 'none');
    document.getElementById(`label-${floor === 0 ? 'ground' : floor}`).style.display = 'block';

    setTimeout(() => {
        if (targetFloor === floor) {
            openDoors();
            manImage.style.bottom = bottomValue;
            manImage.style.display = 'block';

            setTimeout(() => {
                if (doorsOpen) {
                    closeDoors();
                }
            }, 2000);
        }
    }, 1000);
}

function openDoors() {
    const escalatorLeft = document.querySelector('.escalator-left');
    const escalatorRight = document.querySelector('.escalator-right');
    const manImage = document.getElementById('man-image');

    escalatorLeft.style.transform = 'translateX(-100%)';
    escalatorRight.style.transform = 'translateX(100%)';

    doorsOpen = true;
    disableFloorButtons();
}

function closeDoors() {
    const escalatorLeft = document.querySelector('.escalator-left');
    const escalatorRight = document.querySelector('.escalator-right');
    const manImage = document.getElementById('man-image');

    escalatorLeft.style.transform = 'translateX(0)';
    escalatorRight.style.transform = 'translateX(0)';

    doorsOpen = false;
    enableFloorButtons();

    manImage.style.display = 'none';
    isMoving = false;
}

function disableFloorButtons() {
    const buttons = document.querySelectorAll('.floor-button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableFloorButtons() {
    const buttons = document.querySelectorAll('.floor-button');
    buttons.forEach(button => {
        button.disabled = false;
    });
}
