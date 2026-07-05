let GAME_ORIENTATION = 'horizontal'; 
let twistInterval = null;

const Twister = {
    init: function() {
        this.startTwistTimer();
    },

    stop: function() {
        if (twistInterval) clearInterval(twistInterval);
        this.resetOrientation();
    },

    startTwistTimer: function() {
        if (twistInterval) clearInterval(twistInterval);
        
        const randomTime = Math.floor(Math.random() * 7000) + 8000;
        twistInterval = setInterval(() => {
            this.toggleTwist();
            this.startTwistTimer();
        }, randomTime);
    },

    toggleTwist: function() {
        if (FLAG === 1 || PLAYGAME === 0) return; 
        GAME_ORIENTATION = (GAME_ORIENTATION === 'horizontal') ? 'vertical' : 'horizontal';
        
        const gameCanvas = document.querySelector("#canvas");
        gameCanvas.style.transition = "transform 0.5s ease";
        
        if (GAME_ORIENTATION === 'vertical') {
            gameCanvas.style.border = "2px solid red"; 
            Text.draw('TWISTED VERTICAL!');
        } else {
            gameCanvas.style.border = "1px solid white";
            Text.draw('BACK TO NORMAL!');
        }

        this.realignObstacles();
    },

    resetOrientation: function() {
        GAME_ORIENTATION = 'horizontal';
        const gameCanvas = document.querySelector("#canvas");
        if(gameCanvas) gameCanvas.style.border = "1px solid white";
    },

    realignObstacles: function() {
        for (let i = 0; i < LOC.length; i++) {
            let oldX = LOC[i][0];
            let oldY = LOC[i][1];
            
            LOC[i][0] = Math.floor((oldY / CANVAS_HEIGHT) * CANVAS_WIDTH);
            LOC[i][1] = Math.floor((oldX / CANVAS_WIDTH) * CANVAS_HEIGHT);
        }
    }
};
