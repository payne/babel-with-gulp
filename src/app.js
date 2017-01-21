import $ from 'jquery';
import FlashMessage from "./flash-message";

// The whole document ready thing is VERY important!
$(document).ready(function() {
console.log("Hello 3");
let flash = new FlashMessage("Hello from ES2015, Babel and Gulp!");
$("#button1").click(function(e) {
    e.preventDefault();
    console.log(e);
    flash.display();
});
console.log("goodbye 3");
});