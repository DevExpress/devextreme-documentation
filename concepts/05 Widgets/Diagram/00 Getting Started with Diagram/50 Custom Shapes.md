The **Diagram** widget provides a collection of built-in shapes. Use the [customShapes](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/customShapes '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/customShapes/') option to extend this collection with custom shapes.

![Diagram control custom shapes](/images/diagram/custom-shapes.png)

[note] Shape images should be supplied as SVG files. 

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                id: 0,
                title: "Internet",
                svgUrl: "images/shapes/internet.svg",
                defaultWidth: 1.27,
                defaultHeight: 1.27,
                allowHasText: false
            },
            {
                id: 1,
                title: "Laptop",
                svgUrl: "images/shapes/laptop.svg",
                defaultWidth: 1.27,
                defaultHeight: 1.27,
                allowHasText: false
            },
            // ...
            ]
        }).dxDiagram("instance");
        // ...
    });