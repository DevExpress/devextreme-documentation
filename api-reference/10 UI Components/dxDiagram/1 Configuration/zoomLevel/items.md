---
id: dxDiagram.Options.zoomLevel.items
type: Array<Number>
default: undefined
---
---
##### shortDescription
An array that specifies the zoom level items in the _Zoom Level_ combobox on _Properties_ panel.

---


---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            zoomLevel: {
                value: 0.75,
                items: [0.5, 0.75, 1, 1.5]
            },
        });
    });

---
