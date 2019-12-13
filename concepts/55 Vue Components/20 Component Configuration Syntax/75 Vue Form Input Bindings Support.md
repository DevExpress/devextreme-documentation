DevExtreme editors support the [`v-model`](https://vuejs.org/v2/guide/forms.html) directive that creates two-way binding on the editor's value.

    <!-- tab: App.vue -->
    <template>
        <dx-text-box v-model="bindingProperty" />
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

Alternatively, you can [use the `sync` modifier](/concepts/55%20Vue%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Option%20Binding.md '/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding').