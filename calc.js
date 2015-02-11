var buttons = document.querySelectorAll('.calc');
for(i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(){
		if(this.id == "equals") {
			calculator.Input.value = eval(calculator.Input.value);
		} else {
			calculator.Input.value += this.value;
		}
	});
}
