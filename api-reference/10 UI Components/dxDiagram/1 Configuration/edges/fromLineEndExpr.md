---
id: dxDiagram.Options.edges.fromLineEndExpr
type: String | function(data, value)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that returns an edge's line start tip.

##### param(data): any
The current edge's data object.

##### return: any
An edge's line start tip.

##### param(value): any
When the function is called as a setter, returns the edge's new line start tip; when the function is called as a getter, returns `undefined`.

---
The specified field or expression should return `none`, `arrow`, `filledTriangle`, or `outlinedTriangle`.

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
