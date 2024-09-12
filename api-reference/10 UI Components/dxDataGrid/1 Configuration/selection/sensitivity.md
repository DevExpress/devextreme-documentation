---
id: dxDataGrid.Options.selection.sensitivity
type: Enums.SelectionSensitivity
default: 'base'
---
---
##### shortDescription
Specifies how to filter selected DataGrid rows based on sensitivity.

---
This property is in effect only if selection is [deferred](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#deferred).

Available values:

- *"base"*    
Strings with different base letters are unequal. Examples: a ≠ b, a = á, a = A.

- *"accent"*    
Strings with different base letters or accents are unequal. Examples: a ≠ b, a ≠ á, a = A.

- *"case"*    
Strings with different base letters or case are unequal. Examples: a ≠ b, a = á, a ≠ A.

- *"variant"*    
Strings with different base letters, accents, diacritic marks, or case are unequal. Other differences may also apply. Examples: a ≠ b, a ≠ á, a ≠ A.

The following code snippet filters the initial selection for diacritics. As a result, 'apple' and 'APPLE' are checked, but not 'Àpple'.

---
##### jQuery

    $(() => {
        $('#gridContainer').dxDataGrid({
            dataSource,
            selection: {
                mode: 'multiple',
                deferred: true,
                sensitivity: 'accent'
            },
            selectionFilter: ['fruit', '=', 'Apple']
        });
    });

    const dataSource = [ 
        { fruit: 'apple' },
        { fruit: 'Àpple' },
        { fruit: 'APPLE' }
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid 
        [dataSource]="dataSource" 
        [selectionFilter]="selectionFilter"
    >
        <dxo-selection
            mode="multiple"
            [deferred]="true"
            sensitivity="accent"
        >
        </dxo-selection>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        dataSource = [
            { fruit: 'apple' },
            { fruit: 'Àpple' },
            { fruit: 'APPLE' }
        ];

        selectionFilter = ['fruit', '=', 'Apple'];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid
            :dataSource="dataSource"
            :selectionFilter="selectionFilter"
        >
            <DxSelection
                :deferred="true"
                mode="multiple"
                sensitivity="accent"
            />
        </DxDataGrid>
    </template>

    <script setup>
    import DxDataGrid, { DxSelection } from "devextreme-vue/data-grid";

    const dataSource = [ 
        { fruit: 'apple' },
        { fruit: 'Àpple' },
        { fruit: 'APPLE' }
    ];
        
    const selectionFilter = ['fruit', '=', 'Apple'];
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Selection } from 'devextreme-react/data-grid';

    const dataSource = [
        { fruit: 'apple' },
        { fruit: 'Àpple' },
        { fruit: 'APPLE' }
    ];

    const selectionFilter = ['fruit', '=', 'Apple'];

    function App() {
        return (
            <React.Fragment>
                <DataGrid
                    dataSource={dataSource}
                    selectionFilter={selectionFilter}
                >
                    <Selection
                        deferred={true}
                        mode="multiple"
                        sensitivity="accent"
                    />
                </DataGrid>
            </React.Fragment>
        );
    }

    export default App;

---