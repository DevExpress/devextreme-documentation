To export or print a widget, a user clicks the *"Exporting/Printing"* button and selects a command from the drop-down menu. The **Print** command opens the browser's **Print** window that lets the user select preferred printing settings and send the print job to the printer. The other commands save a file of the selected format in the user's local storage.

<img src="/Content/images/doc/19_2/ChartJS/Client-Side-Export_exportMenu.png" alt="DevExtreme HTML5 DataVisualization Charts Export Print" style="vertical-align:middle"/>

You can enable both exporting and printing by setting the [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/').**enabled** option to **true**. If you need only exporting to be available to the user, disable printing by assigning **false** to the **export**.[printingEnabled](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/printingEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#printingEnabled') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            export: {
                enabled: true,
                printingEnabled: false
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-export
            [enabled]="true"
            [printingEnabled]="false">
        </dxo-export>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

If you want to restrict the set of formats available for exporting, change the **export**.[formats](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/formats.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#formats') array. You can also specify the default name for the exported file using the [fileName](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/fileName.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#fileName') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            export: {
                enabled: true,
                formats: ["PNG", "JPEG"],
                fileName: "exported_chart"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-export
            [enabled]="true"
            [formats]="['PNG', 'JPEG']"
            fileName="exported_chart">
        </dxo-export>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

To support exporting and printing in **Safari on MacOS**, you need to set up a proxy on your server. For details, see the [Set Up a Server-Side Proxy](/concepts/05%20Widgets/Chart/99%20Client-Side%20Exporting%20and%20Printing/30%20Set%20Up%20a%20Server-Side%20Proxy '/Documentation/Guide/Widgets/Chart/Client-Side_Exporting_and_Printing/#Set_Up_a_Server-Side_Proxy') topic.
