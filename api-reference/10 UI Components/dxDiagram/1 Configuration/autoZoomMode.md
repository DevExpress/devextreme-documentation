---
id: dxDiagram.Options.autoZoomMode
type: Enums.AutoZoomMode
default: 'disabled'
---
---
##### shortDescription
Specifies how the Diagram UI component automatically zooms the work area.

---
When the **autoZoomMode** property is set to `fitContent` or `fitWidth`, the Diagram component automatically zooms the work area when the diagram’s layout changes. You can call the [fitToContent](/api-reference/10%20UI%20Components/dxDiagram/3%20Methods/fitToContent().md '/Documentation/ApiReference/UI_Components/dxDiagram/Methods/#fitToContent') and [fitToWidth](/api-reference/10%20UI%20Components/dxDiagram/3%20Methods/fitToWidth().md '/Documentation/ApiReference/UI_Components/dxDiagram/Methods/#fitToWidth') methods to fit the zoom level once.

The table below lists the **autoZoomMode** property values and their descriptions.

<table class="dx-table">
    <tr>
        <th>Value</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>fitContent</td>
        <td>Fits the diagram content into the work area. The maximum scale is 100%.</td>
    </tr>
    <tr>
        <td>fitWidth</td>
        <td>Fits the diagram content's width into the work area width. The maximum scale is 100%.</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>Auto-zoom is disabled.</td>
    </tr>
</table>

