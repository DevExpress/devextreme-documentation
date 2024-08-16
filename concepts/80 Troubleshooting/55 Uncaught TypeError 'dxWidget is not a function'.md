This section explains an issue and steps to diagnose and resolve it. If the solution does not work, [submit a ticket](https://supportcenter.devexpress.com/ticket/create) in our Support Center.

### Issue

The browser fails to render DevExtreme components on the page. Browser console displays the following errors:

* "Uncaught TypeError: $(...).dxSelectBox is not a function"
* "Uncaught TypeError: $(...).dxDataGrid is not a function"
* "Uncaught TypeError: $(...).dxButton is not a function"

### Solution

Ensure only one jQuery reference exists **before** `dx.all.js` in the application's `head` section. For more details, refer to the following help topic: [Add DevExtreme to a jQuery Application](/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/#CDN_Files).

[tags] jquery