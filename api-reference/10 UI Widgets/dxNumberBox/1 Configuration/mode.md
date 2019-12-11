---
default: 'text', 'number' (mobile_devices)
acceptValues: 'number' | 'text' | 'tel'
type: String
---
---
##### shortDescription
Specifies the value to be passed to the [type](https://www.w3schools.com/tags/att_input_type.asp) attribute of the underlying `<input>` element.

---
[note] If you set the [format](/api-reference/10%20UI%20Widgets/dxNumberBox/1%20Configuration/format.md '/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#format') option, the **mode** for mobile devices is changed to *"tel"*; *"number"* is not available.

#include common-ref-enum with {
    enum: "`NumberBoxMode`",
    values: "`Text`, `Number`, and `Tel`"
}