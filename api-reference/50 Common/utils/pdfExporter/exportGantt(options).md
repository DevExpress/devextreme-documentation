---
id: pdfExporter.exportGantt(options)
module: pdf_exporter
export: exportGantt
---
---
##### shortDescription
Exports grid data to a PDF file.

##### return: Promise<any>
A Promise that is resolved after the Gantt chart is exported. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(options): PdfExportGanttProps
Export settings.

---

This method requires the <a href="https://github.com/MrRio/jsPDF" target="_blank">jsPDF</a> library to export data and the <a href="https://github.com/simonbengtsson/jsPDF-AutoTable" target="_blank">jsPDF-AutoTable</a> plugin to create tables in exported files.

You can call this method at any point in your application. In this example, we call this method in a standalone toolbar item's [onClick](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') handler:

---
##### jQuery

    <!--JavaScript-->
    const ganttInstance = $('#gantt').dxGantt({
        toolbar: {
            items: [
                // ...
                {
                    widget: 'dxButton',
                    options: {
                        icon: 'exportpdf',
                        hint: 'Export to PDF',
                        stylingMode: 'text',
                        onClick() {
                            exportGantt();
                        },
                    },
                },
            ],
        },
    }).dxGantt('instance');

    function exportGantt() {
        DevExpress.pdfExporter.exportGantt({
            component: ganttInstance,
            createDocumentMethod: (args) => new jsPDF(args),
            format: 'a4',
            exportMode: 'all',
            dateRange: 'visible'
        },
    ).then((doc) => {
      doc.save('gantt.pdf');
      });
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ...>
        <dxo-toolbar>
            <!-- ... -->    
            <dxi-item
                widget="dxButton"
                [options]="exportButtonOptions">
            </dxi-item>
        </dxo-toolbar>
    </dx-gantt>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { jsPDF } from 'jspdf';
    import 'jspdf-autotable';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        @ViewChild(DxGanttComponent, { static: false }) gantt: DxGanttComponent;
        exportButtonOptions: any;

        constructor() {
            this.exportButtonOptions = {
                hint: 'Export to PDF',
                icon: 'exportpdf',
                stylingMode: 'text',
                onClick: () => this.exportButtonClick()
            };
        }

        exportButtonClick() {
            const gantt = this.gantt.instance;  
            
            exportGanttToPdf(
                {
                    component: gantt,
                    createDocumentMethod: (args?: any) => new jsPDF(args),
                    format: 'a4',
                    exportMode: 'all'',
                    dateRange: 'visible''
                }            
            ).then(doc => doc.save('gantt.pdf'));
        }
        // ...      
    }    

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxGanttComponent, DxGanttModule } from 'devextreme-angular';
    import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';

    @NgModule({
        imports: [
            BrowserModule,
            DxGanttModule
        ],        
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxToolbar>
                <!-- ... -->
                <DxItem
                    :options="exportButtonOptions"
                    widget="dxButton"
                />
            </DxToolbar>        
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt,
            DxToolbar,
            DxItem
            // ... 
        } from 'devextreme-vue/gantt';

        import { jsPDF } from 'jspdf';
        import 'jspdf-autotable';
        import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';
        
        const ganttRef = 'gantt';

        export default {
            components: { 
                DxGantt,
                DxToolbar,
                DxItem
                // ... 
            },
            data() {
                return {
                    exportButtonOptions: {
                        hint: 'Export to PDF',
                        icon: 'exportpdf',
                        stylingMode: 'text',
                        onClick: () => {
                            this.exportGantt();
                        },
                    },
                };            
            },
            computed: {
                gantt() {
                    return this.$refs[ganttRef].instance;
                },
            },
            methods: {
                exportGantt() {
                    exportGanttToPdf({
                        component: this.gantt,
                        createDocumentMethod: (args) => new jsPDF(args),
                        format: 'a4',
                        exportMode: 'all',
                        dateRange: 'visible',
                    }).then((doc) => doc.save('gantt.pdf'));
                },
            },
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 

    import Gantt, { 
        Toolbar, Item,
    } from 'devextreme-react/gantt';

    import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';
 ​   import { jsPDF } from 'jspdf';
    import 'jspdf-autotable';

    const App = () => {
        const ganttRef = React.createRef();

        const exportButtonOptions = {
            icon: 'exportpdf',
            hint: 'Export to PDF',
            stylingMode: 'text',
            onClick: 'exportButtonClick',
        };

        const exportButtonClick = (e) => {
            const gantt = ganttRef.current.instance;
            exportGanttToPdf(
                {
                    component: gantt,
                    createDocumentMethod: (args) => new jsPDF(args),
                    format: 'a4',
                    exportMode: 'all',
                    dateRange: 'visible',
                },
            ).then((doc) => doc.save('gantt.pdf'));
        }

        return (
            <Gantt ... >
                <Toolbar>
                    {/* ... */}
                    <Item 
                        widget="dxButton" 
                        options={this.exportButtonOptions} 
                    />
                </Toolbar>
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Toolbar(t => {
            t.Items(i => {
                i.Add().Name("exportpdf")
                    .Widget(widget => widget.Button()
                    .OnClick("exportGantt")
                    .Icon("exportpdf")
                    .Hint("Export to PDF")
                    .StylingMode(ButtonStylingMode.Text)
                    );
            });
        })        
        // ...
    )

    <script>
        function getGanttInstance() {
            return $("#gantt").dxGantt("instance");
        }
        function exportGantt() {
            var ganttInstance = getGanttInstance();
            ganttInstance.exportToPdf(
                {
                    format: 'a4',
                    exportMode: 'all',
                    dateRange: 'visible''
                }
            ).then(doc => {
                doc.save('gantt.pdf');
            });
        }
    </script>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Toolbar(t => {
            t.Items(i => {
                i.Add().Name("exportpdf")
                    .Widget(widget => widget.Button()
                    .OnClick("exportGantt")
                    .Icon("exportpdf")
                    .Hint("Export to PDF")
                    .StylingMode(ButtonStylingMode.Text)
                    );
            });
        })        
        // ...
    )

    <script>
        function getGanttInstance() {
            return $("#gantt").dxGantt("instance");
        }
        function exportGantt() {
            var ganttInstance = getGanttInstance();
            ganttInstance.exportToPdf(
                {
                    format: 'a4',
                    exportMode: 'all',
                    dateRange: 'visible''
                }
            ).then(doc => {
                doc.save('gantt.pdf');
            });
        }
    </script>

---

#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/ExportToPDF/"
}

