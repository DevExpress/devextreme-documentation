---
id: dxGantt.getVisibleDependencyKeys()
---
---
##### shortDescription
Gets the keys of the visible dependencies.

##### return: Array<Object>
The keys.

---

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    //...
    var keys = gantt.getVisibleDependencyKeys();

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxGanttComponent } from "devextreme-angular";
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })    
    
    export class AppComponent {
        @ViewChild(DxGanttComponent, { static: false }) gantt: DxGanttComponent;
        // Prior to Angular 8
        // @ViewChild(DxGanttComponent) gantt: DxGanttComponent;

        yourCustomMethod() {
            this.gantt.instance.getVisibleDependencyKeys();
            // ...
        }
    }

    <!-- tab: app.component.html -->
    <dx-gantt ... >
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
        <DxGantt ...
            :ref="ganttRef">
        </DxGantt>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css';

    import DxGantt from 'devextreme-vue/gantt';

    const ganttRef = 'gantt';

    export default {
        components: {
            DxGantt
        },
        data() {
            return {
                ganttRef
            }
        },
        computed: {
            gantt: function() {
                return this.$refs[ganttRef].instance;
            }
        },
        methods: {
            yourCustomMethod(){
                this.gantt.getVisibleDependencyKeys();
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Gantt from 'devextreme-react/gantt';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.ganttRef = React.createRef();

            this.yourCustomMethod = () => {
                this.gantt.getVisibleDependencyKeys();
                // ...
            }
        }

        get gantt() {
            return this.ganttRef.current.instance();
        }

        render() {
            return (
                <Gantt ...
                    ref={this.ganttRef}>
                </Gantt>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        @* ... *@
    )

    <script type="text/javascript">
        function getGanttInstance() {
            return $("#gantt").dxGantt("instance");
        }
        function yourCustomMethod() {
            var ganttInstance = getGanttInstance();
            ganttInstance.getVisibleDependencyKeys();
            // ...
        }
    </script>

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        @* ... *@
    )

    <script type="text/javascript">
        function getGanttInstance() {
            return $("#gantt").dxGantt("instance");
        }
        function yourCustomMethod() {
            var ganttInstance = getGanttInstance();
            ganttInstance.getVisibleDependencyKeys();
            // ...
        }
    </script>

---

#####See Also#####
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')