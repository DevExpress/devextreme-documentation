---
id: CollectionWidget.Options.noDataText
type: String
default: 'No data to display'
---
---
##### shortDescription
The text or HTML markup displayed by the UI component if the item collection is empty.

---
The {WidgetName} component evaluates this property's value. This makes {WidgetName} potentially vulnerable to XSS attacks. To guard against them, encode the HTML markup before you assign it to this property. Refer to the following help topic for more information: [Potentially Vulnerable API - noDataText](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/noDataText).