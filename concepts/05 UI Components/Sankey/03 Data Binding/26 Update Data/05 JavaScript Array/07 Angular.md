Enclose the **dataSource** option in square brackets to bind it to an array using one-way binding. Now, whenever an item is added or removed from the array, the **Sankey** is updated accordingly.

    <!--HTML--><dx-sankey
        [dataSource]="sankeyData">
    </dx-sankey>
    
    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
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
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })
