// Select color input
// Select size input

let pHeight, pWidth, color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    pHeight = $('#inputHeight').val();
    pWidth = $('#inputWeight').val();
    makeGrid(pHeight, pWidth);
    addColor();
});

function makeGrid(h, w) {

    // Your code goes here!
    $('tr').remove();
    for (var x = 1; x <= h; x++) {
        $('#pixelCanvas').append('<tr></tr>');
        for (var y = 1; y <= w; y++) {
            $('tr:last').append('<td></td>');
          }
      }
  
      //Here you add colors to the cells
      $('td').click(function addColor(){
          color = $('#colorPicker').val();
  
          if ($(this).attr('style')) {
              $(this).removeAttr('style')
          } else {
              $(this).attr('style', 'background-color:' + color);
          }
      });
  
  }