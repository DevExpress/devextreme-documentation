---
id: dxDataGrid.Options.summary.skipEmptyValues
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether or not to skip *empty strings*, **null** and **undefined** values when calculating a summary.

---
Specified in the **summary** object, this option affects all summaries in the grid. In addition, the same option can be specified for an individual summary. It will override the global setting.

[note]This option does not have any effect when you use a remote data source.

[note]Summaries of the *count* type do not skip empty values regardless of the **skipEmptyValues** option. However, you can implement a custom summary, which skips empty values, as follows.
    
---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    // ...
                    name: "customSummary1",
                    summaryType: "custom"
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
            <dxi-total-item
                summaryType="custom"
                name="customSummary1">
            </dxi-total-item>
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