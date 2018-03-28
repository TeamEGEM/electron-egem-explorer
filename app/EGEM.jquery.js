// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $("#queryTx").hide();
    $("#queryBal").hide();
    $("#queryBlk").hide();

    $("#test1").click(function() {
      console.log( "toggled!" );
      $("#queryTx").fadeToggle();
    });
    $("#test2").click(function() {
      console.log( "toggled!" );
      $("#queryBlk").fadeToggle();
    });
    $("#test3").click(function() {
      console.log( "toggled!" );
      $("#queryBal").fadeToggle();
    });
});
