---
id: CollectionWidget.Options.noDataText
type: String
default: 'No data to display'
---
---
##### shortDescription
Specifies the text or HTML markup displayed by the UI component if the item collection is empty.

---
The {WidgetName} component evaluates the **noDataText** property's value. This evaluation, however, makes the {WidgetName} potentially vulnerable to XSS attacks. To guard against these attacks, encode the HTML markup before you assign it to the **noDataText** property. Refer to the following help topic for more information: [Potentially Vulnerable API - noDataText](/concepts/Common/Security%20Considerations/20%20HTML%20Encoding/30%20Potentially%20Vulnerable%20API/noDataText.md '/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/noDataText').