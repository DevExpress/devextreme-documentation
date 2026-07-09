#include grids-tutorial-customize-the-toolbar

[important] If you add custom items to the TreeList toolbar, you must also specify the built-in items you need.

---
##### jQuery

    <!-- tab: index.js -->
    const treeList = $("#treeList").dxTreeList({
        autoExpandAll: true,
        toolbar: {
            items: [{
                location: 'after',
                widget: 'dxButton',
                options: {
                    text: 'Collapse All',
                    width: 136,
                    onClick(e) {
                        const expanding = e.component.option('text') === 'Expand All';
                        treeList.option({
                            autoExpandAll: expanding,
                            expandedRowKeys: [],
                        });
                        e.component.option('text', expanding ? 'Collapse All' : 'Expand All');
                    },
                },
            }, {
                name: 'addRowButton',
                showText: 'always',
            }, 'exportButton', 'columnChooserButton', 'searchPanel' ],
        },
        // ...
    }).dxTreeList("instance");

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().TreeList<Employee>()
        .ID("tree-list")
        .AutoExpandAll(true)
        .Toolbar(t => t.Items(items => {
            items.Add()
                .Location(ToolbarItemLocation.After)
                .Widget(w => w.Button()
                    .Text("Collapse All")
                    .Width(136)
                    .OnClick("handleCollapseAllButtonClick")
            );
            items.Add().Name(TreeListToolbarItem.AddRowButton).ShowText(ToolbarItemShowTextMode.Always);
            items.Add().Name(TreeListToolbarItem.ColumnChooserButton);
            items.Add().Name(TreeListToolbarItem.SearchPanel);
        }))
        @* ... *@
    )

    <script>
        function handleCollapseAllButtonClick(e) {
            const expanding = e.component.option('text') === 'Expand All';
            $('#tree-list').dxTreeList('instance').option({
                autoExpandAll: expanding,
                expandedRowKeys: [],
            });
            e.component.option('text', expanding ? 'Collapse All' : 'Expand All');
        }
    </script>

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list
        [autoExpandAll]="expanded"
        [(expandedRowKeys)]="expandedRowKeys"
    >
        <dxo-tree-list-toolbar>
            <dxi-tree-list-item location="after">
                <dx-button
                    [text]="expanded ? 'Collapse All' : 'Expand All'"
                    [width]="136"
                    (onClick)="toggleExpansion()"
                >
                </dx-button>
            </dxi-tree-list-item>
            <dxi-tree-list-item
                name="addRowButton"
                showText="always"
            ></dxi-tree-list-item>
            <dxi-tree-list-item name="exportButton"></dxi-tree-list-item>
            <dxi-tree-list-item name="columnChooserButton"></dxi-tree-list-item>
            <dxi-tree-list-item name="searchPanel"></dxi-tree-list-item>
        </dxo-tree-list-toolbar>
        <!-- ... -->
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        expanded: boolean = true;
        expandedRowKeys: number[] = [];

        toggleExpansion(): void {
            this.expanded = !this.expanded;
            this.expandedRowKeys = [];
        }
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
        <DxTreeList
            :auto-expand-all="expanded"
            :expanded-row-keys="expandedRowKeys"
        >
            <DxToolbar>
                <DxItem
                    location="after"
                    template="button-template"
                />
                <DxItem
                    name="addRowButton"
                    show-text="always"
                />
                <DxItem name="exportButton"/>
                <DxItem name="columnChooserButton"/>
                <DxItem name="searchPanel"/>
            </DxToolbar>
            <template #button-template>
                <DxButton
                    :text="expanded ? 'Collapse All' : 'Expand All'"
                    :width="136"
                    @click="toggleExpansion"
                />
            </template>
            <!-- ... -->
        </DxTreeList>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { DxTreeList, DxToolbar, DxItem } from 'devextreme-vue/tree-list';
    import { DxButton } from 'devextreme-vue/button';

    const expanded = ref<boolean>(true);
    const expandedRowKeys = ref<number[]>([]);

    const toggleExpansion = (): void => {
        expanded.value = !expanded.value;
        expandedRowKeys.value = [];
    };

    </script>

##### React

    <!-- tab: App.tsx -->
    import { TreeList, Toolbar, Item } from 'devextreme-react/tree-list';
    import { Button } from 'devextreme-react/button';

    function App() {
        const [expanded, setExpanded] = useState(true);
        const [expandedRowKeys, setExpandedRowKeys] = useState<number[]>([]);

        const toggleExpansion = useCallback(() => {
            setExpanded((prevExpanded: boolean) => !prevExpanded);
            setExpandedRowKeys([]);
        }, []);

        return (
            <TreeList
                autoExpandAll={expanded}
                expandedRowKeys={expandedRowKeys}
            >
                <Toolbar>
                    <Item location="after">
                        <Button
                            text={expanded ? 'Collapse All' : 'Expand All'}
                            width={136}
                            onClick={toggleExpansion}
                        />
                    </Item>
                    <Item name="addRowButton" showText="always" />
                    <Item name="exportButton" />
                    <Item name="columnChooserButton" />
                    <Item name="searchPanel" />
                </Toolbar>
                {/* ... */}
            </TreeList>
        );
    }

---