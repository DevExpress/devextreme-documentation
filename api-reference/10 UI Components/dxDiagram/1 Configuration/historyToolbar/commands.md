---
id: dxDiagram.Options.historyToolbar.commands
type: Array<CustomCommand, Enums.Command>
default: undefined
inheritsType: ui/diagram:CustomCommand
---
---
##### shortDescription
Lists commands in the history toolbar.

---
The history toolbar can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#customCommand') event to respond to a custom command click.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            historyToolbar: {
                commands: ["undo", "redo", {name: "sayHello", text: "Say Hello", icon: "blockquote"}]
            }, 
            onCustomCommand: function(e) {
                if (e.name == "sayHello")
                alert("Hello!")
            },
        }).dxDiagram("instance");
    });

---