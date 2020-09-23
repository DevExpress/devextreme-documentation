Changes in the `bindingProperty` are propagated to the **TextBox**'s **value** and vice versa. The [`sync`](https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier) modifier provides two-way binding.

    <!-- tab: App.vue -->
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