DevExtreme editors support the <a href="https://v3.vuejs.org/guide/forms.html" target="_blank">`v-model`</a> directive that creates two-way binding on the editor's value.

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxTextBox v-model="bindingProperty" />
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
        <DxTextBox v-model="bindingProperty" />
    </template>

    <script setup>
    import DxTextBox from 'devextreme-vue/text-box';

    let bindingProperty = 'Some value';
    </script>

[important] In Vue 2 applications, you can use the `.sync` modifier to implement two-way binding.