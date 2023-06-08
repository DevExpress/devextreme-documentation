DevExtreme data visualization UI components raise the following exporting-related events.

- [exporting](/api-reference/10%20UI%20Components/BaseWidget/4%20Events/exporting.md '/Documentation/ApiReference/UI_Components/dxPieChart/Events/#exporting')  
Allows you to request exporting details or prevent exporting.

- [exported](/api-reference/10%20UI%20Components/BaseWidget/4%20Events/exported.md '/Documentation/ApiReference/UI_Components/dxPieChart/Events/#exported')  
Allows you to notify an end user when exporting is completed.

- [fileSaving](/api-reference/10%20UI%20Components/BaseWidget/4%20Events/fileSaving.md '/Documentation/ApiReference/UI_Components/dxPieChart/Events/#fileSaving')        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved in a file on the user's local storage.

You can handle these events with functions. If the handling functions are not going to be changed at runtime, assign them to the [onExporting](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onExporting'), [onExported](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/onExported.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onExported') and [onFileSaving](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onFileSaving') properties when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            onExporting: function (e) {
                // Handler of the "exporting" event
            },
            onExported: function (e) {
                // Handler of the "exported" event
            },
            onFileSaving: function (e) {
                // Handler of the "fileSaving" event
            }
        });
    });


##### Angular

    <!--HTML--><dx-pie-chart ...
        (onExporting)="onExporting($event)"
        (onExported)="onExported($event)"
        (onFileSaving)="onFileSaving($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onExporting (e) {
            // Handler of the "exporting" event
        };
        onExported (e) {
            // Handler of the "exported" event
        };
        onFileSaving (e) {
            // Handler of the "fileSaving" event
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
            @exporting="onExporting"
            @exported="onExported"
            @file-saving="onFileSaving">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            onExporting(e) {
                // Handler of the "exporting" event
            },
            onExported(e) {
                // Handler of the "exported" event
            },
            onFileSaving(e) {
                // Handler of the "fileSaving" event
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...
                    onExporting={onExporting}
                    onExported={onExported}
                    onFileSaving={onFileSaving}>
                </PieChart>
            );
        }
    }

    function onExporting(e) {
        // Handler of the "exporting" event
    }
    function onExported(e) {
        // Handler of the "exported" event
    }
    function onFileSaving(e) {
        // Handler of the "fileSaving" event
    }

---

---

##### jQuery

Otherwise, or if you need several handlers for a single event, subscribe to the exporting-related events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var exportedHandler1 = function (e) {
        // First handler of the "exported" event
    };

    var exportedHandler2 = function (e) {
        // Second handler of the "exported" event
    };

    $("#pieChartContainer").dxPieChart("instance")
        .on("exported", exportedHandler1)
        .on("exported", exportedHandler2);

---

#####See Also#####
#include common-link-handleevents