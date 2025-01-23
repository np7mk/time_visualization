let hourX, minuteX, secondX;

function setup() {
    createCanvas(1000, 500); // Canvas size
    frameRate(60); // Smooth animation at 60 frames per second
}

function draw() {
    background(200, 230, 255); // Light blue background

    // Get current time values
    let hr = hour(); // Hour in 12-hour format
    let min = minute();
    let sec = second();

    // Calculate fractional progress within the current second, minute, and hour
    let millisFraction = millis() % 1000 / 1000; // Fraction of the current second
    let secondFraction = sec + millisFraction; // Fractional seconds (e.g., 3.5)
    let minuteFraction = min + secondFraction / 60; // Fractional minutes
    let hourFraction = hr + minuteFraction / 60; // Fractional hours

    // Map positions dynamically with smooth interpolation
    hourX = map(hourFraction, 0, 24, 150, width - 100); // Hour snail
    minuteX = map(minuteFraction, 0, 59, 150, width - 100); // Minute snail
    secondX = map(secondFraction, 0, 59, 150, width - 100); // Second snail

    

    // Draw Snails
    drawSnail(hourX, 100, color(255, 100, 100), floor(hourFraction)); // Hour snail
    drawSnail(minuteX, 250, color(100, 255, 100), floor(minuteFraction)); // Minute snail
    drawSnail(secondX, 400, color(100, 100, 255), floor(secondFraction)); // Second snail
}

function drawSnail(x, y, snailColor, value) {
    // Snail Body (Shell)
    fill(snailColor);
    ellipse(x, y, 60, 40); // Shell

    // Snail Base
    fill(150, 75, 0);
    rect(x - 20, y + 10, 40, 20, 10); // Base of the snail

    // Antennae (with wobble effect)
    let wobble = sin(frameCount * 0.1) * 5; // Wobble effect
    stroke(0);
    strokeWeight(2);
    line(x - 15 + wobble, y - 10, x - 25 + wobble, y - 30); // Left antenna
    line(x + 15 + wobble, y - 10, x + 25 + wobble, y - 30); // Right antenna
    ellipse(x - 25 + wobble, y - 30, 5, 5); // Left eye
    ellipse(x + 25 + wobble, y - 30, 5, 5); // Right eye

    // Add Time Value on the Shell
    noStroke();
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(value, x, y); // Display time value (hour/minute/second) on the shell
}

