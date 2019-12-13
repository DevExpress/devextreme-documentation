The **Diagram** widget provides a collection of built-in shapes. Use the [customShapes](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/') option to extend this collection with custom shapes.

![Diagram control custom shapes](/images/diagram/custom-shapes.png)

[note] Shape images should be supplied as SVG files. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/CustomShapesWithIcons/"
}

Use the [toolbox](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/toolbox '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/toolbox/') option to add the custom shapes to the toolbox.

---

#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                category: "hardware",
                type: "internet",
                title: "Internet",
                backgroundImageUrl: "images/shapes/internet.svg",
                backgroundImageLeft: 0.15,
                backgroundImageTop: 0,
                backgroundImageWidth: 0.7,
                backgroundImageHeight: 0.7,
                defaultWidth: 0.75,
                defaultHeight: 0.75,
                defaultText: "Internet",
                allowEditText: true,
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
            ...
        ],
        toolbox: {
            groups: [{ category: "hardware", title: "Hardware" }]
        }
    }).dxDiagram("instance");
    
---