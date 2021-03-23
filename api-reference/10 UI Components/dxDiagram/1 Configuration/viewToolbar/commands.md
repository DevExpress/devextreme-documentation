---
id: dxDiagram.Options.viewToolbar.commands
acceptValues: 'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor' | 'simpleView' | 'toolbox'
type: Array<dxDiagramCustomCommand> | Array<String>
default: undefined
inheritsType: dxDiagramCustomCommand
---
---
##### shortDescription
Lists commands in the toolbar.

---
The view toolbar can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Components/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Components/dxDiagram/Events/#customCommand') event to respond to a custom command click.

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

#include common-ref-enum with {
    enum: "`DiagramCommand`",
    values: "`Separator`, `ExportSvg`, `ExportPng`, `ExportJpg`, `Undo`, `Redo`, `Cut`, `Copy`, `Paste`, `SelectAll`, `Delete`, `FontName`, `FontSize`, `Bold`, `Italic`, `Underline`, `FontColor`, `LineColor`, `FillColor`, `TextAlignLeft`, `TextAlignCenter`, `TextAlignRight`, `Lock`, `Unlock`, `SendToBack`, `BringToFront`, `InsertShapeImage`, `EditShapeImage`, `DeleteShapeImage`, `ConnectorLineType`, `ConnectorLineStart`, `ConnectorLineEnd`, `LayoutTreeTopToBottom`, `LayoutTreeBottomToTop`, `LayoutTreeLeftToRight`, `LayoutTreeRightToLeft`, `LayoutLayeredTopToBottom`, `LayoutLayeredBottomToTop`, `LayoutLayeredLeftToRight`, `LayoutLayeredRightToLeft`, `FullScreen`, `ZoomLevel`, `ShowGrid`, `SnapToGrid`, `GridSize`, `Units`, `PageSize`, `PageOrientation`, `PageColor`"
}