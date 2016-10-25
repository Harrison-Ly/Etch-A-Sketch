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
  $('.grid').on('mouseenter', function() {
    if (colourMode == 'gridBlack') {
      $(this).removeClass('gridRandom gridOpacity');
      $(this).css('background-color', '');
      $(this).addClass('gridBlack');
      $(this).css('opacity', '1.0');
    }
    else if (colourMode == 'gridRandom') {
      $(this).removeClass('gridBlack gridOpacity');
      $(this).addClass('gridRandom');
      $(this).css('background-color', getRandomColour());
      $(this).css('opacity', '1.0');
    }
    else if (colourMode == 'gridOpacity') {
      $(this).removeClass('gridBlack gridRandom');
      $(this).addClass('gridOpacity');
      $(this).css('background-color', '#000000');
      //$(this).css('opacity', 0.1);
      console.log(parseFloat($(this).css('opacity')));
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

function getGridOpacity(a) {
  var newOpacity = parseFloat(a.css('opacity'));
  console.log(newOpacity);
  newOpacity += 0.1;

  return newOpacity;
}

function clearGrid() {
    $('.grid').removeClass('gridBlack gridRandom gridOpacity');
    $('.grid').css({'background-color': '#eeeeee', 'opacity': '1.0'});
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

$('button[name="opacity"]').on('click', function() {
  clearGrid();
  $('.grid').css({'background-color': '#eeeeee', 'opacity': '0.1'});
  colourMode = 'gridOpacity';
  draw(colourMode);
})

$('button[name="randoms"]').on('click', function() {
  colourMode = 'gridRandom';
  draw(colourMode);
});
