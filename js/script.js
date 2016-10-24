$(document).ready(function() {
  createGrid();
});

var containerGrid = $('#container');
var colourMode = 'gridBlack';

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
  draw(colourMode);
}

function draw(colourMode) {
  $('.grid').on('mouseenter', function(){
    if (colourMode == 'gridBlack') {
      $(this).removeClass('gridRandom');
      $(this).css('background-color', '');
      $(this).addClass('gridBlack');
    }
    else if (colourMode == 'gridRandom') {
      $(this).removeClass('gridBlack');
      $(this).addClass('gridRandom');
      $(this).css('background-color', getRandomColour());
    }
  });
}

function getRandomColour() {
  var hexValues = '0123456789ABCDEF';
  var hexColour = '#';
  for (i = 0; i < 6; i++) {
    hexColour += hexValues[Math.floor((Math.random() * 15) + 1)];
  }
  return hexColour;
}

function clearGrid() {
    $('.grid').removeClass('gridBlack gridRandom');
    $('.grid').css('background-color', '');
}

$('button[name="clear"]').on('click', function() {
  clearGrid();
});

$('button[name="grid_resolution"]').on('click', function() {
  var userGrid = prompt('Enter your grid resolution');
  containerGrid.empty();
  createGrid(userGrid);
});

$('button[name="black"]').on('click', function() {
  colourMode = 'gridBlack';
  draw(colourMode);
})

$('button[name="randoms"]').on('click', function() {
  colourMode = 'gridRandom';
  draw(colourMode);
});
