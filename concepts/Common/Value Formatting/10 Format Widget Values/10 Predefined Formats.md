Predefined formats are string literals for formatting numbers and dates. See the **format**.[type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') description for a full list.

Set the **format** widget option to apply a predefined format. In the following code, this option specifies the format and precision of the tooltip's value in the **Slider** widget. The value contains two decimal digits when the precision value is 2.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 10,
            value: 6, step: 0.01,
            tooltip: {
                enabled: true,
                format: {
                    type: "fixedPoint",
                    precision: 2
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        [min]="0" [max]="10"
        [(value)]="sliderValue" [step]="0.01">
        <dxo-tooltip
            [enabled]="true">
            <dxo-format
                type="fixedPoint"
                [precision]="2">
            </dxo-format>
        </dxo-tooltip>
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        sliderValue: number = 6;
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

---

The **format** option in the previous example is specified with an object which allows you to specify the precision. However, you can specify the **format** option with a string literal if this is not required.

#####See Also#####
- [RangeSelector Formatting Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/CustomFormatting)
