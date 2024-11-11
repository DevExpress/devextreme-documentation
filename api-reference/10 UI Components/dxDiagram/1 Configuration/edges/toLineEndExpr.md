---
id: dxDiagram.Options.edges.toLineEndExpr
type: String | function(data, value) | undefined
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's line end tip.

##### param(data): any
The current edge's data object.

##### return: any
An edge's line end tip.

##### param(value): any
An edge's new line end tip or `undefined`.

---
A function assigned to this property should do the following:

* Return an edge's new line end tip when the **value** parameter is set to `undefined`.
* Save a new line end tip value to a data storage when the **value** parameter contains an edge's line end tip. For instance, assign this value to the **obj** parameter's field to save an edge's line end tip in your data source.

An end line tip accepts one of the following values:

* `none`
* `arrow`
* `filledTriangle`
* `outlinedTriangle`

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgItems
                }),
                textExpr: "name",
            },
            edges: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgLinks
                }),
                fromLineEndExpr: linkFromLineEndExpr,
                toLineEndExpr: linkToLineEndExpr
            },
        });
        function linkFromLineEndExpr(obj) {
            return "none";
        }
        function linkToLineEndExpr(obj) {
            return "none";
        }
    });

---