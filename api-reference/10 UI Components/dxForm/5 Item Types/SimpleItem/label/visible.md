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

- The [labelMode](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#labelMode) is *"outside"*.
- The editor does not support embedded labels and therefore does not support the *"static"* and *"floating"* label modes. Refer to the [labelMode](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#labelMode) article for a list of these editors.

In other cases, the property defaults to **false**.