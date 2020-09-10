---
id: UI Events
---
---
##### shortDescription
The events used to handle user interaction with UI elements.

##### lib
dx.web.js, dx.viz.js, dx.all.js

---
<a name="introduction"></a>
DevExtreme provides UI events for processing a user's interaction with a specific UI element. The [DevExpress.events](/api-reference/50%20Common/utils/events '/Documentation/ApiReference/Common/utils/events/') namespace exposes an API to work with the UI events. 

The following code shows how to attach, trigger and then detach a **dxhold** event handler from a page element with the `target` ID. The `timeout` parameter specifies how long the `target` should be held to allow the handler to execute:

---
##### jQuery

    <!--JavaScript-->
    var dxholdHandler = function(jQueryEvent) {
        alert(`The ${$(jQueryEvent.target).text()} element is being held for ${jQueryEvent.data.timeout} ms.`);
    };
    
    $("#target").on("dxhold", { timeout: 1000 }, dxholdHandler); 
    $("#target").trigger("dxhold");
    $("#target").off("dxhold", dxholdHandler);

See <a href="http://api.jquery.com/category/events/event-handler-attachment" target="_blank">jQuery documentation</a> for details.

##### Angular

    <!--JavaScript-->
    import { on, trigger, off } from "devextreme/events";
    // ...
    export class AppComponent implements AfterViewInit {
        ngAfterViewInit() {
            const dxholdHandler = (event) => {
                alert(`The ${event.target.textContent} element is being held for ${event.data.timeout} ms.`);
                return true; // true - continues event propagation, false - stops
            }
            const target: HTMLElement = document.getElementById("target");

            on(target, "dxhold", { timeout: 1000 }, dxholdHandler);
            trigger(target, "dxhold");
            off(target, "dxhold", dxholdHandler);
        }
    }

##### Knockout

    <!--HTML-->
    <div id="target" data-bind="dxhold: { execute: dxholdHandler, timeout: 1000 }">
        Target element
    </div>

    <!--JavaScript-->
    var viewModel = {
        dxholdHandler: function(viewModel, jQueryEvent) {
            alert(`The ${$(jQueryEvent.target).text()} element is being held for ${jQueryEvent.data.timeout} ms.`);
        }
    }

[note]Knockout does not provide an API to unsubscribe from an event.

See <a href="http://knockoutjs.com/documentation/event-binding.html" target="_blank">Knockout documentation</a> for details.

##### AngularJS

    <!--HTML-->
    <div id="target" dx-hold="{ execute: 'dxholdHandler($event)', timeout: 1000 }">
        Target element
    </div>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function DemoController($scope) {
            $scope.dxholdHandler = function(jQueryEvent) {
                alert(`The ${$(jQueryEvent.target).text()} element is being held for ${jQueryEvent.data.timeout} ms.`);
            }
        });

[note]AngularJS does not provide an API to unsubscribe from an event.
 
---