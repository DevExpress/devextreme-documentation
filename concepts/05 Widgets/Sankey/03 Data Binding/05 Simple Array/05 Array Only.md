To bind the **Sankey** to an array, pass this array to the [dataSource](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#dataSource') option. The array should contain objects with the `source`, `target`, and `weight` fields (default names). You can use the [sourceField](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/sourceField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#sourceField'), [targetField](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/targetField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#targetField'), and [weightField](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/weightField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#weightField') options to specify other names:

---
##### jQuery

    <!--JavaScript-->var sankeyData = [
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

---

You can create a [Query](/concepts/30%20Data%20Layer/5%20Data%20Layer/6%20Query%20Concept.md '/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept') if objects in the array should be processed (sorted, filtered, and so on). For example, in the following code, a Query filters the `sankeyData` array to exclude objects whose `weight` is less than 3:

---
##### jQuery

    <!--JavaScript-->var sankeyData = [
        { source: "Brazil", target: "Spain", weight: 4 },
        { source: "Brazil", target: "Portugal", weight: 5 },
        { source: "Brazil", target: "England", weight: 2 },
        { source: "Canada", target: "Portugal", weight: 2 },
        { source: "Canada", target: "England", weight: 1 },
        { source: "Mexico", target: "Portugal", weight: 9 },
        { source: "Mexico", target: "Spain", weight: 5 }
    ];

    $(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: DevExpress.data.query(sankeyData).filter([ "weight", ">", 3 ]).toArray()
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    import query from "devextreme/data/query";
    // ...
    export class AppComponent {
        sankeyData: Array<{ source: string, target: string, weight: number }> = [
            { source: "Brazil", target: "Spain", weight: 4 },
            { source: "Brazil", target: "Portugal", weight: 5 },
            { source: "Brazil", target: "England", weight: 2 },
            { source: "Canada", target: "Portugal", weight: 2 },
            { source: "Canada", target: "England", weight: 1 },
            { source: "Mexico", target: "Portugal", weight: 9 },
            { source: "Mexico", target: "Spain", weight: 5 }
        ];
        getFilteredData() {
            return query(this.sankeyData).filter([ "weight", ">", 3 ]).toArray();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML--><dx-sankey
        [dataSource]="getFilteredData()">
    </dx-sankey>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}

#####See Also#####
- [Update Data in the Sankey](/concepts/05%20Widgets/Sankey/03%20Data%20Binding/26%20Update%20Data '/Documentation/Guide/Widgets/Sankey/Data_Binding/Update_Data/')
