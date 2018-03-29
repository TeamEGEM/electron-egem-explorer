// A $( document ).ready() block.
$(".container").hide();
$( document ).ready(function() {
    console.log( "ready!" );

    $("#queryTx").hide();
    $("#queryBal").hide();
    $("#queryDev").hide();
    $("#queryPool").hide();

    $("#txQ").click(function() {
      console.log( "toggled!" );
      $("#queryTx").fadeToggle();
    });
    $("#blkQ").click(function() {
      console.log( "toggled!" );
      $("#queryBlk").fadeToggle();
    });
    $("#balQ").click(function() {
      console.log( "toggled!" );
      $("#queryBal").fadeToggle();
    });
    $("#devQ").click(function() {
      console.log( "toggled!" );
      $("#queryDev").fadeToggle();
    });
    $("#qPool").click(function() {
      console.log( "toggled!" );
      $("#queryPool").fadeToggle();
    });
    $("#reloadApp").click(function() {
      location.reload();
    });

});
