---
id: dxDiagram.Options.nodes.lockedExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression whose values indicate whether a node is locked.

##### param(data): Object
The current node's data object.

---
A locked item can not be moved, changed, or delete. Users can use the [context menu](/concepts/05%20Widgets/Diagram/30%20Diagram%20Tools.md '/Documentation/Guide/Widgets/Diagram/Diagram_Tools/') to lock and unlock an item.

The specified field or expression should return `true` or `false`.

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: orgItems
                }),
                textExpr: "Title",
                parentKeyExpr: "Head_ID",
                lockedExpr: itemLockedExpr,
            },
        });
        function itemLockedExpr(obj, value) {
                return obj.type === "group" ? "true" : "false";
        }
    });
