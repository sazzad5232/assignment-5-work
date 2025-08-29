1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: getElementById targets a single element by using its unique Id.It is the fastest way to get an element if you know its Id name.
-> getElementsByClassName receives a collection of all elements that gives the same class name.It returns an HTML collection,which updates automatically.
-> querySelector receives the first element that matches a particular css selector. It is flexible because it can use any css selector -like class, id, tag name, and so on.
-> querySelectorAll gets a NodeList of all elements that match the particular css selector.Different from getElementsByClassName, its NodeList is fixed,it doesn't automatically update.

2. How do you **create and insert a new element into the DOM**?

Answer: Create the element by using document.createElement().For example, const newDiv = document.createElement("div");
Append it to an active parent element using parentNode.appendChild() or parentNode.insertBefore().For example, document.body.appendChild(newDiv); adds newDiv to the end of the body.

3. What is **Event Bubbling** and how does it work?

Answer: Event Bubbling is a method where an event,like a click,first calls on the final child element and then bubbles up to its parent,grandparent, and so on,all the way to the top of the DOM.This means if you click on a nested element,the click event also runs on all its ancestor elements.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:Event Delegation is a technique where you join a single event listener to a parent element instead of adding separate listeners to each of its child elements.It functions by taking advantage of Event Bubbling.
It is useful because-
->It improves performance by reducing the number of event listeners, especially for a large number of elements.
->It makes handling events easy for dynamically added elements,you don't need to attach a new listener to each one.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault() stops the default action of an element.For example, it prevents a link from browsing to a new page or a form from sending.
-> stopPropagation() stops the event from bubbling up to parent elements. It stops the event from reaching its ancestors, effectively stopping the bubbling process.
