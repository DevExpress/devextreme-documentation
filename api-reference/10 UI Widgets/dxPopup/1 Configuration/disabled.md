---
default: false
type: boolean
---
---
##### shortDescription
A Boolean value specifying whether or not the widget can respond to user interaction.

---
Create an observable variable and assign it to this option to specify the availability of the widget at runtime.

[note]For embedded components, the *disabled* option makes sense only if these components are DevExtreme widgets. In case you want to disable third-party controls, provide a native way to disable interaction. For example, for HTML elements you can use [disabled](https://www.w3schools.com/tags/att_disabled.asp) attribute.