---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.border
type: Object
---
---
##### shortDescription
An object defining the series border configuration properties.

##### propertyOf
dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.barpolarseries,dxPolarChartSeriesTypes.stackedbarpolarseries

---

You can configure **border** settings in the following objects:

- [commonSeriesSettings]()    
Configures the **border** object for all supported series.
- **commonSeriesSettings**.[area](), **commonSeriesSettings**.[bar](), **commonSeriesSettings**.[stackedBar]()    
Configures the **border** object for all series of a specific type. Overwrites **border** configuration in **commonSeriesSettings**.
- [series](/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/series/)    
Configures the **border** object for a specific series. Overwrites **border** configuration in **commonSeriesSettings** and series-specific objects.

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#polarChartContainer").dxPolarChart({
            commonSeriesSettings: {
                border: {
                    visible: true,
                    color: "black",
                    dashStyle: "longDashdot",
                    width: 1,
                }
            }
        })
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-polar-chart>
        <dxo-common-series-settings>
            <dxo-border
                [visible]="true"
                color="black"
                dashStyle="longDashdot"
                width="1"
            ></dxo-border>
        </dxo-common-series-settings>
    </dx-polar-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPolarChart>
            <DxCommonSeriesSettings>
                <DxBorder
                    :visible="true"
                    color="black"
                    dashStyle="longDashdot"
                    width="1"
                />
            </DxCommonSeriesSettings>
        </DxPolarChart>
    </template>

##### React

    <!-- tab: App.tsx -->
    function App() {
        return (
            <PolarChart>
                <CommonSeriesSettings>
                    <Border
                        visible={true}
                        color="black"
                        dashStyle="longDashdot"
                        width="1"
                    />
                </CommonSeriesSettings>
            </PolarChart>
        )
    }

---