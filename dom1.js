console.log("hello");
window.console.log("world");

//DOM
//When a webpage is loaded, the browser creates a Document Object Model of the page.
//The DOM is a tree-like structure that has a root node called the document.
        //        Window 
        //           |        
        //        document
        //           |
        //          html 
        //         /     \
        //        /       \
        //       /         \
        //     Head        body 
        //    /  |   \       |  \
        // meta title link  div  script 
        //                 /  | \
        //                img h1 div

//every element in the DOM is a node. and every node is document

console.dir(window); //window object
console.dir(document); //document object
console.log(document.body); //body element

//Dom practical
let heading = document.getElementById("heading"); //returns the element with the specified id
console.dir(heading);

let subpart = document.getElementsByClassName("subpart"); //returns a collection of elements with the specified class name
console.dir(subpart);
console.log(subpart);

let parahs = document.getElementsByTagName("p"); //returns a collection of elements with the specified tag name
console.dir(parahs);
