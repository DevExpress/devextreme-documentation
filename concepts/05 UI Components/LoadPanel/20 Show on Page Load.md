To display a LoadPanel on page load, initialize the component with [visible](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#visible) set to `true`. You can hide the LoadPanel once your page or data finishes loading. The following code snippet demonstrates how to hide the component after [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/) finishes loading data:

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        let data = new DevExpress.data.ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
        });

        const loadPanel = $('#loadpanel').dxLoadPanel({
            shadingColor: 'rgba(0,0,0,0.4)',
            visible: true,
        }).dxLoadPanel('instance');
        
        data.load().then(() => {
            loadPanel.hide();
        })
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-load-panel
        shadingColor="rgba(0,0,0,0.4)"
        [visible]="loadingVisible"
    ></dx-load-panel>

    <!-- tab: app.component.ts -->
    import { DxLoadPanelModule } from 'devextreme-angular';
    import ODataStore from "devextreme/data/odata/store";

    export class AppComponent {
        loadingVisible: boolean = true;
    
        data: ODataStore = new ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products"
        });

        constructor() {    
            this.data.load().then(() => {
                this.loadingVisible = false;
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxLoadPanel
            :visible="loadingVisible"
            shading-color="rgba(0,0,0,0.4)"
        />
    </template>

    <script setup lang="ts">
    import { DxLoadPanel } from 'devextreme-vue/load-panel';
    import ODataStore from 'devextreme/data/odata/store';

    const loadingVisible = ref(true);

    const data: ODataStore = new ODataStore({
        url: "https://js.devexpress.com/Demos/DevAV/odata/Products"
    });

    data.load().then(() => {
        loadingVisible.value = false;
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import { LoadPanel } from 'devextreme-react/load-panel';
    import ODataStore from 'devextreme/data/odata/store';

    export default function App () {
        const [loadingVisible, setLoadingVisible] = useState(true);

        const data: ODataStore = new ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products"
        });

        data.load().then(() => {
            setLoadingVisible(false);
        });

        return (
            <LoadPanel
                shadingColor="rgba(0,0,0,0.4)"
                visible={loadingVisible}
            />
        )
    }

---

[note] The default behaviour of LoadPanel is to display over the entire application [window](https://developer.mozilla.org/en-US/docs/Web/API/Window). To place the component over a specific area, define the [position](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#position) property.