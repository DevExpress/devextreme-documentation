---
id: dxGantt.insertResource(data, taskKeys)
---
---
##### shortDescription
Inserts a new resource.

##### param(data): Object
The resource data.

##### param(taskKeys?): Array<Object>
An array of task keys.

---

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    // Inserts a new resource 
    gantt.insertResource({ text: "New Resource" });

    // Inserts a new resource and assigns it to an individual task
    gantt.insertResource({ text: "New Resource" }, [6]);
    
    // Inserts a new resource and assigns it to multiple tasks
    gantt.insertResource({ text: "New Resource" }, [6,8]);

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
            // Inserts a new resource 
            this.gantt.instance.insertResource({ text: "New Resource" });

            // Inserts a new resource and assigns it to an individual task
            this.gantt.instance.insertResource({ text: "New Resource" }, [6]);
            
            // Inserts a new resource and assigns it to multiple tasks
            this.gantt.instance.insertResource({ text: "New Resource" }, [6,8]);
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
                // Inserts a new resource 
                this.gantt.insertResource({ text: "New Resource" });

                // Inserts a new resource and assigns it to an individual task
                this.gantt.insertResource({ text: "New Resource" }, [6]);
                
                // Inserts a new resource and assigns it to multiple tasks
                this.gantt.insertResource({ text: "New Resource" }, [6,8]);
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
                // Inserts a new resource 
                this.gantt.insertResource({ text: "New Resource" });

                // Inserts a new resource and assigns it to an individual task
                this.gantt.insertResource({ text: "New Resource" }, [6]);
                
                // Inserts a new resource and assigns it to multiple tasks
                this.gantt.insertResource({ text: "New Resource" }, [6,8]);
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
            // Inserts a new resource 
            ganttInstance.insertResource({ text: "New Resource" });

            // Inserts a new resource and assigns it to an individual task
            ganttInstance.insertResource({ text: "New Resource" }, [6]);
            
            // Inserts a new resource and assigns it to multiple tasks
            ganttInstance.insertResource({ text: "New Resource" }, [6,8]);
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
            // Inserts a new resource 
            ganttInstance.insertResource({ text: "New Resource" });

            // Inserts a new resource and assigns it to an individual task
            ganttInstance.insertResource({ text: "New Resource" }, [6]);
            
            // Inserts a new resource and assigns it to multiple tasks
            ganttInstance.insertResource({ text: "New Resource" }, [6,8]);
        }
    </script>

---

#####See Also#####
- [resourceInserting](/api-reference/10%20UI%20Components/dxGantt/4%20Events/resourceInserting.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#resourceInserting')
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')