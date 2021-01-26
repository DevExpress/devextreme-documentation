#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayHierarchicalStructure/"
}

Use the [nodes.dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#dataSource') property to bind the UI component to a hierarchical object. 

Specify the following **required options**: [nodes.keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#keyExpr'), [nodes.itemsExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#itemsExpr').

**Do not specify** the [nodes.parentKeyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#parentKeyExpr') and [edges](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/') options because they are a part of another binding mode.

During the binding process, the UI component creates a shape for every bound node and all connectors that are between a node and its children. Note that the edges are not maintained as entities in a data source, thus the detached connector disappears after it is rebound.

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: employees
                    }),
                    keyExpr: "ID",
                    textExpr: "Title",
                    itemsExpr: "Items",
                },
            });
        });

        <!-- tab: data.js -->
        var employees = [{
            "ID": 3,
            "Full_Name": "Arthur Miller",
            "Title": "CTO",
            "Items": [{
                "ID": 6,
                "Full_Name": "Brett Wade",
                "Title": "IT Manager",
                "Items": [{
                    "ID": 21,
                    "Full_Name": "Taylor Riley",
                    "Title": "Network Admin",
                }, {
                    "ID": 23,
                    "Full_Name": "Wally Hobbs",
                    "Title": "Programmer",
                }, {
                    "ID": 24,
                    "Full_Name": "Brad Jameson",
                    "Title": "Programmer",
                }]
            }, {
                "ID": 9,
                "Full_Name": "Barb Banks",
                "Title": "Support Manager",
                "Items": [{
                    "ID": 18,
                    "Full_Name": "James Anderson",
                    "Title": "Support Assistant",
                }]
            }]
        }];

![Diagram - Node and Edge Arrays](/images/diagram/db-linear-array.png)
