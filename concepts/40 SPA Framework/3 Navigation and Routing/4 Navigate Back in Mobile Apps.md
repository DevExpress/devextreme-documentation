Since the framework supports the "navigate back to the previous view" functionality in DevExtreme mobile applications out-of-the-box, you do not need to add it manually. 

The presence, type and place for the widget that displays the 'Back' command is determined by the current view's layout. For instance, the [predefined iOS NavBar layout](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') displays the 'Back' command as a toolbar item.

    <!--JavaScript-->DevExpress.framework.CommandMapping.defaultMapping = {
        //...
        "ios-header-toolbar": {
            defaults: { showIcon: false, showText: true, location: "after" },
            commands: [
                //...
               { id: "back", location: "before" },
                //...
            ]
        },
        //...
    }

[note]If you run a non-packed DevExtreme application on Windows Phone 8 in a browser, the Back button will not navigate to the previous view. This is the Windows Phone browser's peculiarity. It can't navigate back within one page using 'hash-based' navigation. However, if you pack this application, everything will work properly on the device. 

To replace the auto-generated Back command with a custom one, define a command and set its [id](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration/id.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#id') markup option to 'back'. If such a command is found, the framework does not generate the 'Back' button.

    <!--HTML--><div data-bind="dxCommand: { id: 'back', title: 'Back', location: 'before', type: 'back', onExecute: '#_back' }" ></div>

In the code above, the custom Back command uses the '#_back' registered function to navigate back to the previous view. Generally, you can assign this function to any command to perform the "navigate back to the previous view" functionality.
