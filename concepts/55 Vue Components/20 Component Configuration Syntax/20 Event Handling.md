    <!-- tab: App.vue -->
    <template>
        <DxButton
            text="OK"
            @click="okClicked"
        />
    </template>

    <script>
    import DxButton from 'devextreme-vue/button';
    import notify from 'devextreme/ui/notify';

    export default {
        components: {
            DxButton
        },
        methods: {
            okClicked: function(e) {
                notify('The OK button was clicked')
            }
        }
    }
    </script>