$(document).ready(function() {
  createGrid();
  draw();
})
function createGrid(resolution) {
  var containerGrid = $('#container');
  if(resolution == null) {
    resolution = 64;
  }
  var pixelSize = 600 / resolution;
  for (var c = 0; c < resolution; c++) {
    for (var r = 0; r < resolution; r++) {
      containerGrid.append('<div class="grid" style="width: ' + pixelSize + 'px; height: ' + pixelSize + 'px;"></div>');
    }
  }
}
function draw() {
  $('.grid').on('mouseenter', function(){
    $(this).addClass('gridBlack');
  });
}
