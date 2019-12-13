Use the [dataSource](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#dataSource') option to bind the widget to a hierarchical object. 

Set the [itemsExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/itemsExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#itemsExpr') option to the name of the field that provides data for nested items because the data has a hierarchical structure. The [keyExpr](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/nodes/keyExpr.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr') option should be specified as well.

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "this",
                        data: employees,
                    }),
                    textExpr: "Title",
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
