The DataGrid component can [load and update data](/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/#Bind_the_DataGrid_to_Data) from different data source types. In this guide, a small local array serves as the data source. Follow these steps:

---
##### jQuery

1. Create the `tasks` array.  
2. Assign the array to the [dataSource](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource) property.  
3. Specify [keyExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr) (`id` in this case).
4. In the [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/) array, define which columns you want to display.

        <!-- tab: index.js -->
        $(() => {
            const tasks = [
                { id: 1, task: "Buy groceries", dueDate: new Date(), done: false },
                { id: 2, task: "Write a blog post", dueDate: new Date(), done: true }
            ];
            $("#task-grid").dxDataGrid({
                dataSource: tasks,
                keyExpr: "id",
                columns: ["task", "dueDate", "done"],
            });
        });

##### Angular

1. Create the `tasks` array. 

        <!-- tab: app.component.ts -->
        export class AppComponent {
            tasks = [
                { id: 1, task: "Buy groceries", dueDate: new Date(), done: false },
                { id: 2, task: "Write a blog post", dueDate: new Date(), done: true }
            ];
        }

2. Assign the array to the [dataSource](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource) property.
3. Specify [keyExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr) (`id` in this case).
4. Use the nested `dxi-data-grid-column` component to define [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/) you want to display.
        
        <!-- tab: app.component.html -->
        <dx-data-grid ...
            [dataSource]="tasks"
            keyExpr="id"
        >
            <dxi-data-grid-column dataField="task"></dxi-data-grid-column>
            <dxi-data-grid-column dataField="dueDate"></dxi-data-grid-column>
            <dxi-data-grid-column dataField="done"></dxi-data-grid-column>
        </dx-data-grid>

5. Remember to import the `DxiDataGridColumnComponent` component.

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
        import { DxDataGridComponent, DxiDataGridColumnComponent } from 'devextreme-angular/ui/data-grid';
        @Component({
            selector: 'app-root',
            standalone: true,
            imports: [DxDataGridComponent, DxiDataGridColumnComponent],
            templateUrl: './app.component.html',
            styleUrl: './app.component.css'
        })
        export class AppComponent { ... }

For more information about the nested components, refer to the following help topics:

- [Collections](Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Collections)
- [Properties of the Object Type](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Properties_of_the_Object_Type)
- [Configuration Components](/Documentation/Guide/Common/TypeScript_Guides/Best_Practices/#Configuration_Components)

##### Vue

1. Create the `tasks` array.  
2. Assign the array to the [dataSource](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource) property.
3. Specify [keyExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr) (`id` in this case).  
4. Use the nested `DxColumn` component to define [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/) you want to display. Remember to import the necessary nested components.

        <!-- tab: App.vue -->
        <template>
            <div id="dashboard">
                <DxProgressBar id="progress" />
                <DxDataGrid ...
                    :data-source="tasks"
                    key-expr="id"
                >
                    <DxColumn  
                        data-field="task"
                    />
                    <DxColumn  
                        data-field="dueDate"
                    />
                    <DxColumn 
                        data-field="done"
                    />
                </DxDataGrid>
            </div>
        </template>
        <script setup lang="ts">
        import DxDataGrid, { DxColumn } from 'devextreme-vue/data-grid';
        
        const tasks = [
            { id: 1, task: "Buy groceries", dueDate: new Date(), done: false },
            { id: 2, task: "Write a blog post", dueDate: new Date(), done: true }
        ];
        </script>

For more information about the nested components, refer to the following help topics:

- [Collections](/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Collections)
- [Properties of the Object Type](/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Properties_of_the_Object_Type)

##### React

1. Create the `tasks` array.  
2. Assign the array to the [dataSource](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource) property. 
3. Specify [keyExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr) (`id` in this case). 
4. Use the nested `Column` component to define [columns](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/) you want to display. Remember to import the necessary nested components.

        <!-- tab: App.tsx -->
        import DataGrid, { Column } from 'devextreme-react/data-grid';

        const tasks = [
            { id: 1, task: "Buy groceries", dueDate: new Date(), done: false },
            { id: 2, task: "Write a blog post", dueDate: new Date(), done: true }
        ];

        function App(): JSX.Element {
            return(
                <div id="dashboard">
                    <ProgressBar id="progress" />
                    <DataGrid ... 
                        dataSource={tasks}
                        keyExpr="id"
                    >
                        <Column  
                            dataField="task"
                        />
                        <Column  
                            dataField="dueDate"
                        />
                        <Column  
                            dataField="done"
                        />
                    </DataGrid>
                </div>
            );
        }

        export default App;

For more information about the nested components, refer to the following help topics:

- [Collections](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Collections)
- [Properties of the Object Type](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Properties_of_the_Object_Type)

---