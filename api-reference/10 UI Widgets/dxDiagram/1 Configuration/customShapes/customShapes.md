---
id: dxDiagram.Options.customShapes
type: Array<Object>
default: []
---
---
##### shortDescription
An array of custom shapes.

---
Use the **customShapes** option to extend a collection of built-in shapes with custom shapes. Custom shapes are displayed in the toolbox panel’s **Custom** tab.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapes/"
}

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                id: 0,
                title: "Internet",
                svgUrl: "images/shapes/internet.svg",
                svgLeft: 0.15,
                svgTop: 0,
                svgWidth: 0.7,
                svgHeight: 0.7,
                defaultWidth: 1.9,
                defaultHeight: 1.9,
                defaultText: "Internet",
                allowHasText: true,
                textLeft: 0,
                textTop: 0.7,
                textWidth: 1,
                textHeight: 0.3,
                connectionPoints: [
                    { x: 0.5, y: 0 },
                    { x: 0.9, y: 0.5 },
                    { x: 0.5, y: 1 },
                    { x: 0.1, y: 0.5 }
                ]
            },
            {
                id: 1,
                title: "Laptop",
                svgUrl: "images/shapes/laptop.svg",
                svgLeft: 0.15,
                svgTop: 0,
                svgWidth: 0.7,
                svgHeight: 0.7,
                defaultWidth: 1.9,
                defaultHeight: 1.9,
                defaultText: "Laptop",
                allowHasText: true,
                textLeft: 0,
                textTop: 0.7,
                textWidth: 1,
                textHeight: 0.3,
                connectionPoints: [
                    { x: 0.5, y: 0 },
                    { x: 0.9, y: 0.5 },
                    { x: 0.5, y: 1 },
                    { x: 0.1, y: 0.5 }
                ]
            },
            // ...
            ]
        }).dxDiagram("instance");
    });
        
---