    <!-- tab: App.vue -->
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
    