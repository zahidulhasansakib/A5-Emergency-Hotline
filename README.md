"# A5-Emergency-Hotline" 

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans.1.getElementById
কোন একটি এলিমেন্ট এর  id দিয়ে খুজে বের করা
example: const  element=document.getElementById("myId")
advantage:খুব দ্রুত কাজ করে
2.getElementsByClassName
ক্লাস এর মাধ্যমে এক বা একাধিক এলিমেন্ট খুজে বের করা যায়
Example. const  element=document.getElementByClassName("myClass")
Advantage.একাধিক এলিমেন্ট ফিরিয়ে দেয়
3.querySelector
querySelector হলো JavaScript DOM API-এর একটি মেথড, যা দিয়ে ওয়েবপেজ থেকে নির্দিষ্ট CSS selector অনুসারে প্রথম element সিলেক্ট করা যায়।
Example: const element =document.querySelector(".myClass")
Advantage:Use in all css selector
4.querySelectorAll
Using css selector find the all matching element
Example.const element =document.querySelectorAll(".myClass")
Advantage:using for each loop

2. How do you **create and insert a new element into the DOM**?
1.Craate element:let el=document.createElement("p");
2Add content/attribute:el.textContent="Hello";
Insert into Dom
parent.appendChild(el);
parent.appendChild(el); → last child

parent.prepend(el); → first child

parent.insertBefore(el, ref); → before another child
example:
let p = document.createElement("p");
p.textContent = "Hi!";
document.body.appendChild(p);

3. What is **Event Bubbling** and how does it work?
When any event click then it is not only work for target elemt but also work step by step for upper parent and grandparent and it continue full document its called Event Bubbling
how it work:
1.The event is first handled by the target element (the one you clicked).
2.Then it bubbles up to its parent element.
3.Then to the grandparent, and so on… until it reaches the document (root).

4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation is a technic where we attach a single event listener toa parent element,and that listener can handle event that happen on its child element
why it is useful:
1.Memory efficency
2.Works for dynamic elements
3.Cleaner code

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Method	English Meaning	Bangla Meaning
preventDefault():Stop default behavior 
stopPropagation():Stops event from moving up/down in DOM
