---
id: dxDiagram.Options.customShapes.svgTop
type: Number
---
---
##### shortDescription
Specifies the shape image's top offset.

---
This option specifies the top offset (in fractions) of a shape's image in relation to the shape's height. If the **svgTop** option is set to 0, the image's top edge matches the shape's top edge.

The absolute offset is calculated by multiplying the **svgTop** value by the shape's height.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                id: 0,
                svgUrl: "images/shapes/internet.svg",
                svgTop: 0,
                // ...
        
---