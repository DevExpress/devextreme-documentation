---
id: dxDiagram.Options.defaultItemProperties
type: Object
default: {}
---
---
##### shortDescription
Configures default item properties.

---
The component applies default property values to newly created items if you do not specify the values.

---
##### jQuery  

    <!--JavaScript-->
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

##### Angular

    <!-- tab: app.component.html -->+
    <dx-diagram #diagram id="diagram">
        <dxo-nodes ... />
        <dxo-default-item-properties 
            connectorLineStart="outlinedTriangle" 
            connectorLineEnd="none" 
            connectorLineType="straight" 
            style="fill: #d9d9d9; stroke: #999999" 
            textStyle="font-weight: bold; text-decoration: underline">
        </dxo-default-item-properties>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <DxDiagram
        id="diagram"
        ref="diagram"
    >
        <DxNodes ... >
        <DxDefaultItemProperties 
            :connector-line-start="'outlinedTriangle'" 
            :connector-line-end="'none'" 
            :connector-line-type="'straight'" 
            :style="'fill: #d9d9d9; stroke: #999999'" 
            :text-style="'font-weight: bold; text-decoration: underline'"/>
    </DxDiagram>
##### React

    <!-- tab: App.js -->
    <Diagram id="diagram">
        <Nodes ... />
        <DefaultItemProperties 
            connectorLineStart="outlinedTriangle" 
            connectorLineEnd="none" 
            connectorLineType="straight" 
            textStyle="font-weight: bold; text-decoration: underline"/>
    </Diagram>

---
