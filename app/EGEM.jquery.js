// A $( document ).ready() block.
$(".container").hide();
$( document ).ready(function() {
    console.log( "ready!" );

    $("#queryTx").hide();
    $("#queryBal").hide();
    $("#queryBlk").hide();
    $("#queryDev").hide();
    $("#queryPool").hide();

    $("#txQ").click(function() {
      console.log( "toggled!" );
      $("#queryTx").slideToggle();
    });

    $("#blkQ").click(function() {
      console.log( "toggled!" );
      $("#queryBlk").slideToggle();
    });

    $("#balQ").click(function() {
      console.log( "toggled!" );
      $("#queryBal").slideToggle();
    });

    $("#devQ").click(function() {
      console.log( "toggled!" );
      $("#queryDev").slideToggle();
    });

    $("#poolQ").click(function() {
      console.log( "toggled!" );
      $("#queryPool").slideToggle();
    });

    $("#reloadApp").click(function() {
      location.reload();
    });

});
