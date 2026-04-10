---
id: dxHtmlEditorTableContextMenuItem.items
type: Array<dxHtmlEditorTableContextMenuItem, Enums.HtmlEditorPredefinedContextMenuItem>
---
---
##### shortDescription
Configures nested context menu items.

---
Use this property to create a hierarchical context menu. The following code demonstrates an example:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            tableContextMenu: {
                enabled: true,
                items: [{
                    text: 'Font Style',
                    items: [
                        'bold',
                        'italic',
                        'underline',
                        'strike'
                    ]
                }]
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor>
        <dxo-html-editor-table-context-menu
            [enabled]="true">
            <dxi-html-editor-item text="Font Style">
                <dxi-html-editor-item name="bold"></dxi-html-editor-item>
                <dxi-html-editor-item name="italic"></dxi-html-editor-item>
                <dxi-html-editor-item name="underline"></dxi-html-editor-item>
                <dxi-html-editor-item name="strike"></dxi-html-editor-item>
            </dxi-html-editor-item>
        </dxo-html-editor-table-context-menu>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor>
            <DxTableContextMenu
                :enabled="true">
                <DxTableContextMenuItem
                    text="Font Style">
                    <DxTableContextMenuItem name="bold" />
                    <DxTableContextMenuItem name="italic" />
                    <DxTableContextMenuItem name="underline" />
                    <DxTableContextMenuItem name="strike" />
                </DxTableContextMenuItem>
            </DxTableContextMenu>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

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
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import HtmlEditor, {
        TableContextMenu,
        TableContextMenuItem
    } from 'devextreme-react/html-editor';

    export default function App() {
        return (
            <HtmlEditor>
                <TableContextMenu
                    enabled={true}>
                    <TableContextMenuItem
                        text="Font Style">
                        <TableContextMenuItem name="bold" />
                        <TableContextMenuItem name="italic" />
                        <TableContextMenuItem name="underline" />
                        <TableContextMenuItem name="strike" />
                    </TableContextMenuItem>
                </TableContextMenu>
            </HtmlEditor>
        );
    }

---
