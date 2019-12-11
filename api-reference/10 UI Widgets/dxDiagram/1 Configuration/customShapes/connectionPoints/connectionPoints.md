---
id: dxDiagram.Options.customShapes.connectionPoints
type: Array<Object>
---
---
##### shortDescription
An array of a shape's connection points.

---
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                id: 0,
                connectionPoints: [
                    { x: 0.5, y: 0 },
                    { x: 0.9, y: 0.5 },
                    { x: 0.5, y: 1 },
                    { x: 0.1, y: 0.5 }
                ]
                // ...
        
---

![Diagram - Connection Points](/images/diagram/connection-points.png)