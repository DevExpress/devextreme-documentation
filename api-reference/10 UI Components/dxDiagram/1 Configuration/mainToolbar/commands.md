---
id: dxDiagram.Options.mainToolbar.commands
type: Array<dxDiagramCustomCommand> | Array<Enums.DiagramCommand>
default: undefined
inheritsType: dxDiagramCustomCommand
---
---
##### shortDescription
Lists commands in the toolbar.

---
The main toolbar can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#customCommand') event to respond to a custom command click.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            mainToolbar: {
                visible: true,
                commands: ["fontName", "fontSize", "bold", "italic", "underline", {name: "sayHello", text: "Say Hello", icon: "blockquote"}]
            }, 
            onCustomCommand: function(e) {
                if (e.name == "sayHello")
                alert("Hello!")
            },
        }).dxDiagram("instance");
    });

---