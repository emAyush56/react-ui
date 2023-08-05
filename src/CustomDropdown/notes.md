Q. In the above code why is the filteredOptions stuck at id:4 of the dropdownOptions while filtering?

In the given code, the issue with the filteredOptions being stuck at id:4 while filtering is due to the usage of selectedTitle in the filter condition.

The problem lies in this line of code:

const filteredOptions = dropdownOptions.filter(
(option) => option.title !== selectedTitle
);
In JavaScript, when you use a variable inside a closure (such as in the callback function passed to filter), it captures the value of that variable at the time of its creation. In this case, selectedTitle is captured and remains constant throughout the execution of the filter loop.
