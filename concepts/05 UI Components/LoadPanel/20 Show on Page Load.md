To display a LoadPanel on page load, initialize the component with [visible](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#visible') set to `true`. You can hide the LoadPanel once your page or data finishes loading. The following code snippet demonstrates how to hide the component after [ODataStore](/api-reference/30%20Data%20Layer/ODataStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/') finishes loading data:

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const data = new DevExpress.data.ODataStore({
            url: "http://www.example.com/Northwind.svc/Products",
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
            url: "http://www.example.com/Northwind.svc/Products"
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
        url: "http://www.example.com/Northwind.svc/Products"
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
            url: "http://www.example.com/Northwind.svc/Products"
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

[note] The default placement of LoadPanel is over the entire application [window](https://developer.mozilla.org/en-US/docs/Web/API/Window). To place the component over a specific area, define the [position](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/position.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#position') property.
