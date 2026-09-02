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
When **encodeHtml** is `true`, {WidgetName} encodes `text` fields in **customizeTooltip** return objects. When disabled, the component evaluates `text` fields and transforms HTML tags to [tspan](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/tspan) SVG elements. Text tags such as `<b>`, `<i>`, and `<br>` apply appropriate styles to generated elements. The component also applies `style` and `class` attributes defined in the original HTML tags to the generated elements. All other attributes are stripped.

To render any HTML tag within tooltips, use the `html` field in **customizeTooltip** return objects. This field is vulnerable to XSS attacks. Refer to the following help topic for more information: [Potentially Vulnerable API - customizeTooltip](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/customizeTooltip).
