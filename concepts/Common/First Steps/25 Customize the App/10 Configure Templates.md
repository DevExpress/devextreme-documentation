DevExtreme components allow you to specify custom markup for certain elements. To specify custom markup, configure [templates](/Documentation/Guide/UI_Components/Common/Templates/).

This example hides the DataGrid [toolbar](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/) and specifies a **columns[]**.[headerCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#headerCellTemplate) to display an "Add a row" button in the header row. Integrate a DevExtreme [Button](/Documentation/Guide/UI_Components/Button/Overview/) within this template and call [DataGrid.addRow()](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#addRow) in the button's [onClick](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick) handler:

---

##### jQuery

    <!-- tab: index.js -->
    $("#task-grid").dxDataGrid({
        columns: [{
            type: 'buttons',
            headerCellTemplate(el, data) {
                return $('<div>').dxButton({
                    icon: 'add',
                    stylingMode: 'text',
                    onClick() {
                        data.component.addRow();
                    }
                })
            }
        }],
        toolbar: {
            visible: false,
        },
        // ...
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxi-data-grid-column
            type="buttons"
            headerCellTemplate="buttonColumnHeaderTemplate"
        ></dxi-data-grid-column>
        <div *dxTemplate="let data of 'buttonColumnHeaderTemplate'">
            <dx-button
                icon="add"
                stylingMode="text"
                (onClick)="createAddClickHandler(data.component)($event)"
            ></dx-button>
        </div>
        <dxo-data-grid-toolbar [visible]="false"></dxo-data-grid-toolbar>
        <!-- ... -->
    <dx-data-grid>

    <!-- tab: app.component.ts -->
    import { DxButtonModule, type DxButtonTypes } from 'devextreme-angular/ui/button';
    import dxDataGrid from 'devextreme/ui/data_grid';
    import notify from 'devextreme/ui/notify'; 

    // ...
    export class AppComponent {
        createAddClickHandler(grid: dxDataGrid): (e: DxButtonTypes.ClickEvent) => void {
            return () => {
                grid.addRow().catch((error) => {
                    // addRow() returns a promise. This code satisfies the no-floating-promises lint rule.
                    notify(error);
                });
            };
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxColumn
                type="buttons"
                header-cell-template="buttonColumnHeaderTemplate"
            />
            <template #buttonColumnHeaderTemplate="{ data }">
                <DxButton
                    icon="add"
                    styling-mode="text"
                    @click="createAddClickHandler(data.component)"
                />
            </template>
            <DxToolbar
                :visible="false"
            />
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { DxDataGrid, DxColumn, DxToolbar } from 'devextreme-vue/data-grid';
    import { DxButton } from 'devextreme-vue/button';
    import notify from 'devextreme/ui/notify';
    import dxDataGrid from 'devextreme/ui/data_grid';
    // ...

    function createAddClickHandler(grid: dxDataGrid): () => void {
        return () => {
            grid.addRow().catch((error) => {
                // addRow() returns a promise. This code satisfies the no-floating-promises lint rule.
                notify(error);
            });
        };
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Column, Toolbar, type DataGridTypes } from 'devextreme-react/data-grid';
    import { Button } from 'devextreme-react/button';
    import notify from 'devextreme/ui/notify';
    import dxDataGrid from 'devextreme/ui/data_grid';
    // ...

    function createAddClickHandler(grid: dxDataGrid): () => void {
        return () => {
            grid.addRow().catch((error) => {
                // addRow() returns a promise. This code satisfies the no-floating-promises lint rule.
                notify(error);
            });
        };
    }

    function renderButtonColumnHeader(data: DataGridTypes.ColumnHeaderCellTemplateData): JSX.Element {
        return (
            <Button
                icon='add'
                stylingMode='text'
                onClick={createAddClickHandler(data.component)}
            />
        );
    }

    function App(): JSX.Element {
        // ...

        return (
            <DataGrid>
                <Column
                    type='buttons'
                    headerCellRender={renderButtonColumnHeader}
                />
                <Toolbar
                    visible={false}
                />
                {/* ... */}
            </DataGrid>
        );
    }

---

This example also configures **columns[]**.[cellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate) to implement placeholder values for empty cells and format date values ([formatDate()](/Documentation/ApiReference/Common/Utils/localization/#formatDatevalue_format)):

---

##### jQuery

    <!-- tab: index.js -->
    $("#task-grid").dxDataGrid({
        columns: [{
            dataField: "task",
            cellTemplate(element, data) {
                if (!data.value) {
                    return $(element)
                        .text('Enter a title...')
                        .css('color', 'var(--dx-color-icon)');
                } else {
                    return $(element).text(data.value);
                }
            }
        }, {
            dataField: "dueDate",
            cellTemplate(element, data) {
                if (!data.value) {
                    return $(element)
                    .text('Enter a date...')
                    .css('color', 'var(--dx-color-icon)');
                } else {
                    return $(element).text(DevExpress.localization.formatDate(data.value, 'shortDate'));
                }
            }
        }],
        // ...
    });


##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxi-data-grid-column
            dataField="task"
            cellTemplate="taskCellTemplate"
        ></dxi-data-grid-column>
        <div *dxTemplate="let data of 'taskCellTemplate'">
            @if (!data.value) {
            <div style="color: var(--dx-color-icon)">Enter a title...</div>
            } @else {
            <div>{{ data.value }}</div>
            }
        </div>
        <dxi-data-grid-column
            dataField="dueDate"
            cellTemplate="dueDateCellTemplate"
        ></dxi-data-grid-column>
        <div *dxTemplate="let data of 'dueDateCellTemplate'">
            @if (!data.value) {
            <div style="color: var(--dx-color-icon)">Enter a date...</div>
            } @else {
            <div>{{ formatDate(data.value, "shortDate") }}</div>
            }
        </div>
        <!-- ... -->
    <dx-data-grid>

    <!-- tab: app.component.ts -->
    import { formatDate } from 'devextreme/localization';

    // ...
    export class AppComponent {
        formatDate = formatDate;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid>
            <DxColumn
                data-field="task"
                cell-template="taskCellTemplate"
            />
            <template #taskCellTemplate="{ data }">
                <div v-if="!data.value">
                    <div style="color: var(--dx-color-icon)">Enter a title...</div>
                </div>
                <div v-else>
                    <div>{{ data.value }}</div>
                </div>
            </template>
            <DxColumn
                data-field="dueDate"
                cell-template="dueDateCellTemplate"
            />
            <template #dueDateCellTemplate="{ data }">
                <div v-if="!data.value">
                    <div style="color: var(--dx-color-icon)">Enter a date...</div>
                </div>
                <div v-else>
                    <div>{{ formatDate(data.value, 'shortDate') }}</div>
                </div>
            </template>
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { formatDate } from 'devextreme/localization';
    // ...

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Column, type DataGridTypes } from 'devextreme-react/data-grid';
    import { formatDate } from 'devextreme/localization';
    // ...

    function renderTaskCell(data: DataGridTypes.ColumnCellTemplateData): JSX.Element {
        if (!data.value) {
            return (
                <div style={{ color: 'var(--dx-color-icon)' }}>Enter a title...</div>
            );
        }
        return (
            <div>{data.value}</div>
        );
    }

    function renderDueDateCell(data: DataGridTypes.ColumnCellTemplateData): JSX.Element {
        if (!data.value) {
            return (
                <div style={{ color: 'var(--dx-color-icon)' }}>Enter a date...</div>
            );
        }
        return (
            <div>{formatDate(data.value, 'shortDate')}</div>
        );
    }

    function App(): JSX.Element {
        // ...

        return (
            <DataGrid>
                <Column
                    dataField='task'
                    cellRender={renderTaskCell}
                />
                <Column
                    dataField='dueDate'
                    cellRender={renderDueDateCell}
                />
                {/* ... */}
            </DataGrid>
        );
    }
---

You can find the full source code of this example in the following GitHub repository:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-first-steps"
}