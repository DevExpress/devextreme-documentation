---
id: dxHtmlEditorTableContextMenuItem.items
type: Array<dxHtmlEditorTableContextMenuItem, String>
acceptValues: 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'image' | 'strike' | 'subscript' | 'superscript' | 'underline' | 'blockquote' | 'increaseIndent' | 'decreaseIndent' | 'orderedList' | 'bulletList' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify' | 'codeBlock' | 'variable' | 'undo' | 'redo' | 'clear' | 'insertTable' | 'insertHeaderRow' | 'insertRowAbove' | 'insertRowBelow' | 'insertColumnLeft' | 'insertColumnRight' | 'deleteColumn' | 'deleteRow' | 'deleteTable' | 'cellProperties' | 'tableProperties'
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
        <dxo-table-context-menu
            [enabled]="true">
            <dxi-item text="Font Style">
                <dxi-item name="bold"></dxi-item>
                <dxi-item name="italic"></dxi-item>
                <dxi-item name="underline"></dxi-item>
                <dxi-item name="strike"></dxi-item>
            </dxi-item>
        </dxo-table-context-menu>
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