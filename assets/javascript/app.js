 $(document).ready(function() {

// Declare Variables
var operator=false;
var ans =[false, false,false,false, false,false,false, false,false,false] ;
var correct=0;
var wrong=0;
var clockRunning = false;
var time=30;


// funtion to finish the game gets called by either a timeout or a submit
function endgame(){
  // hide the questions
  $(".wrapper").addClass("hidden");
  //show the results by removing them from the hidden class
  $(".results").removeClass("hidden");
  //Remove the restart button from the hidden class
  $(".reinit").removeClass("hidden");

      // Stop the counter
	    clearInterval(intervalId);
    clockRunning = false;
	 $("#display").text("Over");
   //Read each of the array elements in answer and keep a count of right and wring answers
	for (i=0; i<10; i++){
		console.log(ans[i]);
	if(ans[i]){
		correct++;
	}
		else{
			wrong++;
		}
    //Output the results to the html IDs
    $("#correct").text(correct);
    $("#wrong").text(wrong);
	}



}



function maingame(){
  console.log("start of game")
  //Rest the variables
operator=false;
ans =[false, false,false,false, false,false,false, false,false,false] ;
correct=0;
wrong=0;
clockRunning = false;
time=30;
 //Listen for the main click image to be pressed to initiate the game
      $(".initiate").on("click", function() {    
      // Remove the questions from the hidden class so that the user can see them
      $(".wrapper").removeClass("hidden");
      //Hide the initiation elements by adding them to the hidden class
      $(".initiate").addClass("hidden");
      $("#init").addClass("hidden");
    //Setup the counter to count in seconds
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

      });
//This is the re-init function to restart the game.
      $(".reinit").on("click", function() {    

      $(".wrapper").removeClass("hidden");
      $(".initiate").addClass("hidden");
      $("#init").addClass("hidden");
      $(".reinit").addClass("hidden");
      $(".results").addClass("hidden");


//Reset variables.
operator=false;
ans =[false, false,false,false, false,false,false, false,false,false] ;
correct=0;
wrong=0;
clockRunning = false;
time=30;

//Reset all of the answer buttons on all rows
for (i=0; i<10; i++){
      $(".answers"+i).removeClass("selected");

    }

//Initialize clock to 1 second intervals
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }

      });

//Cpunting function...run the endgame function when the time reaches 0
    function count() {
    time--;
    $("#display").text(time);
    if (time==0){
      endgame();
    }
  }
      //Series of clicks, one for each question
      		$(".answers0").on("click", function() {  
          //Sget the true/false value for the clicked button  
      operator = $(this).attr("value") == "true";
      //Reset all of the buttons in the row
      $(".answers0").removeClass("selected");
      //Add the button to the selected class and chance the color attibutes in CSS
      $(this).addClass("selected");
      //Add the True/False data to the correct element of the ans array
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
//Once the user is happy with the answers the submit button ends the game
      $("#submit").on("click", function() {    
endgame();

      });

}
     


maingame();


    });
