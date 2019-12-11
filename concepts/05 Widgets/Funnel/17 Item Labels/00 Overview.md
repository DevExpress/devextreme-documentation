A label that displays the item's value or custom data can accompany each funnel item.

![Funnel Item Labels](/images/funnel/visual_elements/item-labels.png)

Options that configure item labels are collected in the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/') object. Refer to its description in the API reference or to other topics in this section for details on item label settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            label: {
                // Settings for all item labels
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-label ... >
            <!-- Settings for all item labels -->
        </dxo-label>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

#####See Also#####
- [Customize Labels](/concepts/05%20Widgets/Funnel/17%20Item%20Labels/05%20Customize%20Labels.md '/Documentation/Guide/Widgets/Funnel/Item_Labels/Customize_Labels/')
- [Relocate Labels](/concepts/05%20Widgets/Funnel/17%20Item%20Labels/07%20Relocate%20Labels.md '/Documentation/Guide/Widgets/Funnel/Item_Labels/Relocate_Labels/')
- [Funnel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart)
