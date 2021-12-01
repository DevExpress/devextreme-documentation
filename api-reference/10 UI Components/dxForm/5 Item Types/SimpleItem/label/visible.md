---
id: dxFormSimpleItem.label.visible
type: Boolean
default: true
---
---
##### shortDescription
Controls the visibility of the label outside the editor.

---
This property defaults to **true** in the following cases:

- The [labelMode](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/labelMode.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#labelMode') is *"outside"*.
- The editor does not support embedded labels and therefore does not support *"static"* and *"floating"* label modes. Refer to the [labelMode](/api-reference/10%20UI%20Components/dxForm/1%20Configuration/labelMode.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#labelMode') article for a list of these editors.

In other cases, the property defaults to **false**.