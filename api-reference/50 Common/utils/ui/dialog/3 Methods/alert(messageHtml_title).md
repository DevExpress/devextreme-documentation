---
module: ui/dialog
export: alert
---
---
##### shortDescription
Displays an alert dialog with a message and **OK** button.

##### param(messageHtml): String
The dialog's message. Can contain HTML elements.

##### param(title): String
The dialog's title.

##### return: Promise<void>
A Promise that is resolved after a user clicks the button. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](https://api.jquery.com/Types/#Promise) when you use jQuery.

---
