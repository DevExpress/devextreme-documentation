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
A markup component used to define markup options for a [layout](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/#Define_Layouts).

---
The dxLayout markup component allows you to introduce a custom layout HTML template. To indicate a particular markup as a layout, wrap this markup by a div element and set the element's data-options attribute to **dxLayout**. Set a name for the layout using the **name** option of the dxLayout component.

    <!--HTML--><div class="my-layout" data-options="dxLayout: { name:'default' }">
        <div class="layout-header" data-bind="dxToolbar: { dataSource:toolbarData }"></div>
        <div class="layout-content" data-options="dxContentPlaceholder: { name:'content', animation:'slide' }"></div>
        <div class="layout-footer" data-options="dxContentPlaceholder: { name:'footer', animation:'overflow' }"></div>
    </div>

You can define [a layout for a specific device](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/#Device_Specific_Markup) only (e.g. iPhone). For this purpose, specify dxLayout options with the same names as the fields of the [device](/api-reference/50%20Common/Object%20Structures/device '/Documentation/ApiReference/Common/Object_Structures/device/') object.

To render the layout markup and fill it with missing content (merge it with the view markup and add commands to command containers), a layout controller must be created. In addition, a layout markup can be accompanied by style sheets (CSS). For more information about layouts, refer to the [Define Layouts](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/#Define_Layouts) help article.

[note]There is a set of [predefined layouts](/Documentation/17_2/Guide/SPA_Framework/Built-in_Layouts/) that cover the most popular templates for screens in mobile applications. Once you choose an appropriate [layout set](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/layoutSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet'), the layouts that are most appropriate in the current navigation context will be applied.