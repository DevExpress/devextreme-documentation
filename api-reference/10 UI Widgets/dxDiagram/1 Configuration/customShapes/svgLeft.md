---
id: dxDiagram.Options.customShapes.svgLeft
type: Number
---
---
##### shortDescription
Specifies the shape image's left offset.

---
This option specifies a fractional left offset of a shape image toward the shape width. If the **svgLeft** option is set to 0, the image's left edge matches the shape's left edge.

The absolute offset is calculated by multiplying the **svgLeft** value by the shape's width.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                id: 0,
                svgUrl: "images/shapes/internet.svg",
                svgLeft: 0.15,
                // ...
        
---