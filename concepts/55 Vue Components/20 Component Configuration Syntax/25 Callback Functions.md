    <!-- tab: App.vue (Options API) -->
    <template>
        <DxVectorMap>
            <DxLayer :customize="customizeLayers" />
        </DxVectorMap>
    </template>

    <script>
    import DxVectorMap, {
        DxLayer
    } from 'devextreme-vue/vector-map';

    export default {
        components: {
            DxVectorMap,
            DxLayer
        },
        methods: {
            customizeLayers(elements) {
                // ...
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxVectorMap>
            <DxLayer :customize="customizeLayers" />
        </DxVectorMap>
    </template>

    <script setup>
    import DxVectorMap, {
        DxLayer
    } from 'devextreme-vue/vector-map';

    const customizeLayers = (elements) => {
        // ...
    }
    </script>
    