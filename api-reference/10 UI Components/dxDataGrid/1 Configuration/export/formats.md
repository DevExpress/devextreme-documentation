---
id: dxDataGrid.Options.export.formats
acceptValues: 'pdf' | 'xlsx'
type: Array<String>
default: 'DataGrid'
---
---
##### shortDescription
Specifies export formats.

---
The default **formats** value is `['xlsx']`. To enable PDF export, set the **formats** property to `['pdf']`.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        const dataGrid = $('#gridContainer').dxDataGrid({
            // ...
            export: {
                enabled: true,
                formats: ['pdf'],
            },
        }).dxDataGrid('instance');
    });

##### Angular   

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxo-export
            [enabled]="true"
            [formats]="['pdf']"
        ></dxo-export>
    </dx-data-grid>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }


##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid ...>
                <!-- ... -->
                <DxExport
                    :enabled="true"
                    :formats="['pdf']"
                />
            </DxDataGrid>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDataGrid, DxExport } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import DataGrid, { Export } from 'devextreme-react/data-grid';

    const exportFormats = ['pdf'];
    
    export default function App() {
        return (
            <React.Fragment>
                <div>
                    <DataGrid ...>
                        {/* ... */}
                        <Export enabled={true} formats={exportFormats}>
                    </DataGrid>
                </div>
            </React.Fragment>
        );
    }

---