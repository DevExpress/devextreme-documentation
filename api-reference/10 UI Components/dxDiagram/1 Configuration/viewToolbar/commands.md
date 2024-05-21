---
id: dxDiagram.Options.viewToolbar.commands
type: Array<CustomCommand, Enums.Command>
default: undefined
inheritsType: ui/diagram:CustomCommand
---
---
##### shortDescription
Lists commands in the toolbar.

---
The view toolbar can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#customCommand') event to respond to a custom command click.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            viewToolbar: {
                commands: ["zoomLevel", "fullScreen", "units", {name: "sayHello", text: "Say Hello", icon: "blockquote"},
                    {name: "export", icon: "export", items: ["exportSvg","exportPng","exportJpg"]}]
            }, 
            onCustomCommand: function(e) {
                if (e.name == "sayHello")
                alert("Hello!")
            },
        }).dxDiagram("instance");
    });

---