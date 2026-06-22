#include grids-tutorial-customize-the-toolbar

[important] If you add custom items to the DataGrid toolbar, you must also specify the built-in items you need.

---
##### jQuery

    <!-- tab: index.js -->
    const dataGrid = $("#dataGrid").dxDataGrid({
        toolbar: {
            items: [
                "groupPanel", {
                    location: "after",
                    widget: "dxButton",
                    options: {
                        text: "Collapse All",
                        width: 136,
                        onClick(e) {
                            const expanding = e.component.option("text") === "Expand All";
                            dataGrid.option("grouping.autoExpandAll", expanding);
                            e.component.option("text", expanding ? "Collapse All" : "Expand All");
                        },
                    },
                }, {
                    name: "addRowButton",
                    showText: "always"
                }, "exportButton", "columnChooserButton", "searchPanel",
            ]
        },
        // ...
    }).dxDataGrid("instance");

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().DataGrid<Employee>()
        .Toolbar(t => t.Items(items => {
            items.Add().Name(DataGridToolbarItem.GroupPanel);
            items.Add()
                .Location(ToolbarItemLocation.After)
                .Widget(w => w.Button()
                    .Text("Collapse All")
                    .Width(136)
                    .OnClick("handleCollapseAllButtonClick")
            );
            items.Add().Name(DataGridToolbarItem.AddRowButton).ShowText(ToolbarItemShowTextMode.Always);
            items.Add().Name(DataGridToolbarItem.ExportButton);
            items.Add().Name(DataGridToolbarItem.ColumnChooserButton);
            items.Add().Name(DataGridToolbarItem.SearchPanel);
        }))
        @* ... *@
    )

    <script>
        function handleCollapseAllButtonClick(e) {
            const expanding = e.component.option('text') === 'Expand All';
            $('#grid-container').dxDataGrid('instance').option('grouping.autoExpandAll', expanding);
            e.component.option('text', expanding ? 'Collapse All' : 'Expand All');
        }
    </script>

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-data-grid-grouping [autoExpandAll]="expanded"></dxo-data-grid-grouping>
        <dxo-data-grid-toolbar>
            <dxi-data-grid-item name="groupPanel"></dxi-data-grid-item>
            <dxi-data-grid-item location="after">
                <dx-button
                    [text]="expanded ? 'Collapse All' : 'Expand All'"
                    [width]="136"
                    (onClick)="expanded = !expanded">
                </dx-button>
            </dxi-data-grid-item>
            <dxi-data-grid-item name="addRowButton" showText="always"></dxi-data-grid-item>
            <dxi-data-grid-item name="exportButton"></dxi-data-grid-item>
            <dxi-data-grid-item name="columnChooserButton"></dxi-data-grid-item>
            <dxi-data-grid-item name="searchPanel"></dxi-data-grid-item>
        </dxo-data-grid-toolbar>
        <!-- ... -->
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        expanded: Boolean = true;
    }

    <!-- tab: app.module.ts -->
    import {
        // ...
        DxButtonModule
    } from 'devextreme-angular';

    @NgModule({
        // ...
        imports: [
            // ...
            DxButtonModule
        ],
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxGrouping :auto-expand-all="expanded" />
            <DxToolbar>
                <DxItem name="groupPanel" />
                <DxItem location="after" template="button-template" />
                <DxItem name="addRowButton" show-text="always" />
                <DxItem name="exportButton" />
                <DxItem name="columnChooserButton" />
                <DxItem name="searchPanel" />
            </DxToolbar>
            <template #button-template>
                <DxButton
                    :text="expanded ? 'Collapse All' : 'Expand All'"
                    :width="136"
                    @click="expanded = !expanded"
                />
            </template>
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxDataGrid, DxGrouping, DxToolbar, DxItem } from 'devextreme-vue/data-grid';
    import { DxButton } from 'devextreme-vue/button';

    const expanded = ref<boolean>(true);

    </script>

##### React

    <!-- tab: App.tsx -->
    import { DataGrid, Grouping, Toolbar, Item } from 'devextreme-react/data-grid';
    import { Button } from 'devextreme-react/button';

    function App() {
        const [expanded, setExpanded] = useState(true);

        return (
            <DataGrid>
                <Grouping autoExpandAll={expanded} />
                <Toolbar>
                    <Item name="groupPanel" />
                    <Item location="after">
                        <Button
                            text={expanded ? 'Collapse All' : 'Expand All'}
                            width={136}
                            onClick={() => setExpanded(prevExpanded => !prevExpanded)}
                        />
                    </Item>
                    <Item name="addRowButton" showText="always" />
                    <Item name="exportButton" />
                    <Item name="columnChooserButton" />
                    <Item name="searchPanel" />
                </Toolbar>
                {/* ... */}
            </DataGrid>
        );
    }

---