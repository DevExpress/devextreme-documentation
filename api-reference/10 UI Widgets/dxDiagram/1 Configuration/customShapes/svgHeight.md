---
id: dxDiagram.Options.customShapes.svgHeight
type: Number
---
---
##### shortDescription
Specifies the shape image's fractional height.

---
This option specifies a fraction from 0 to 1 that represents the shape image height in relation to the shape height. If the **svgHeight** option is set to 1, the image height is equal to the shape height.

The absolute image height is calculated by multiplying the **svgHeight** value by the shape's height.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                id: 0,
                svgUrl: "images/shapes/internet.svg",
                svgHeight: 0.7,
                // ...
        
---