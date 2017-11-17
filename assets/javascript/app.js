 $(document).ready(function() {


var operator=false;
var ans =[false, false,false,false, false,false,false, false,false,false] ;
var correct=0;
var wrong=0;
var clockRunning = false;
var time=30;



function endgame(){
  $(".wrapper").addClass("hidden");
  $(".results").removeClass("hidden");
  $(".reinit").removeClass("hidden");

      // $("#init").removeClass("hidden");
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
  // maingame();


}



function maingame(){
  console.log("start of game")
operator=false;
ans =[false, false,false,false, false,false,false, false,false,false] ;
correct=0;
wrong=0;
clockRunning = false;
time=30;

      $(".initiate").on("click", function() {    

      $(".wrapper").removeClass("hidden");
      $(".initiate").addClass("hidden");
      $("#init").addClass("hidden");

    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

      });

      $(".reinit").on("click", function() {    

      $(".wrapper").removeClass("hidden");
      $(".initiate").addClass("hidden");
      $("#init").addClass("hidden");
      $(".reinit").addClass("hidden");
      $(".results").addClass("hidden");

      operator=false;
ans =[false, false,false,false, false,false,false, false,false,false] ;
correct=0;
wrong=0;
clockRunning = false;
time=30;

for (i=0; i<10; i++){
      $(".answers"+i).removeClass("selected");
      // $(".answers1").removeClass("selected");
      // $(".answers2").removeClass("selected");
      // $(".answers3").removeClass("selected");
      // $(".answers4").removeClass("selected");
      // $(".answers5").removeClass("selected");
      // $(".answers6").removeClass("selected");
      // $(".answers7").removeClass("selected");
      // $(".answers8").removeClass("selected");
      // $(".answers9").removeClass("selected");
    }


    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

      });


    function count() {
    time--;
    $("#display").text(time);
    if (time==0){
      endgame();
    }
  }

      		$(".answers0").on("click", function() {    
      operator = $(this).attr("value") == "true";
      $(".answers0").removeClass("selected");
      $(this).addClass("selected");
      ans[0]=operator;

      });


      		$(".answers1").on("click", function() {    
      operator = $(this).attr("value") == "true";
      $(".answers1").removeClass("selected");
      $(this).addClass("selected");
      ans[1]=operator;
      console.log(ans[1]);

      });

            $(".answers2").on("click", function() {    
      operator = $(this).attr("value") == "true";
      $(".answers2").removeClass("selected");
      $(this).addClass("selected");
      ans[2]=operator;

      });
      // $(".className").on("click",function(){
      //   console.log(this);
      //   var whichQuestion = $(this).attr("data-question");
      //   console.log(whichQuestion);
      //   })
            $(".answers3").on("click", function() {    
      operator = $(this).attr("value")== "true";
      $(".answers3").removeClass("selected");
      $(this).addClass("selected");
      ans[3]=operator;

      });

            $(".answers4").on("click", function() {    
      operator = $(this).attr("value")== "true";
      $(".answers4").removeClass("selected");
      $(this).addClass("selected");
      ans[4]=operator;

      });

            $(".answers5").on("click", function() {    
      operator = $(this).attr("value")== "true";
      $(".answers5").removeClass("selected");
      $(this).addClass("selected");
      ans[5]=operator;

      });

            $(".answers6").on("click", function() {    
      operator = $(this).attr("value")== "true";
      $(".answers6").removeClass("selected");
      $(this).addClass("selected");
      ans[6]=operator;

      });

            $(".answers7").on("click", function() {    
      operator = $(this).attr("value")== "true";
      $(".answers7").removeClass("selected");
      $(this).addClass("selected");
      ans[7]=operator;

      });

            $(".answers8").on("click", function() {    
      operator = $(this).attr("value")== "true";
      $(".answers8").removeClass("selected");
      $(this).addClass("selected");
      ans[8]=operator;

      });

            $(".answers9").on("click", function() {    
      operator = $(this).attr("value")== "true";
      $(".answers9").removeClass("selected");
      $(this).addClass("selected");
      ans[9]=operator;

      });

      $("#submit").on("click", function() {    
endgame();

      });

}
     


maingame();


    });
