[note] This topic focuses on options that customize the text of point labels and allow you to customize an individual label. There are other options that customize labels, such as [backgroundColor](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/backgroundColor.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#backgroundColor'), [font](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/font '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/font/'), [border](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/border/'), etc., but their purpose and application is rather obvious, and for this reason, they are not detailed in this topic. For more information on them, please refer to the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/') section of the API reference.

If you need to change the text displayed by point labels, declare the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#customizeText') function. It must return a string value. The argument of this function contains information about the point whose label is being customized. In the following example, the **customizeText** function instructs point labels to display both the argument and value of a point.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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

    <!--HTML--><dx-pie-chart ... >
        <dxi-series>
            <dxo-label
                [visible]="true"
                [customizeText]="customizeText">
            </dxo-label>
        </dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeText (pointInfo: any) {
            return pointInfo.argument + ': ' + pointInfo.value;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ... >
            <DxSeries>
                <DxLabel
                    :visible="true"
                    :customize-text="customizeText"
                />
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries,
        DxLabel
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxLabel
        },
        methods: {
            customizeText({ argument, value }) {
                return `${argument}: ${value}`;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series,
        Label
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Series>
                        <Label
                            visible={true}
                            customizeText={customizeText}
                        />
                    </Series>
                </PieChart>
            );
        }
    }

    function customizeText({ argument, value }) {
        return `${argument}: ${value}`;
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithCustomLabels/"
}

You can also customize an individual label. For this purpose, assign a function to the [customizeLabel](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/customizeLabel.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#customizeLabel') option. This function must return an object with options for the label that you want to customize. Note that the **customizeLabel** option should be declared at the root level of the **PieChart** configuration.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                label: {
                    visible: true,
                    backgroundColor: 'blue'
                }
            },
            // All point labels with the value more than 100 turn red
            // Other point labels remain blue
            customizeLabel: function (pointInfo) {
                return pointInfo.value > 100 ? { backgroundColor: 'red' } : { };
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart
        [customizeLabel]="customizeLabel">
        <dxi-series>
            <dxo-label
                [visible]="true"
                backgroundColor="blue">
            </dxo-label>
        </dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // All point labels with the value more than 100 turn red
        // Other point labels remain blue
        customizeLabel (pointInfo: any) {
            return pointInfo.value > 100 ? { backgroundColor: 'red' } : { };
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ...
            :customize-label="customizeLabel">
            <DxSeries>
                <DxLabel
                    :visible="true"
                    background-color="blue"
                />
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxSeries,
        DxLabel
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxSeries,
            DxLabel
        },
        methods: {
            // All point labels with the value more than 100 turn red
            // Other point labels remain blue
            customizeLabel(pointInfo) {
                return pointInfo.value > 100 ? { backgroundColor: 'red' } : { };
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Series,
        Label
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...
                    customizeLabel={customizeLabel}>
                    <Series>
                        <Label
                            visible={true}
                            backgroundColor="blue"
                        />
                    </Series>
                </PieChart>
            );
        }
    }

    // All point labels with the value more than 100 turn red
    // Other point labels remain blue
    function customizeLabel(pointInfo) {
        return pointInfo.value > 100 ? { backgroundColor: 'red' } : { };
    }

---

#####See Also#####
- [Resolve Label Overlapping](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Resolve_Overlapping/')
- [Access a Label Using the API](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/15%20Access%20a%20Label%20Using%20the%20API.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Access_a_Label_Using_the_API/')
