// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $("#queryTx").hide();
    $("#queryBal").hide();
    $("#queryBlk").hide();
    $("#queryDev").hide();

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
    $("#reloadApp").click(function() {
      location.reload();
    });
});
