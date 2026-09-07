---
id: BaseWidget.Options.encodeHtml
type: Boolean
default: false
notUsedInTheme: 
---
---
##### shortDescription
Specifies whether {WidgetName} processes HTML elements in component text fields or displays tags as plain text.

---
When **encodeHtml** is disabled, {WidgetName} allows you to style text in elements such as labels, legends, and tooltips using inline HTML and CSS. You can also apply class attributes in these elements. Enable **encodeHtml** to display HTML tags (and generic strings within corner brackets) as plain text.

[note]

- The component transforms evaluated HTML elements into [tspan](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/tspan) SVG elements and does not render inline HTML directly.
- {WidgetName} discards all attributes except `style` and `class`.

[/note]
