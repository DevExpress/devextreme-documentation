---
id: dxDiagram.createDataSource(parameters)
---
---
##### shortDescription
Populates the toolbox with items from a data source.

##### param(parameters): DiagramDataSourceParameters
Data source parameters.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/DataSources/"
}

---
#####jQuery

    <!--JavaScript-->
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
    
---