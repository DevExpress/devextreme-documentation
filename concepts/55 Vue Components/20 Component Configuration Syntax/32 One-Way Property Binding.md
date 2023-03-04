Changes in the `bindingProperty` are propagated to the TextBox's **value**, but not vice versa:

    <!-- tab: App.vue (Options API) -->
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
    </script setup>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxTextBox :value="bindingProperty" />
    </template>

    <script setup>
    import DxTextBox from 'devextreme-vue/text-box';

    let bindingProperty = 'Some value';
    </script>