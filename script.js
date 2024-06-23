let picture1Count = 0;
let picture2Count = 0;
let currentPicture1 = '1 (5).jpg';
let currentPicture2 = '1 (16).jpg';
let pictureArray = ['1 (2).jpg', '1 (3).jpg', '1 (1).jpg', '1 (4).jpg' ,'1 (5).jpg','1 (7).jpg','1 (8).jpg','1 (9).jpg','1 (10).jpg','1 (11).jpg','1 (12).jpg','1 (13).jpg','1 (16).jpg','1 (14).jpg','1 (15).jpg','1 (17).jpg','1 (18).jpg','1 (19).jpg'];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('picture1').addEventListener('click', function() {
        picture1Count++;
        updateCounter();
        changePicture('picture2');
    });

    document.getElementById('picture2').addEventListener('click', function() {
        picture2Count++;
        updateCounter();
        changePicture('picture1');
    });
});

function updateCounter() {
    let counterText = '';
    if (picture1Count > picture2Count) {
        counterText =` Picture 1 is winning with ${picture1Count} votes!`;
    } else if (picture2Count > picture1Count) {
        counterText = `Picture 2 is winning with ${picture2Count} votes!`;
    } else {
        counterText = `It's a tie! Both pictures have ${picture1Count} votes.`;
    }
    document.getElementById('counter').innerHTML = counterText;
}

function changePicture(id) {
    let newPicture = getRandomPicture();
    document.getElementById(id).src = newPicture;
    if (id === 'picture1') {
        currentPicture1 = newPicture;
    } else {
        currentPicture2 = newPicture;
    }
}

function getRandomPicture() {
    let randomIndex = Math.floor(Math.random() * pictureArray.length);
    return pictureArray[randomIndex];
}