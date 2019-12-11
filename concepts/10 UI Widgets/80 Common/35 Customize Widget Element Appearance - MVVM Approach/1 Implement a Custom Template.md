To customize widget element appearance, you can use a built-in template engine.

In the examples presented below, the data model has the following structure.

#####AngularJS Approach#####

    <!--JavaScript-->
    function Controller($scope) {
        $scope.popoverTitle = "Popover Title";
    }

#####Knockout Approach#####

    <!--JavaScript-->
    viewModel = {
        popoverTitle: "Popover Title"
    }


To specify widget element structure, create an HTML container element within the widget container element and apply the **data-options** attribute set to [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). Then, insert the required structure in the newly added **dxTemplate** element.

#####AngularJS Approach#####

    <!--HTML--><div dx-popover="{ showTitle: true }">
        <div data-options="dxTemplate:{ name:'title' }">
            <h1>{{popoverTitle}}</h1>
        </div>
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxPopover:{ showTitle: true }">
        <div data-options="dxTemplate:{ name:'title' }">
            <h1 data-bind="text: popoverTitle"></h1>
        </div>
    </div>

A binding context of a template is the bound view or application model. So, you can bind template elements to the scope or view model's fields directly (see the code above). To access another binding context within a template, use the [Knockout binding variables](https://knockoutjs.com/documentation/binding-context.html) or [AngularJS binding variables](https://docs.angularjs.org/guide/scope), depending on the approach you use.

In the Collection Widgets in **AngularJS** approach, to access item object's fields within a template, use a variable whose name is assigned to the dx-item-alias directive. 

    <!--HTML-->
    <div dx-list="{ dataSource: listData }" dx-item-alias="stateInfo">
    <div data-options="dxTemplate:{ name:'item' }">
        <h1>{{stateInfo.name}}</h1>
        <p><b>Capital</b>: <i>{{stateInfo.capital}}</i></p>
        <p><b>Area</b>: <i>{{stateInfo.area}}</i></p>
        <p><b>Population</b>: <i>{{stateInfo.population}}</i></p>
    </div>
</div>

The default name of the template element usually corresponds to the required element name (e.g., 'title' for a title element,'content' for a content element, 'item' for an item element). If you use a different template name, assign it to the appropriate option (**titleTemplate** for a title element, **contentTemplate** for a content element and so on).

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-popover="{ showTitle: true, titleTemplate:'popoverTitle', contentTemplate: 'popoverContent' }">
        <div data-options="dxTemplate:{ name:'popoverTitle' }">
            ...
        </div>
        <div data-options="dxTemplate:{ name:'popoverContent' }">
            ...
        </div>
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxPopover:{ showTitle: true, titleTemplate:'popoverTitle', contentTemplate: 'popoverContent' }">
        <div data-options="dxTemplate:{ name:'popoverTitle' }">
            ...
        </div>
        <div data-options="dxTemplate:{ name:'popoverContent' }">
            ...
        </div>
    </div>

You can assign the template name directly to the option, or assign a function that returns the required template name.

    <!--JavaScript-->
    var popoverOptions = {
        contentTemplate: function() { 
            return 'popoverContent'; 
        }
    }

