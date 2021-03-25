---
id: dxDiagram.Options.edges.toLineEndExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge's line end tip.

##### param(data): Object
The current edge's data object.

##### return: any
<!-- Description goes here -->

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