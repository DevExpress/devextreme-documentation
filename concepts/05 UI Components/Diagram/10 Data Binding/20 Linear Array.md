#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayPlainStructure/"
}

Use the [nodes.dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#dataSource') property to bind the UI component to a list of nodes where each record specifies a node's key value and includes a parent node's key value reference.

Specify the following **required properties**: [nodes.keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#keyExpr'), [nodes.parentKeyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#parentKeyExpr').

**Do not specify** the [nodes.itemsExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/nodes/#itemsExpr') and [edges](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/edges/') properties because they are a part of another binding mode.

During the binding process, the UI component creates a shape for every bound node and a connector between every pair of nodes linked by the _Key_ - _Parent Key_ reference. Note that edges are not maintained as entities in a data source, thus a detached connector disappears after rebinding.

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: employees
                    }),
                    keyExpr: "ID",
                    parentKeyExpr: "Head_ID",            
                    textExpr: "Title",
                    heightExpr: function() {return 0.4} 
                },
            });
        });

        <!-- tab: data.js -->
        var employees = [{
            "ID": 3,
            "Full_Name": "Arthur Miller",
            "Title": "CTO",
        }, {
            "ID": 6,
            "Head_ID": 3,
            "Full_Name": "Brett Wade",
            "Title": "IT Manager",
        }, {
            "ID": 9,
            "Head_ID": 3,
            "Full_Name": "Barb Banks",
            "Title": "Support Manager",
        }, {
            "ID": 18,
            "Head_ID": 9,
            "Full_Name": "James Anderson",
            "Title": "Support Assistant",
        }, {
            "ID": 21,
            "Head_ID": 6,
            "Full_Name": "Taylor Riley",
            "Title": "Network Admin",
        }, {
            "ID": 23,
            "Head_ID": 6,
            "Full_Name": "Wally Hobbs",
            "Title": "Programmer",
        }, {
            "ID": 24,
            "Head_ID": 6,
            "Full_Name": "Brad Jameson",
            "Title": "Programmer",
        }];

![Diagram - Node and Edge Arrays](/images/diagram/db-linear-array.png)