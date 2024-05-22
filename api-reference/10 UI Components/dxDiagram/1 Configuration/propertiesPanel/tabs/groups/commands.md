---
id: dxDiagram.Options.propertiesPanel.tabs.groups.commands
type: Array<CustomCommand, Enums.Command>
---
---
##### shortDescription
Lists commands in a group.

---
A properties panel group can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#customCommand') event to respond to a custom command click.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
        propertiesPanel: {
            visibility: 'visible',
            tabs: [
                {
                    groups: [ { 
                        title: "Page Properties", 
                        commands: ["pageSize", "pageOrientation", {name: "sayHello", text: "Say Hello", icon: "blockquote"}] 
                    } ]
                }
            ]
        },
            onCustomCommand: function(e) {
                if (e.name == "sayHello")
                alert("Hello!")
            },
        }).dxDiagram("instance");
    });

---