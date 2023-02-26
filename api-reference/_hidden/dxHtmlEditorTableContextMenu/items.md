---
id: dxHtmlEditorTableContextMenu.items
type: Array<dxHtmlEditorTableContextMenuItem, Enums.HtmlEditorPredefinedContextMenuItem>
inheritsType: dxHtmlEditorTableContextMenuItem
---
---
##### shortDescription
Configures context menu items.

---
Use this property to customize the context menu. For example, the following code creates a flat menu of table commands instead of the default hierarchical menu. The [beginGroup](/api-reference/_hidden/dxMenuBaseItem/beginGroup.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableContextMenu/items/#beginGroup') property is used to divide command groups.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            tableContextMenu: {
                enabled: true,
                items: [
                    'insertHeaderRow',
                    'insertRowAbove',
                    'insertRowBelow',
                    { name: 'insertColumnLeft', beginGroup: true },
                    'insertColumnRight',
                    { name: 'deleteColumn', beginGroup: true },
                    'deleteRow',
                    'deleteTable',
                    { name: 'cellProperties', beginGroup: true },
                    'tableProperties'
                ]
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor>
        <dxo-table-context-menu
            [enabled]="true">
            <dxi-item name="insertHeaderRow"></dxi-item>
            <dxi-item name="insertRowAbove"></dxi-item>
            <dxi-item name="insertRowBelow"></dxi-item>
            <dxi-item name="insertColumnLeft" [beginGroup]="true"></dxi-item>
            <dxi-item name="insertColumnRight"></dxi-item>
            <dxi-item name="deleteColumn" [beginGroup]="true"></dxi-item>
            <dxi-item name="deleteRow"></dxi-item>
            <dxi-item name="deleteTable"></dxi-item>
            <dxi-item name="cellProperties" [beginGroup]="true"></dxi-item>
            <dxi-item name="tableProperties"></dxi-item>
        </dxo-table-context-menu>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor>
            <DxTableContextMenu
                :enabled="true">
                <DxTableContextMenuItem name="insertHeaderRow" />
                <DxTableContextMenuItem name="insertRowAbove" />
                <DxTableContextMenuItem name="insertRowBelow" />
                <DxTableContextMenuItem name="insertColumnLeft" :begin-group="true" />
                <DxTableContextMenuItem name="insertColumnRight" />
                <DxTableContextMenuItem name="deleteColumn" :begin-group="true" />
                <DxTableContextMenuItem name="deleteRow" />
                <DxTableContextMenuItem name="deleteTable" />
                <DxTableContextMenuItem name="cellProperties" :begin-group="true" />
                <DxTableContextMenuItem name="tableProperties" />
            </DxTableContextMenu>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor, {
        DxTableContextMenu,
        DxTableContextMenuItem
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxTableContextMenu,
            DxTableContextMenuItem
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor, {
        TableContextMenu,
        TableContextMenuItem
    } from 'devextreme-react/html-editor';

    export default function App() {
        return (
            <HtmlEditor>
                <TableContextMenu
                    enabled={true}
                    <TableContextMenuItem name="insertHeaderRow" />
                    <TableContextMenuItem name="insertRowAbove" />
                    <TableContextMenuItem name="insertRowBelow" />
                    <TableContextMenuItem name="insertColumnLeft" beginGroup={true} />
                    <TableContextMenuItem name="insertColumnRight" />
                    <TableContextMenuItem name="deleteColumn" beginGroup={true} />
                    <TableContextMenuItem name="deleteRow" />
                    <TableContextMenuItem name="deleteTable" />
                    <TableContextMenuItem name="cellProperties" beginGroup={true} />
                    <TableContextMenuItem name="tableProperties" />
                </TableContextMenu>
            </HtmlEditor>
        );
    }

---