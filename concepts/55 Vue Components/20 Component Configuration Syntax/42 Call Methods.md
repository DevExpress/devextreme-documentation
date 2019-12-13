To call widget methods, you need the widget instance. Define the target component's key in the [`ref`](https://vuejs.org/v2/api/#ref) attribute. Then, pass the key to the [`$refs`](https://vuejs.org/v2/api/#vm-refs) property to get the component. The widget instance is stored in the component's  `instance` field:

    <!-- tab: App.vue -->
    <template>
        <div>
            <dx-text-box :ref="textBoxRefKey" />
            <dx-button text="Focus TextBox" @click="focusTextBox" />
        </div>
    </template>

    <script>
    import DxButton from 'devextreme-vue/button';
    import DxTextBox from 'devextreme-vue/text-box';

    const textBoxRefKey = "my-text-box";

    export default {
        components: {
            DxTextBox,
            DxButton
        },
        data: function() {
            return {
                textBoxRefKey
            };
        },
        methods: {
            focusTextBox: function() {
                this.textBox.focus();
            }
        },
        computed: {
            textBox: function() {
                return this.$refs[textBoxRefKey].instance;
            }
        }
    };
    </script>

Alternatively, you can save the widget instance in a component property once the widget is initialized:

    <!-- tab: App.vue -->
    <template>
        <div>
            <dx-data-grid ...
                @initialized="saveGridInstance">
            </dx-data-grid>
            <dx-button text="Refresh data" @click="refresh"/>
        </div>
    </template>

    <script>
    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxDataGrid,
            DxButton
        },
        data: function() {
            return {
                dataGridInstance: null
            };
        },
        methods: {
            saveGridInstance: function(e) {
                this.dataGridInstance = e.component;
            },
            refresh: function() {
                this.dataGridInstance.refresh();
            }
        }
    };
    </script>
