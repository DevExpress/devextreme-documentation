---
id: dxGantt.insertTask(data)
---
---
##### shortDescription
Inserts a new task.

##### param(data): Object
The task data.

---

The **insertTask** method does not update the following data fields in the data source:

- Key value fields.

- Fields that are not assigned to the Gantt's columns.


---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    // Inserts a new task with the specified subject at the end of the other tasks.
    gantt.insertTask({ title: "New Task" });

    // Inserts a child task with the specified subject as a child of the task with ID = 2
    gantt.insertTask({ title: "New Task" , parentId: 2});

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
            // Inserts a new task with the specified subject at the end of the other tasks.
            this.gantt.instance.insertTask({ title: "New Task" });

            // Inserts a child task with the specified subject as a child of the task with ID = 2
            this.gantt.instance.insertTask({ title: "New Task" , parentId: 2});
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
                // Inserts a new task with the specified subject at the end of the other tasks.
                this.gantt.insertTask({ title: "New Task" });

                // Inserts a child task with the specified subject as a child of the task with ID = 2
                this.gantt.insertTask({ title: "New Task" , parentId: 2});
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
                // Inserts a new task with the specified subject at the end of the other tasks.
                this.gantt.insertTask({ title: "New Task" });

                // Inserts a child task with the specified subject as a child of the task with ID = 2
                this.gantt.insertTask({ title: "New Task" , parentId: 2});
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
            // Inserts a new task with the specified subject at the end of the other tasks.
            ganttInstance.insertTask({ title: "New Task" });

            // Inserts a child task with the specified subject as a child of the task with ID = 2
            ganttInstance.insertTask({ title: "New Task" , parentId: 2});
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
            // Inserts a new task with the specified subject at the end of the other tasks.
            ganttInstance.insertTask({ title: "New Task" });

            // Inserts a child task with the specified subject as a child of the task with ID = 2
            ganttInstance.insertTask({ title: "New Task" , parentId: 2});
        }
    </script>

---

#####See Also#####
- [taskInserting](/api-reference/10%20UI%20Components/dxGantt/4%20Events/taskInserting.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#taskInserting')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')