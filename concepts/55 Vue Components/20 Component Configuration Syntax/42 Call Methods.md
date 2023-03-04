To call UI component methods, you need the UI component instance. Define its key in the <a href="https://v3.vuejs.org/api/special-attributes.html#ref" target="_blank">`ref`</a> attribute. Then, pass the key to the <a href="https://v3.vuejs.org/api/instance-properties.html#refs" target="_blank">`$refs`</a> property to get the component. The UI component instance is stored in the component's  `instance` field:

    <!-- tab: App.vue (Options API) -->
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

    <!-- tab: App.vue (Composition API) -->
    <template>
        <div>
            <DxTextBox :ref="textBoxRefKey" />
            <DxButton text="Focus TextBox" @click="focusTextBox" />
        </div>
    </template>

    <script setup>
    import DxButton from 'devextreme-vue/button';
    import DxTextBox from 'devextreme-vue/text-box';

    import { ref } from 'vue';

    const textBoxRef = ref(null);
    const focusTextBox = () => {  
        textBoxRef.value?.instance.focus();
    };
    </script>

Alternatively, you can assign the UI component instance to a variable and use it to call the methods:

    <!-- tab: App.vue (Options API) -->
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

    <!-- tab: App.vue (Composition API) -->
    <template>
        <div>
            <DxDataGrid ...
                @initialized="saveGridInstance">
            </DxDataGrid>
            <DxButton text="Refresh data" @click="refresh"/>
        </div>
    </template>

    <script setup>
    import DxDataGrid from 'devextreme-vue/data-grid';
    import DxButton from 'devextreme-vue/button';

    let dataGridInstance = null;
 
    const saveGridInstance = (e) => {
        dataGridInstance = e.component;
    }

    const refresh = () => {
        dataGridInstance.refresh();
    }
    </script>