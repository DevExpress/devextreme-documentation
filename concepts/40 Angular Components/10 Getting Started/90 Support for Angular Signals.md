Angular v16 and up include a popular capability called "Angular Signals". It is a new, streamlined way to track changes in page data, and react to these changes.

**Signals** are wrappers that listen to changes in page data. You can create two kinds of signals:

* A *writable signal* wraps around a variable and fires when the variable's value changes. You can reference this signal throughout the application to manually overwrite the value of the underlying variable.
* A *computed signal* wraps around other signals and uses internal logic to process their data.

You can respond to signals with **effects**. Effects are functions that run when one or more signals fire.

DevExtreme components are fully compatible with Angular Signals. If you want to integrate this capability into your application, you can examine a sample DevExtreme application with signals and effects.

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/devbox/dx-signals-l5mt79?file=%2Fsrc%2Fapp%2Fapp.component.ts"
}

* The `prefix` signal in the example monitors the state of the "Prefix" dropdown. When the user changes the active option, the corresponding `effect` function filters the list of employees, and selects rows with employees that match the selected prefix.
* The `selectedRows` signal monitors the state of the table and reports changes to the row selection.
* The `selectionMessage` computed signal listens to the `selectedRows` signal. It joins the names of the selected employees into a single string. The table caption includes this string.