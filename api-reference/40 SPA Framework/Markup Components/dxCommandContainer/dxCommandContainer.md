---
module: framework/html/command_container
type: object
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A markup component used to indicate a widget in a [layout markup](/api-reference/40%20SPA%20Framework/Markup%20Components/dxLayout '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/') as a command container.

---
Some of the widgets that are located within a layout markup can be indicated as command containers. In this instance, view [commands](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/') can be displayed as items of these widgets. For instance, if a layout has a toolbar added as a command container, the commands of the view that is merged with this layout can be displayed as toolbar items.

    <!--HTML--><div data-options="dxToolbar: { }, dxCommandContainer : { id: 'android-footer-toolbar' } "></div>

A command container must have an identifier. To set an identifier, use the **id** option of the **dxCommandContainer** component. You will use a command container's id when defining command mapping. Keeping in mind the command containers provided by a layout used for your views, specify which commands must be displayed within each of these command containers. For this purpose, use the application's [commandMapping](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/commandMapping.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping') option.

    <!--JavaScript-->MyApp.app = new DevExpress.framework.HtmlApplication({
        commandMapping: {
            'android-footer-toolbar' : {
                defaults: {
                    'showIcon':false, 
					'location': 'before'
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

If you use [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') in your application, you should be aware of the command containers that are provided by these layouts. For this purpose, research the HTML code of the required layouts or look through the [Built-in Layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') article. Use the identifiers of the required command containers when mapping your commands. Note that you can rely on the application's [default command mapping](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/6%20Default%20Command%20Mapping.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Default_Command_Mapping'), which defines what commands must be displayed within each of the predefined layouts (including device specific layout versions) and in which spots of the widgets representing these command containers these commands must be placed. In this instance, you don't have to define command mapping for your commands. Only name your commands as commands are named in default command mapping.