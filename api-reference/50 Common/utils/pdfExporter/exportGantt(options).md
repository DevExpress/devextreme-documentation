---
id: pdfExporter.exportGantt(options)
module: common/export/pdf
export: exportGantt
---
---
##### shortDescription
Exports Gantt data to a PDF file.

##### return: Promise<any>
A Promise that resolves when the Gantt data is ready for export.
#include ref-promisedistinction

##### param(options): GanttExport_Options
Export settings.

---

#include common-demobutton with { 
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/ExportToPDF/"
}

This method uses <a href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</a> v2.3.1+ to generate PDF files, and the <a href="https://github.com/simonbengtsson/jsPDF-AutoTable" target="_blank">jsPDF-AutoTable</a> plugin to create tables within the PDF.

Warning: You need to perform *extra steps* to generate PDFs with non-ASCII characters. See the [PDF Export guide](/concepts/80%20Troubleshooting/15%20PDF%20Export/00%20PDF%20Export.md '/Documentation/Guide/Troubleshooting/PDF_Export/'). for more information.

In the following example, the [onClick](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') handler of a standalone toolbar item fires this method:

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
    import { jsPDF } from 'jspdf';
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
            const gantt = ganttRef.current.instance();
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

The following code snippet illustrates how to process the PDF document when the export is complete:

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

To print the exported PDF document, call the **autoPrint** method:

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
