---
id: dxChart.Options.valueAxis.constantLines.label.position
type: Enums.RelativePosition
default: 'inside'
---
---
##### shortDescription
Specifies the position of constant line labels on the chart plot.

---
The component's default behavior is to display constant line labels inside the chart plot. To place the labels outside the chart plot, set **position** to *"outside"*.

[note]

When **position** is *"outside"*, note the following label alignment restrictions:

- [verticalAlignment](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/constantLines/label/#verticalAlignment) is always *"center"*
- [horizontalAlignment](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/constantLines/label/#horizontalAlignment) can be only *"left"* or *"right"*

[/note]