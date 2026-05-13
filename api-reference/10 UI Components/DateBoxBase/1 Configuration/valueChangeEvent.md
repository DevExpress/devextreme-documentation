---
id: DateBoxBase.Options.valueChangeEvent
type: String
default: 'change'
---
---
##### shortDescription
Specifies [DOM events](https://en.wikipedia.org/wiki/DOM_events) that trigger a component [value](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/value.md '{basewidgetpath}/Configuration/#value') update.

---
This property accepts a single event or multiple events separated by spaces.

We recommended the following events: "keyup", "blur", "change", "input", "wheel", and "focusout". All other DOM events are also supported.

[note] Set **valueChangeEvent** to `input keyup wheel` to ensure [onValueChanged](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/onValueChanged.md '{basewidgetpath}/Configuration/#onValueChanged') is fired when users change the component value using the scroll wheel or up/down arrow keys.

#####See Also#####
- [onValueChanged](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/onValueChanged.md '{basewidgetpath}/Configuration/#onValueChanged')