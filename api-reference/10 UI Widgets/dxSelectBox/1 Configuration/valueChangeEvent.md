---
default: 'change'
type: String
---
---
##### shortDescription
Specifies the [DOM events](https://en.wikipedia.org/wiki/DOM_events) after which the widget's [value](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value') should be updated. Applies only if [acceptCustomValue](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/acceptCustomValue.md '{basewidgetpath}/Configuration/#acceptCustomValue') is set to **true**.

---
This option accepts a single event name or several names separated by spaces.

The recommended events are "keyup", "blur", "change", and "focusout", but you can use other events as well.