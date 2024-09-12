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

The following code snippet filters the initial selection for diacritics. As a result, 'paris' and 'PARIS' are checked, but not 'Parïs'.

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
            selectionFilter: ['city', '=', 'Paris']
        });
    });

    const dataSource = [ 
        { city: 'paris' },
        { city: 'Parïs' },
        { city: 'PARIS' }
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
            { city: 'paris' },
            { city: 'Parïs' },
            { city: 'PARIS' }
        ];

        selectionFilter = ['city', '=', 'Paris'];
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
        { city: 'paris' },
        { city: 'Parïs' },
        { city: 'PARIS' }
    ];
        
    const selectionFilter = ["city", "=", "Paris"];
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Selection } from 'devextreme-react/data-grid';

    const dataSource = [
        { city: 'paris' },
        { city: 'Parïs' },
        { city: 'PARIS' }
    ];

    const selectionFilter = ['city', '=', 'Paris'];

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