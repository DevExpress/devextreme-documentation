---
module: framework/command
export: default
type: Object
inherits: ..\..\..\10 UI Widgets\DOMComponent\DOMComponent.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A markup component used to define markup options for a [command](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/6%20Add%20Commands%20to%20Views.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views').

---
The dxCommand markup component allows you to define a view-related action in an abstract way. Add a div element to the root of the [view markup](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/') with the **data-bind** attribute set to *dxCommand*. Use the [configuration options](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/') of the dxCommand component to define an action in an abstract way. These options include the handler performed when executing the command, the title, the icon, and the enabled and visible states.

    <!--HTML--><div data-options="dxView: { name: 'index', title: 'Home' }">
        <div data-bind="dxCommand: { id: 'myCommand', onExecute: '#product-details', title: 'Add' } "></div>
    </div>

As you can see in the code above, a command can be used for [navigation](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/2%20Navigate%20to%20a%20View.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View'). In this instance, you can set the [onExecute](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration/onExecute.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute') option to a URI or to an object defining a URI. In addition, you can specify navigation options for a command - the options that have the same names as the fields of the **options** object passed as the second parameter to the [HtmlApplication.navigate(uri, options)](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/navigate(uri_options).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options') method.

A command's markup options can be bound to ViewModel fields. Here is an example.

    <!--HTML--><div data-options="dxView: { name: 'home', title: 'Home' }">
        <div data-bind="dxCommand: { id: 'myCommand', onExecute: add, title: 'Add' } "></div>
    </div>

To function properly, this code snippet expects the "add" field to be present in the ViewModel.

To be displayed, a command must be registered within a command container using the application's [command mapping](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/commandMapping.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping'). Depending on the command container chosen for a command in a layout and the device the application is running on, different widgets will be used to display commands. You can specify widget configuration settings directly within the dxCommand component's configuration object.

    <!--HTML--><div data-bind="dxCommand: { id: 'myCommand', onExecute: '#product-details', title: 'Add', hint: 'Add a product' } "></div>

In the code above, the specified **hint** option will be applied if the widget that will display the command has the **hint** option in its configuration.

To learn more about commands and how to display them in a view, read the [Add Commands to Views](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/6%20Add%20Commands%20to%20Views.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views') topic.