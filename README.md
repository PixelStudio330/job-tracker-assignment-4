1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: The elements have different functions.
getElementById() selects a single element with a unique id.
getElementsByClassName() selects multiple elements that share the same class name.
querySelector() selects the first element that matches a CSS selector.
querySelectorAll() selects all elements that match a CSS selector and returns a static nodelist.

2. How do you create and insert a new element into the DOM?
Ans: To create and insert a new element into the DOM first we use document.createElement() to create the element. Then we add content or attributes to it. Finally we insert it into the page using methods like appendChild().

3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is when an event triggered on a child element that moves up the DOM tree and triggers the same event on its parent elements. It starts at the target element and bubbles up or moves up to its ancestor elements.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a technique where a single event listener is added to a parent element to handle events on its children. It is useful because it reduces the number of event listeners, improves performance and saves the code from getting messy.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops the default browser action for an event, while stopPropagation() stops the event from bubbling up to parent elements, helping control how events behave.