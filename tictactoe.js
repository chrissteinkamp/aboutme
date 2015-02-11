//waits until document loads before executing
$(document).ready(function() {
	var turn = 0;//initialize turn to 0
	//click event added to cells in table
	$("#cell11, #cell12, #cell21, #cell22, #cell13, #cell23, #cell31, #cell32, #cell33")
	.click(function(){
						var cell = $(this);//set the cell to the one clicked
						if(turn == 0){
						turn = 1;//change turn to player 2
							cell.css("background","url(tictactoecard.png)");
						}else {
							turn = 0;
							cell.css("background","url(tictactoewildcat.jpg)");
						}
					});
	});
				
												


