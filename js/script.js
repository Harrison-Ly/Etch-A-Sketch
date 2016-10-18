$(document).ready(function() {
  createGrid();
  draw();
})
function createGrid(resolution) {
  var containerGrid = $('#container');
  if(resolution == null) {
    var pixelSize = 600 / 16;
    for (var c = 0; c < 16; c++) {
      for (var r = 0; r < 16; r++) {
        containerGrid.append('<div class="grid"></div>');
        $('.grid').css({'width': pixelSize + 'px', 'height': pixelSize + 'px'});
      }
      //containerGrid.append('<br>');
    }
  }
}
function draw() {
  $('.grid').on('mouseenter', function(){
    $(this).addClass('gridBlack');
  });
}
