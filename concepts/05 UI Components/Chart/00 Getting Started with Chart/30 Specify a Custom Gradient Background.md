You can customize the appearance of Chart elements. To configure a background gradient, set **commonPaneSettings**.[backgroundColor](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonPaneSettings/backgroundColor.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonPaneSettings/#backgroundColor') to a [ChartsColor](/api-reference/40%20Common%20Types/05%20charts/ChartsColor '/Documentation/ApiReference/Common_Types/charts/ChartsColor/') object. In this object, assign the [registerGradient](/api-reference/50%20Common/utils/viz/registerGradient(type_options).md '/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options') return value to [fillId](/api-reference/40%20Common%20Types/05%20charts/ChartsColor/fillId.md '/Documentation/ApiReference/Common_Types/charts/ChartsColor/#fillId'):

---

##### jQuery

    <!-- tab: index.js -->
    const registerGradient = DevExpress.common.charts.registerGradient;

    $(() => {
        $('#chart').dxChart({
            dataSource: chartData,
            commonPaneSettings: {
                backgroundColor: {
                    base: '#ffffff',
                    fillId: registerGradient('linear', {
                        colors: [{
                            offset: '20%',
                            color: '#dee4ff',
                        }, {
                            offset: '90%',
                            color: '#ffdeff',
                        }],
                    }),
                },
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart [dataSource]="chartData" >
        <dxo-common-pane-settings>
            <dxo-background-color
                base="#ffffff"
                [fillId]="chartGradient"
            ></dxo-background-color>
        </dxo-common-pane-settings>
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { registerGradient } from 'devextreme-angular/common/charts';

    export class AppComponent {
        chartGradient = registerGradient('linear', {
            colors: [{
                offset: '20%',
                color: '#dee4ff',
            }, {
                offset: '90%',
                color: '#ffdeff',
            }],
        });
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { registerGradient } from 'devextreme-vue/common/charts';

    const chartGradient = registerGradient('linear', {
        colors: [{
            offset: '20%',
            color: '#dee4ff',
        }, {
            offset: '90%',
            color: '#ffdeff',
        }],
    });
    </script>

    <template>
        <div>
            <DxChart :data-source="chartData" >
                <DxCommonPaneSettings>
                    <DxBackgroundColor
                        base="#ffffff"
                        :fill-id="chartGradient"
                    />
                </DxCommonPaneSettings>
            </DxChart>
        </div>
    </template>

##### React

    <!-- tab: App.tsx -->
    import { registerGradient } from 'devextreme-react/common/charts';

    const chartGradient = registerGradient('linear', {
        colors: [{
            offset: '20%',
            color: '#dee4ff',
        }, {
            offset: '90%',
            color: '#ffdeff',
        }],
    });

    function App(): JSX.Element {
        return (
            <>
                <Chart dataSource={chartData} >
                    <CommonPaneSettings>
                        <BackgroundColor
                            base='#ffffff'
                            fillId={chartGradient}
                        >
                        </BackgroundColor>
                    </CommonPaneSettings>
                </Chart>
            </>
        );
    }

    export default App;

---