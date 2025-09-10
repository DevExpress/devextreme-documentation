The DataGrid component can [load and update data](/concepts/05%20UI%20Components/DataGrid/00%20Getting%20Started%20with%20DataGrid/05%20Bind%20the%20DataGrid%20to%20Data.md '/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/#Bind_the_DataGrid_to_Data') from different data source types. In this guide, a small local array serves as the data source. Follow these steps:

---
##### jQuery

1. Create the `tasks` array.  
2. Assign the array to the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') property.  
3. Specify [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr') (`id` in this case).
4. In the [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') array, define which columns you want to display.

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

2. Assign the array to the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') property.
3. Specify [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr') (`id` in this case).
4. Use the nested `dxi-data-grid-column` configuration component to define [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') you want to display.
        
        <!-- tab: app.component.html -->
        <dx-data-grid
            id="task-grid"
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

For more information about the nested configuration components, refer to the following help topics:

- [Collections](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/17%20Collections.md 'Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Collections')
- [Properties of the Object Type](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/14%20Properties%20of%20the%20Object%20Type.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Properties_of_the_Object_Type')
- [Configuration Components](/concepts/Common/TypeScript%20Guides/10%20Best%20Practices/20%20Configuration%20Components.md '/Documentation/Guide/Common/TypeScript_Guides/Best_Practices/#Configuration_Components')

##### Vue

1. Create the `tasks` array.  
2. Assign the array to the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') property.
3. Specify [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr') (`id` in this case).  
4. Use the nested `DxColumn` configuration component to define [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') you want to display. Remember to import the necessary configuration components.

        <!-- tab: App.vue -->
        <template>
            <div id="dashboard">
                <DxProgressBar id="progress" />
                <DxDataGrid
                    id="task-grid"
                    :data-source="tasks"
                    key-expr="id"
                >
                    <DxColumn data-field="task" />
                    <DxColumn data-field="dueDate" />
                    <DxColumn data-field="done" />
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

For more information about the nested configuration components, refer to the following help topics:

- [Collections](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/17%20Collections.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Collections')
- [Properties of the Object Type](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/14%20Properties%20of%20the%20Object%20Type.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Properties_of_the_Object_Type')

##### React

1. Create the `tasks` array.  
2. Assign the array to the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') property. 
3. Specify [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr') (`id` in this case). 
4. Use the nested `Column` configuration component to define [columns](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') you want to display. Remember to import the necessary configuration components.

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
                    <DataGrid
                        id="task-grid" 
                        dataSource={tasks}
                        keyExpr="id"
                    >
                        <Column dataField="task" />
                        <Column dataField="dueDate" />
                        <Column dataField="done" />
                    </DataGrid>
                </div>
            );
        }

        export default App;

For more information about the nested configuration components, refer to the following help topics:

- [Collections](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/20%20Collections.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Collections')
- [Properties of the Object Type](/concepts/50%20React%20Components/40%20Component%20Configuration%20Syntax/12%20Properties%20of%20the%20Object%20Type.md '/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Properties_of_the_Object_Type')

---