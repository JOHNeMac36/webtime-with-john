// This is an in-line javascript comment
/*
 This is a multi-line
 javascript comment
*/

// This declares the function called changeParagraph
// it takes no arguments and returns no values
console.log("Hello, console!");
function changeParagraph() {

    // the variable demo_paragraph is assigned the element
    // with the id "demo" in the HTML file
    var demo_paragraph = document.getElementById("demo");

    // The "innerHTML" attribute is the contents within
    // the demo_paragraph tag, this statement modifies
    // that text and sets it equal to "Hello JavaScript!"
    demo_paragraph.innerHTML = "Hello, HTML!";
}
