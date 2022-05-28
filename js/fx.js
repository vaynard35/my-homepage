/* Matrix Animation Def */


/* thanks to 
Clive Cooper
@yaclive
*/

initMatrix = (canvas) => {

        // Initialising the canvas
    
    ctx = canvas.getContext('2d');
    var firstWaveCompleted = false; //we ll use that to determine dispatchin event 

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ123456789';
    letters = letters.split('');

    // Setting up the columns
    var fontSize = 10,
    columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
    drops[i] = 1;
    }

    // Setting up the draw function
    function drawMatrix() {
    ctx.fillStyle = 'rgba(255, 255, 255, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#000';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
        
        if(!firstWaveCompleted) {
            const event = new Event('matrixAnimationComplete');
            canvas.dispatchEvent(event);
            console.log('Matrix Animation Wave Completed')
            firstWaveCompleted = true
        }
    }
    }
    }
    
    
    // Loop the animation
    setInterval(drawMatrix, 33);
}


/* end Matrix Animation Def */



/* typing animation def */

initTypingAnimation = (element, text, letterSpeed = 50) => {
    var i = 0;


    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, letterSpeed);
        }
    }

    typeWriter()

}

