##### jQuery

    <!-- tab: index.ts -->
    $(() => {
        $('#grid').dxDataGrid({ columns: [], bogusOption: 1 });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid [dataSource]="employees" [bogus]="1"></dx-data-grid>
    <p>{{ missing }}</p>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        imports: [DxDataGridModule],
        templateUrl: './app.component.html'
    })
    export class AppComponent {
        employees: number[] = [];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid :data-source="1" />
    </template>

    <script setup lang="ts">
    import { DxDataGrid } from 'devextreme-vue/data-grid';
    </script>

The following example has a syntax error.

    <!-- tab: Syntax.vue -->
    <script>
    export default {
        data() {
            return() {
                visible: true
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import DataGrid from 'devextreme-react/data-grid';

    function App() {
        return <DataGrid bogus={1} />;
    }
    export default App;
