If you place DevExtreme components in the [Bootstrap modal](https://getbootstrap.com/docs/5.3/components/modal/), the following issues may occur:

- Users cannot insert, update, or delete a [DataGrid](/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/) row.
- Users cannot enter values in the [FilterBuilder](/Documentation/Guide/UI_Components/FilterBuilder/Overview/).
- Editors in the [DropDownBox](/Documentation/Guide/UI_Components/DropDownBox/Getting_Started_with_DropDownBox/) lose focus.
- [TextArea](/Documentation/Guide/UI_Components/TextArea/Getting_Started_with_TextArea/) loses focus.
- DataGrid [ColumnChooser](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/) loses focus.

On the page load, Bootstrap places all items inside the modal into a collection and allows to focus only on the items from the collection. DevExtreme component elements can be generated on the fly, so these elements do not get attached to the focusable collection.

To prevent this behavior, configure the option that maintains focus inside the modal itself.

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