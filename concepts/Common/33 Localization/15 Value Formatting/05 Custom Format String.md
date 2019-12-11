A custom format string specifies a format using wildcard characters. It is useful when the predefined formats are not suitable.

The [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') description details supported characters. A format string can also contain regular characters which are displayed as is. Below the example from the [Predefined Formats](/concepts/Common/33%20Localization/15%20Value%20Formatting/02%20Predefined%20Formats.md '/Documentation/Guide/Common/Localization/#Value_Formatting/Predefined_Formats') topic is changed so that the tooltip's value does not contain trailing decimal zeros:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 10,
            value: 6, step: 0.01,
            tooltip: {
                enabled: true,
                format: "#0.##"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        [min]="0" [max]="10"
        [(value)]="sliderValue" [step]="0.01">
        <dxo-tooltip
            [enabled]="true"
            format="0.##">
        </dxo-tooltip>
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        sliderValue = 6;
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

---

#####See Also#####
- [NumberBox Formatting Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Formatting/jQuery/Light)
