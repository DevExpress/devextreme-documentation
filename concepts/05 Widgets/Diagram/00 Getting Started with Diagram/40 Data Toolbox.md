The **Diagram** widget allows you to import data from a data source into a data toolbox.

Use the [createDataSource](/api-reference/10%20UI%20Widgets/dxDiagram/3%20Methods/createDataSource(parameters).md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#createDataSourceparameters') method to create data toolbox items based on an external data source. End users can drag data items from the toolbox and drop them onto a canvas to build a diagram. 

![Diagram control data toolbox](/images/diagram/data-toolbox.png)

If a data source provides information about nodes' relations, specify the [layout](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/layout.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/#layout') option, to auto-generate a diagram. 

    <!-- tab: index.js -->
    $(function() {
        var diagram = $("#diagram").dxDiagram()
            .dxDiagram("instance");
        diagram.createDataSource({
            key: "0",
            title: "Employees",
            nodes: {
                dataSource: employees,
                keyExpr: "ID",
                textExpr: function(item) {
                    return item && item.Full_Name.replace(" ", "\n");
                },
                parentKeyExpr: "Head_ID"
            },
            layout: "tree"
        });
    });

    <!-- tab: data.js -->
    var employees = [{
        "ID": 1,
        "Head_ID": 0,
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
    // ...