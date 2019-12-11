You can define view and layout HTML templates for specific contexts. When running an application, the HTML template that is most appropriate for the current context will be used to display a view. Below, you will learn how to define templates specific for different contexts.

[note]Be sure to provide view templates that are not simultaneously functional in a specific context. For instance, both a template for the iOS platform and a template for the iPhone will work when an application runs on an iPhone device. When several templates may be appropriate for a view, an exception will be raised. To avoid such scenarios, define a single common template or multiple templates that are as specific as possible.

####Device Specific Markup####

You can define multiple views/layouts with the same name that are targeted for different devices. To set a target device for a view/layout, use the fields of the [device](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/') object as markup options of the **dxView**/**dxLayout** components.

    <!--HTML--><div data-options="dxView: { name: 'home', platform: 'ios', phone: true }">
        This is a view for an iPhone.
    </div>

    <div data-options="dxView: { name: 'home', platform: 'ios', tablet: true }">
        This is a view for an iPad.
    </div>

As you can see, you can specify the target platform as well as the device type.

A DevExtreme application, when running, retrieves information about the device from the browser. Thus, the application will display the views and layouts that are most appropriate for the used device, and will then apply the style sheets that correspond to this device.

####Orientation Specific Markup####

You can define view templates that are specific to the 'portrait' and 'landscape' device orientations. To set a target device orientation for a view, use the [orientation](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/orientation.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#orientation') configuration option of the corresponding **dxView** markup component. In the following example, the 'home' view will have data displayed using the [List](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/') widget when the device on which the application is currently displayed has a 'portrait' orientation. When changing the device orientation to 'landscape', the 'home' view will be rerendered. In the newly applied HTML template, data will be displayed using the [TileView](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/') widget. When rotating the device back to the 'portrait' orientation, the view will be rerendered and will display data using the **List** widget again.

    <!--HTML--><div data-options="dxView : { name: 'home', title: 'Home', orientation: 'portrait' } " >
        <div class="home-view"  data-options="dxContent : { targetPlaceholder: 'content' } " >
            <div data-bind="dxList: { dataSource: dataSource }">
                <div data-options="dxTemplate : { name: 'item' } " >
                    <div class="product-image-box">
                        <img data-bind="attr: { src: Image, alt: Name }" />
                    </div>
                    <div>
                        <div data-bind="text: Name"></div>
                        <div><strong data-bind="text: Globalize.formatCurrency(Price, 'USD')"></strong></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div data-options="dxView : { name: 'home', title: 'Home', orientation: 'landscape' } " >
        <div class="home-view"  data-options="dxContent : { targetPlaceholder: 'content' } " >
            <div data-bind="dxTileView: { dataSource: dataSource, height: '100%', baseItemHeight: 140, baseItemWidth: 140 }">
                <div data-options="dxTemplate : { name: 'item' } " class="gallery-item">
                    <img data-bind="attr: { src: Image, alt: Name }" />
                    <div data-bind="text: Name"></div>
                    <div><strong data-bind="text: Globalize.formatCurrency(Price, 'USD')"></strong></div>
                </div>
            </div>
        </div>
    </div>

<a href="http://www.youtube.com/watch?v=4DD3vdD-1TM&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=34" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

####Custom Context Specific Markup####

You can introduce a custom context for a view template by specifying a custom option within the configuration object of the corresponding dxView markup component. In the following example, the 'home' view has two HTML templates - for day and night.

    <!--HTML--><div data-options="dxView : { name: 'home', title: 'Home', timeOfDay: 'day' } " >
        <div data-options="dxContent : { targetPlaceholder: 'content' } " >
            <p>It's time to work</p>
        </div>
    </div>

    <div data-options="dxView : { name: 'home', title: 'Home', timeOfDay: 'night' } " >
        <div data-options="dxContent : { targetPlaceholder: 'content' } " >
            <p>It's time to sleep</p>
        </div>
    </div>
 
To notify the application that the **timeofDay** context has changed, access the application's **templateContext** object and set the **timeofDay** option for it using the **option(optionName, optionValue)** method.

    <!--JavaScript-->var templateContext = Application.app.templateContext();
    function timeOfDayChangedHandler(currentTimeOfDay) {
        templateContext.option("timeOfDay", currentTimeOfDay);
    }
