If you place DevExtreme components in a [Bootstrap modal](https://getbootstrap.com/docs/5.3/components/modal/), the following issues may occur:

- Users cannot insert, update, or delete a [DataGrid](/concepts/05%20UI%20Components/DataGrid/00%20Getting%20Started%20with%20DataGrid '/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/') row.
- Users cannot enter values in the [FilterBuilder](/concepts/05%20UI%20Components/FilterBuilder/010%20Overview.md '/Documentation/Guide/UI_Components/FilterBuilder/Overview/').
- Editors in the [DropDownBox](/concepts/05%20UI%20Components/DropDownBox/00%20Getting%20Started%20with%20DropDownBox '/Documentation/Guide/UI_Components/DropDownBox/Getting_Started_with_DropDownBox/') lose focus.
- [TextArea](/concepts/05%20UI%20Components/TextArea/00%20Getting%20Started%20with%20TextArea '/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/') loses focus.
- DataGrid [ColumnChooser](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnChooser '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/') loses focus.

On page load, Bootstrap locates all modals and places their child elements into special collections. A modal only allows items from its child element collection to receive focus. At the same time, DevExtreme components can generate elements on the fly. Such dynamically-generated elements do not get attached to the focusable collection.

To allow any element to obtain input focus, specify a specially-designed option as shown in the code below.

---

##### jQuery

Set the `data-bs-focus` property to `false` (Bootstrap 5). For Bootstrap 4 or earlier, disable the `data-focus` property.

    <!-- tab: Bootstrap 5 -->
    <div class="modal fade" role="dialog" data-bs-focus="false">
        <div class="modal-dialog">
            <div class="modal-content">     
                <!-- DevExtreme components -->
            </div>
        </div>
    </div>

    <!-- tab: Bootstrap 4 or earlier -->
    <div class="modal fade" role="dialog" data-focus="false">
        <div class="modal-dialog">
            <div class="modal-content">     
                <!-- DevExtreme components -->
            </div>
        </div>
    </div>

##### Vue

Set the `no-enforce-focus` property to `true`.

    <template>
        <b-modal :no-enforce-focus="true">
            <!-- DevExtreme components -->
        </b-modal>
    </template>

    <script>
        // ...
    </script>

##### React

Set the `enforceFocus` property to `false`.

    // ...
    function App() {
        return (
            <Modal ...
                enforceFocus={false}
            >
                {/* DevExtreme components */}
            </Modal>
        );
    }

---

[tags] jquery, vue, react