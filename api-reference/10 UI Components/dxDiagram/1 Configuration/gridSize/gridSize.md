---
id: dxDiagram.Options.gridSize
type: Number | Object
---
---
##### shortDescription
Specifies the grid pitch.

---
When the [showGrid](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/showGrid.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#showGrid') option is set to **true**, the Diagram UI component displays grid lines that help users align diagram elements. Use the **gridSize** option to specify the grid pitch.

The [units](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/units.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#units') option specifies the measurement unit.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            viewUnits: "cm",
            units: "cm",
            gridSize: {
                value: 2,
                items: [1, 2, 3]
            },
            // or
            // gridSize: 2,
        });
    });

---

#####See Also#####
- [snapToGrid](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/snapToGrid.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#snapToGrid')
