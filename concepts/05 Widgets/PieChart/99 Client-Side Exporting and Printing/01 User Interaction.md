To export or print the **PieChart**, a user clicks the *"Exporting/Printing"* button and selects a command from the drop-down menu. The **Print** command opens the browser's **Print** window that lets the user select preferred printing settings and send the print job to the printer. The other commands save a file of the selected format in the user's local storage.

![DevExtreme HTML5 JavaScript PieChart Export Menu](/images/PieChart/visual_elements/export_menu.png)

You can enable both exporting and printing by setting the [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/export/').**enabled** option to **true**. If you need only exporting to be available to the user, disable printing by assigning **false** to the **export**.[printingEnabled](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/printingEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/export/#printingEnabled') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            export: {
                enabled: true,
                printingEnabled: false
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-export
            [enabled]="true"
            [printingEnabled]="false">
        </dxo-export>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            <DxExport
                :enabled="true"
                :printing-enabled="false"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxExport
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxExport
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Export
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Export
                        enabled={true}
                        printingEnabled={false}
                    />
                </PieChart>
            );
        }
    }

---

If you want to restrict the set of formats available for exporting, change the **export**.[formats](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/formats.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/export/#formats') array. You can also specify the default name for the exported file using the [fileName](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/fileName.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/export/#fileName') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            export: {
                enabled: true,
                formats: ["PNG", "JPEG"],
                fileName: "exported_chart"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-export
            [enabled]="true"
            [formats]="['PNG', 'JPEG']"
            fileName="exported_chart">
        </dxo-export>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            <DxExport
                :enabled="true"
                :formats="formats"
                file-name="exported_chart"
            />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxExport
    } from 'devextreme-vue/pie-chart';

    const formats = ['PNG', 'JPEG'];

    export default {
        components: {
            DxPieChart,
            DxExport
        },
        data() {
            return {
                formats
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Export
    } from 'devextreme-react/pie-chart';

    const formats = ['PNG', 'JPEG'];

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Export
                        enabled={true}
                        formats={formats}
                        fileName="exported_chart"
                    />
                </PieChart>
            );
        }
    }

---
