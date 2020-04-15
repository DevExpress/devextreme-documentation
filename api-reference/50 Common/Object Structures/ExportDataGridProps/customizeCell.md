---
id: ExportDataGridProps.customizeCell
type: function(options)
---
---
##### shortDescription
Customizes an Excel cell after creation.

##### param(options): Object
An object passed to this callback function.

##### field(options.excelCell): Object
An ExcelJS object that describes an Excel cell. Use the object's properties to customize the cell. For information on these properties, refer to the following ExcelJS documentation sections:

- <a href="https://github.com/exceljs/exceljs#value-types" target="_blank">value</a>
- <a href="https://github.com/exceljs/exceljs#alignment" target="_blank">alignment</a>
- <a href="https://github.com/exceljs/exceljs#borders" target="_blank">border</a>
- <a href="https://github.com/exceljs/exceljs#fills" target="_blank">fill</a>
- <a href="https://github.com/exceljs/exceljs#rich-text" target="_blank">richText</a>
- <a href="https://github.com/exceljs/exceljs#fonts" target="_blank">font</a>
- <a href="https://github.com/exceljs/exceljs#number-formats" target="_blank">numFmt</a>

##### field(options.gridCell): ExcelDataGridCell
A **DataGrid** cell.

---

A snippet where Excel cells are customized 

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

#include common-demobutton-named with {
    name: "Cell Customization",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSCellCustomization/"
}
#include common-demobutton-named with {
    name: "Header and Footer",
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSHeaderAndFooter/"
}
