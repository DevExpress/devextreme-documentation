---
id: dxDiagram.Options.nodes.styleExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a node style.

##### param(data): Object
The current node's data object.

##### return: any
<!-- Description goes here -->

---
A data source field specified by this property must contain inline style declarations in string format, for instance `"fill: #d9d9d9; stroke: #999999"`. 

If you provide a function for the **styleExpr** property, the function can return style settings as CSS rules presented in JSON format as well.

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                styleExpr: itemStyleExpr,
            //...
        });

        function itemStyleExpr(obj) {
            let style = { "stroke": "#444444" };
            if(obj.type === "group")
                style["fill"] = "#f3f3f3";
            return style;
        }
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
