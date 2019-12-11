[note] This topic focuses on options that customize the text of point labels and allow you to customize an individual label. There are other options that customize labels, such as [backgroundColor](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label/backgroundColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/#backgroundColor'), [font](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/font/'), [border](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/border/'), etc., but their purpose and application is rather obvious, and for this reason, they are not detailed in this topic. For more information on them, please refer to the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/') section of the API reference.

If you need to change the text displayed by point labels, declare the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/label/#customizeText') function. It must return a string value. The argument of this function contains information about the point whose label is being customized. In the following example, the **customizeText** function instructs point labels to display both the argument and value of the point.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                label: {
                    visible: true,
                    customizeText: function (pointInfo) {
                        return pointInfo.argument + ': ' + pointInfo.value;
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series>
            <dxo-label
                [visible]="true"
                [customizeText]="customizeText">
            </dxo-label>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeText (pointInfo: any) {
            return pointInfo.argument + ': ' + pointInfo.value;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

You can also customize an individual label. For this purpose, assign a function to the [customizeLabel](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/customizeLabel.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizeLabel') option. This function must return an object with options for the label that you want to customize. Note that the **customizeLabel** option should be declared at the root level of the **Chart** configuration.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                label: {
                    visible: true,
                    backgroundColor: 'blue'
                }
            },
            // Assigns the red color to all labels whose series points have value more than 100
            // Other labels remain painted in blue
            customizeLabel: function (pointInfo) {
                return pointInfo.value > 100 ? { backgroundColor: 'red' } : { }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        [customizeLabel]="customizeLabel">
        <dxi-series>
            <dxo-label
                [visible]="true"
                backgroundColor="blue">
            </dxo-label>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Assigns the red color to all labels whose series points have value more than 100
        // Other labels remain painted in blue
        customizeLabel (pointInfo: any) {
            return pointInfo.value > 100 ? { backgroundColor: 'red' } : { }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels/"
}

#####See Also#####
- [Resolve Label Overlapping](/concepts/05%20Widgets/Chart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/Chart/Point_Labels/Resolve_Overlapping/')
- [Access a Point Label Using the API](/concepts/05%20Widgets/Chart/15%20Point%20Labels/15%20Access%20a%20Point%20Label%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Point_Labels/Access_a_Point_Label_Using_the_API/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, point labels, customize label, customizeLabel, customize text, customizeText
