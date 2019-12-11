---
module: framework/html/view_engine_components
export: dxView
type: object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A markup component used to define markup options for a view.

---
A view is defined by a piece of HTML markup that forms the view template. The view can optionally have JavaScript code and associated style sheets used to customize the look and feel. To define a view's HTML template, add a div element and include the required markup in it. To indicate this markup as a view markup, set the wrapping div's **data-options** attribute to **dxView**, and pass the required [view markup options](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/').

    <!--HTML--><div data-options="dxView: { name: 'mainView', title: 'Home' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }">
            <div data-bind="dxButton: { text: 'Click me', onClick: buttonClicked }"></div>
            <div data-bind="dxMap: { location: 'Brooklyn Bridge,New York,NY', zoom: 10 }"></div>
        </div>
    </div>

You can define [a view for a specific device](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Device_Specific_Markup) only (e.g. iPhone). For this purpose, specify dxView options with the same names as the fields of the [device](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/') object.

For more information about views, refer to the [Views and Layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts/') help section.