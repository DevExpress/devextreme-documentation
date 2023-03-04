Changes in the `bindingProperty` are propagated to the TextBox's **value** and vice versa:

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxTextBox v-model:value="bindingProperty" />
    </template>

    <script>
    import DxTextBox from 'devextreme-vue/text-box';

    export default {
        components: {
            DxTextBox
        },
        data() {
            return {
                bindingProperty: 'Some value'
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxTextBox v-model:value="bindingProperty" />
    </template>

    <script setup>
    import DxTextBox from 'devextreme-vue/text-box';

    let bindingProperty = 'Some value';
    </script>