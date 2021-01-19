---
id: dxDiagram.Options.propertiesPanel.tabs.commands
acceptValues: 'separator' | 'exportSvg' | 'exportPng' | 'exportJpg' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectAll' | 'delete' | 'fontName' | 'fontSize' | 'bold' | 'italic' | 'underline' | 'fontColor' | 'lineColor' | 'fillColor' | 'textAlignLeft' | 'textAlignCenter' | 'textAlignRight' | 'lock' | 'unlock' | 'sendToBack' | 'bringToFront' | 'insertShapeImage' | 'editShapeImage' | 'deleteShapeImage' | 'connectorLineType' | 'connectorLineStart' | 'connectorLineEnd' | 'layoutTreeTopToBottom' | 'layoutTreeBottomToTop' | 'layoutTreeLeftToRight' | 'layoutTreeRightToLeft' | 'layoutLayeredTopToBottom' | 'layoutLayeredBottomToTop' | 'layoutLayeredLeftToRight' | 'layoutLayeredRightToLeft' | 'fullScreen' | 'zoomLevel' | 'showGrid' | 'snapToGrid' | 'gridSize' | 'units' | 'pageSize' | 'pageOrientation' | 'pageColor'
type: Array<dxDiagramCustomCommand> | Array<String>
---
---
##### shortDescription
Lists commands in a tab.

---
Use the [groups](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/propertiesPanel/tabs/groups '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/propertiesPanel/tabs/groups/') option to group commands in the tab. Note, if the [groups](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/propertiesPanel/tabs/groups '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/propertiesPanel/tabs/groups/') option is specified, the **commands** option is not in effect.

A properties panel tab can contain default and custom commands. Handle the [CustomCommand](/api-reference/10%20UI%20Widgets/dxDiagram/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Events/#customCommand') event to respond to a custom command click.

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

#include common-ref-enum with {
    enum: "`DiagramCommand`",
    values: "`Separator`, `ExportSvg`, `ExportPng`, `ExportJpg`, `Undo`, `Redo`, `Cut`, `Copy`, `Paste`, `SelectAll`, `Delete`, `FontName`, `FontSize`, `Bold`, `Italic`, `Underline`, `FontColor`, `LineColor`, `FillColor`, `TextAlignLeft`, `TextAlignCenter`, `TextAlignRight`, `Lock`, `Unlock`, `SendToBack`, `BringToFront`, `InsertShapeImage`, `EditShapeImage`, `DeleteShapeImage`, `ConnectorLineType`, `ConnectorLineStart`, `ConnectorLineEnd`, `LayoutTreeTopToBottom`, `LayoutTreeBottomToTop`, `LayoutTreeLeftToRight`, `LayoutTreeRightToLeft`, `LayoutLayeredTopToBottom`, `LayoutLayeredBottomToTop`, `LayoutLayeredLeftToRight`, `LayoutLayeredRightToLeft`, `FullScreen`, `ZoomLevel`, `ShowGrid`, `SnapToGrid`, `GridSize`, `Units`, `PageSize`, `PageOrientation`, `PageColor`"
}