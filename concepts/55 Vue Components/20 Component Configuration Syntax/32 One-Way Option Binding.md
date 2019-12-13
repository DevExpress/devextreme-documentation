Changes in the `bindingProperty` are propagated to the **TextBox**'s **value**, but not vice versa. `:` before **value** is a shorthand for the [`v-bind`](https://vuejs.org/v2/api/#v-bind) directive.

    <!-- tab: App.vue -->
    <template>
        <dx-text-box :value="bindingProperty" />
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