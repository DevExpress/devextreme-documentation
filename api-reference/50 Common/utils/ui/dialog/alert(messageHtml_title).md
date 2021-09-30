---
id: ui.dialog.alert(messageHtml,title)
module: ui/dialog
export: alert
---
---
##### shortDescription
Displays an alert dialog with a message and **OK** button.

##### return: Promise<void>
A Promise that is resolved after a user clicks the button.
#include ref-promisedistinction

##### param(messageHtml): String
The dialog's message.       
Can contain HTML markup that will be evaluated. Make sure that the markup does not contain malicious code.        
Refer to the following help topic for more information: [Potentially Vulnerable API - messageHtml](/concepts/Common/Security%20Considerations/20%20HTML%20Encoding/30%20Potentially%20Vulnerable%20API/messageHtml.md '/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/messageHtml').

##### param(title): String
The dialog's title.

---
