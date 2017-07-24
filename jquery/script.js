var products = ['ABCD', 'DEFG'];


function loadDocument() {
	window.alert("Hello world!");
	
	element = document.getElementById("products");
	var content = element.innerHTML;

//	window.alert(content);
	var line = firstTagChild(element);
	
	//window.alert(firstTagChild (element));
	window.alert( firstNamedChild (line, "SELECT") );
}


function firstNamedChild (elemento, tag) {
	
	var content = elemento.firstChild;
	
	while( (content.nodeType  != 1) || (content.tagName != tag)) {
		content = content.nextSibling;
	}
	return content;

}

function firstTagChild (element)  {
	var content = element.firstChild;
	
	while(content.nodeType  != 1) {
		content = content.nextSibling;
	}
	return content;
}

window.addEventListener("load",loadDocument);

