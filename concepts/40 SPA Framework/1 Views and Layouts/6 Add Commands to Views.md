A view may include a functionality for performing operations. Suppose you want a view to contain "Back" and "Add" buttons. In an application designed for the iPhone, the "Back" button must be located on the left side of the title bar and the "Add" button must be located on the right side of the title bar. If you want to make an application for an Android phone, you will have to display the "Add" button on the bottom navbar, and not display the "Back" button at all, since the phone has a "Back" button built into the hardware. When implementing an application that will be run on both the iPhone and an Android phone, you will not only have to define two different layouts, but also create and manage different widgets for these platforms. To make things simpler, we offer you the ability to define a single view with two **commands**, so that you don't have to manually manage different widgets. We provide buttons created for commands that will work properly on both iPhone and Android devices; these buttons will also deliver a native user experience.

A command is an abstract action associated with a view. Commands help you produce truly cross-platform applications with a native look and feel.

Commands are declared in a view markup within a root element. To add a command, use a [Knockout](https://knockoutjs.com/documentation/binding-syntax.html) binding syntax. Declare the command by using the **data-bind** attribute and pass the required [markup options](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/'). These options include: the command identifier, the handler to be performed when executing the command, as well as a title, an icon, and enabled and visible states.

    <!--HTML--><div data-options="dxView: { name: 'home', title: 'Home' }">
        <div data-bind="dxCommand: { id: 'myCommand', onExecute: '#product-details', title: 'Add' } "></div>
    </div>

Command markup options can be bound to a ViewModel's fields. Here is an example.

    <!--HTML--><div data-options="dxView: { name: 'home', title: 'Home' }">
        <div data-bind="dxCommand: { id: 'myCommand', onExecute: add, title: 'Add' } "></div>
    </div>

To function properly, the code above must be accompanied by the **ViewModel** object that exposes the "add" field. This field can be a function that is called when you are executing the Add command or a string/object representing the URL to navigate to. To learn how to define a URL using a string or an object, refer to the [Navigate to a View](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/2%20Navigate%20to%20a%20View.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View') section.

In some scenarios, it is not appropriate to add commands to a view using the view's markup. For instance, you may need to add the same commands to several views, or to populate a command collection dynamically (within the [onViewShown](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/9%20Handle%20View%20Events.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events') event handler), etc. For this purpose, the DevExtreme SPA framework allows you to define a command collection within a ViewModel object.

    <!--JavaScript-->var viewModel = {
        commands: [ an array of commands can be here ]
    };

The objects that represent commands in the **commands** array must have the same structure as the [configuration objects](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/') of the **dxCommand** markup components.

To display commands, the layout in which a view is displayed must include command containers. These are the elements in the layout markup that are marked by the **data-options** attribute set to **dxCommandContainer**. The following code demonstrates a command container that displays commands by toolbar items.

    <!--HTML--><div class="layout-header">
        <div data-bind="dxToolbar: { items: [ { text: title, align: 'center' } ] }" 
            data-options="dxCommandContainer : { id: 'my-container' }">
        </div>
    </div>

As there can be several command containers in a layout, and the layout can have [several versions](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Platform_Specific_Markup) - each for a certain platform/type of a device, you should declare that a particular command must be displayed in a particular command container. For this purpose, use the application's [command mapping](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/commandMapping.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping').

    <!--JavaScript-->new DevExpress.framework.HtmlApplication({
        commandMapping: {
            'my-container': {
                defaults: {
                    'showIcon':false, 
                    'location':'before'
                },
                commands: [
                    {
                        id: 'myCommand',
						location: 'after' // container defaults can be overriden
                    }
                ]
            }
        }
    });

When using predefined layouts for views, put your commands to the command containers that are available in these layouts. To learn which command containers are available in these layouts, refer to the [Predefined Layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') topic. An application loads default mapping of the "create", "edit", "save", "delete", "cancel" and "back" commands to the command containers of the predefined layouts, and then extends it by your custom command mapping declared within the application's configuration object. If you use the specified identifiers for your commands, these commands are automatically mapped to the command containers of the predefined layouts. It is only required that you define a mapping for your custom commands. To learn what commands are mapped to the built-in layouts by default, refer to the [Default Command Mapping](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/6%20Default%20Command%20Mapping.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Default_Command_Mapping') topic.

Depending on the command container chosen for a command in a layout and the device the application is running on, different widgets will be used to display commands. You can specify widget configuration settings directly within the dxCommand component's configuration object.

	<!--HTML--><div data-bind="dxCommand: { id: 'myCommand', onExecute: '#product-details', title: 'Add', hint: 'Add a product' } "></div>

In the code above, the specified **hint** option will be applied if the widget that will display the command has the **hint** option in its configuration.