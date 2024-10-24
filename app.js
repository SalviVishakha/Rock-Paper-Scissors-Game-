let userscore=0;
let computerscore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score")
const computerscorepara= document.querySelector("#computer-score")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
        playgame(userchoice);
    })
})

const gencompchoice= ()=>{
    const option=["rock", "paper", "scissors"];
    const randidx= Math.floor(Math.random()*3);
    return option[randidx];
}


const drawgame=()=>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play Again."
    msg.style.backgroundColor= "rgb(8, 8, 56)";
}

const showwinner=(userwin, computerchoice, userchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;
        console.log("You Win");
        msg.innerText= `You win! Your ${userchoice} beats ${computerchoice}` ;
        msg.style.backgroundColor= "green";
        
    }else{
        computerscore++;
        computerscorepara.innerText= computerscore;
        console.log("You lose")
        msg.innerText=`You lost! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor=" red";
    }
}


const playgame= (userchoice)=>{
    console.log("user-choice =", userchoice);
    const computerchoice =gencompchoice();
    console.log("computer-choice =", computerchoice);


    if(userchoice===computerchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= computerchoice==="paper"? false: true;
        } else if( userchoice=="paper"){
            userwin= computerchoice==="rock"? true :false;
        }else if ( userchoice==="scissors"){
            userwin= computerchoice==="paper"? true:false;
        }

        showwinner(userwin,computerchoice,userchoice)
    }
}






