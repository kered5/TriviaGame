 $(document).ready(function() {


var operator=false;
var ans =[false, false,false,false, false,false,false, false,false,false] ;
var correct=0;
var wrong=0;
var clockRunning = false;
var time=10;

function endgame(){
	    clearInterval(intervalId);
    clockRunning = false;
	 $("#display").text("Over");
	for (i=0; i<10; i++){
		console.log(ans[i]);
	if(ans[i]){
		correct++;
	}
		else{
			wrong++;
		}
    $("#correct").text(correct);
    $("#wrong").text(wrong);
	}
}

setTimeout(endgame, 1000 * 10);



    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

    function count() {
    time--;
    $("#display").text(time);
  }

      		$(".answers0").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers0").removeClass("selected");
      $(this).addClass("selected");
      ans[0]=operator;

      });


      		$(".answers1").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers1").removeClass("selected");
      $(this).addClass("selected");
      ans[1]=operator;
      console.log(ans[1]);

      });

            $(".answers2").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers2").removeClass("selected");
      $(this).addClass("selected");
      ans[2]=operator;

      });

            $(".answers3").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers3").removeClass("selected");
      $(this).addClass("selected");
      ans[3]=operator;

      });

            $(".answers4").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers4").removeClass("selected");
      $(this).addClass("selected");
      ans[4]=operator;

      });

            $(".answers5").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers5").removeClass("selected");
      $(this).addClass("selected");
      ans[5]=operator;

      });

            $(".answers6").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers6").removeClass("selected");
      $(this).addClass("selected");
      ans[6]=operator;

      });

            $(".answers7").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers7").removeClass("selected");
      $(this).addClass("selected");
      ans[7]=operator;

      });

            $(".answers8").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers8").removeClass("selected");
      $(this).addClass("selected");
      ans[8]=operator;

      });

            $(".answers9").on("click", function() {    
      operator = $(this).attr("value");
      $(".answers9").removeClass("selected");
      $(this).addClass("selected");
      ans[9]=operator;

      });

      $("#submit").on("click", function() {    
endgame();

      });


     
console.log("Im here");




    });
