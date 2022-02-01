---
id: dxDiagram
module: ui/diagram
export: default
inherits: Widget
---
---
##### shortDescription
The Diagram UI component provides a visual interface to help you design new and modify existing diagrams.

##### widgettree
width: 500,
height: 660,
simpleView: true,
toolbox: {
    visible: false
},
propertiesPanel: {
    enabled: false
},
nodes: {
    autoLayout: {
        orientation: "horizontal"
    },
    dataSource: [{  
        "id":"101",
        "text":"Development",
        "type":"ellipse"
    },
    {  
        "id":"102",
        "text":"Javascript\nTeam",
        "type": "ellipse"
    },
    {  
        "id":"103",
        "text":"ASP.NET\nTeam",
        "type": "ellipse"
    },
    {  
        "id":"104",
        "text":"Ana\nTrujillo",
        "type":"rectangle"
    },
    {  
        "id":"105",
        "text":"Antonio\nMoreno",
        "type":"rectangle"
    },
    {  
        "id":"106",
        "text":"Patricio\nSimpson",
        "type":"rectangle"
    },
    {  
        "id":"107",
        "text":"Francisco\nChang",
        "type":"rectangle"
    }]
},
edges: {
    dataSource: [{  
        "id":"125",
        "from":"101",
        "to":"102",
    },
    {  
        "id":"127",
        "from":"101",
        "to":"103",
    },
    {  
        "id":"129",
        "from":"103",
        "to":"104",
    },
    {  
        "id":"130",
        "from":"103",
        "to":"105",
    },
    {  
        "id":"139",
        "from":"102",
        "to":"106",
    },
    {  
        "id":"140",
        "from":"102",
        "to":"107",
    }]
}

##### lib
dx-diagram.js, dx.all.js

---
#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/Diagram/Getting_Started_with_Diagram/" 
}
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/Overview/"
}

#####See Also#####
- [How To]('Documentation/Guide/UI_Components/Diagram/How_To')
- [End-User Documentation](https://devexpress.github.io/dotnet-eud/interface-elements-for-web/articles/diagram.html)
#include common-link-setupdevextreme
#include common-link-configurewidget
