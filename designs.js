// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){
	$('#sizePicker').submit(function makeGrid() {
		var myTable = $('#pixelCanvas');
		var tableItems = true;
		var inputHeight = $('#inputHeight').val();
		var inputWidth = document.getElementById("inputWeight").value;
		var markup;
		
		while (tableItems){
			myTable.children().remove();
			tableItems = false;
		}

		
		for (var r = 0; r < inputHeight; r++){
			markup = "<tr>";
			for (var c = 0; c < inputWidth; c++){
				markup += "<td></td>";
			}
			markup += "</tr>";
			myTable.append(markup);
			
		}
		return false;

			
	});

});

$(function(){
	$('#pixelCanvas').on('click', 'td', function(event){
		var elem = $(this);
		var selectedColor = document.getElementById("colorPicker").value;
		elem.css('background-color', selectedColor);
	});
});
