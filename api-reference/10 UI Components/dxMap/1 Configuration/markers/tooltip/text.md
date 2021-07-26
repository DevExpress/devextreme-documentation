---
id: dxMap.Options.markers.tooltip.text
type: String
---
---
##### shortDescription
Specifies the text or HTML markup displayed in the tooltip.

---
The {WidgetName} component evaluates the **text** property's value. This evaluation, however, makes the {WidgetName} potentially vulnerable to XSS attacks. If the **tooltip**.**text** value comes from an untrusted source, encode this value as demonstrated in the following help topic: [Potentially Vulnerable API - markers[].tooltip.text](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/markers[]tooltiptext).