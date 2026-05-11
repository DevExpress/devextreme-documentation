---
id: DateBoxBase.Options.valueChangeEvent
type: String
default: 'change'
---
---
##### shortDescription
Specifies [DOM events](https://en.wikipedia.org/wiki/DOM_events) that trigger a component [value]({basewidgetpath}/Configuration/#value) update.

---
This property accepts a single event or multiple events separated by spaces.

We recommended the following events: "keyup", "blur", "change", "input", "wheel", and "focusout". All other DOM events are also supported.

[note] Set **valueChangeEvent** to `input keyup wheel` to ensure [onValueChanged]({basewidgetpath}/Configuration/#onValueChanged) is fired when users change the component value using the scroll wheel or up/down arrow keys.

#####See Also#####
- [onValueChanged]('{basewidgetpath}/Configuration/#onValueChanged')