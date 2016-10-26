$(document).ready(function() {
  createGrid();
  drawMode();
});

var containerGrid = $('#container');
var resolution = 16;
var mode = '';

function drawMode(mode) {
  if (mode == 'gridRandom') {
    gridRandom();
  }
  else if (mode == 'gridOpacity') {
    gridOpacity();
  }
  else {
    gridBlack();
  }
}

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

function gridBlack() {
  $('.grid').on('mouseenter', function() {
    $(this).removeClass('gridRandom gridOpacity');
    $(this).css('background-color', '');
    $(this).addClass('gridBlack');
    $(this).css('opacity', '1.0');
  });
}

function gridRandom() {
  $('.grid').on('mouseenter', function () {
    $(this).removeClass('gridBlack gridOpacity');
    $(this).addClass('gridRandom');
    $(this).css('background-color', getRandomColour());
    $(this).css('opacity', '1.0');
  });
}

function gridOpacity() {
  $('.grid').on('mouseenter', function() {
    if ($(this).hasClass('gridOpacity')) {
      $(this).css('opacity', getGridOpacity($(this)))
    }
    else {
      $(this).addClass('gridOpacity');
      $(this).css('opacity', '0.2');
      $(this).css('background-color', '#000000');
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

function getGridOpacity(oldOpacity) {
  var newOpacity = parseFloat(oldOpacity.css('opacity'));
  newOpacity += 0.1;
  if (newOpacity > 1) {
    newOpacity = 1;
  }
  return newOpacity;
}

function clearGrid() {
    containerGrid.empty();
    createGrid(resolution);
}

$('button[name="clear"]').on('click', function() {
  clearGrid();
  drawMode(mode);
});

$('button[name="gridResolution"]').on('click', function() {
  resolution = prompt('Enter your grid resolution');
  containerGrid.empty();
  createGrid(resolution);
  drawMode(mode);
});

$('button[name="black"]').on('click', function() {
  mode = 'gridBlack';
  $(this).closest('ul').find('button').removeClass('buttonHighlight');
  $(this).addClass('buttonHighlight');
  clearGrid();
  drawMode(mode);
})

$('button[name="opacity"]').on('click', function() {
  mode = 'gridOpacity';
  $(this).closest('ul').find('button').removeClass('buttonHighlight');
  $(this).addClass('buttonHighlight');
  clearGrid();
  $('.grid').css({'background-color': '#eeeeee', 'opacity': '1'});
  drawMode(mode);
})

$('button[name="randoms"]').on('click', function() {
  mode = 'gridRandom';
  $(this).closest('ul').find('button').removeClass('buttonHighlight');
  $(this).addClass('buttonHighlight');
  clearGrid();
  drawMode(mode);
});
