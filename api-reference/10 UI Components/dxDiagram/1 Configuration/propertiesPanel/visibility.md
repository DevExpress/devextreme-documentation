---
id: dxDiagram.Options.propertiesPanel.visibility
acceptValues: 'auto' | 'visible' | 'collapsed' | 'disabled'
type: String
default: 'auto'
---
---
##### shortDescription
Specifies the panel's visibility.

---

<table class="dx-table">
    <tr>
        <th>Value</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>auto</td>
        <td>The panel is disabled when the diagram is read-only.</td>
    </tr>
    <tr>
        <td>visible</td>
        <td>The panel is initially visible.</td>
    </tr>
    <tr>
        <td>collapsed</td>
        <td>The panel is collapsed initially.</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>The panel is disabled. An element that can invoke the panel is hidden.</td>
    </tr>
</table>

#include common-ref-enum with {
    enum: "`DiagramPanelVisibility`",
    values: "`Auto`, `Visible`, `Collapsed`, `Disabled`"
}