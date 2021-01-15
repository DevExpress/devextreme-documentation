---
id: dxDiagram.Options.nodes.itemsExpr
type: String | function(data)
default: undefined
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides a node's child items.

##### param(data): Object
The current node's data object.

---
Specify this option when your source data has a [hierarchical structure](/concepts/05%20Widgets/Diagram/10%20Data%20Binding/30%20Hierarchical%20Array.md '/Documentation/Guide/Widgets/Diagram/Data_Binding/#Hierarchical_Array').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayHierarchicalStructure/"
}

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: new DevExpress.data.ArrayStore({
                    key: "this",
                    data: employees
                }),
                textExpr: "Title",
                itemsExpr: "Items"
            },
        });
    });
    
    <!-- tab: data.js -->
    var employees = [{
        "Full_Name": "John Heart",
        "Title": "CEO",
        "Items": [{
            "Full_Name": "Arthur Miller",
            "Title": "CTO",
            "Items": [{
                "Full_Name": "Brett Wade",
                "Title": "IT Manager",
            }, {
                "Full_Name": "Barb Banks",
                "Title": "Support Manager",
            }]
        }, {
            "Full_Name": "Robert Reagan",
            "Title": "CMO",
            "Items": [{
                "Full_Name": "Ed Holmes",
                "Title": "Sales Manager",
            }]
        }]
    }];
