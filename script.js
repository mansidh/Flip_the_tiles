

let clickedCard=null;
let preventClick=false;
let combosFound=0;
let movesCount = 0;
let scoreCount = 0;


function onCardClicked(e) {

    movesCount++;
    document.getElementById('movesCount').textContent = movesCount;

    const target = e.currentTarget;

    if (preventClick || target === clickedCard || target.classList.contains('done')) {
        return;
    }

    target.style.backgroundImage = `url(${target.getAttribute('data-image')})`;
    target.classList.add('done');

    // Check if we have clicked a new card and there is a previously clicked card
    if (!clickedCard) {
        clickedCard = target;
    } else {
        // If the data-image attributes match, it's a match
        if (clickedCard.getAttribute('data-image') === target.getAttribute('data-image')) {
            combosFound++;
            scoreCount += 10;
            document.getElementById('scoreCount').textContent = scoreCount;
            clickedCard = null;
            if (combosFound === 8) {
                alert("YOU WIN");
            }
        } else {
            // If it's not a match, flip both cards back after a short delay
            preventClick = true;
            setTimeout(() => {
                clickedCard.style.backgroundImage = '';
                target.style.backgroundImage = '';
                clickedCard.classList.remove('done');
                target.classList.remove('done');
                clickedCard = null;
                preventClick = false;
            }, 500);
        }
    }
}


