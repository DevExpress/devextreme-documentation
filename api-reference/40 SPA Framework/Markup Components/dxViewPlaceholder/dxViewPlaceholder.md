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
A markup component used to define markup options for a view placeholder.

---
The dxViewPlaceholder markup component enables you to display a view inside another view as a way of reusing a markup (similar to partial rendering in ASP.NET MVC or ASP.NET user controls). To do this, create an empty div element inside a view markup. To declare this element as the place where another view will be rendered, set the element's **data-options** attribute to **dxViewPlaceholder**. Set the [viewName](/api-reference/40%20SPA%20Framework/Markup%20Components/dxViewPlaceholder/1%20Configuration/viewName.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxViewPlaceholder/Configuration/#viewName') configuration option of the dxViewPlaceholder component to the name of the view to be rendered to this placeholder.

    <!--HTML--><!--main view-->
    <div data-options="dxView: { name: 'mainView', title: 'Home' }">
        <div data-options="dxViewPlaceholder: { viewName: 'content' }"></div>
        <div data-options="dxContent: { targetPlaceholder: 'footer' }">
            <span data-bind="text: footerText"></span>
        </div>
    </div>

    <!--view part-->
    <div data-options="dxView: { name: 'content' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }">
            <div class="buttonContainer" data-bind="dxButton: { text: 'Click me', onClick: buttonClicked }"></div>
            <div class="mapsContainer" data-bind="dxMap: { center: 'Brooklyn Bridge,New York,NY', zoom: 10 }"></div>
        </div>
    </div>

For more information about views, refer to the [Views and Layouts](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/) help section.