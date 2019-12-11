---
module: framework/html/view_engine_components
export: dxTransition
type: object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A markup component used to define markup options for a content placeholder.

---
When rendering an application, all [content elements](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContent '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContent/') of the [view](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/') are placed in the appropriate content placeholder elements of the [layout](/api-reference/40%20SPA%20Framework/Markup%20Components/dxLayout '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/').
The placeholder is identified by name, which is specified by the [name](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContentPlaceholder/1%20Configuration/name.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/Configuration/#name') configuration option.

The following example illustrates how to create a layout containing two content placeholders ("content" and "footer").

    <!--HTML--><div class="my-layout" data-options="dxLayout: { name: 'default', platform: 'ios' }">
        <div class="layout-content" data-options="dxContentPlaceholder: { name: 'content', animation: 'slide' }"></div>
        <div class="layout-footer" data-options="dxContentPlaceholder: { name: 'footer', animation: 'overflow' }"></div>
    </div>

 The example below displays a view with corresponding content elements.

    <!--HTML--><div data-options="dxView: { name: 'mainView', title: 'Home' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }">
            <div class="buttonContainer" data-bind="dxButton: { text: 'Click me', onClick: buttonClicked }"></div>
            <div class="mapsContainer" data-bind="dxMap: { location: 'Brooklyn Bridge,New York,NY', zoom: 10 }"></div>
        </div>
        <div data-options="dxContent: { targetPlaceholder: 'footer' }">
            <span data-bind="text: footerText"></span>
        </div>
    </div>

The opposite scenario is also possible. A view can contain a content placeholder. In this case, the layout that displays this view can have markup for this placeholder. For this purpose, the markup must be wrapped by the div element with the data-options attribute set to **dxContent**.