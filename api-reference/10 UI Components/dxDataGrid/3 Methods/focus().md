---
##### shortDescription
Sets focus on the UI component.

---
The focused {WidgetName} element depends on the following conditions:

<table class="dx-table">
    <tr>
        <th>Condition</th>
        <th>Focused element</th>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#focusedRowEnabled">focusedRowEnabled</a> is set to <code>true</code>.</td>
        <td>Focuses the first {WidgetName} row.</td>
    </tr>
    <tr>
        <td><b>focusedRowEnabled</b> is set to <code>false</code>.</td>
        <td>Focuses the first cell in the data area.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/">Grouping</a> is configured.</td>
        <td>Focuses the first group header.</td>
    </tr>
</table>

#####See Also#####
#include common-link-callmethods