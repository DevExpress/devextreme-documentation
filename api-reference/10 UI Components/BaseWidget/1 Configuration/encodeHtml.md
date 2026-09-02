---
id: BaseWidget.Options.encodeHtml
type: Boolean
default: false
notUsedInTheme: 
---
---
##### shortDescription
Specifies whether {WidgetName} tooltips display HTML tags as plain text or render tags in the component markup.

---
When **encodeHtml** is `true`, {WidgetName} encodes `text` fields in **customizeTooltip** return objects. When **encodeHtml** is `false`, the component evaluates `text` fields and renders HTML tags in the markup with the following guards:

1. Only text tags such as `<p>`, `<b>`, `<i>`, and `<br>` are rendered.
2. All attributes except `style` and `class` are stripped.

To render any HTML tag within tooltips, use the `html` field in **customizeTooltip** return objects. This field is vulnerable to XSS attacks. Refer to the following help topic for more information: [Potentially Vulnerable API - customizeTooltip](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/customizeTooltip).
