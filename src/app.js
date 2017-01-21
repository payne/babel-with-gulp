import $ from 'jquery';
import FlashMessage from "./flash-message";

console.log("Hello 3");
let flash = new FlashMessage("Hello from ES2015, Babel and Gulp!");
$("#button1").click(function(e) {
    let flash2 = new FlashMessage("Hello 2222 from ES2015, Babel and Gulp!");
    e.preventDefault();
    console.log(e);
    flash2.display();
});
console.log("goodbye 3");
