---
id: dxSankey.Options.sortData
type: any | undefined
default: undefined
---
---
##### shortDescription
Specifies nodes' sorting order in their columns.

---
The sorting order depends on the node's weight: the heavier the node, the lower it is in the column. All nodes have the same weight initially (equals 1).

For example, without the **sortData** object, source nodes in the following code would be sorted as declared in the data source (top to bottom): Australia, New Zealand, Japan. Weights in the **sortData** object specify the following sorting order: New Zealand, Japan, Australia.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: [
                { source: "Australia", target: "Portugal", weight: 5 },
                { source: "New Zealand", target: "Portugal", weight: 1 },
                { source: "Japan", target: "Senegal", weight: 3 }
            ],
            sortData: { "Australia": 3, "New Zealand": 1, "Japan": 2 }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        data: Array<{ source: string, target: string, weight: number }> = [
            { source: "Australia", target: "Portugal", weight: 5 },
            { source: "New Zealand", target: "Portugal", weight: 1 },
            { source: "Japan", target: "Senegal", weight: 3 }
        ];
        sortData = { "Australia": 3, "New Zealand": 1, "Japan": 2 };
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
        [dataSource]="data"
        [sortData]="sortData">
    </dx-sankey>

---