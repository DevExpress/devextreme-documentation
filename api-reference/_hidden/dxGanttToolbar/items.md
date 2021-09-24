---
id: dxGanttToolbar.items
acceptValues: 'separator' | 'undo' | 'redo' | 'expandAll' | 'collapseAll' | 'addTask' | 'deleteTask' | 'zoomIn' | 'zoomOut'
type: Array<dxGanttToolbarItem, String>
inheritsType: dxGanttToolbarItem
---
---
##### shortDescription
Configures toolbar items' settings.

---

The Gantt UI component allows you to add default and create custom toolbar items.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#gantt").dxGantt({
            //...
            toolbar: {
                items: [
                    'undo',
                    'redo',
                    'separator',
                    {
                        widget: "dxButton",
                        options: {
                            text: "About",
                            icon: "info",
                            stylingMode: "text",
                            onClick: function () {
                                // ...
                            }
                        }
                    }
                ]
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt>
        <dxo-toolbar>
            <dxi-item name="undo"></dxi-item>
            <dxi-item name="redo"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item
                widget="dxButton"
                [options]="customButtonOptions">
            </dxi-item>
        </dxo-toolbar>

        <dxi-column dataField="title" caption="Subject" [width]="300"></dxi-column>
        <dxi-column dataField="start" caption="Start Date"></dxi-column>
        <dxi-column dataField="end" caption="End Date"></dxi-column>
    </dx-gantt>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service]
    })

    export class AppComponent {
        constructor(service: Service) {
            this.customButtonOptions = {
                text: 'About',
                icon: 'info',
                stylingMode: 'text',
                onClick: () => {
                    // ...
                }
            };
        }
    }    

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt>
            <DxToolbar>
                <DxItem name="undo"/>
                <DxItem name="redo"/>
                <DxItem name="separator"/>
                <DxItem
                    :options="aboutButtonOptions"
                    widget="dxButton"
                />
            </DxToolbar>
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, DxToolbar, DxItem
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, DxToolbar, DxItem
            }
            data() {
                return {
                    aboutButtonOptions: {
                        text: 'About',
                        icon: 'info',
                        stylingMode: 'text',
                        onClick: () => {
                            // ...
                        }
                    }
                };
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 

    import Gantt, { 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        const aboutButtonOptions = {
            text: 'About',
            icon: 'info',
            stylingMode: 'text',
            onClick: 'onItemClick'
        };

        const onItemClick = (e) => {
            // ...
        };        

        return (
            <Gantt>
                <Toolbar>
                    <Item name="undo" />
                    <Item name="redo" />
                    <Item name="separator" />
                    <Item widget="dxButton" options={this.aboutButtonOptions} />
                </Toolbar>
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Toolbar(t =>  {
            t.Items(i => {
                i.Add().Name(GanttToolbarItem.Undo);
                i.Add().Name(GanttToolbarItem.Redo);
                i.Add().Name(GanttToolbarItem.Separator);
                i.Add().Name("About")
                    .Widget(widget => widget.Button()
                    .OnClick("showInfo")
                    .Icon("info")
                    .Text("About")
                    .StylingMode(ButtonStylingMode.Text)
                    );
​
            });
        })
        // ...
    )

    <!--JavaScript-->
    <script type="text/javascript">
        function showInfo() {
            // ...
        }
    </script>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Toolbar(t =>  {
            t.Items(i => {
                i.Add().Name(GanttToolbarItem.Undo);
                i.Add().Name(GanttToolbarItem.Redo);
                i.Add().Name(GanttToolbarItem.Separator);
                i.Add().Name("About")
                    .Widget(widget => widget.Button()
                    .OnClick("showInfo")
                    .Icon("info")
                    .Text("About")
                    .StylingMode(ButtonStylingMode.Text)
                    );
​
            });
        })
        // ...
    )

    <!--JavaScript-->
    <script type="text/javascript">
        function showInfo() {
            // ...
        }
    </script>

---
