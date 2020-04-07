---
id: dxDiagram.Options.edges.toExpr
type: String | function(data)
default: 'to'
---
---
##### shortDescription
Specifies the name of a data source field or an expression that provides an edge's end node key.

##### param(data): Object
The current edge's data object.

---
Specify this option if your source data is contained in two ([node and edge](/Documentation/Guide/Widgets/Diagram/Data_Binding/#Node_and_Edge_Arrays)) data sources.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesAndEdgesArrays/"
}

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: orgItems
            },
            edges: {
                dataSource: orgLinks,
                fromExpr: "from",
                toExpr: "to"
            },
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