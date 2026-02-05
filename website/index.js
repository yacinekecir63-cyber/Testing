function arraysComparing(a,b){
    for(let i =0;i<a.length;i++){
        if(a[i]!=b[i]){
            return false;
        }
    }
    return true;
}

function rollDice(){
    document.getElementById("allResult").classList.add("show");
const numOfDice = document.getElementById("numOfDice");
const btn=document.getElementById("btn");
const diceResult=document.getElementById("diceResult");
const diceImg=document.getElementById("diceImg");
const betResult=document.getElementById("betResult");
const betMsg=document.getElementById("betMsg");
const winLoss=document.getElementById("winLoss");
const money=document.getElementById("betAmount");
let odd=[1.5 , 2.5 , 4.2 , 5.9 , 11.4];
money.value=Number(money.value);
let values=[];
let img=[];
let gamble=[];
let i;

    for(i=0;i<numOfDice.value;i++){
        const value=Math.floor(Math.random()*6+1);
        values.push(value);
        img.push(`<img src="diceImages/${value}dice.png" width="200px">`);
    }
    diceResult.textContent= `dice : ${values.join(", ")}`;
    diceImg.innerHTML=img.join(" ");
    for(i=1;i<=numOfDice.value;i++){
        const bet=document.getElementById(`${i}choice`);
        gamble.push(Number(bet.value));
        betResult.textContent=`your betting : ${gamble.join(", ")}`;
    }
    if(arraysComparing(values, gamble)){
        betMsg.textContent='Congratulationss';
        let win=money.value * odd[numOfDice.value - 1];
        winLoss.textContent=`You won ${win} $`;
    }
    else{
        betMsg.textContent=`Try next time !`;
        winLoss.textContent=`You lost ${money.value} $`;
    }
    
}