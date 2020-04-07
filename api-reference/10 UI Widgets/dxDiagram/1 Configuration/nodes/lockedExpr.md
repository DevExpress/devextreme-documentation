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
A locked item can not be moved, changed, or delete. Users can use the [context menu](/Documentation/Guide/Widgets/Diagram/Diagram_Tools/) to lock and unlock an item.

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
