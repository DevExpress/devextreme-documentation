#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesArrayHierarchicalStructure/"
}

Use the [dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#dataSource') option to bind the widget to a hierarchical object. 

Set the [itemsExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#itemsExpr') option to the name of the field that provides data for nested items because the data has a hierarchical structure. The [keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr') option should be specified as well.

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: employees
                    }),
                    textExpr: "Title",
                    itemsExpr: "Items",
                },
            });
        });

        <!-- tab: data.js -->
        var employees = [{
            "Full_Name": "Arthur Miller",
            "Title": "CTO",
            "Items": [{
                "Full_Name": "Brett Wade",
                "Title": "IT Manager",
                "Items": [{
                    "Full_Name": "Taylor Riley",
                    "Title": "Network Admin",
                }, {
                    "Full_Name": "Wally Hobbs",
                    "Title": "Programmer",
                }, {
                    "Full_Name": "Brad Jameson",
                    "Title": "Programmer",
                }]
            }, {
                "Full_Name": "Barb Banks",
                "Title": "Support Manager",
                "Items": [{
                    "Full_Name": "James Anderson",
                    "Title": "Support Assistant",
                }]
            }]
        }];

![Diagram - Node and Edge Arrays](/images/diagram/db-linear-array.png)