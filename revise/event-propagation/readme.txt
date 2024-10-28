What is event propagation?
 - The process of deciding in which direction the event will be executed is called event propagation.

 What is event bubbling?
 - the events are executed from down to up.

 if there are some event that do not bubble?
 - blur, focus

 what is event capturing/trickling?
 - which makes the event executes from top to bottom.
 by adding this in event listener.
 {
    capture:true
 }


 how to stop bubbling or capturing?
 - by adding e.stopPropagation();


 what is event delegation?
 - instead of adding event listener to individual, add event listener to the parent.