function firstNamedChild(element,name) {
	var result = element.children().find(name).html();
	alert(result);
}

function setUp() {
//	var line =  $('#products').children().first();
//	alert(line.html());
	
	firstNamedChild( $("#products") , "select");
	
} 
$(document).ready(setUp);