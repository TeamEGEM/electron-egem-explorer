const {shell} = require('electron')
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $("#queryTx").hide();
    $("#queryBal").hide();
    $("#queryBlk").hide();
    $("#queryDev").hide();
    $("#queryPool").hide();

    $("#logo").hide();
    $("#logo").fadeIn( 3000 ).fadeOut( 1500 ).fadeIn( 3000 );

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

    $("#twitter").click(function() {
      console.log( "toggled!" );
      shell.openExternal('https://twitter.com')
    });

    $("#reloadApp").click(function() {
      location.reload();
    });

    /* jQuery */
    $('.trigger').on('click', function(){
      $('.cn-wrapper li').toggleClass('slideout');
    });

});
