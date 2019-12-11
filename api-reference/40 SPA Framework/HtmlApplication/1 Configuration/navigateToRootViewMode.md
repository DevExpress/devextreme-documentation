---
default: 'resetHistory'
acceptValues: 'keepHistory' | 'resetHistory'
type: string
---
---
##### shortDescription
Specifies application behavior when the user navigates to a root view.

---
A mobile application usually consists of several root views accessible from [global navigation](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/75%20Global%20Navigation%20Items.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Global_Navigation_Items'). Each root view may have a stack of child views that are invoked one after another. For instance, a child view can be invoked to show detailed information on an item selected within a root view. To learn more about navigation stacks, refer to the [Navigation History in Mobile Apps](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/?#Navigation_History_in_Mobile_Apps) topic.

The **navigateToRootViewMode** option specifies whether the child view stack of a root view is kept or reset when you return to this root view.

The default value is "resetHistory". In this case, the application always displays the root view when you navigate to it. If you change the value to "keepHistory", the application will show the last accessed child view of this root view.

[note]This option is not considered when the ['webSite'](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/mode.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode') mode is set for the application. This is because there are no navigation stacks in this mode. Instead, there is only a single stack based on the browser's navigation history.