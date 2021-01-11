The **Diagram** UI component allows you to customize its UI tools with the following options.

- [contextMenu](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/contextMenu/')
- [contextToolbox](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/contextToolbox '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/contextToolbox/')
- [historyToolbar](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/historyToolbar '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/historyToolbar/')
- [mainToolbar](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/mainToolbar '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/mainToolbar/')
- [propertiesPanel](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/propertiesPanel '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/propertiesPanel/')
- [toolbox](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/toolbox '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/toolbox/')
- [viewToolbar](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/viewToolbar '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/viewToolbar/')

![Diagram control data toolbox](/images/diagram/ui-customization.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/UICustomization/"
}

---
##### jQuery

      <!-- tab: index.js -->
      $(function() {
      var diagram = $("#diagram").dxDiagram({
            contextMenu: {
                  enabled: true,
                  commands: ["bringToFront","sendToBack", "lock", "unlock"]
            },
            contextToolbox: {
                  enabled: true,
                  category: "flowchart",
                  shapeIconsPerRow: 5,
                  width: 200
            },
            propertiesPanel: {
                  visibility: 'visible',
                  tabs: [{
                        groups: [ { title: "Page Properties", commands: ["pageSize", "pageOrientation", "pageColor"] } ]
                  }]
            },
            historyToolbar: {
                  visible: false
            },
            viewToolbar: {
                  visible: true,
                  commands: ["zoomLevel", "fullScreen", "units", 
                        {name: "sayHello", text: "Say Hello", icon: "blockquote"},
                        {name: "export", icon: "export", items: ["exportSvg","exportPng","exportJpg"]}]
            },
            mainToolbar: {
                  visible: true,
                  commands: [
                  { name: "undo" },
                  { name: "redo" },
                  { name: "separator" },
                  { name: "fontName" },
                  { name: "fontSize" },
                  { name: "separator" },
                  { name: "bold" },
                  { name: "italic" },
                  { name: "underline" },
                  { name: "separator" },
                  { name: "fontColor" },
                  { name: "lineColor" },
                  { name: "fillColor" },
                  { name: "separator" },
                  { name: "clear", icon: "clearsquare", text: "Clear Diagram" }
                  ]
            },
            toolbox: {
                  visibility: 'visible',
                  groups: [
                  "general", { category: "flowchart", title: "Flowchart", expanded: true }
                  ],
                  showSearch: false,
                  shapeIconsPerRow: 4,
                  width: 220
            },
            onCustomCommand: function(e) {
                  if(e.name === "clear") {
                  var result = DevExpress.ui.dialog.confirm(
                        "Are you sure you want to clear the diagram? This action cannot be undone.", "Warning");
                  result.done(
                        function(dialogResult) {
                              if(dialogResult) {
                              e.component.import("");
                              }
                        }
                  );}
                  else if (e.name == "sayHello")
                  alert("Hello!")
            }
      }).dxDiagram("instance");
      ...

##### Angular

      <!-- tab: app.component.html -->
      <dx-diagram #diagram id="diagram" (onCustomCommand)="onCustomCommand($event)">
      <dxo-context-menu [enabled]="true" [commands]='["bringToFront", "sendToBack", "lock", "unlock"]'>
      </dxo-context-menu>
      <dxo-context-toolbox [enabled]="true" category="flowchart" [width]="200" [shapeIconsPerRow]="5">
      </dxo-context-toolbox>
      <dxo-properties-panel visibility="visible">
            <dxi-tab>
                  <dxi-group title="Page Properties" [commands]='["pageSize","pageOrientation","pageColor"]'></dxi-group>
            </dxi-tab>
      </dxo-properties-panel>
      <dxo-history-toolbar [visible]="false">
      </dxo-history-toolbar>
      <dxo-view-toolbar [visible]="true">
            <dxi-command name="zoomLevel"></dxi-command>
            <dxi-command name="fullScreen"></dxi-command>
            <dxi-command name="units"></dxi-command>
            <dxi-command name="sayHello" icon="blockquote" text="Say Hello"></dxi-command> 
            <dxi-command name="export" icon="export" [items] = '["exportSvg","exportPng","exportJpg"]'></dxi-command>  
      </dxo-view-toolbar>
      <dxo-main-toolbar [visible]="true">
            <dxi-command name="undo"></dxi-command>
            <dxi-command name="redo"></dxi-command>
            <dxi-command name="separator"></dxi-command>
            <dxi-command name="fontName"></dxi-command>
            <dxi-command name="fontSize"></dxi-command>
            <dxi-command name="separator"></dxi-command>
            <dxi-command name="bold"></dxi-command>
            <dxi-command name="italic"></dxi-command>
            <dxi-command name="underline"></dxi-command>
            <dxi-command name="separator"></dxi-command>
            <dxi-command name="fontColor"></dxi-command>
            <dxi-command name="lineColor"></dxi-command>
            <dxi-command name="fillColor"></dxi-command>
            <dxi-command name="separator"></dxi-command>
            <dxi-command name="clear" icon="clearsquare" text="Clear Diagram"></dxi-command>
      </dxo-main-toolbar>
      <dxo-toolbox visibility="visible" [showSearch]="false" [shapeIconsPerRow]="4" [width]="220">
            <dxi-group category="general" title="General"></dxi-group>
            <dxi-group category="flowchart" title="Flowchart" [expanded]="true"></dxi-group>
      </dxo-toolbox>
      </dx-diagram>

      <!-- tab: app.component.ts -->
      // ...
      onCustomCommand(e) {
            if(e.name === "clear") {
                  let result = dialog.confirm("Are you sure you want to clear the diagram? This action cannot be undone.", "Warning");
                  result.then(
                  function(dialogResult) {
                        if(dialogResult) {
                              e.component.import("");
                        }
                  }
                  );
            }
            else if (e.name == "sayHello")
                  alert("Hello!")
      }
      // ...

##### Vue

      <!-- tab: App.vue -->
      <template>
      <DxDiagram
            id="diagram"
            ref="diagram"
            @custom-command="onCustomCommand"
      >
            <DxContextMenu
                  :enabled="true"
                  :commands="['bringToFront', 'sendToBack' , 'lock' , 'unlock' ]"
            />
            <DxContextToolbox
                  :enabled="true"
                  :category="'flowchart'"
                  :shape-icons-per-row="5"
                  :width="200"
            />
            <DxPropertiesPanel
                  :visibility="'visible'"
            >
                  <DxTab>
                        <DxGroup
                              :title="'Page Properties'"
                              :commands="['pageSize', 'pageOrientation' , 'pageColor' ]"
                        />
                  </DxTab>
            </DxPropertiesPanel>
            <DxHistoryToolbar
                  :visible="false"
            />
            <DxViewToolbar
                  :visible="true"
            >
                  <DxCommand
                        :name="'zoomLevel'"
                  />
                  <DxCommand
                        :name="'fullScreen'"
                  />
                  <DxCommand
                        :name="'units'"
                  />
                  <DxCommand
                        :name="'sayHello'"
                        :icon="'blockquote'"
                        :text="'Say Hello'"
                  />
                  <DxCommand
                        :name="'export'"
                        :icon="'export'"
                        :items="['exportSvg','exportPng','exportJpg']"
                  />
                  </DxViewToolbar>
            <DxMainToolbar
                  :visible="true"
            >
                  <DxCommand
                        :name="'undo'"
                  />
                  <DxCommand
                        :name="'redo'"
                  />
                  <DxCommand
                        :name="'separator'"
                  />
                  <DxCommand
                        :name="'fontName'"
                  />
                  <DxCommand
                        :name="'fontSize'"
                  />
                  <DxCommand
                        :name="'separator'"
                  />
                  <DxCommand
                        :name="'bold'"
                  />
                  <DxCommand
                        :name="'italic'"
                  />
                  <DxCommand
                        :name="'underline'"
                  />
                  <DxCommand
                        :name="'separator'"
                  />
                  <DxCommand
                        :name="'fontColor'"
                  />
                  <DxCommand
                        :name="'lineColor'"
                  />
                  <DxCommand
                        :name="'fillColor'"
                  />
                  <DxCommand
                        :name="'separator'"
                  />
                  <DxCommand
                        :name="'clear'"
                        :icon="'clearsquare'"
                        :text="'Clear Diagram'"
                  />
            </DxMainToolbar>
            <DxToolbox
                  :visibility="'visible'"
                  :show-search="false"
                  :shape-icons-per-row="4"
                  :width="220"
            >
                  <DxGroup
                        :category="'general'"
                        :title="'General'"
                  />
                  <DxGroup
                        :category="'flowchart'"
                        :title="'Flowchart'"
                        :expanded="true"
                  />
            </DxToolbox>
      </DxDiagram>
      </template>
      <script>
      import { DxDiagram, DxContextMenu, DxContextToolbox, DxPropertiesPanel, DxGroup, DxTab, 
      DxHistoryToolbar, DxViewToolbar, DxMainToolbar, DxCommand, DxToolbox } from 'devextreme-vue/diagram';
      import dialog from 'devextreme/ui/dialog';
      import 'whatwg-fetch';
      export default {
      components: {
            DxDiagram, DxContextMenu, DxContextToolbox, DxPropertiesPanel, DxGroup, DxTab, 
            DxHistoryToolbar, DxViewToolbar, DxMainToolbar, DxCommand, DxToolbox
      },
      mounted() {
            var diagram = this.$refs['diagram'].instance;
            fetch('data/diagram-flow.json')
                  .then(function(response) {
                        return response.json();
                  })
                  .then(function(json) {
                        diagram.import(JSON.stringify(json));
                  })
                  .catch(function() {
                        throw 'Data Loading Error';
                  });
      },
      methods: {
            onCustomCommand(e) {
                  if(e.name === 'clear') {
                        var result = dialog.confirm('Are you sure you want to clear the diagram? 
                        This action cannot be undone.', 'Warning');
                        result.then(
                              function(dialogResult) {
                                    if(dialogResult) {
                                    e.component.import('');
                                    }
                              }
                        );
                  }
                  else if (e.name == "sayHello")
                        alert("Hello!")
            }
      }
      };
      </script>
      
##### React

      <!-- tab: App.js -->
      class App extends React.Component {
            // ...
            onCustomCommand(e) {
                  if(e.name === 'clear') {
                        var result = dialog.confirm('Are you sure you want to clear the diagram? 
                              This action cannot be undone.', 'Warning');
                        result.then(
                              function(dialogResult) {
                                    if(dialogResult) {
                                          e.component.import('');
                                    }
                              }
                        );
                  }
                  else if (e.name == "sayHello")
                        alert("Hello!") 
            }

            render() {
                  return (
                        <Diagram id="diagram" ref={this.diagramRef} onCustomCommand={this.onCustomCommand}>
                              <ContextMenu enabled={true} commands={['bringToFront', 'sendToBack', 'lock', 'unlock']} />
                              <ContextToolbox enabled={true} category="flowchart" shapeIconsPerRow={5} width={200} />
                              <PropertiesPanel visibility="visible">
                                    <Tab>
                                          <Group title="Page Properties" commands={['pageSize', 'pageOrientation', 'pageColor']} />
                                    </Tab>
                              </PropertiesPanel>
                              <HistoryToolbar visible={false} />
                              <ViewToolbar visible={true}>
                                    <Command name="zoomLevel" />
                                    <Command name="fullScreen" />
                                    <Command name="units" />
                                    <Command name="sayHello" icon="blockquote" text="Say Hello" />
                                    <Command name="export" icon="export" items = {["exportSvg","exportPng","exportJpg"]} />
                              </ViewToolbar>
                              <MainToolbar visible={true}>
                                    <Command name="undo" />
                                    <Command name="redo" />
                                    <Command name="separator" />
                                    <Command name="fontName" />
                                    <Command name="fontSize" />
                                    <Command name="separator" />
                                    <Command name="bold" />
                                    <Command name="italic" />
                                    <Command name="underline" />
                                    <Command name="separator" />
                                    <Command name="fontColor" />
                                    <Command name="lineColor" />
                                    <Command name="fillColor" />
                                    <Command name="separator" />
                                    <Command name="clear" icon="clearsquare" text="Clear Diagram" />
                              </MainToolbar>
                              <Toolbox visibility="visible" showSearch={false} shapeIconsPerRow={4} width={220}>
                                    <Group category="general" title="General" />
                                    <Group category="flowchart" title="Flowchart" expanded={true} />
                              </Toolbox>
                        </Diagram>
                  );
            }
      }

##### ASP.NET Core Controls

      <!-- tab: Diagram.cshtml -->
      @(Html.DevExtreme().Diagram()
            .ID("diagram")
            .ContextMenu(cm => cm
                  .Enabled(true)
                  .Commands(new[] {
                        DiagramCommand.BringToFront,
                        DiagramCommand.SendToBack,
                        DiagramCommand.Lock,
                        DiagramCommand.Unlock
                  })
            )
            .ContextToolbox(ct => ct
                  .Enabled(true)
                  .Category(DiagramShapeCategory.Flowchart)
                  .ShapeIconsPerRow(5)
                  .Width(200)
            )
            .PropertiesPanel(pp => pp
                  .Visibility(DiagramPanelVisibility.Visible)
                  .Tabs(t => {
                        t.Add()
                        .Groups(g => {
                              g.Add()
                                    .Title("Page Properties")
                                    .Commands(new[] { DiagramCommand.PageSize, DiagramCommand.PageOrientation, 
                                          DiagramCommand.PageColor });
                        });
                  })
            )
            .HistoryToolbar(tb => tb
                  .Visible(false)
            )
            .ViewToolbar(tb => tb
                  .Visible(true)
                  .Commands(cmds => {
                        cmds.Add().Name(DiagramCommand.ZoomLevel);
                        cmds.Add().Name(DiagramCommand.FullScreen);
                        cmds.Add().Name(DiagramCommand.Units);
                        cmds.Add().Name("sayHello").Text("Say Hello").Icon("blockquote");
                        cmds.Add().Name("export").Icon("export").Items(items => {
                              items.Add().Name(DiagramCommand.ExportSvg);
                              items.Add().Name(DiagramCommand.ExportPng);
                              items.Add().Name(DiagramCommand.ExportJpg);
                        });
                  })
            )
            .MainToolbar(tb => tb
                  .Visible(true)
                  .Commands(cmds => {
                        cmds.Add().Name(DiagramCommand.Undo);
                        cmds.Add().Name(DiagramCommand.Redo);
                        cmds.Add().Name(DiagramCommand.Separator);
                        cmds.Add().Name(DiagramCommand.FontName);
                        cmds.Add().Name(DiagramCommand.FontSize);
                        cmds.Add().Name(DiagramCommand.Separator);
                        cmds.Add().Name(DiagramCommand.Bold);
                        cmds.Add().Name(DiagramCommand.Italic);
                        cmds.Add().Name(DiagramCommand.Underline);
                        cmds.Add().Name(DiagramCommand.Separator);
                        cmds.Add().Name(DiagramCommand.FontColor);
                        cmds.Add().Name(DiagramCommand.LineColor);
                        cmds.Add().Name(DiagramCommand.FillColor);
                        cmds.Add().Name(DiagramCommand.Separator);
                        cmds.Add().Name("clear").Text("Clear Diagram").Icon("clearsquare");
                  })
            )
            .Toolbox(tb => tb
                  .Visibility(DiagramPanelVisibility.Visible)
                  .Groups(g => {
                        g.Add().Category(DiagramShapeCategory.General).Title("General");
                        g.Add().Category(DiagramShapeCategory.Flowchart).Title("Flowchart").Expanded(true);
                  })
                  .ShowSearch(false)
                  .ShapeIconsPerRow(4)
                  .Width(220)
            )
            .OnCustomCommand(@<text>
                  function(e) {
                        if(e.name === "clear") {
                              var result = DevExpress.ui.dialog.confirm("Are you sure you want to clear the diagram? 
                                    This action cannot be undone.", "Warning");
                              result.done(
                                    function(dialogResult) {
                                          if(dialogResult) {
                                                e.component.import("");
                                          }
                                    }
                              );
                        }
                  else if (e.name == "sayHello")
                        alert("Hello!")
                  }
            </text>)
      )

##### ASP.NET MVC Controls

      <!-- tab: Diagram.cshtml -->
      @(Html.DevExtreme().Diagram()
            .ID("diagram")
            .ContextMenu(cm => cm
                  .Enabled(true)
                  .Commands(new[] {
                        DiagramCommand.BringToFront,
                        DiagramCommand.SendToBack,
                        DiagramCommand.Lock,
                        DiagramCommand.Unlock
                  })
            )
            .ContextToolbox(ct => ct
                  .Enabled(true)
                  .Category(DiagramShapeCategory.Flowchart)
                  .ShapeIconsPerRow(5)
                  .Width(200)
            )
            .PropertiesPanel(pp => pp
                  .Visibility(DiagramPanelVisibility.Visible)
                  .Tabs(t => {
                        t.Add()
                        .Groups(g => {
                              g.Add()
                                    .Title("Page Properties")
                                    .Commands(new[] { DiagramCommand.PageSize, DiagramCommand.PageOrientation, 
                                          DiagramCommand.PageColor });
                        });
                  })
            )
            .HistoryToolbar(tb => tb
                  .Visible(false)
            )
            .ViewToolbar(tb => tb
                  .Visible(true)
                  .Commands(cmds => {
                        cmds.Add().Name(DiagramCommand.ZoomLevel);
                        cmds.Add().Name(DiagramCommand.FullScreen);
                        cmds.Add().Name(DiagramCommand.Units);
                        cmds.Add().Name("sayHello").Text("Say Hello").Icon("blockquote");
                        cmds.Add().Name("export").Icon("export").Items(items => {
                              items.Add().Name(DiagramCommand.ExportSvg);
                              items.Add().Name(DiagramCommand.ExportPng);
                              items.Add().Name(DiagramCommand.ExportJpg);
                        });
                  })
            )
            .MainToolbar(tb => tb
                  .Visible(true)
                  .Commands(cmds => {
                        cmds.Add().Name(DiagramCommand.Undo);
                        cmds.Add().Name(DiagramCommand.Redo);
                        cmds.Add().Name(DiagramCommand.Separator);
                        cmds.Add().Name(DiagramCommand.FontName);
                        cmds.Add().Name(DiagramCommand.FontSize);
                        cmds.Add().Name(DiagramCommand.Separator);
                        cmds.Add().Name(DiagramCommand.Bold);
                        cmds.Add().Name(DiagramCommand.Italic);
                        cmds.Add().Name(DiagramCommand.Underline);
                        cmds.Add().Name(DiagramCommand.Separator);
                        cmds.Add().Name(DiagramCommand.FontColor);
                        cmds.Add().Name(DiagramCommand.LineColor);
                        cmds.Add().Name(DiagramCommand.FillColor);
                        cmds.Add().Name(DiagramCommand.Separator);
                        cmds.Add().Name("clear").Text("Clear Diagram").Icon("clearsquare");
                  })
            )
            .Toolbox(tb => tb
                  .Visibility(DiagramPanelVisibility.Visible)
                  .Groups(g => {
                        g.Add().Category(DiagramShapeCategory.General).Title("General");
                        g.Add().Category(DiagramShapeCategory.Flowchart).Title("Flowchart").Expanded(true);
                  })
                  .ShowSearch(false)
                  .ShapeIconsPerRow(4)
                  .Width(220)
            )
            .OnCustomCommand(@<text>
                  function(e) {
                        if(e.name === "clear") {
                              var result = DevExpress.ui.dialog.confirm("Are you sure you want to clear the diagram? 
                                    This action cannot be undone.", "Warning");
                              result.done(
                                    function(dialogResult) {
                                          if(dialogResult) {
                                                e.component.import("");
                                          }
                                    }
                              );
                        }
                  else if (e.name == "sayHello")
                        alert("Hello!")
                  }
            </text>)
      )

---