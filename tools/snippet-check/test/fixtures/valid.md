##### jQuery

    <!-- tab: index.ts -->
    import DataGrid from 'devextreme/ui/data_grid';
    $(() => {
        const options: ConstructorParameters<typeof DataGrid>[1] = { columns: ['Name'], paging: { pageSize: 10 } };
        $('#grid').dxDataGrid(options);
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid [dataSource]="employees" [paging]="{ pageSize: 10 }" ... ></dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        imports: [DxDataGridModule],
        templateUrl: './app.component.html'
    })
    export class AppComponent {
        employees: Array<{ Name: string }> = [];
    }

##### Vue

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxDataGrid :data-source="employees" ... />
    </template>

    <script setup lang="ts">
    import { DxDataGrid } from 'devextreme-vue/data-grid';

    const employees: Array<{ Name: string }> = [];
    </script>

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxDataGrid :data-source="employees" />
    </template>

    <script lang="ts">
    import { defineComponent } from 'vue';
    import { DxDataGrid } from 'devextreme-vue/data-grid';

    export default defineComponent({
        components: { DxDataGrid },
        data() {
            return { employees: [] as Array<{ Name: string }> };
        },
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useCallback, useState } from 'react';
	import DataGrid, { Column, type DataGridTypes } from 'devextreme-react/data-grid';

    function App() {
        const [visible, setVisible] = useState(true);
        const onOptionChanged = useCallback((e: DataGridTypes.OptionChangedEvent) => {
            if (e.fullName === 'columns[0].visible') setVisible(e.value);
        }, []);
        return (
            <DataGrid ... onOptionChanged={onOptionChanged}>
                <Column dataField="Name" visible={visible} /* kept */ {/* inline note */} />
                {/* a child comment */}
            </DataGrid>
        );
    }
    export default App;
