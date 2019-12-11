---
##### lib
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The events used to handle user interaction with UI elements.

---
<a name="introduction"></a>
When developing an application you may often need to process a user gesture or another kind of interaction with a specific UI element. DevExtreme suggests UI events for this purpose. You can subscribe to an event of the required element to execute the specified function when the element is swiped, held, clicked, etc. You can use the jQuery, Knockout, or AngularJS approach to subscribe to a required event.

- **jQuery**

 If you use jQuery, you may use standard jQuery facilities to [subscribe to and unsubscribe from events](https://api.jquery.com/category/events/event-handler-attachment).

        <!--JavaScript-->
        var clickEventHandler = function(event) {
            alert("The '" + $(event.target).text() + "' element has been clicked");
        };
        $("#myElement").on("dxclick", clickEventHandler);

 In the case of the jQuery approach, the event handler function accepts an **event** argument, which holds a [jQuery.event](https://api.jquery.com/category/events/event-object) object.

 You can also specify additional event options if the event supports them.

        <!--JavaScript-->
        $("#myElement").on("dxhold", { timeout: 1000 }, holdEventHandler);

- **Knockout**

 To subscribe the required event using Knockout, apply one of the following bindings to the element.

        <!--HTML-->
        <div id="myElement" data-bind="event: { dxclick: clickEventHandler }">
            My Element
        </div>

 or

        <!--HTML-->
        <div id="myElement" data-bind="dxclick: clickEventHandler">
            My Element
        </div>

        <!--JavaScript-->
        var viewModel = {
            clickEventHandler: function(data, event) {
                alert("The '" + $(event.target).text() + "' element has been clicked");
            }
        }

 In the case of the Knockout approach, the event handler function accepts the following arguments.

 - **data**  
 An object holding the current view model.

 - **event**  
 A [jQuery.event](https://api.jquery.com/category/events/event-object) object.

 Refer to the [Knockout documentation](https://knockoutjs.com/documentation/event-binding.html) for more information on event binding.

 The Knockout approach accepts the following syntax for specifying event options.

        <!--HTML-->
        <div id="myElement" data-bind="dxHold: { execute: holdEventHandler, timeout: 1000 }">
        </div>

- **AngularJS**

 AngularJS enables you to subscribe to an event in the following way.

        <!--HTML-->
        <div id="myElement" dx-click="clickEventHandler($event)">
        </div>

 In the case of the AngularJS approach, to access the [jQuery.Event](https://api.jquery.com/category/events/event-object) object associated with the current event, pass the **$event** argument to the handler function as shown above. 

 You can access this object within a handler function using the **event** parameter as demonstrated in the following example.

        <!--JavaScript-->
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.clickEventHandler = function(event) {
                alert("The '" + $(event.target).text() + "' element has been clicked");
            }
        });

 The AngularJS approach also enables you to specify additional event options using the following syntax.

        <!--HTML-->
        <div id="myElement" dx-hold="{ execute: 'holdEventHandler($event)', timeout: 1000 }">
        </div>

[note]An event handling a function for certain DevExtreme UI events may support additional parameters described in the required event description.