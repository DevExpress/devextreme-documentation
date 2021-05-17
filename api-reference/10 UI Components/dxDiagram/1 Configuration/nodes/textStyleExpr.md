---
id: dxDiagram.Options.nodes.textStyleExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a node's text style.

##### param(data): Object
The current node's data object.

##### return: any
A node's text style.

---
A data source field specified by this property must contain inline style declarations in string format, for instance `"font-weight: bold; text-decoration: underline"`. 

If you provide a function for the **textStyleExpr** property, the function can return style settings as CSS rules in JSON format.

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                textStyleExpr: itemTextStyleExpr,
            //...
        });

        function itemTextStyleExpr(obj) {
            let style = { "font-weight": "bold" };
            if(obj.level === "senior")
                style["text-decoration"] = "underline";
            return style;
        }
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
