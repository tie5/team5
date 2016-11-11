var i = 2;
var original = document.getElementById('option');

function duplicate() {
    var clone = original.cloneNode(true); 
    clone.id = "option" + ++i;
    original.parentNode.appendChild(clone);
}