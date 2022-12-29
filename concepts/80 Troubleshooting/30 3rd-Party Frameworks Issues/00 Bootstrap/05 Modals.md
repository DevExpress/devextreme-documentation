If you place DevExtreme components in the [Bootstrap modal](https://getbootstrap.com/docs/5.3/components/modal/), they may lose focus or not respond to user actions. To prevent this behavior, disable the enforce focus routine that maintains focus inside the modal itself.

---

##### jQuery

Set the `data-bs-focus` property to `false` (Bootstrap 5). For Bootstrap 4 or earlier, disable the `data-focus` property.

    <!-- tab: Bootstrap 5 -->
    <div class="modal fade" data-bs-focus="false">
        <div class="modal-dialog">
            <div class="modal-content">     
                <!-- DevExtreme components -->
            </div>
        </div>
    </div>

    <!-- tab: Bootstrap 4 or earlier -->
    <div class="modal fade" data-focus="false">
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