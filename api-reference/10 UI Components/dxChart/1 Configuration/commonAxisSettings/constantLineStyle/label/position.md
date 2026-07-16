---
id: dxChart.Options.commonAxisSettings.constantLineStyle.label.position
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

- [verticalAlignment](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/constantLines/label/verticalAlignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/constantLines/label/#verticalAlignment') is always *"center"*
- [horizontalAlignment](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/constantLines/label/horizontalAlignment.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/constantLines/label/#horizontalAlignment') can only be *"left"* or *"right"*

[/note]