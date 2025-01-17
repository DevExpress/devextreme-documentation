---
id: dxDiagram.Options.nodes.styleExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns a node style.

##### param(data): any
The current node's data object.

##### return: any
A node style.

##### param(value): any
A node's new style or `undefined`.

---
A data source field assigned to this property should contain in-line style declarations in string format. For instance, `"fill: #d9d9d9; stroke: #999999"`.

A function assigned to this property should do the following:

* Return a node's new style as a set of CSS rules in JSON format when the **value** parameter is set to `undefined`. For instance, `{"fill": "#d9d9d9"; "stroke": "#999999"}`.
* Save a new style value to a data storage when the **value** parameter contains a node's style. For instance, assign this value to the **obj** parameter's field to save a node's style in your data source.

---
##### jQuery

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

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/AdvancedDataBinding/"
}
