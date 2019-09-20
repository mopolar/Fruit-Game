//javascript.js
var playing = false;
var score;
var trailsleft;
var step;
var action;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

$(function(){
  $("#startreset").click(function(){
    if(playing == true){
      location.reload();
    } 
    else{
      playing = true;

      score=0;
      $("#scorevalue").html(score);

      $("#trials").show();
      trailsleft = 3;
      addhearts();

      $("#startreset").html("Reset Game");

      startaction();
    } 
  });
});


//functions
function addhearts(){
  for (let index = 0; index < trailsleft; index++) {
    $("#trials").append('<img src="images/heart.png" class="life">');
  }
}

function startaction() {
  $("#fruit1").show();
  choosefruit();

  $("#fruit1").css({'left':Math.round(Math.random()*550), 'top':-50});

  step = 1 + Math.round(5*Math.round());
  
}

function choosefruit(){
  $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png')
}