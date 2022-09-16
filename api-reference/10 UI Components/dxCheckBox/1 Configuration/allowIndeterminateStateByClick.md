---
id: dxCheckBox.Options.allowIndeterminateStateByClick
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether users can set the CheckBox state to indeterminate.

---
*dxCheckBox* supports three states: checked, unchecked, and indeterminate. The following table specifies the relation between the editor's state and its [value](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value).

<table class="dx-table">
    <tr>
        <th>Value</th>
        <th>State</th>
    </tr>
    <tr>
        <td><code>null</code> or <code>undefined</code></td>
        <td>Indeterminate</td>
    </tr>
    <tr>
        <td><code>true</code></td>
        <td>Checked</td>
    </tr>
    <tr>
        <td><code>false</code></td>
        <td>Unchecked</td>
    </tr>
</table>

If you set **allowIndeterminateStateByClick** to `true`, users can cycle through check box states in the following order:

*Indeterminate → Checked → Unchecked → Indeterminate →  ...*

If you set **allowIndeterminateStateByClick** property to `false`, users can only cycle between the checked and unchecked states. Note that a check box can initially appear in the indeterminate state, if you haven't set the value to either `true` or `false`.

*Indeterminate → Checked → Unchecked → Checked → Unchecked → ...*

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CheckBox/Overview/"
}