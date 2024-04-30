document.addEventListener("DOMContentLoaded", function() {
    // Initialize canvas
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");

    // Player class
    class Player {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.width = 50;
            this.height = 50;
            this.color = color;
            this.speedX = 0;
            this.speedY = 0;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    // Create players
    var player1 = new Player(200, canvas.height / 2, "red");
    var player2 = new Player(600, canvas.height / 2, "blue");

    // Add event listeners for keyboard input
    document.addEventListener("keydown", function(event) {
        // Player 1 controls
        if (event.key === "ArrowLeft") {
            player1.speedX = -5; // Move left
        } else if (event.key === "ArrowRight") {
            player1.speedX = 5; // Move right
        } else if (event.key === "ArrowUp") {
            player1.speedY = -5; // Move up
        } else if (event.key === "ArrowDown") {
            player1.speedY = 5; // Move down
        }

        // Player 2 controls (example)
        if (event.key === "a") {
            player2.speedX = -5; // Move left
        } else if (event.key === "d") {
            player2.speedX = 5; // Move right
        } else if (event.key === "w") {
            player2.speedY = -5; // Move up
        } else if (event.key === "s") {
            player2.speedY = 5; // Move down
        }
    });

    document.addEventListener("keyup", function(event) {
        // Reset player speeds when keys are released
        if (event.key === "ArrowLeft" || event.key === "ArrowRight" ||
            event.key === "ArrowUp" || event.key === "ArrowDown") {
            player1.speedX = 0;
            player1.speedY = 0;
        }

        // Reset player speeds for Player 2 (example)
        if (event.key === "a" || event.key === "d" ||
            event.key === "w" || event.key === "s") {
            player2.speedX = 0;
            player2.speedY = 0;
        }
    });

    // Game loop
    function gameLoop() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update players
        player1.update();
        player2.update();

        // Draw players
        player1.draw();
        player2.draw();

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});