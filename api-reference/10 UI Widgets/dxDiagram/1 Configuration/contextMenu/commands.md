---
id: dxDiagram.Options.contextMenu.commands
acceptValues: 'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor'
type: Array<dxDiagramCustomCommand> | Array<String>
default: undefined
inheritsType: dxDiagramCustomCommand
---
---
##### shortDescription
Lists commands in the context menu.

---
The context menu can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Widgets/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Events/#customCommand') event to respond to a custom command click.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            contextMenu: {
                commands: ["cut","copy", "paste", {name: "sayHello", text: "Say Hello", icon: "blockquote"}]
            }, 
            onCustomCommand: function(e) {
                if (e.name == "sayHello")
                alert("Hello!)
            },
        }).dxDiagram("instance");
    });


---      