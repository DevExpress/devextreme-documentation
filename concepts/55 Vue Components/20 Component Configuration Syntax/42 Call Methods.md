To call UI component methods, you need the UI component instance. Define its key in the [`ref`](https://vuejs.org/v2/api/#ref) attribute. Then, pass the key to the [`$refs`](https://vuejs.org/v2/api/#vm-refs) property to get the component. The UI component instance is stored in the component's  `instance` field:

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxTextBox :ref="textBoxRefKey" />
            <DxButton text="Focus TextBox" @click="focusTextBox" />
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

Alternatively, you can assign the UI component instance to a variable and use it to call the methods:

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDataGrid ...
                @initialized="saveGridInstance">
            </DxDataGrid>
            <DxButton text="Refresh data" @click="refresh"/>
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
