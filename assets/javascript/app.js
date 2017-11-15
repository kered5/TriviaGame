 $(document).ready(function() {

var answer3;
var operator=false;

      $(".answers").on("click", function() {
      

      console.log(this);
   operator = $(this).attr("value");
      console.log(operator);

      });
     
console.log("Im here");




    });
