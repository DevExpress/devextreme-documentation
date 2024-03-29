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
    import { ref } from "vue";
    import DxTextBox from 'devextreme-vue/text-box';

    let bindingProperty = ref('Some value');
    </script>

[important] In Vue 2 applications, use the `.sync` modifier to implement two-way binding.