To export or print the widget, a user clicks **Exporting/Printing** and selects a command from the drop-down menu.

The **Print** command opens the browser's **Print** window. This window allows a user to specify the print settings and send the print job to the printer.

The other commands save a file in the selected format on the user's device.

![Sankey Export Menu](/images/Sankey/visual_elements/export-menu.png)

Set [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/export/').**enabled** to **true** to enable exporting and printing. To allow a user to only export, assign **false** to **export**.[printingEnabled](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/printingEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/export/#printingEnabled').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            export: {
                enabled: true,
                printingEnabled: false
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxo-export
            [enabled]="true"
            [printingEnabled]="false">
        </dxo-export>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

Change the **export**.[formats](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/formats.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/export/#formats') array to limit the set of export formats. You can also set the [fileName](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/fileName.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/export/#fileName') option to specify the export file's name.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            export: {
                enabled: true,
                formats: ["PNG", "JPEG"],
                fileName: "exported_sankey"
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxo-export
            [enabled]="true"
            [formats]="['PNG', 'JPEG']"
            fileName="exported_sankey">
        </dxo-export>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

You should [set up a server-side proxy](/concepts/05%20Widgets/Chart/99%20Client-Side%20Exporting%20and%20Printing/30%20Set%20Up%20a%20Server-Side%20Proxy '/Documentation/Guide/Widgets/Chart/Client-Side_Exporting_and_Printing/#Set_Up_a_Server-Side_Proxy') to enable exporting and printing in **Safari on MacOS**.
