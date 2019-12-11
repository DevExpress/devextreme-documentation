---
default: false
type: Boolean
---
---
##### shortDescription
Indicates whether on not to use the title of the previously displayed view as text on the Back button.

---
When using [predefined layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') for application views, the Back button is added automatically to a view's toolbar. This button is added when there is a previously displayed view in the current [navigation stack](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/5%20Navigation%20History%20in%20Mobile%20Apps.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps'). To create this button, a command with the 'back' identifier is added to the application. This command is then displayed as a button. A place for this button on the toolbar is determined according to [default command mapping](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/6%20Default%20Command%20Mapping.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Default_Command_Mapping'). You can influence the [text](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand/1%20Configuration/title.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#title') that will be displayed on the Back button. If the **useViewTitleAsBackText** option is set to *true*, the [title](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/title.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#title') of the previous view will be displayed. Otherwise, the default **Back** text will be displayed.

[note]On some devices, text may be absent on the Back button. This is made intentionally, according to the platform guidelines provided for this device.

[note]In [web applications](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/mode.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode'), there are no navigation stacks and the browser's Back button is used to return to the previously displayed view. Thus, the **useViewTitleAsBackText** option is not considered.