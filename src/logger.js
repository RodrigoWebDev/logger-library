(function () {
  "use strict";
  const consoleLoop = function (args) {
    let arr = [];
    for (let i = 0; i < args.length; i++) {
      arr.push(args[i]);
    }
    return arr.join(" ");
  };

  const assert = function (expression, message) {
    console.assert(expression, message);
  };

  const group = function (label) {
    console.group(label);
  };

  const groupEnd = function () {
    console.groupEnd();
  };

  const clear = function () {
    console.clear();
  };

  const count = function (label) {
    console.count(label);
  };

  const error = function (message) {
    console.error(message);
  };

  const groupCollapsed = function (label) {
    console.groupCollapsed(label);
  };

  const info = function (message) {
    console.info(consoleLoop(arguments));
  };

  const log = function () {
    console.log(consoleLoop(arguments));
  };

  const table = function (tableData, tableColumns) {
    console.table(tableData, tableColumns);
  };

  const time = function (label) {
    console.time(label);
  };

  const timeEnd = function (label) {
    console.timeEnd(label);
  };

  const trace = function (label) {
    console.trace(label);
  };

  const warn = function (message) {
    console.warn(message);
  };

  window.assert = assert;
  window.clear = clear;
  window.count = count;
  window.error = error;
  window.group = group;
  window.groupCollapsed = groupCollapsed;
  window.groupEnd = groupEnd;
  window.info = info;
  window.log = log;
  window.table = table;
  window.time = time;
  window.timeEnd = timeEnd;
  window.trace = trace;
  window.warn = warn;
})();
