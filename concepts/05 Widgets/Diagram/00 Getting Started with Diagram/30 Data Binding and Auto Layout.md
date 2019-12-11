The **Diagram** can load external treelike and graph structures. The supported data structures are listed below.

- A graph constructed from two plain lists of nodes and edges. The **Diagram** binds its [nodes](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/') and [edges](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/edges '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/') collections to the appropriate lists.

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: orgItems
                },
                edges: {
                    dataSource: orgLinks
                },
                layout: "tree"
            });
        });
        
        <!-- tab: data.js -->
        var orgItems = [
            {  
                "id":"106",
                "text":"Development",
                "type":2
            },
            {  
                "id":"108",
                "text":"WPF\nTeam",
                "type":2
            },
            {  
                "id":"109",
                "text":"Javascript\nTeam",
                "type":2
            },
            // ...
        ];

        var orgLinks = [  
            {  
                "id":"124",
                "from":"106",
                "to":"108",
            },
            {  
                "id":"125",
                "from":"106",
                "to":"109",
            },
            // ...
        ];

- A tree constructed from a list where each record specifies its IDs and includes a parent node ID reference. Use the [dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#dataSource') option to bind the widget to the list. You should specify the [keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr') and [parentKeyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/parentKeyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#parentKeyExpr') options because of the data's plain structure. The **Diagram** uses information from the key fields to transform plain data into a tree.  

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "ID",
                        data: employees,
                    }),
                    keyExpr: "ID",
                    textExpr: function(item, value) {
                        if(value !== undefined)
                            item.Title = value;
                        else
                            return item && item.Title.replace(" ", "\n");
                    },
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

- A tree constructed from a hierarchical object. Use the [dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#dataSource') option to bind the widget to the object. You should set the [itemsExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#itemsExpr') option to the name of the field that provides data for nested items because the data has a hierarchical structure.

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: employees,
                    }),
                    textExpr: function(item, value) {
                        if(value !== undefined)
                            item.Title = value;
                        else
                            return item && item.Title.replace(" ", "\n");
                    },
                    itemsExpr: "items"
                },
                layout: "tree"
            });
        });

        <!-- tab: data.js -->
        var employees = [{
            "Full_Name": "John Heart",
            "Prefix": "Mr.",
            "Title": "CEO",
            "City": "Los Angeles",
            "State": "California",
            "Email": "jheart@dx-email.com",
            "Skype": "jheart_DX_skype",
            "Mobile_Phone": "(213) 555-9392",
            "Birth_Date": "1964-03-16",
            "Hire_Date": "1995-01-15",
            "items": [{
                "Full_Name": "Samantha Bright",
                "Prefix": "Dr.",
                "Title": "COO",
                "City": "Los Angeles",
                "State": "California",
                "Email": "samanthab@dx-email.com",
                "Skype": "samanthab_DX_skype",
                "Mobile_Phone": "(213) 555-2858",
                "Birth_Date": "1966-05-02",
                "Hire_Date": "2004-05-24",
            }, {
                "Full_Name": "Arthur Miller",
                "Prefix": "Mr.",
                "Title": "CTO",
                "City": "Denver",
                "State": "Colorado",
                "Email": "arthurm@dx-email.com",
            "Skype": "arthurm_DX_skype",
                "Mobile_Phone": "(310) 555-8583",
            "Birth_Date": "1972-07-11",
                "Hire_Date": "2007-12-18",
                "items": [{
                    "Full_Name": "Brett Wade",
                    "Prefix": "Mr.",
                    "Title": "IT Manager",
                    "City": "Reno",
                    "State": "Nevada",
                    "Email": "brettw@dx-email.com",
                    "Skype": "brettw_DX_skype",
                    "Mobile_Phone": "(626) 555-0358",
                    "Birth_Date": "1968-12-01",
                    "Hire_Date": "2009-03-06",
        // ...

Use the [layout](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/layout.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#layout') option to specify an auto-layout algorithm (*"sugiyama"* or *"tree"*) that widget uses to build a diagram.