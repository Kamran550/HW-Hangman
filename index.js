var choice = ["a","b","c"]
var letterArray = []

var win = 0;
var losses = 0;

var heartLeft = 9;

function randomLetter(){
    compLetter = choice[Math.floor(Math.random()*3)]
}

function heart(){
    document.querySelector("#guesses-left").innerHTML = heartLeft;
}


function letterWrite(){
    document.querySelector("#guesses-so-far").innerHTML = letterArray.join(",")
}

function reset(){
    heartLeft = 9;
    letterArray = [];
    randomLetter()
    heart()
    letterWrite()
}
randomLetter()
heart()

window.onkeypress = function(e){
    yourLetter = e.key
    letterArray.push(yourLetter)
    letterWrite()
    if(yourLetter === compLetter){
        win++;
        document.querySelector("#wins").innerHTML = win
        reset()
    }else{
        heartLeft--;
        heart()
    }
    if(heartLeft === 0){
     losses++;
     document.querySelector("#losses").innerHTML = losses;
     reset()
    }
}