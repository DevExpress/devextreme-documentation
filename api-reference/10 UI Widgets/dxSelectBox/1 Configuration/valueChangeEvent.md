---
default: 'change'
type: String
---
---
##### shortDescription
Specifies DOM event names that update a widget's value.

---
The option takes on a string value representing a DOM event name or several DOM event names separated by a space. It is recommended that you use the "keyup", "blur", "change" and "focusout" events. However, you can use other DOM events for your own discretion.

[note]This option makes sense only if the [fieldEditEnabled](/api-reference/10%20UI%20Widgets/dxDropDownEditor/1%20Configuration/fieldEditEnabled.md '{basewidgetpath}/Configuration/#fieldEditEnabled') option is set to **true**.