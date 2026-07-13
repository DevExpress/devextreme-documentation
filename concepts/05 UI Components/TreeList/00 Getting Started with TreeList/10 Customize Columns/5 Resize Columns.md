#include common-tutorialbutton-named with { url: "/Documentation/Guide/UI_Components/TreeList/Columns/Column_Sizing/", name: "Column Sizing" }

TreeList columns have equal widths in the default configuration ([width](/api-reference/_hidden/GridBaseColumn/width.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width') is set to *"auto"*). To change the column layout, you can define each column's **width** property or enable [columnAutoWidth](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnAutoWidth') to adjust all columns to fit cell values. To allow users to change the column layout, enable [allowColumnResizing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnResizing.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnResizing').

---
##### jQuery

    <!-- tab: index.js -->
    $("#tree-list").dxTreeList({
        allowColumnResizing: true,
        columnAutoWidth: true,
        columns: [{
            dataField: "BirthDate", 
            dataType: "date",
            width: 100,
        }, {
            dataField: "HireDate", 
            dataType: "date",
            width: 100,
        }, /* ... */ ],
        // ...
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .AllowColumnResizing(true)
        .ColumnAutoWidth(true)
        .Columns(columns => {
            columns.AddFor(m => m.BirthDate)
                .DataType(GridColumnDataType.Date)
                .Width(100);
            columns.AddFor(m => m.HireDate)
                .DataType(GridColumnDataType.Date)
                .Width(100);
        })
        @* ... *@
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list
        [allowColumnResizing]="true"
        [columnAutoWidth]="true"
    >
        <dxi-tree-list-column
            dataField="BirthDate"
            dataType="date"
            [width]="100"
        ></dxi-tree-list-column>
        <dxi-tree-list-column
            dataField="HireDate"
            dataType="date"
            [width]="100"
        ></dxi-tree-list-column>
        <!-- ... -->
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList
            :allow-column-resizing="true"
            :column-auto-width="true"
        >
            <DxColumn
                data-field="BirthDate"
                data-type="date"
                :width="100"
            />
            <DxColumn
                data-field="HireDate"
                data-type="date"
                :width="100"
            />
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, Column } from 'devextreme-react/tree-list';

    function App() {
        return (
            <TreeList
                columnAutoWidth={true}
                allowColumnResizing={true}
            >
                <Column
                    dataField="BirthDate"
                    dataType="date"
                    width={100}
                />
                <Column
                    dataField="HireDate"
                    dataType="date"
                    width={100}
                />
                {/* ... */}
            </TreeList>
        );
    }

---
