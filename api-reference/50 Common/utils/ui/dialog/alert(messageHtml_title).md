---
id: ui.dialog.alert(messageHtml,title)
module: ui/dialog
export: alert
---
---
##### shortDescription
Displays an alert dialog with a message and **OK** button.

##### return: Promise<void>
A Promise that is resolved after a user clicks the button. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(messageHtml): String
The dialog's message.       
Can contain HTML markup that will be evaluated. Make sure that the markup does not contain malicious code.        
Refer to the following help topic for more information: [Potentially Vulnerable API - messageHtml](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/messageHtml).

##### param(title): String
The dialog's title.

---
