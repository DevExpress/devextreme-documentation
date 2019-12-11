---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The events used to handle user interaction with UI elements.

---
<a name="introduction"></a>
DevExtreme provides UI events for processing a user's interaction with a specific UI element. The [DevExpress.events](/api-reference/50%20Common/utils/events/3%20Methods '/Documentation/ApiReference/Common/utils/events/Methods/') namespace exposes an API to work with the UI events. 

The following code shows how to attach, trigger and then detach a **dxhold** event handler from a page element with the "target" ID. An extra "timeout" parameter specifies how long the "target" should be held to allow the handler to execute.

    <!--JavaScript-->
    var dxholdHandler = function (event) {
        alert(`The ${event.target.textContent} element is being held for ${event.data.timeout} ms.`);
        return true; // true - continues event propagation, false - stops.
    }

    DevExpress.events.on(document, "dxhold", "#target", { timeout: 1000 }, dxholdHandler);
    // Without extra parameters
    // DevExpress.events.on(document, "dxhold", "#target", dxholdHandler);
    
    DevExpress.events.trigger(document.getElementById("target"), "dxhold");

    DevExpress.events.off(document, "dxhold", "#target", dxholdHandler);

The following code shows how to perform similar tasks using jQuery, AngularJS, or Knockout:

---
##### jQuery

    <!--JavaScript-->
    var dxholdHandler = function (jQueryEvent) {
        alert(`The ${$(jQueryEvent.target).text()} element is being held for ${jQueryEvent.data.timeout} ms.`);
    };
    
    $("#target").on("dxhold", { timeout: 1000 }, dxholdHandler); 
    // Without extra parameters
    // $("#target").on("dxhold", dxholdHandler);

    $("#target").trigger("dxhold");

    $("#target").off("dxhold", dxholdHandler);

See [jQuery documentation](https://api.jquery.com/category/events/event-handler-attachment) for details.

##### Knockout

    <!--HTML-->
    <div id="target" data-bind="dxhold: { execute: dxholdHandler, timeout: 1000 }">
        Target element
    </div>
    <!-- Without extra parameters -->
    <!-- <div id="target" data-bind="dxhold: dxholdHandler">
        Target element
    </div> -->

    <!--JavaScript-->
    var viewModel = {
        dxholdHandler: function (viewModel, jQueryEvent) {
            alert(`The ${$(jQueryEvent.target).text()} element is being held for ${jQueryEvent.data.timeout} ms.`);
        }
    }

[note]Knockout does not provide an API to unsubscribe from an event.

See [Knockout documentation](https://knockoutjs.com/documentation/event-binding.html) for details.

##### AngularJS

    <!--HTML-->
    <div id="target" dx-hold="{ execute: 'dxholdHandler($event)', timeout: 1000 }">
        Target element
    </div>
    <!-- Without extra parameters -->
    <!-- <div id="target" dx-hold="dxholdHandler($event)">
        Target element
    </div> -->

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.dxholdHandler = function (jQueryEvent) {
                alert(`The ${$(jQueryEvent.target).text()} element is being held for ${jQueryEvent.data.timeout} ms.`);
            }
        });

[note]AngularJS does not provide an API to unsubscribe from an event.
 
---