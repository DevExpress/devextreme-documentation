Angular v16 and up includes a popular capability called "Angular Signals". Signals offer a stremalined way to monitor changes in page state, and react to these changes.

You can create two kinds of signals:

* Writable signals wrap around variables and fire on data change. You can reference these signals in other parts of the application to manually overwrite the values of their underlying variables.
* Computed signals are derivative: they process data from other signals and yield a new value based on their internal logic.

You can respond to signal with effects. Effects are functions that run when one or more signals fire.

The internal logic of DevExtreme components does not interfere with Angular Signals. Feel free to use them in your DevExtreme application. To demonstrate how it works, the DevExtreme team prepared a [sample DevExtreme Angular application]( https://codesandbox.io/p/devbox/dx-signals-2m8hq8) that makes use of signals and effect functions.

* The `prefix` signal in the example monitors the state of the "Prefix" dropdown. When the user changes the active option, the corresponding `effect` function filters the list of employees, and selects rows with employees that match the selected prefix.
* The `selectedRows` signal monitors the state of the table and reports changes to the active row selection.
* The `selectionMessage` computed signal listens to the `selectedRows` signal. It retrieves the names of selected employees, and joins them into a single string. The application displays this string at the bottom of the table.