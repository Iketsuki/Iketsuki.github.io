var y = 1.5;
var rate = 100;

  $('.tile')
    // tile mouse actions
//$(this).attr('data-scale')
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ window.y +')'});
    })

    .on('click', function(y){
      if (window.y < 3) {
      window.y = window.y * 1.2;
      window.rate = window.rate * 0.9999;
      }
      else {
  //  block of code to be executed if the condition1 is false and condition2 is false
      }
      $(this).children('.photo').css({'transform': 'scale('+ window.y +')'});
    })
    

    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })

    .on('mousemove', function(e, rate){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * window.rate + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })