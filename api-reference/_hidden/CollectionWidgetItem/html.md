---
id: CollectionWidgetItem.html
type: String
---
---
##### shortDescription
Specifies HTML markup to insert into the item element.

---
The {WidgetName} component evaluates this property's value. This makes {WidgetName} potentially vulnerable to XSS attacks. To guard against them, encode the HTML markup before you assign it to this property. Refer to the following help topic for more information: [Potentially Vulnerable API - html](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/html).

You can use the [text]({currentpath}/#text) property as a safe alternative.