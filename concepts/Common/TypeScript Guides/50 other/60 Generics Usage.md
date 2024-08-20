DevExtreme supports Generics for properties and methods that operate internal data. You can use Generics inside event handlers and to define instances of data-aware components like DataGrid:

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxDataGridComponent, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
    import { Employee } from './data';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid!: DxDataGridComponent<Employee, number>;

        onEditorPreparing(e: DxDataGridTypes.EditorPreparingEvent<Employee, number>) {
            if (e.dataField === 'LastName' && e.parentType === 'dataRow') {
                e.editorOptions.disabled = e.row?.data && e.row?.data.FirstName === '';
            }
        }

        onButtonClick() {
            const keys: number[] = this.dataGrid.instance.getSelectedRowKeys();
        }
    }

    <!-- tab: app.component.html -->
    <dx-button
        text="Get Selected Keys"
        (onClick)="onButtonClick()"
    >
    </dx-button>
    <dx-data-grid ...
        (onEditorPreparing)="onEditorPreparing($event)"
    >
    </dx-data-grid>

DevExtreme supports Generics for properties and methods that operate internal data. You can use Generics inside event handlers and to define instances of data-aware components like DataGrid:

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxButton 
                text="Disable DataGrid" 
                @click="onButtonClick" 
            />
            <DxDataGrid 
                :data-source="dataSource" 
                ref="dataGridRef" 
                @editor-preparing="onEditorPreparing"
            >
            </DxDataGrid>
        </div>
    </template>
    <script setup lang="ts">
    import { ref } from "vue";

    import { DxDataGrid } from "devextreme-vue/data-grid";
    import { DxButton } from "devextreme-vue/button";

    import type { DxDataGridTypes } from "devextreme-vue/data-grid";
    import type dxDataGrid from 'devextreme/ui/data_grid';
    import type { Employee } from '../data';

    const dataGridRef = ref<DxDataGrid>();

    function onButtonClick() {
        const dataGridInstance = dataGridRef.value?.instance! as dxDataGrid<Employee, number>;
        dataGridInstance.option("disabled", true);
    }

    function onEditorPreparing(e: DxDataGridTypes.EditorPreparingEvent<Employee, number>) {
        if (e.dataField === 'LastName' && e.parentType === 'dataRow') {
            e.editorOptions.disabled = e.row?.data?.FirstName === '';
        }
    }
    </script>
