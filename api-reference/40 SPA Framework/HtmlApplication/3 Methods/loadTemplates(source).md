---
##### shortDescription
Adds a specified HTML template to a collection of view or layout templates.

##### param(source): string|jQuery object
A string containing the URI of the HTML page or a jQuery object presenting a template markup.

##### return: Promise
A Promise of the jQuery Deferred object that is resolved when the template is loaded or rejected when loading fails.

---
Use this method to provide an HTML template for a view or layout dynamically. When a template for this view/layout is required, the loaded template will be found in the collection of view/layout templates.

The markup that is passed as the method's parameter should be defined using the [dxView](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/')/[dxLayout](/api-reference/40%20SPA%20Framework/Markup%20Components/dxLayout '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/') markup components in the same manner as a view/layout that is defined statically.

    <!--HTML-->
    <div data-options="dxView : { name: 'MyView', title: 'My view'  } ">
        <div data-options="dxContent : { targetPlaceholder: 'content' } ">       
            ...
        </div>
    </div>

<!---->    

    <!--HTML-->
    <div data-options="dxLayout: { name:'default', platform:'ios' }">

    </div>

#####See Also#####
- For details on how to define views and layouts, refer to the [Views and Layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts') article.



[note]If more than one view/layout template is found, an exception will be raised. So, check to see that there are no templates for a view/layout when you add a template dynamically. Use the [getViewTemplate](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/getViewTemplate(viewName).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateviewName') and [getViewTemplateInfo](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/getViewTemplateInfo(viewName).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateInfoviewName') methods to find a view template in a template collection.