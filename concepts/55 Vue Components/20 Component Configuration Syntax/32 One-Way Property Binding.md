Changes in the `bindingProperty` are propagated to the TextBox's **value**, but not vice versa:

    <!-- tab: App.vue -->
    <template>
        <DxTextBox :value="bindingProperty" />
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