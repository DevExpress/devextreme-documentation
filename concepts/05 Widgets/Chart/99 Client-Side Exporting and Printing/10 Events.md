DevExtreme data visualization widgets raise the following exporting-related events.

- [exporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/exporting.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#exporting')  
Allows you to request exporting details or prevent exporting.

- [exported](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/exported.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#exported')  
Allows you to notify an end user when exporting is completed.

- [fileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/fileSaving.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#fileSaving')        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved in a file on the user's local storage.

You can handle these events with functions. If the handling functions are not going to be changed at runtime, assign them to the [onExporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExporting.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onExporting'), [onExported](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExported.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onExported') and [onFileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onFileSaving') options when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
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

    <!--HTML--><dx-chart ...
        (onExporting)="onExporting($event)"
        (onExported)="onExported($event)"
        (onFileSaving)="onFileSaving($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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
            DxChartModule
        ],
        // ...
    })

---

Otherwise, or if you need several handlers for a single event, subscribe to the exporting-related events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var exportedHandler1 = function (e) {
        // First handler of the "exported" event
    };

    var exportedHandler2 = function (e) {
        // Second handler of the "exported" event
    };

    $("#chartContainer").dxChart("instance")
        .on("exported", exportedHandler1)
        .on("exported", exportedHandler2);

#####See Also#####
#include common-link-handleevents