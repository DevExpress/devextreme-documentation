---
type: string | Node | jQuery | window
---
---
##### shortDescription
The target element that the widget is positioned against.

---
The option can take on one of the following values.

    <!--JavaScript-->
    //CSS selector
    position: { of: '#targetElement' };

    //jQuery wrapper
    position: { of: $('#targetElement') };

    //DOM element
    position: { of: document.getElementById('#targetElement') };

You can also pass a jQuery Event object to the **of** option. In this case, the element is positioned against the point whose coordinates equal [event.pageX](https://api.jquery.com/event.pageX) and [event.pageY](https://api.jquery.com/event.pageY) values.

    <!--HTML-->
    <div id="myElement">. . .</div>
    <div id="myPopover">
        <p>Popover content</p>
    </div>

<!---->

    <!--JavaScript-->
    $("#myPopover").dxPopover({
        position: {
            my: "top",
            at: "bottom",
            of: "#myElement"
        }
    });
    $("#myElement").click(function(event){
        $("#myPopover").dxPopover("instance").option("position.of", event);
        $("#myPopover").dxPopover("instance").show();
    })

#####AngularJS Approach#####

    <!--HTML-->
    <div id="myElement" ng-click="processClick($event)">. . .</div>
    <div data-bind="dxPopover: {
        position: {
            my: 'top',
            at: 'bottom',
            of: ofValue
        },
        bindingOptions: {
            visible: 'popoverVisible',
            'position.of': 'ofValue'
        }
    }">
        <p>Popover content</p>
    </div>

<!---->

    <!--JavaScript-->
    function Controller($scope) {
        $scope.popoverVisible = false;
        $scope.ofValue = "#myElement";
        $scope.processClick = function($event) {
            $scope.ofValue = event;
            $scope.popoverVisible = true;
        }
    }

#####Knockout Approach#####

    <!--HTML-->
    <div id="myElement" data-bind="click: processClick">. . .</div>
    <div data-bind="dxPopover: {
        visible: popoverVisible,
        position: {
            my: 'top',
            at: 'bottom',
            of: ofValue
        }
    }">
        <p>Popover content</p>
    </div>

<!---->

    <!--JavaScript-->
    var viewModel = {
        popoverVisible: ko.observable(false),
        ofValue: ko.observable("#myElement"),
        processClick: function(data, event) {
            this.ofValue(event);
            this.popoverVisible(true);
        }
    }