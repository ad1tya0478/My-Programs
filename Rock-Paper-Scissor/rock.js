// This line retrieves the saved score from the browser's localstorage
        // If there is no saved score, the default value is 0.
        let score = JSON.parse(localStorage.getItem('Score')) || {
            Wins: 0,
            Loses: 0,
            Ties: 0
        };

        updateScore();

let computerMove = '';
        
        // this function randomly selects a move b/w r,p,s
        function function1() {
            const randomNumber = Math.random(); // math.random genrates a random numeber b/w 0 and 1 based on the value of that number 
            
                                                // computer chooses b/w r/p/s
            
            if (randomNumber >=0 && randomNumber < 1/3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
                computerMove = 'paper';
            } else if (randomNumber >= 2/3 && randomNumber < 1 ){
                computerMove = 'scissor';
            } 
            
        }

        // in this, we can press a key on aur keyboard and the 
        // selected value will execute
        document.body.addEventListener('keydown',(event) => {
            if (event.key === 'r'){
                function2('Rock');
            } else if (event.key === 'p'){
                function2('Paper');
            } else if (event.key === 's'){
                function2('scissor');
            }
        });

        // This function is called whenever the player chooses a move
        function function2(playermove) {
            function1();
            let result = '';
        if (playermove === 'scissor'){
            if (computerMove === 'rock') {
                result = 'You lost.';
            } else if (computerMove === 'paper'){
                result = 'You win.';
            } else if (computerMove === 'scissor') {
                result = 'A tie.';
            }
        } else if (playermove === 'Paper') {
            if (computerMove === 'rock') {
                result = 'You win.';
            } else if (computerMove === 'paper'){
                result = 'A tie.';
            } else if (computerMove === 'scissor') {
                result = 'You lost.';
            }
        } else if (playermove === 'Rock'){
            if (computerMove === 'rock') {
            result = 'A tie.';
            } else if (computerMove === 'paper'){
                result = 'You lost.';
            } else if (computerMove === 'scissor') {
                result = 'You win.';
            }
        }

        if (result === 'You win.') {
            score.Wins += 1;
        } else if (result === 'You lost.' ){
            score.Loses += 1;
        } else if (result === 'A tie.'){
            score.Ties += 1;
        }

        // Save updated score to a localstorage 
        localStorage.setItem('Score', JSON.stringify(score));

        updateScore();

        // Shows results and moves on screen 
        document.querySelector('.js-result').innerHTML = result;
        
        document.querySelector('.js-moves').innerHTML = `
        <div class="move-result">
            <div class="player">
            <p>You</p>
            <img src="images/${playermove}-emoji.png" class="move-icon">
            </div>
            <div class="player">
            <p>Computer</p>
            <img src="images/${computerMove}-emoji.png" class="move-icon">
            </div>
        </div>
        `;

        }

        // To update the score 
        function updateScore(){
            document.querySelector('.js-score').innerHTML = 
       ` Wins: ${score.Wins}, Losses: ${score.Loses}, Ties: ${score.Ties}`;

        }

        let isautoplaying = false;

        let intervalid; 

        function autoplay() {
            if (!isautoplaying) {

             intervalid = setInterval( () => {
                    const moves = ['Rock', 'Paper', 'scissor'];
                    const randomindex = Math.floor(Math.random()*moves.length);
                    const playermove = moves[randomindex];
                    function2(playermove);
                }, 1000);
            isautoplaying = true;
            }   
            else {
                clearInterval(intervalid);
                isautoplaying = false;
            }
        }

        // If you don't wish to use onclick method of html, you can use this also
        document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
            function2('Rock');
        });
        document.querySelector('.js-paper-button')
        .addEventListener('click', () => {
            function2('Paper');
        });
        document.querySelector('.js-scissor-button')
        .addEventListener('click', () => {
            function2('scissor');
        });