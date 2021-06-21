To bind the Sankey to an array, pass this array to the [dataSource](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/#dataSource') property. The array should contain objects with the `source`, `target`, and `weight` fields (default names). You can use the [sourceField](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/sourceField.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/#sourceField'), [targetField](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/targetField.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/#targetField'), and [weightField](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/weightField.md '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/#weightField') properties to specify other names:

---
##### jQuery

    <!-- tab: index.js -->
    const sankeyData = [
        { from: "Brazil", to: "Spain", weight: 4 },
        { from: "Brazil", to: "Portugal", weight: 5 },
        { from: "Brazil", to: "England", weight: 2 },
        { from: "Canada", to: "Portugal", weight: 2 },
        { from: "Canada", to: "England", weight: 1 },
        { from: "Mexico", to: "Portugal", weight: 9 },
        { from: "Mexico", to: "Spain", weight: 5 }
    ];

    $(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: sankeyData,
            sourceField: "from",
            targetField: "to"
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        sankeyData: Array<{ from: string, to: string, weight: number }> = [
            { from: "Brazil", to: "Spain", weight: 4 },
            { from: "Brazil", to: "Portugal", weight: 5 },
            { from: "Brazil", to: "England", weight: 2 },
            { from: "Canada", to: "Portugal", weight: 2 },
            { from: "Canada", to: "England", weight: 1 },
            { from: "Mexico", to: "Portugal", weight: 9 },
            { from: "Mexico", to: "Spain", weight: 5 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-sankey
        [dataSource]="sankeyData"
        sourceField="from"
        targetField="to">
    </dx-sankey>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSankey
            :data-source="sankeyData"
            source-field="from"
            target-field="to"
        />
    </template>

    <script>
    import DxSankey from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey
        },
        data() {
            return {
                sankeyData: [
                    { from: "Brazil", to: "Spain", weight: 4 },
                    { from: "Brazil", to: "Portugal", weight: 5 },
                    { from: "Brazil", to: "England", weight: 2 },
                    { from: "Canada", to: "Portugal", weight: 2 },
                    { from: "Canada", to: "England", weight: 1 },
                    { from: "Mexico", to: "Portugal", weight: 9 },
                    { from: "Mexico", to: "Spain", weight: 5 }
                ]
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import Sankey from 'devextreme-react/sankey';

    const sankeyData = [
        { from: "Brazil", to: "Spain", weight: 4 },
        { from: "Brazil", to: "Portugal", weight: 5 },
        { from: "Brazil", to: "England", weight: 2 },
        { from: "Canada", to: "Portugal", weight: 2 },
        { from: "Canada", to: "England", weight: 1 },
        { from: "Mexico", to: "Portugal", weight: 9 },
        { from: "Mexico", to: "Spain", weight: 5 }
    ];

    export default function App() {
        return (
            <Sankey
                dataSource={sankeyData}
                sourceField="from"
                targetField="to"
            />
        );
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}

#####See Also#####
- [Update Data in the Sankey](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')
