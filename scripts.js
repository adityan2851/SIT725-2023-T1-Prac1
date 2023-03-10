function changeText(){
    var textArray = ["Text 1","Text 2"];
    var number = getRandomNumberBetween(0,textArray.length-1);
    document.getElementById("heading").innerHTML = textArray[number];
};

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}