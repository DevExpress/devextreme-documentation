The **Diagram** widget allows you to customize its UI tools with the following options.

- [contextMenu](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/contextMenu/')
- [contextToolbox](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/contextToolbox '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/contextToolbox/')
- [historyToolbar](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/historyToolbar '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/historyToolbar/')
- [mainToolbar](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/mainToolbar '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/mainToolbar/')
- [propertiesPanel](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/propertiesPanel '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/propertiesPanel/')
- [toolbox](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/toolbox '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/toolbox/')
- [viewToolbar](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/viewToolbar '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/viewToolbar/')

![Diagram control data toolbox](/images/diagram/ui-customization.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/UICustomization/"
}


      <!--JavaScript-->
      $(function() {
            var diagram = $("#diagram").dxDiagram({
                  contextMenu: {
                        enabled: true,
                        commands: ["bringToFront","sendToBack", "lock", "unlock"]
                  },
                  contextToolbox: {
                        enabled: true,
                        category: "flowchart"
                        shapeIconsPerRow: 5,
                        width: 200
                  },
                  historyToolbar: {
                        visible: false
                  },
                  mainToolbar: {
                        visible: true,
                        commands: ["undo","redo","separator","fontName","fontSize","separator","bold","italic","underline","separator",
                        "fontColor","lineColor","fillColor","separator"]
                  },
                  propertiesPanel: {
                        visibility: 'visible',
                        tabs: [{
                              groups: [ { title: "Page Properties", commands: ["pageSize", "pageOrientation", "pageColor"] } ]
                        }]
                  },
                  toolbox: {
                        visibility: 'visible',
                        groups: ["general", { category: "flowchart", title: "Flowchart", expanded: true }]
                        showSearch: false,
                        shapeIconsPerRow: 4,
                        width: 220
                  },
                  viewToolbar: {
                        visible: true
                  },
            }).dxDiagram("instance");
      });