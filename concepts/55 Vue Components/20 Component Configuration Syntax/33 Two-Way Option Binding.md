Changes in the `bindingProperty` are propagated to the **TextBox**'s **value** and vice versa:

    <!-- tab: App.vue -->
    <template>
        <DxTextBox
            v-model:value="bindingProperty"
            @value-change="$emit('update:bindingProperty', $event.target.value)"
        />
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