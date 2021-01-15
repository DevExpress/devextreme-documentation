---
id: dxDataGrid.Options.summary.groupItems.skipEmptyValues
type: Boolean
---
---
##### shortDescription
Specifies whether or not to skip *empty strings*, **null** and **undefined** values when calculating a summary.

---
Specified in a summary configuration object, this option affects an individual summary item. If you need to apply a single setting to all summaries in a grid, specify the **skipEmptyValues** option in the **summary** object.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                // ...
                skipEmptyValues: false
            }
        });
    });


#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [skipEmptyValues]="false"></dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

[note]This option does not have any effect when you use a remote data source.

[note]Summaries of the *count* type do not skip empty values regardless of the **skipEmptyValues** option. However, you can implement a custom summary, which skips empty values, as follows.
    
---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    summaryType: "custom",
                    name: "customSummary1"
                }],
                calculateCustomSummary: function (options) {
                    if (options.name == "customSummary1") {
                        if (options.summaryProcess == "start") {
                            options.totalValue = 0;
                        }
                        if (options.summaryProcess == "calculate") {
                            if (e.value) {
                                options.totalValue++;
                            }
                        }
                    }
                }
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [calculateCustomSummary]="calculateSummary">
            <dxi-group-item
                summaryType="custom"
                name="customSummary1">
            </dxi-group-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        calculateSummary (options) {
            if (options.name == "customSummary1") {
                if (options.summaryProcess == "start") {
                    options.totalValue = 0;
                }
                if (options.summaryProcess == "calculate") {
                    if (e.value) {
                        options.totalValue++;
                    }
                }
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---