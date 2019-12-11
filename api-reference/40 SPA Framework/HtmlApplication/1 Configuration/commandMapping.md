---
default: DevExpress.framework.CommandMapping.defaultMapping
type: Object
---
---
##### shortDescription
Specifies where the [commands](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/6%20Add%20Commands%20to%20Views.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views') that are defined in the application's views must be displayed.

---
When adding a command to a view, specify in which command container this command must be displayed. For this purpose do the following.

- Learn in which layout the view that contains this command will be displayed.  
    If you use a predefined layout set, read [this topic](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/7%20Ready-to-Use%20Layout%20Sets.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets') to learn in which layout your view will be displayed.

- Learn what command containers are available in this layout.  
    Since a layout can be defined for several platforms, learn the identifiers of the command containers provided for all these platforms. If you use built-in layouts, read [this topic](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') to learn what command containers they expose.

- Add your command to the list of the commands that the required command containers display.  
    Use the **commandMapping** configuration option of the HtmlApplication object. The object that is assigned to this option must expose fields named by the command container identifiers. These fields must be assigned to the object with the following fields.  
    - **defaults**  
        This is the object where the default values of command options are specified.  
    - **commands**  
        An array of objects that define commands to be mapped to the current command container.

Here is an example. Add the "myCommand" command to a view markup.

    <!--HTML--><div data-bind="dxCommand: { id: 'myCommand', title: 'My command' }"></div>

You found/introduced a layout for this view and found/introduced the desired command container for your command.

    <!--HTML--><div data-options="dxCommandContainer: { id: 'my-container' }"></div>

Here is the command mapping that must be defined to display your command in the required command container.

    <!--JavaScript-->MyApp.app = new DevExpress.framework.HtmlApplication({
        commandMapping: {
            'my-container': {
                defaults: {
                    'showIcon':false, 
                    'location':'before'
                },
                commands: [
                    {
                        id: 'myCommand',
                        location: 'after' // container defaults can be overridden
                    }
                ]
            }
        }
    });

The following fields can be set for commands.

- **id**  
    The command's identifier that is set using the **id** option of the [dxCommand](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/') markup component that represents this command.

- **location**  
    If the command is mapped to the container that will be displayed as a toolbar, set this option to specify a location of the command on the toolbar. The following values are possible: 'before', 'center' and 'after'.

- **locateInMenu**  
    If the command is mapped to the container that will be displayed as a toolbar, set this option to specify when to display the command in the toolbar's overflow menu. The following values are accepted: 'always', 'never' and 'auto'.

- **showIcon**  
    Indicates whether to show an [icon](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration/icon.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#icon') for the command.

- **showText**  
    Indicates whether to show the command's [title](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration/title.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#title').

- Any [option](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/') exposed by the **dxCommand** markup component.

Command options override the corresponding defaults that are declared for all commands of a particular command container.

[note]If you use [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/'), it is only required to define a mapping for your custom commands. An application loads default command mapping and extends it by your custom command mapping declared within the application's configuration object. To learn what commands are mapped to the built-in layouts by default, refer to the [Default Command Mapping](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/6%20Default%20Command%20Mapping.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Default_Command_Mapping') topic.