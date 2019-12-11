You can display a view inside another view to reuse a markup (similar to partial rendering in ASP.NET MVC or ASP.NET user controls). To do so, create an empty **div** element inside a view's markup. To declare this element as the place where a specified view will be rendered, set the element's **data-options** attribute to [dxViewPlaceholder](/api-reference/40%20SPA%20Framework/Markup%20Components/dxViewPlaceholder '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxViewPlaceholder/') and pass the name of the view to be rendered.


    <!--HTML--><div data-options="dxView: { name: 'header' }">
        <h1 data-bind="text: message"></h1>
    </div>
    <div data-options="dxView: { name: 'home' }">
        <div data-options="dxContent: {  targetPlaceholder: 'content' }">
            <!-- View contents -->
            <div data-options="dxViewPlaceholder: { viewName: 'header' }"></div>
        </div>
    </div>

[note]While a view (a main view) is rendered to a content placeholder in a layout markup, a partial view is rendered to a specified placeholder in a main view markup. So, make sure you do not use the **dxContent** markup component within partial views.

The partial view can be bound to its own ViewModel by using the ["with" binding](https://knockoutjs.com/documentation/with-binding.html). This ViewModel can be the object assigned to the field of the parent view's ViewModel. Here is an example:

    <!--HTML--><div data-options="dxView: { name: 'credentials' }">
        <p data-bind="with: person">
            Name: <span data-bind="text: name"> </span>,
            Surname: <span data-bind="text: surname"> </span>
        </p>
    </div>
    <div data-options="dxView: { name: 'home' }">
        <div data-options="dxContent: {  targetPlaceholder: 'content' }">
            <!-- View contents -->
            <div data-options="dxViewPlaceholder: { viewName: 'credentials' }"></div>
        </div>
    </div>
 
 <!---->

    <!--JavaScript-->MyApp.home = function (params) {
        var viewModel = {
            title: ko.observable('Home'),
            person: {
                name: params.name,
                surname: params.surname
            }
        };
        return viewModel;
    };