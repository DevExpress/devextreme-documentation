When you have several widgets with similar elements, you may need to define a common custom template for them. For this purpose, factor out a template into a separate element, as demonstrated below.

#####AngularJS Approach#####

    <!--JavaScript-->
    function Controller($scope) {
        $scope.name = "John Doe";
        $scope.city = "Glendale";
        $scope.phone = "(626) 555-9248";
    }

<!--...-->

    <!--HTML-->
    <script id="person-template">
        <h3>{{name}}</h3>
        <p>City: <span>{{address}}</span></p>
        <p>Phone: <span>{{phone}}</span></p>
    </script>

#####Knockout Approach#####

    <!--JavaScript-->
    var viewModel = {
        name: "John Doe",
        city: "Glendale",
        phone: "(626) 555-9248"
    }

<!---->

    <!--HTML-->
    <script id="person-template">
        <h3 data-bind="text: name"></h3>
        <p>City: <span data-bind="text: address"></span></p>
        <p>Phone: <span data-bind="text: phone"></span></p>
    </script>


To use the common template for the rendering of a certain element, assign one of the following values to the appropriate "Template" option of the widget.

- Assign a jQuery object of the template's container.

 #####AngularJS Approach#####

        <!--HTML-->
        <div dx-popover="{ contentTemplate: $('#person-template') }">
        </div>

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxPopover:{ contentTemplate: $('#person-template') }">
        </div>


- Assign a DOM Node of the template's container.

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxPopover:{ contentTemplate: document.getElementById('person-template') }">
        </div>


 #####AngularJS Approach#####

        <!--HTML-->
        <div dx-popover="{ contentTemplate: document.getElementById('person-template') }">
        </div>


- Assign a function that returns the jQuery object or a DOM Node of the template's container.

 #####AngularJS Approach#####

        <!--HTML-->
        <div dx-popover="{ contentTemplate: function() { return document.getElementById('person-template'); } }">
        </div>

 #####Knockout Approach#####

        <!--HTML-->
        <div data-bind="dxPopover:{ contentTemplate: function() { return document.getElementById('person-template'); } }">
        </div>

To use the common template for the item rendering of a collection widget, assign a jQuery object, a DOM node of the template element, or a function returning any of them to the **itemTemplate** option.
