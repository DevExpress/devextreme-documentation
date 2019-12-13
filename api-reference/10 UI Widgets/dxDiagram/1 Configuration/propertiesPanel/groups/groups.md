---
id: dxDiagram.Options.propertiesPanel.groups
type: Array<Object>
default: undefined
---
---
##### shortDescription
Contains an array of command groups in the Properties panel.

---

---

##### jQuery  

    <!--JavaScript-->
    $(function () {
        var diagram = $("#diagram").dxDiagram({
            propertiesPanel: {
                visible: true,
                collapsible: false,
                groups: [
                    { commands: ["units"] },
                    { commands: ["pageSize","pageOrientation","pageColor"] }
                ]
            },
        }).dxDiagram("instance");
    });
    
---