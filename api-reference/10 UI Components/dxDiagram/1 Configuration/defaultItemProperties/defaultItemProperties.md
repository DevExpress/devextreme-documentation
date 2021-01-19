---
id: dxDiagram.Options.defaultItemProperties
type: Object
default: {}
---
---
##### shortDescription
Configures default item properties.

---
Default property values are applied to newly created items if no other values are provided.

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                //...
            },
            defaultItemProperties: {
                connectorLineStart: "outlinedTriangle",
                connectorLineEnd: "none",
                connectorLineType: "straight",
                style: "fill: #d9d9d9; stroke: #999999",
                textStyle: "font-weight: bold; text-decoration: underline"
            }
        });
    });
