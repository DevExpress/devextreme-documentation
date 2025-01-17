---
id: dxDiagram.Options.nodes.textStyleExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a node's text style.

##### param(data): any
The current node's data object.

##### return: any
A node's text style.

##### param(value): any
A node's new text style or `undefined`.

---
A data source field assigned to this property should contain in-line style declarations in string format. For instance, `"font-weight: bold; text-decoration: underline"`. 

A function assigned to this property should do the following:

* Return a node's text style as a set of CSS rules in JSON format when the **value** parameter is set to `undefined`. For instance, `{"font-weight": "bold"; "text-decoration": "underline"}`.
* Save a new style value to a data storage when the **value** parameter contains a node's text style. For instance, assign this value to the **obj** parameter's field to save a node's text style in your data source.

<!--->

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                textStyleExpr: itemTextStyleExpr,
            //...
        });

        function itemTextStyleExpr(obj, value) {
            if (value === "undefined") {
                let style = { "font-weight": "bold" };
                if(obj.level === "senior")
                    style["text-decoration"] = "underline";
                return style;
            }
            else
                obj.style = value;
        }
    });

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
