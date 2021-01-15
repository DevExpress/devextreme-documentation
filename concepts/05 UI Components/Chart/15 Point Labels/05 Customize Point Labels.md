[note] This topic focuses on properties that customize the text of point labels and allow you to customize an individual label. There are other properties that customize labels, such as [backgroundColor](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label/backgroundColor.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/label/#backgroundColor'), [font](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label/font '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/label/font/'), [border](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label/border '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/label/border/'), etc., but their purpose and application is rather obvious, and for this reason, they are not detailed in this topic. For more information on them, please refer to the [label](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/label/') section of the API reference.

If you need to change the text displayed by point labels, declare the [customizeText](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/label/customizeText.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/label/#customizeText') function. It must return a string value. The argument of this function contains information about the point whose label is being customized. In the following example, the **customizeText** function instructs point labels to display both the argument and value of the point.

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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxSeries>
                <DxLabel
                    :visible="true"
                    :customize-text="customizeText"
                />
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxLabel
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxLabel
        },
        methods: {
            customizeText (pointInfo) {
                return `${pointInfo.argument}: ${pointInfo.value}`;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        Label
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series>
                        <Label
                            visible={true}
                            customizeText={this.customizeText}
                        />
                    </Series>
                </Chart>
            );
        }

        customizeText (pointInfo) {
            return `${pointInfo.argument}: ${pointInfo.value}`;
        }
    }

    export default App;

---

You can also customize an individual label. For this purpose, assign a function to the [customizeLabel](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/customizeLabel.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#customizeLabel') property. This function must return an object with properties for the label that you want to customize. Note that the **customizeLabel** property should be declared at the root level of the **Chart** configuration.

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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart :customize-label="customizeLabel">
            <DxSeries>
                <DxLabel
                    :visible="true"
                    background-color="blue"
                />
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxLabel
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxLabel
        },
        methods: {
            // Assigns the red color to all labels whose series points have value more than 100
            // Other labels remain painted in blue
            customizeLabel (pointInfo) {
                return pointInfo.value > 100 ? { backgroundColor: 'red' } : { };
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        Label
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart
                    customizeLabel={this.customizeLabel}
                >
                    <Series>
                        <Label
                            visible={true}
                            backgroundColor="blue"
                        />
                    </Series>
                </Chart>
            );
        }

        // Assigns the red color to all labels whose series points have value more than 100
        // Other labels remain painted in blue
        customizeLabel (pointInfo) {
            return pointInfo.value > 100 ? { backgroundColor: 'red' } : { };
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels/"
}

#####See Also#####
- [Resolve Label Overlapping](/concepts/05%20UI%20Components/Chart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/UI_Components/Chart/Point_Labels/Resolve_Overlapping/')
- [Access a Point Label Using the API](/concepts/05%20UI%20Components/Chart/15%20Point%20Labels/15%20Access%20a%20Point%20Label%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Chart/Point_Labels/Access_a_Point_Label_Using_the_API/')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, point labels, customize label, customizeLabel, customize text, customizeText
