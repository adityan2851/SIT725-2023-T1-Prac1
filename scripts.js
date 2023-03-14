function changeText(){
    var textArray = ["Sample","Random","Text"];
    var number = getRandomNumberBetween(0,textArray.length-1);
    document.getElementById("heading").innerHTML = textArray[number];
};

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}