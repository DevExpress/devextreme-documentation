---
id: dxDiagram.Options.contextMenu.commands
type: Array<CustomCommand, Enums.Command>
default: undefined
inheritsType: ui/diagram:CustomCommand
---
---
##### shortDescription
Lists commands in the context menu.

---
[note] The 'fontColor', 'lineColor', 'fillColor', and 'pageColor' commands have no effect in the context menu.

The context menu can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#customCommand') event to respond to a custom command click.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            contextMenu: {
                commands: ["cut","copy", "paste", {name: "sayHello", text: "Say Hello", icon: "blockquote"}]
            }, 
            onCustomCommand: function(e) {
                if (e.name == "sayHello")
                alert("Hello!")
            },
        }).dxDiagram("instance");
    });

---