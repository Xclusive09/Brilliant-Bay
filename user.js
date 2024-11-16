

### 1.     JavaScript as a Scripting Language in Web Development    

    What is JavaScript?    
   - JavaScript is a     scripting language     that allows you to create dynamic, interactive web pages.
   - It runs directly in the     browser     and can modify both the content and the behavior of web pages.

    Role in Web Development    
   -     HTML     defines the structure of a web page.
   -     CSS     controls the page’s style (e.g., colors, fonts).
   -     JavaScript     is used to add interactive features like animations, forms, sliders, and even games. It lets developers respond to user events like clicks, scrolls, and key presses, making pages more interactive.

---

### 2.     Writing Simple JavaScript Code: Basic Syntax and Structures    

    a) Variables    
   -     Purpose    : Variables store data for use in a program.
   -     Declaring Variables    : JavaScript uses keywords like `let`, `const`, and `var` to declare variables.
   -     Example    :
     ```javascript
     let userName = "Alice";    // Changeable variable
     const birthYear = 1990;    // Constant variable
     var age = 30;              // Older way to declare a variable
     ```

    b) Data Types    
   -     Common Types    : 
     - `String` (text): `"Hello"`
     - `Number`: `25`
     - `Boolean`: `true` or `false`
     - `Array`: `[1, 2, 3]`
     - `Object`: `{ name: "Alice", age: 25 }`

     2 ="2"

    c) Operators    
   -     Arithmetic Operators    : `+`, `-`, `  `, `/`, `%`
   -     Assignment Operators    : `=`, `+=`, `-=`, etc.
   -     Comparison Operators    : `==`, `===`, `!=`, `<`, `>`
   -     Example    :
     ```javascript
     let x = 10;
     let y = 5;---------- hjn
     console.log(x + y); // 15
     console.log(x > y); // true
     ```

---

### 3.     Manipulating Data with Variables, Data Types, and Operators    

Using JavaScript, we can perform calculations or change data values. Here's how to do it with some basic examples:

```javascript
let price = 100;
let discount = 0.2;
let finalPrice = price - (price    discount);
console.log("The final price is: " + finalPrice);
```

In this example:
   -     Variables     (`price`, `discount`, `finalPrice`) store values.
   -     Operators     are used to perform calculations (`  ` for multiplication, `-` for subtraction).
   -     Concatenation     combines text and variables into a single message.

---

### 4.     Controlling Flow with Control Flow Statements    

Control flow statements let you decide which code should run based on conditions. The two main types are     conditional statements     and     loops    .

    a) Conditional Statements    
   -     if     statements check a condition, and only run code if that condition is `true`.
   -     if-else     lets you run code based on multiple conditions.
   -     Example    :
     ```javascript
     let age = 18;
     if (age >= 18) {
         console.log("You are an adult.");
     } else {
         console.log("You are a minor.");
     }
     ```

    b) Loops    
   - Loops allow you to repeat code multiple times.
   -     for     loop is the most common and runs a set number of times.
   -     while     loop runs as long as a condition is true.
   -     Example (for loop)    :
     ```javascript
     for (let i = 0; i < 5; i++) {
         console.log("This is message number " + (i + 1));
     }
     ```
   - Example (while loop)    :
     ```javascript
     let counter = 0;
     while (counter < 3) {
         console.log("Counter is at " + counter);
         counter++;
     }
     ```

---

### 5.     The Document Object Model (DOM): Interacting with Web Pages    

The     Document Object Model (DOM)     represents the structure of a web page. Using JavaScript, we can manipulate the DOM to change content, styles, or attributes dynamically.

    Understanding the DOM Structure    
   - The DOM organizes a web page’s HTML elements into a     tree     structure where each element is a     node    .
   -     Root    : The top-level `document` object represents the entire page.
   -     Children    : Each HTML element is a child node of another node, creating a parent-child hierarchy.

    Example DOM Manipulations    
   -     Accessing Elements    : Use `document.getElementById()` or `document.querySelector()`.
   -     Changing Content    : Update text with `.innerHTML` or `.textContent`.
   -     Changing Style    : Use `.style` to modify an element's appearance.

    Example    : Adding interactivity with a button that changes text color.

HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <h1 id="myHeading">Welcome!</h1>
    <button onclick="changeColor()">Change Color</button>
    <script src="script.js"></script>
  </body>
</html>
```

JavaScript (`script.js`):
```javascript
function changeColor() {
    const heading = document.getElementById("myHeading");
    heading.style.color = "blue";
}
```

When the button is clicked:
   - The `changeColor` function is called.
   - The function selects the `h1` element with `getElementById`.
   - It then changes the `style.color` property to `blue`, updating the heading color.

---
