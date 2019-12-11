---
type: object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A markup component used to define markup options for a template.

---
The dxTemplate markup component is used to introduce a template markup for collection container widget items ([List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/'), [Gallery](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/'), [TileView](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/'), etc.) or container widgets ([Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/'), etc.) in Knockout and AngularJS applications. The template element should be contained in an element representing the required widget.

    <!--HTML-->
    <!--Knockout-->
    <div data-bind="dxTileView: { dataSource: tileViewData, itemTemplate: 'tileTemplate' }">
        <div data-options="dxTemplate: { name: 'tileTemplate' }">
            <h1 data-bind="text: name"></h1>
            <p>Area: <i data-bind="text: area"></i> km2</p>
            <p>Population: <i data-bind="text: population"></i></p>
            <p>Capital: <i data-bind="text: capital"></i></p>
        </div>
    </div>

    <!--Angular-->
    <div dx-tile-view="{ dataSource: tileViewData, itemTemplate: 'tileTemplate' }" dx-item-alias="item">
        <div data-options="dxTemplate: { name: 'tileTemplate' }">
            <h1>{{item.name}}</h1>
            <p>Area: <i>{{item.area}}</i> km2</p>
            <p>Population: <i>{{item.population}}</i></p>
            <p>Capital: <i>{{item.capital}}</i></p>
        </div>
    </div>


[note]Pay attention to the binding context of the template that you define. In most cases, the binding context of an item template is the data source object that corresponds to the currently rendered item, and a view model - in other widget element templates. Since there can be exceptions in this rule, read notes in the descriptions of the corresponding **XXXTemplate** options and bind template elements to the accessible fields directly (see the code above). At the same time, you can access another binding context within a template, using [Knockout](https://knockoutjs.com/documentation/binding-context.html)/[Angular](https://docs.angularjs.org/guide/scope) binding variables.

[note]In **AngularJS approach**, in collection widgets, if you need to access item object's fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add the directive to the widget element to specify an alias to the root object of an item (see the code above). Without this directive, item object fields are beyond reach.

The dxTemplate component has a single option - "name". This is the template's identifier. Assign this name to the **itemTemplate** option of the widget in which the template is introduced. In this instance, this template will be applied to the widget items. However, the **itemTemplate** option has a specified default value, and you can use it as a name for the template. In this instance, you do not have to assign the template name to the widget's **itemTemplate** configuration option.

    <!--HTML--><div data-bind="dxRadioGroup:{dataSource: employees}">
        <div data-options="dxTemplate: {name: 'item'}">
            <span data-bind="text: name"></span> (hired at <span data-bind="text: hired"></span>)
        </div>
    </div>

A widget element can contain several template elements. In this instance, use the **itemTemplate** configuration option of the collection container widget to specify which template to use for rendering.

You can define special templates for specific devices. In addition, you can define multiple templates with the same name, which are targeted for different devices. To set a target device for a template, use the fields of the [device](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/') object as markup options of **dxTemplate**.

    <!--JavaScript-->
    <div data-options="dxTemplate: { name: 'item', platform: 'ios', phone: true }">
        This is a template for an iPhone.
    </div>

    <div data-options="dxTemplate: { name: 'item', tablet: true }">
        This is a template for any tablet.
    </div>

As you can see, you can specify the target platform as well as the device type.