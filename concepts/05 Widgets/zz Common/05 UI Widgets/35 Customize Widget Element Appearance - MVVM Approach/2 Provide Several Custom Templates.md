You may have several templates defined within a widget. To apply the required one in a specific context, assign a function to the required "Template" option. The return value of this function must be a string representing the name of the required template.

---
#####AngularJS#####

    <!--HTML-->
    <div dx-popover="{ showTitle: true, titleTemplate: getTemplate }">
        <div data-options="dxTemplate:{ name:'standardTitle' }">
            <h1>{{popoverTitle}}</h1>
        </div>
        <div data-options="dxTemplate:{ name:'highlightedTitle' }">
            <h1 style="color: red;">{{popoverTitle}}</h1>
        </div>
    </div>

    <!--JavaScript-->
    function Controller($scope) {
        $scope.popoverTitle = "Popover Title";
        $scope.highlightTitle = false;
        $scope.getTemplate = function() {
            return highlightTitle ? "highlightedTitle" : "standardTitle";
        }
    }

#####Knockout#####

    <!--HTML-->
    <div data-bind="dxPopover:{ showTitle: true, titleTemplate: getTemplate }">
        <div data-options="dxTemplate:{ name:'standardTitle' }">
            <h1 data-bind="text: popoverTitle"></h1>
        </div>
        <div data-options="dxTemplate:{ name:'highlightedTitle' }">
            <h1 style="color: red;" data-bind="text: popoverTitle"></h1>
        </div>
    </div>

    <!--JavaScript-->
    viewModel = {
        popoverTitle: "Popover Title",
        highlightTitle: false,
        getTemplate: function() {
            return highlightTitle ? "highlightedTitle" : "standardTitle";
        }
    }

---

In the same manner, you can provide an individual template for an item of a collection widget. To set the required template for a widget item, specify the **template** field within the data source object that represents this item.

---

#####AngularJS#####

    <!--HTML--><div dx-tile-view = "{ dataSource: tileViewData, itemTemplate:'myItem' }" dx-item-alias="stateInfo">
        <div data-options="dxTemplate:{name:'myItem'}">
            ...
        </div>
        <div data-options="dxTemplate:{name:'specific'}">
            ...
        </div>
    </div>

    <!--JavaScript-->tileViewData = [
        {
            name: 'Alabama',
            area: 135765,
            population: 4822023,
            capital: 'Montgomery',
            //template to this certain item
            template: 'specific'
        },
        {
            name: 'Alaska',
            area: 1717854,
            population: 731449,
            capital: 'Juneau'
        },
        ...
    ];

#####Knockout#####

    <!--HTML--><div data-bind="dxTileView:{dataSource: tileViewData, itemTemplate:'myItem'}">
        <div data-options="dxTemplate:{name:'myItem'}">
            ...
        </div>
        <div data-options="dxTemplate:{name:'specific'}">
            ...
        </div>
    </div>

    <!--JavaScript-->tileViewData = [
        {
            name: 'Alabama',
            area: 135765,
            population: 4822023,
            capital: 'Montgomery',
            //template to this certain item
            template: 'specific'
        },
        {
            name: 'Alaska',
            area: 1717854,
            population: 731449,
            capital: 'Juneau'
        },
        ...
    ];

---

If you need to define individual markup for collection widget items, which are not bound to a data source, you may use the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/#dxItem') markup component.

---
#####AngularJS#####

    <!--HTML-->
    <div dx-list="listOptions" dx-item-alias="stateInfo">
        <div data-options="dxItem: item1Options">
            <!--First item markup-->
        </div>
        <div data-options="dxItem: item2Options">
            <!--Second item markup-->
        </div>
        <div data-options="dxItem: item3Options">
            <!--Third item markup-->
        </div>
        . . .
    </div>

#####Knockout#####

    <!--HTML-->
    <div data-bind="dxList: listOptions">
        <div data-options="dxItem: item1Options">
            <!--First item markup-->
        </div>
        <div data-options="dxItem: item2Options">
            <!--Second item markup-->
        </div>
        <div data-options="dxItem: item3Options">
            <!--Third item markup-->
        </div>
        . . .
    </div>

---
