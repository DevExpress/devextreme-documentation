    <!-- tab: App.vue -->
    <template>
        <dx-vector-map>
            <dx-layer :customize="customizeLayers" />
        </dx-vector-map>
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
    