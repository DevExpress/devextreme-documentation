#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayPlainStructure/"
}

Use the [dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#dataSource') option to bind the widget to a list where each record specifies its IDs and includes a parent node ID reference.

Specify the [keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr') and [parentKeyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#parentKeyExpr') options, because of the data's plain structure. The **Diagram** uses information from key fields to transform plain data into a tree.  

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