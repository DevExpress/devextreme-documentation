Use the [dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#dataSource') option to bind the widget to a list where each record specifies its IDs and includes a parent node ID reference.

Specify the [keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr') and [parentKeyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#parentKeyExpr') options, because of the data's plain structure. The **Diagram** uses information from key fields to transform plain data into a tree.  

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "ID",
                        data: employees,
                    }),
                    keyExpr: "ID",
                    textExpr: "Title",
                    parentKeyExpr: "Head_ID"
                },
                layout: "tree"
            });
        });

        <!-- tab: data.js -->
        var employees = [{
            "ID": 1,
            "Full_Name": "John Heart",
            "Prefix": "Mr.",
            "Title": "CEO",
            "City": "Los Angeles",
            "State": "California",
            "Email": "jheart@dx-email.com",
            "Skype": "jheart_DX_skype",
            "Mobile_Phone": "(213) 555-9392",
            "Birth_Date": "1964-03-16",
            "Hire_Date": "1995-01-15"
        }, {
            "ID": 2,
            "Head_ID": 1,
            "Full_Name": "Samantha Bright",
            "Prefix": "Dr.",
            "Title": "COO",
            "City": "Los Angeles",
            "State": "California",
            "Email": "samanthab@dx-email.com",
            "Skype": "samanthab_DX_skype",
            "Mobile_Phone": "(213) 555-2858",
            "Birth_Date": "1966-05-02",
            "Hire_Date": "2004-05-24"
        },
        // ...
        ];
