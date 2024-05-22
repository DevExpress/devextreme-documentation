---
id: dxDiagram.Options.propertiesPanel.tabs.commands
type: Array<CustomCommand, Enums.Command>
---
---
##### shortDescription
Lists commands in a tab.

---
Use the [groups](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/propertiesPanel/tabs/groups '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/propertiesPanel/tabs/groups/') property to group commands in the tab. Note, if the [groups](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/propertiesPanel/tabs/groups '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/propertiesPanel/tabs/groups/') property is specified, the **commands** property is not in effect.

A properties panel tab can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#customCommand') event to respond to a custom command click.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
        propertiesPanel: {
            visibility: 'visible',
            tabs: [{
                title: "Page Properties", 
                commands: ["pageSize", "pageOrientation", {name: "sayHello", text: "Say Hello", icon: "blockquote"}] 
            }]
        },
            onCustomCommand: function(e) {
                if (e.name == "sayHello")
                alert("Hello!")
            },
        }).dxDiagram("instance");
    });

---