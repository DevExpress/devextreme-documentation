---
id: dxGantt.showResourceManagerDialog()
---
---
##### shortDescription
Invokes the "Resource Manager" dialog.

---

![DevExtreme Gantt - Invoke Resource Manager](/images/Gantt/invoke-resource-manager.png)

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.showResourceManagerDialog();

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxGanttComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent implements OnAfterViewInit {

        @ViewChild(DxGanttComponent) gantt: DxGanttComponent;

        showDialog() {
            this.gantt.instance.showResourceManagerDialog();
        }

        ngAfterViewInit () {
            this.showDialog();
        }
    }

    <!-- tab: app.component.html -->
    <dx-gantt ...>
    </dx-gantt>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxGanttModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxGanttModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ...>
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxGantt from 'devextreme-vue/gantt';

    export default {
        components: {
            DxGantt
        },
        methods: {
            showDialog() {
                this.gantt.showResourceManagerDialog();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import Gantt from 'devextreme-react/gantt';

    const App = () => {
        const showDialog = () => {
            myGantt.current.instance().showResourceManagerDialog();
        }

        return (
            <Gantt ref={myGantt} />
        );
    }

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        // ...
    )
    <script>
        function showDialog() {
            gantt.showResourceManagerDialog();
        }
    </script>

---

#####See Also#####
- [editing.allowTaskResourceUpdating](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/editing/allowTaskResourceUpdating.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/editing/#allowTaskResourceUpdating')
- [onResourceManagerDialogShowing](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/onResourceManagerDialogShowing.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onResourceManagerDialogShowing')