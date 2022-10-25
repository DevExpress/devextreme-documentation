---
id: dxSelectBox.Options.customItemCreateEvent
type: String
default: 'change'
---
---
##### shortDescription
Specifies the <a href="https://en.wikipedia.org/wiki/DOM_events" target="_blank">DOM event</a> after which the custom item should be created. Applies only if [acceptCustomValue](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/acceptCustomValue.md '{basewidgetpath}/Configuration/#acceptCustomValue') is enabled.

---
This property accepts a single event name or several names separated by spaces.

The recommended events are "keyup", "blur", "change", "input", and "focusout", but you can use other events as well. The default value of this property is "change", and items are created when the component loses focus. 

[note] Besides the event passed to this property, the item can also be created when users press the **Enter** key. To allow users to create items only when they press the **Enter** key, pass an empty string to this property.