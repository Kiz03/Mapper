let playNow = document.querySelector('.play');
let chooseMode;
let headText;
 let buttons;
let easy;
let hard;
let medium;
let maincon = document.querySelector('.maincont');
let middlecon = document.querySelector('.content');
let check = 0;
let live = 3;
let scoreTracker = 0;
let imagesShownNumber = 4;
let timerGame;
let countDown;
playNow.addEventListener('click', ()=> {
    chooseMode = document.createElement('div');
    headText = document.createElement('div');
    buttons = document.createElement('div');
    easy = document.createElement('button');
    hard = document.createElement('button');
    medium = document.createElement('button')
    headText.textContent = 'Difficulty';
    easy.textContent = 'EASY';
    medium.textContent = 'MEDIUM';
    hard.textContent = 'HARD';
    chooseMode.style.display = 'flex';
    chooseMode.style.flexDirection = 'column';
    chooseMode.style.padding = '50px';
    buttons.style.display = 'flex';
    buttons.style.flexDirection = 'row';
    buttons.style.gap = '10px'
    chooseMode.style.position = 'absolute'; // or 'fixed' for a fixed position
    chooseMode.style.top = '50%';
    chooseMode.style.left = '50%';
    chooseMode.style.transform = 'translate(-50%, -50%)';
    chooseMode.style.alignItems = 'center';
    chooseMode.style.backgroundColor = 'white';
    chooseMode.style.width = '500px';
    chooseMode.style.height = 'auto';
    chooseMode.style.justifyContent = 'center';
    headText.style.fontSize = '150px';
    headText.style.fontFamily = 'Bebas Neue';
    chooseMode.style.border = '2px solid black';
   // buttons.style.fontFamily = 'Bebas Neue';
    buttons.style.justifyContent = 'space-between';
    
    buttons.style.width = '100%';
   
    
   
   
   

    buttons.append(easy, medium, hard);
    
    chooseMode.append(headText, buttons);
    document.body.appendChild(chooseMode);
    buttons.childNodes.forEach((i, index) => {
        i.style.height = '75px';
        i.style.width = '145px';
        i.style.fontFamily = 'Bebas Neue';
        i.style.fontWeight = '50px';
        i.style.fontSize = '50px'
        i.style.border = '6px solid black';
        if (index === 0) {
            i.className = 'diffbutt esy';
        } else if (index === 1) {
            i.className = 'diffbutt med';
        } else if (index === 2) {
            i.className = 'diffbutt hrd';
        }

        //console.log(i)
       
    })

    maincon.style.opacity = '0.5';


//console.log(check);
   
    
})

document.body.addEventListener('mouseover', e=> {
    if (e.target.classList.contains('diffbutt')) {
        e.toElement.style.border = '7px solid black';
        e.toElement.addEventListener('mouseout', () => {
            e.toElement.style.border = '6px solid black';
        })
    }
})

document.body.addEventListener('click', e=> {
    if (e.target.classList.contains('esy')) {
        countDown = null;
        timerGame = 60;
        imagesShownNumber = 4;
        check = 0;
        live = 3;
        scoreTracker = 0;
        images = [{image: 'countries/mexico-city.jpg', name: 'MEXICO'}, 
        {image: 'countries/7273cddd20703a3fe3__Vostok 1 Microdistrict, Minsk, Belarus.jpg', name: 'BELARUS'}, 
        {image: 'countries/1669788159.ezgif-2-6a06b16041.jpg', name: 'PAKISTAN'},
        {image: 'countries/FB_IMG_1538045856622_web.jpg', name: 'FRANCE'},
        {image: 'countries/thediplomat-9536667047_3dee10f2e8_k.jpg', name: 'AFGHANISTAN'}];
        console.log(images)
        let score; 
        middlecon.innerHTML = '';
        chooseMode.style.display = "none";
        maincon.style.opacity = '1';
        score = document.createElement('div');
        score.innerText = `Score:${scoreTracker}`;
        score.style.fontSize = '75px';
        score.style.fontFamily = 'Bebas Neue';
        score.style.border = '5px solid rgb(127, 204, 255)';
        let timer = document.createElement('div');
        let places = document.createElement('div');
        let imgg = document.createElement('img');
        imgg.style.height = '90%';
        imgg.style.width = '90%';
        places.append(imgg)
        places.style.display = 'flex';
        places.style.alignItems = 'center';
        places.style.justifyContent = 'center';
        let guess = document.createElement('div');
        let answer = document.createElement("input");
        answer.type = 'text';
        answer.id = 'country-answer';
        answer.placeholder = "Type here";
        answer.style.fontSize = '45px'
        let submit = document.createElement('button');
        submit.id = 'submit-answer';
        submit.textContent = 'Submit!';
        submit.style.border = '6px solid black';
        submit.style.borderRadius = '10px';
        answer.style.backgroundColor = 'rgb(127, 204, 255)';
        guess.style.border = '6px solid rgb(127, 204, 255)';
        guess.style.backgroundColor = 'white';
        guess.append(answer, submit);
        answer.style.fontFamily = 'Bebas Neue';
        submit.style.fontFamily = 'Bebas Neue';
        answer.style.height = '75px'
        answer.style.width = '250px';
        submit.style.height = '75px';
        submit.style.width = '150px';
        submit.style.fontSize = '45px';
        guess.style.padding = '15px';
        submit.style.marginTop = '4.2px'
        timer.style.width = '250px';
        timer.style.height = '150px';
        timer.style.backgroundColor = 'white';
        timer.style.marginRight = '-300px'
        timer.style.border = '5px solid rgb(127, 204, 255)';
        timer.innerHTML = `<div class='timeGame'>${timerGame}</div><div>S</div>`;
        score.style.width = '1000px';
        score.style.backgroundColor = 'white';
        let lives = document.createElement('div');
        timer.style.display = 'flex';
        timer.style.justifyContent = 'center';
        timer.style.alignItems = 'center';
        timer.style.fontSize = '85px';
        timer.children[1].style.fontSize = '35px';
        timer.children[1].style.marginTop = '7px';
        lives.style.display = 'flex';
        lives.style.justifyContent = 'center';
        lives.style.alignItems = 'center';
        lives.style.fontSize = '45px'
        lives.textContent = `Lives:${live}`;
        lives.style.width = '250px';
        lives.style.height = '150px';
        lives.style.backgroundColor = 'white';
        lives.style.marginTop = '-300px'
        lives.style.border = '5px solid rgb(127, 204, 255)';
        let rightSide = document.createElement('div');
        rightSide.style.fontFamily = 'Bebas Neue';
        rightSide.style.display = 'flex'
        rightSide.style.flexDirection = 'column';
        rightSide.style.gap = '45px'
        rightSide.append(lives, timer)
        rightSide.style.marginRight = '-300px';
        //score.style.marginTop = '-75px'
        score.style.height = '100px';
        places.style.width = '1000px';
        places.style.backgroundColor = 'white';
        places.style.height = '65%';
        places.style.border = '5px solid rgb(127, 204, 255)';
        let gameNotTime = document.createElement('div');
        gameNotTime.style.display = 'flex';
        gameNotTime.style.flexDirection = 'column';
        gameNotTime.append(score, places, guess);
        guess.style.display = 'flex';
        guess.style.gap = '15px';
        score.style.display = 'flex';
        score.style.justifyContent = 'center';
        score.style.alignItems = 'center';
        gameNotTime.style.width = 'auto'
        gameNotTime.style.height = '100%'
        middlecon.append(gameNotTime, rightSide);
        //let answerId = document.querySelector('#country-answer');
       
        middlecon.style.width = '100%'
      //  gameNotTime.style.backgroundColor = 'black'
        gameNotTime.style.alignItems = 'center';
        gameNotTime.style.justifyContent = 'space-around';
        middlecon.style.display = 'flex';
        middlecon.style.flexDirection = 'row';
        middlecon.style.justifyContent = 'center';
        middlecon.style.gap = '65px'
        console.log(middlecon)




        // game log
           
        
       
     
      
        
        let imgPositon = Math.floor(Math.random() * 5);
        let positionHolder = imgPositon;
        let submitClicked = 0; 
        let answerValue;
        function gameEndDecide() {
            timerGame = 60;
            timer.innerHTML = `<div class='timeGame'>${timerGame}</div><div>S</div>`;
            timer.children[1].style.fontSize = '35px';
            timer.children[1].style.marginTop = '7px';
          //  console.log(positionHolder)
            let answerValue = answer.value;
            if (answerValue.toUpperCase() === images[positionHolder].name) {
                scoreTracker++;
                score.innerText = `Score:${scoreTracker}`;
                score.style.backgroundColor = 'green';
                setTimeout(() => {
                    score.style.backgroundColor = 'white';
                }, 1000);
            } else {
                score.style.backgroundColor = 'red';
                live--;
                lives.textContent = `Lives:${live}`;
                setTimeout(() => {
                    score.style.backgroundColor = 'white';
                }, 1000);
            }
            answer.value = '';
            images.splice(positionHolder, 1);
           // console.log(imagesShownNumber)
           if (imagesShownNumber === 0) {
            imgPositon = 0;
           } else {
            imgPositon = Math.floor(Math.random() * imagesShownNumber);
           }
            
            positionHolder = imgPositon;
            imgg.src = `${images[positionHolder].image}`;
            //console.log(positionHolder);
            //console.log(images[positionHolder].name)
            //console.log(positionHolder)
            //console.log(imagesShownNumber)
            //console.log(imgPositon)
            
           // console.log(images)
            imagesShownNumber--;
            gameDecider();

            
        }
        imgg.src = `${images[positionHolder].image}`
        submit.addEventListener('click', ()=> { 
            
        gameEndDecide();
           // console.log(imagesShownNumber)
        })

        countDown =  setInterval(() => {
           
            timerGame-=1
            timer.innerHTML = `<div class='timeGame'>${timerGame}</div><div>S</div>`;
            timer.children[1].style.fontSize = '35px';
            timer.children[1].style.marginTop = '7px';
           
         if (timerGame === 0) {
            gameEndDecide();
        }
        
       }, 1000)


    

       

      


        // for tommorow just have to make lives end if incorrect guess, and if max number of images shown, then end game display score and give option for main screen or play again. Timer if you have time lol
        


       


    }



})

document.body.addEventListener('click', e=> {
    if (e.target.classList.contains('med')) {
       // console.log('2')
    }
})

document.body.addEventListener('click', e=> {
    if (e.target.classList.contains('hrd')) {
        //console.log('3')
    }
})




let images; 


function gameDecider() {
    if (live === 0 || imagesShownNumber === 0 ) { // imagesshownumber === 0 for now, when we add 50 images and countries, we will have it set to equal 29 so only 20 images get displayed
        clearInterval(countDown); 
        middlecon.innerHTML = '';
        let results = document.createElement('div');
        let scoreResults = document.createElement('div');
        if (scoreTracker === 20) {
            scoreResults.textContent = `Perfect! 20/20`;
        } else if (scoreTracker >=15 && scoreTracker < 20) {
            scoreResults.textContent = `Good Job! 20/${scoreTracker}`;
        } else if (scoreTracker>=10 && scoreTracker<15){
            scoreResults.textContent = `Ehh Average 20/${scoreTracker}`;
        } else if (scoreTracker<10){
            scoreResults.textContent = `Wow You Suck! 20/${scoreTracker}`;
        }

        scoreResults.style.display = 'flex';
        scoreResults.style.width = '100%';
        scoreResults.style.flexDirection = 'row';
        scoreResults.style.justifyContent = 'center'
        scoreResults.style.textDecorationLine = 'underline';

        let homeOrPlay = document.createElement('div');
        let home = document.createElement('button');
        let playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again!';
        playAgain.style.border = '6px solid black';
        playAgain.style.borderRadius = '10px';
        playAgain.className = 'playAg';
        home.textContent = 'Main Menu';
        home.className = 'mainMen';
        home.style.border = '6px solid black';
        home.style.borderRadius = '10px';
        homeOrPlay.append(playAgain, home);

        results.style.position = 'absolute';
        results.style.justifySelf = 'center';
        results.style.top = '50%';
        results.style.left = '50%';
        results.style.transform = 'translate(-50%, -50%)';
        results.style.height = '400px';
        results.style.width = '600px'
        results.style.backgroundColor = 'white';
        results.style.border = '5px solid rgb(127, 204, 255)';
        maincon.style.opacity = '0.5';
        results.style.fontSize = '65px';
        home.style.width = '250px';
        playAgain.style.width = '250px';
        home.style.fontFamily = 'Bebas Neue';
        playAgain.style.fontFamily = 'Bebas Neue';
        home.style.fontSize = '55px';
        playAgain.style.fontSize = '55px'
        results.style.fontFamily = 'Bebas Neue';
        results.style.display = 'flex';
        results.style.flexDirection = 'column';
        homeOrPlay.style.display = 'flex';
        homeOrPlay.style.flexDirection = 'row';
        homeOrPlay.style.gap = '15px';
        homeOrPlay.style.width = '100%';
        homeOrPlay.style.justifyContent = 'space-evenly'
        
        results.style.justifyContent =  'space-evenly'
        results.style.padding = '5px'
        results.append(scoreResults, homeOrPlay);
        document.body.append(results)

    }
}


document.body.addEventListener('click', e=> { 
    if (e.target.classList.contains('playAg')) { // check for more effiecent way to do this 
        e.target.parentNode.parentNode.remove();
        maincon.style.opacity = '1';
        chooseMode = document.createElement('div');
        headText = document.createElement('div');
        buttons = document.createElement('div');
        easy = document.createElement('button');
        hard = document.createElement('button');
        medium = document.createElement('button')
        headText.textContent = 'Difficulty';
        easy.textContent = 'EASY';
        medium.textContent = 'MEDIUM';
        hard.textContent = 'HARD';
        chooseMode.style.display = 'flex';
        chooseMode.style.flexDirection = 'column';
        chooseMode.style.padding = '50px';
        buttons.style.display = 'flex';
        buttons.style.flexDirection = 'row';
        buttons.style.gap = '10px'
        chooseMode.style.position = 'absolute'; // or 'fixed' for a fixed position
        chooseMode.style.top = '50%';
        chooseMode.style.left = '50%';
        chooseMode.style.transform = 'translate(-50%, -50%)';
        chooseMode.style.alignItems = 'center';
        chooseMode.style.backgroundColor = 'white';
        chooseMode.style.width = '500px';
        chooseMode.style.height = 'auto';
        chooseMode.style.justifyContent = 'center';
        headText.style.fontSize = '150px';
        headText.style.fontFamily = 'Bebas Neue';
        chooseMode.style.border = '2px solid black';
       // buttons.style.fontFamily = 'Bebas Neue';
        buttons.style.justifyContent = 'space-between';
        
        buttons.style.width = '100%';
       
        
       
       
       
    
        buttons.append(easy, medium, hard);
        
        chooseMode.append(headText, buttons);
        document.body.appendChild(chooseMode);
        buttons.childNodes.forEach((i, index) => {
            i.style.height = '75px';
            i.style.width = '145px';
            i.style.fontFamily = 'Bebas Neue';
            i.style.fontWeight = '50px';
            i.style.fontSize = '50px'
            i.style.border = '6px solid black';
            if (index === 0) {
                i.className = 'diffbutt esy';
            } else if (index === 1) {
                i.className = 'diffbutt med';
            } else if (index === 2) {
                i.className = 'diffbutt hrd';
            }
    
            //console.log(i)
            console.log(i)
           
        })
    
        maincon.style.opacity = '0.5';
    
    }
})

document.body.addEventListener('mouseover', e=> {  // get all this shit working tommorow
    if (e.target.classList.contains('playAg')) {
        e.toElement.style.border = '7px solid black';
        e.toElement.addEventListener('mouseout', () => {
            e.toElement.style.border = '6px solid black';
        })
    }
})

document.body.addEventListener('mouseover', e=> {  // get all this shit working tommorow
    if (e.target.classList.contains('mainMen')) {
        e.toElement.style.border = '7px solid black';
        e.toElement.addEventListener('mouseout', () => {
            e.toElement.style.border = '6px solid black';
        })
    }
})
document.body.addEventListener('click', e=> {  // get all this shit working tommorow
    if (e.target.classList.contains('mainMen')) {
        e.target.parentNode.parentNode.remove();
        maincon.style.opacity = '1';
        middlecon.append(playNow)
    }
})



// work on timer tommorow. Last thing left before finishing 