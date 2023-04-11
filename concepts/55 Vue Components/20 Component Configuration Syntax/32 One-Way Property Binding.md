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
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxTextBox :value="bindingProperty" />
    </template>

    <script setup>
    import { ref } from "vue";
    import DxTextBox from 'devextreme-vue/text-box';

    let bindingProperty = ref('Some value');
    </script>