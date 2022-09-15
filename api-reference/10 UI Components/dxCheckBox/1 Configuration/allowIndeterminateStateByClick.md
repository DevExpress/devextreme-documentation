---
id: dxCheckBox.Options.allowIndeterminateStateByClick
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether users can set the CheckBox state to indeterminate.

---
The component can be in three states (checked, unchecked, and indeterminate). When the CheckBox [value](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value) is `null` or `undefined`, the default state is indeterminate.

If this property is set to `false`, users can change checkbox states in the following order:

*Indeterminate (default) → Checked → Unchecked → Checked → Unchecked.*

Set this property to `true` to allow users to set the indeterminate state:

*Indeterminate (default) → Checked → Unchecked → Indeterminate.*