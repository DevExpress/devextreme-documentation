---
id: dxDiagram.Options.customShapes.svgWidth
type: Number
---
---
##### shortDescription
Specifies the shape image's fractional width.

---
This option specifies a fraction from 0 to 1 that represents the shape image width in relation to the shape width. If the **svgWidth** option is set to 1, the image width is equal to the shape width.

The absolute image width is calculated by multiplying the **svgWidth** value by the shape width.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                id: 0,
                svgUrl: "images/shapes/internet.svg",
                svgWidth: 0.7,
                // ...
        
---