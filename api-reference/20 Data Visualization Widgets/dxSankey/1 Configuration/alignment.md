---
id: dxSankey.Options.alignment
acceptValues: 'bottom' | 'center' | 'top'
type: String | Array<String>
default: 'center'
---
---
##### shortDescription
Aligns node columns vertically.

---
A string value aligns all node columns uniformly. An array of strings allows you to align each node column individually. For example, the **Sankey** widget contains four columns, and the **alignment** option is specified as follows:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            alignment: ["top", "bottom", "bottom"]
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ...
        [alignment]="['top', 'bottom', 'bottom']">
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

With this setting, the leftmost node column is aligned to the top, and the next two columns are aligned to the bottom. The rightmost column does not have a value in the **alignment** array and is aligned to the center (according to the default value).

#include common-ref-enum with {
    enum: "`VerticalAlignment`",
    values: "`Bottom`, `Center`, and `Top`"
}