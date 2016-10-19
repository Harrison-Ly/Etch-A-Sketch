$(document).ready(function() {
  createGrid();
  buttons();
  draw();
})

var containerGrid = $('#container');
function createGrid(resolution) {
  if(resolution == null) {
    resolution = 16;
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
function buttons() {
  var button_click = $('.buttons');
  var grid = $('.grid');
  $('button[name="clear"]').on('click', function() {
    if (grid.hasClass('gridBlack')) {
      grid.removeClass('gridBlack');
    }
  });
  $('button[name="grid_resolution"]').on('click', function() {
    var userGrid = prompt('Enter your grid resolution');
    containerGrid.empty();
    createGrid(userGrid);
    draw();
  });
}

function alerttest() {
  alert("testing");
}
