---
id: dxCheckBox.Options.enableThreeStateBehavior
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether users can set the CheckBox state to indeterminate.

---
The CheckBox component supports three states: checked, unchecked, and indeterminate. The following table specifies the relation between the editor's state and its [value](/api-reference/10%20UI%20Components/dxCheckBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value'):

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

If you set **enableThreeStateBehavior** to `true`, users can cycle through CheckBox states in the following order:

*Indeterminate → Checked → Unchecked → Indeterminate →  ...*

If you set **enableThreeStateBehavior** property to `false`, users can only cycle between the checked and unchecked states. Note that the CheckBox can initially appear in the indeterminate state, if you haven't set the value to either `true` or `false`.

*Indeterminate → Checked → Unchecked → Checked → Unchecked → ...*

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CheckBox/Overview/"
}