# Intermediate Javascript Assessments

### Without using Google answer the following:

1. What is the difference between .map() and .filter()?
Both functions are higher order functions. Both provide easy access to the value and index of an array. 
The map function takes in an array and returns an array with the same length; 
it can manipulate each value and index in the array without changing the length of the array.
The filter function takes in an array and usually returns a smaller array.
It can put items in an array with a certain value or index into a returned array, if the value or index of an item meets a designated condition.

2. Why would you use object destructuring?
Object destructuring is very helpful to make code less repetetive and more easily readable. 
It eliminates the need to write this.object, this.prop, or this.state before every key within said object, prop, or state.

3. What is the difference between var, let, and const?
All three are variables, and the difference between them is a difference in scope. 
var is used to designate a variable that can be reassigned later in the code.
let is used to designate a variable that can be reassigned later in the code, but only exists within a more local frame.
For example, a variable called "hello" that is assigned let hello = 9 inside a function will not exist outside of that function... hello = undefined outside.
const is used to designate a value to a variable that will not change or be reassigned later.

4. Why is testing important?
Testing is useful because it creates a way for more complex code to be examined in its individual, smaller chunks, which is helpful for troubleshooting.
If smaller pieces are all being tested, then it is much easier to locate where a problem area is if the code is dysfunctional.
It also is helpful to create workflow, establish a focus and a minimum viable product in Test Driven Development.

5. What is a higher order function?
A higher order function takes in a function as an argument or outputs a function.

6. What is the difference between a class and an object?
A class is a blueprint of specific objects. For example, the class of "Dog" might include attributes to assign, as well as a default,
but the class is used as a blueprint with which to create specific objects as instances of that class: the "Dog" class can be used to create an object
called "Pug" with individual, specific attributes and key:value pairs.

7. What did you learn during the group project this week? Please include any additional feedback you may have.
I learned a lot about troubleshooting - I learned how to use debugger and how to draw out a map of logic flowing through components via states/props
on our small whiteboards. Troubleshooting and mapping out the flow was also helpful to understand state and props, App/Component design.

### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.
* I have never learned HTML or CSS formally so I had to Google all of these answers.

1. How do you link a CSS file to your HTML page?
There are a few ways to include CSS in HTML.
First is using an inline CSS, which involves typing style = "category:designation" in whatever tag is to be styled.
Second is using <style> and </style> and including all the categories and designation within those style tags.
Finally, to link an external CSS file to HTML, add a link, which looks like the following:
<link rel="stylesheet" href="name.css"

2. What is the difference between a div and a span?
span is inline, used to group HTML within a line. Meanwhile, div is used to group HTML in a larger block.

3. What is a CSS class? When should you use an id instead of a class?
A CSS class and a CSS id are both assigned by the coder and used to describe an element.
A class can be used to describe multiple elements and can be repeated and shared, whereas an id must be unique to each element.

4. Name 4 semantic HTML tags.
<p></p> paragraph
<div></div> division
<em></em> emphasized text (italicized?)
<strong></strong> strongly emphasized text (bold)

5. What are three options for creating responsive design?
a) Size content to the viewport with a <meta = viewport...> tag in the HTML, which will fit the design horizontally on screen
b) Use relative width (and height) values - instead of setting to a certain specific pixel, set to a %
c) Use an existing CSS framework that already is responsive

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?
Front end development deals primarily with user interface and how users interact with a webpage, visually or through their computers.
Front end developers deal with events onclick and how the application responds to changes and inputs that come from a mouse click or keyboard.

2. What is block scope in JavaScript?
Block scope is a type of local scope, and is located within the area of a block of code usually designated between curly brackets. 
Variables of local scope operate within those curly braces, which is the block scope.

3. How would you explain the idea of "inheritance" in object oriented programming?
Inheritance refers to a child class, subclass, or component receiving, or "inheriting", the qualities and keys/attributes, and behaviors of the parent class.
If a parent class has certain properties as a blueprint, these are passed down by default to a child class. 
These can be further modified in the child class to be not shared with the parent, and specific to the child.