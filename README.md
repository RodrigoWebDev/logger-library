# Logger

Logger is a tiny javascript library to show console logs faster and easier

## How to use

- Include the dist/logger.js in your project
- In some JS file type:

```
log("Hello World")
```

## Command list

- assert(_expression_, _message_) : Write a message to the console, only if the first argument is _false_
- clear() : Clear all messages in the console
- count(_label_) : Write to the console the number of time the count() is called
- error(_message_) : write an error to the console
- group(_label_) : create a group of messages in the console
- groupCollapsed(_label_) : create a collapsed group of messages in the console
- groupEnd() : end a message group
- info(_message_) : write a message to the console
- log(_message_) : write to the console
- table(_tabledata, tablecolumns_) : write a table in the console
- time(_label_) : write to the console how long does it take to perform a task
- timeEnd(_label_) : end a time(_label_)
- trace(_label_) : show the trace of how the code ended up
- warn(_message_) : write a warning to the console
