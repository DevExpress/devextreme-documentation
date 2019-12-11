---
dep: 
module: framework/html/view_engine_components
type: Object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### deprecated
#include spa-deprecated-note

##### shortDescription
A markup component used to define markup options for a content element.

---
A content element is a [view](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/') element rendered to the appropriate [content placeholder](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContentPlaceholder '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContentPlaceholder/') in the [layout](/api-reference/40%20SPA%20Framework/Markup%20Components/dxLayout '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/'). The name of the placeholder to which the current content should be rendered is specified by the [targetPlaceholder](/api-reference/40%20SPA%20Framework/Markup%20Components/dxContent/1%20Configuration/targetPlaceholder.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContent/Configuration/#targetPlaceholder') configuration option.

The following example illustrates how to create a layout containing two content placeholders ("content" and "footer").

    <!--HTML--><div class="my-layout" data-options="dxLayout: { name: 'default', platform: 'ios' }">
        <div class="layout-content" data-options="dxContentPlaceholder: { name: 'content', animation: 'slide' }"></div>
        <div class="layout-footer" data-options="dxContentPlaceholder: { name: 'footer', animation: 'overflow' }"></div>
    </div>

The example below shows how to create a view with corresponding content elements.

    <!--HTML--><div data-options="dxView: { name: 'mainView', title: 'Home' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }">
            <div class="buttonContainer" data-bind="dxButton: { text: 'Click me', onClick: buttonClicked }"></div>
            <div class="mapsContainer" data-bind="dxMap: { location: 'Brooklyn Bridge,New York,NY', zoom: 10 }"></div>
        </div>
        <div data-options="dxContent: { targetPlaceholder: 'footer' }">
            <span data-bind="text: footerText"></span>
        </div>
    </div>

The opposite scenario is also possible. A view can contain a content placeholder. In this instance, the layout that displays this view can have a markup for this placeholder. For this purpose, the markup must be wrapped by the div element with the data-options attribute set to **dxContent**.