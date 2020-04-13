---
id: dxDataGrid.Options.export
type: Object
---
---
##### shortDescription
Configures client-side exporting.

---
Client-side export requires <a href="https://github.com/exceljs/exceljs" target="_blank">ExcelJS</a> v3.3.1 or newer to export data and <a href="https://github.com/eligrey/FileSaver.js/" target="_blank">FileSaver</a> to save files. 

#include common-demobutton with {
    url: ""
}


When export is [enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled'), the grid toolbar contains the Export button: <img src="/Content/images/doc/20_1/DataGrid/icons/toolbar_export.png" alt="DevExtreme DataGrid HTML5 Toolbar Exporting" style="vertical-align:middle"/>.
Call the **DevExpress**.**excelExporter**.[exportDataGrid(options)](/Documentation/ApiReference/Common/Utils/excelExporter/#exportDataGridoptions) method in the [onExporting](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) handler to run the new export after the Export button is pressed. The default export is deactivated by setting the `e.cancel` parameter to **true**. To save the document to Excel, use the **saveAs** function from the **FileSaver** API.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        "!!!!USED COMPONENTS"
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            "!!!!USED COMPONENTS"
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        "!!!!USED COMPONENTS"
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <{WidgetName}>
                    
                </{WidgetName}>
            );
        }
    }
    export default App;

---

The **ExcelJS** library enables users to customize exported data in numerous ways. Refer to the [customizeCell](/Documentation/ApiReference/Common/Object_Structures/ExportDataGridProps/#customizeCell) section for details and examples. Users can also use the **ExcelJS** API to export images and multiple grids to a single document:

#include common-demobutton-named with {
    name: "Export Images",
    url: ""
}
#include common-demobutton-named with {
    name: "Export Multiple Grids",
    url: ""
}

#####See also#####
- **DataGrid**.**columns[]**.[format](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format)      
See the restrictions of the exporting formats

