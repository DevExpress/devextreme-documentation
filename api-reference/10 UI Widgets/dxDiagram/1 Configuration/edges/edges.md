---
id: dxDiagram.Options.edges
type: Object
default: null
---
---
##### shortDescription
An array of diagram edges.

---
Use the **edges** option to populate an array of diagram edges.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/NodesAndEdgesArrays/"
}

---
#####jQuery

    <!--JavaScript-->
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
    
---