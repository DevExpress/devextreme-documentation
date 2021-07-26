---
id: CollectionWidgetItem.html
type: String
---
---
##### shortDescription
Specifies the HTML markup to be inserted into the item element.

---
The {WidgetName} component evaluates the **html** property's value. This evaluation, however, makes the {WidgetName} potentially vulnerable to XSS attacks. To guard against these attacks, encode the HTML markup before you assign it to the **html** property. Refer to the following help topic for more information: [Potentially Vulnerable API - html](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/html).

You can use the [text]({currentpath}/#text) property as a safe alternative.