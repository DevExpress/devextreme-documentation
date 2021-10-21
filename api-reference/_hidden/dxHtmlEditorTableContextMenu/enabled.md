---
id: dxHtmlEditorTableContextMenu.enabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether to enable the table context menu.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            tableContextMenu: {
                enabled: true
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor>
        <dxo-table-context-menu
            [enabled]="true">
        </dxo-table-context-menu>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor>
            <DxTableContextMenu
                :enabled="true"
            />
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor, {
        DxTableContextMenu
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxTableContextMenu
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor, {
        TableContextMenu
    } from 'devextreme-react/html-editor';

    export default function App() {
        return (
            <HtmlEditor>
                <TableContextMenu
                    enabled={true}
                />
            </HtmlEditor>
        );
    }

---