---
id: dxGantt.exportToPdf(options)
---
---
##### shortDescription
[tags] ctp

Exports Gantt chart data to a PDF document.

##### return: Promise<any>
A Promise that is resolved after the Gantt chart is exported. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(options): Object
PDF export options.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/ExportToPDF/"
}

The **exportToPdf** method allows you to save information about the Gantt chart's layout, appearance, and tasks. This method supports the following options:

- **format** {string | width?: number, height?: number } - Specifies the document size.
- **landscape** {boolean} - Specifies whether to use horizontal orientation for the document.
- **fileName** {string} - Specifies the file name.
- **exportMode** {"all", "treeList", "chart"} -  Specifies which part of the component to export (chart area, tree list area, or the entire component).
- **dateRange**: {"all" | "visible" | startDate? : Date, endDate? : Date, startIndex? : number, endIndex? : number } - Specifies the date range for which to export tasks.
- **margins** { left?: number, top?: number, right?: number, bottom?: number } - Specifies the outer indents of the exported area.

Use the following settings to export the Gantt chart to a PDF document:

---

    <!--JavaScript-->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.exportToPdf({
        format: "A4",
        landscape: true,
        exportMode: "chart",
        dateRange: "visible"
    });

---

Use the following settings to process the PDF document when the export is complete:

---

    <!--JavaScript-->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.exportToPdf({
        format: "A4",
        landscape: true,
        exportMode: "chart",
        dateRange: "visible"
    }).then(function(doc) { 
        doc.addPage(); 
        // your code
        doc.save('customDoc.pdf');
    });

---

Use the following settings to print the exported PDF document:

---

    <!--JavaScript-->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.exportToPdf({
        format: "A4",
        landscape: true,
        exportMode: "chart",
        dateRange: "visible"
    }).then(function(doc) { 
        doc.autoPrint(); 
        window.open(doc.output('your_url'), '_blank');
    });


---

---

##### jQuery

    <!-- tab: index.js -->
    var gantt = $("#ganttContainer").dxGantt("instance");
    gantt.exportToPdf({
        format: "A4",
        landscape: true,
        exportMode: "chart",
        dateRange: "visible"
    });

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
            this.gantt.instance.exportToPdf({
                format: "A4",
                landscape: true,
                exportMode: "chart",
                dateRange: "visible"
            });
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
            this.gantt.exportToPdf({
                format: "A4",
                landscape: true,
                exportMode: "chart",
                dateRange: "visible"
            });
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
                this.gantt.exportToPdf({
                    format: "A4",
                    landscape: true,
                    exportMode: "chart",
                    dateRange: "visible"
                });
                // ...
            }
        }

        get gantt() {
            return this.ganttRef.current.instance;
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
            ganttInstance.exportToPdf({
                format: "A4",
                landscape: true,
                exportMode: "chart",
                dateRange: "visible"
            });
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
            ganttInstance.exportToPdf({
                format: "A4",
                landscape: true,
                exportMode: "chart",
                dateRange: "visible"
            });
            // ...
        }
    </script>


---


