var monthNames = [
"Enero", 
"Febrero", 
"Marzo",
"Abril", 
"Mayo", 
"Junio", 
"Julio",
"Agosto", 
"Septiembre",
"Octubre",
"Noviembre", 
"Diciembre"
];
var counter = 1;
function printPage() {
//document.getElementById("container").style.margin = 0;
document.getElementById("toRemove").style.opacity = 0;
document.getElementById("toRemove").style.height = 0;
document.getElementById("toRemove1").style.opacity = 0;
document.getElementById("toRemove1").style.height = 0;	
document.getElementById("toRemove2").style.opacity = 0;
document.getElementById("toRemove2").style.height = 0;	
/**document.getElementById("down").style.position = "absolute";
document.getElementById("down").style.bottom = "0";
document.getElementById("down").style.width="720px";
document.getElementById("footer").style.width="720px";**/	
window.print();
setTimeout(100)
/**document.getElementById("down").style.position = "relative";
document.getElementById("down").style.margin = "auto";
document.getElementById("container").style.margin = "15px";**/
document.getElementById("toRemove").style.opacity = 100;
document.getElementById("toRemove").style.height = "100%";
document.getElementById("toRemove1").style.opacity = 100;
document.getElementById("toRemove1").style.height = "100%";	
document.getElementById("toRemove2").style.opacity = 100;
document.getElementById("toRemove2").style.height = "100%";	
}

function savePage() {
	document.getElementById("footer").style.width="522px";
	var pdf = new jsPDF('p', 'pt', 'letter')

// source can be HTML-formatted string, or a reference
// to an actual DOM element from which the text will be scraped.
, source = document.getElementById("toPrint");


margins = {
	top: 10,
	bottom: 10,
	left: 40,
	width: 522
};

// all coords and widths are in jsPDF instance's declared units
// 'inches' in this case
pdf.fromHTML(
source // HTML string or DOM elem ref.
, margins.left // x coord
, margins.top // y coord
, {
'width': margins.width // max width of content on PDF
},
function (dispose) {
// dispose: object with X, Y of the last line add to the PDF
//          this allow the insertion of new lines after html
pdf.save($('#nombre').text()  + '.pdf');
},
margins
)
}

function addWork(){
	var newTextBoxDiv = $(document.createElement('div'))
	.attr("id", 'TextBoxDiv' + counter);

	newTextBoxDiv.after().html(
		'<button type="button" class="btn btn-info" data-type="plus"  onclick="removediv(' + counter + ')">' +
		'<span class="glyphicon glyphicon-remove">' +
		'</span></button>' + 
		'<label style="width:75px;margin-left:15px">Actividad:</label>' +
		'<input type="text" class="form-control" name="textbox" id="textbox' + counter + '" value="" style="width:600px;display:initial;margin-right:15px;" > ' + 
		'<button type="button" class="btn btn-info" data-type="plus" onclick="addTextdiv(' + counter + ')">' + 
		'<span class="glyphicon glyphicon-plus">' + 
		'</span></button>'
		);

	newTextBoxDiv.appendTo("#addwork");
	counter++;
}

function removediv(removeMe){
	$("#TextBoxDiv" + removeMe).remove();
	document.getElementById("element" + (removeMe+1)).remove();
}

function addTextdiv(number){
	if(document.getElementById("element" + counter) == null){
		var ul = document.getElementById("worklist");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode($("#textbox" + number).val()));
li.setAttribute("id", "element" + counter); // added line
ul.appendChild(li);
}else{
	document.getElementById("element" + (number+1)).innerHTML = $("#textbox" + number).val();
}
}	