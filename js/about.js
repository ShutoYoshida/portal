$(function(){

  $('.menu').hover(
    function(){
      $(this).css({'opacity':'1'});
      $(this).css({'font-size':'22px'});
    },
    function(){
      $(this).css({'opacity':'0.8'});
      $(this).css({'font-size':'19px'});
    }
  );

  $('.fab').hover(
    function(){
      $(this).css({'color':'red'});
    },
    function(){
      $(this).css({'color':'white'});
    }
  );

});
