<!---->
###Layouts###

While drawing an [application map](/concepts/40%20SPA%20Framework/00%20Application%20Development/2%20Application%20Planning.md '/Documentation/Guide/SPA_Framework/Application_Development/#Application_Planning'), you discovered that your views have common elements such as a toolbar or navigation control. To save you from having to organize the same structure on each view and help you concentrate on changing content only, the framework supplies predefined **layouts**. Each layout is defined by a markup that includes placeholders for the view's changing content. To merge the layout markup with the markup of the view's changing content and display the result with a specified transition, a layout controller is implemented. In addition, there is a set of stylesheets used to present the layout markup on each platform in a unique way. You can find all these parts of each predefined layout in the *../Sources/Lib/layouts* folder. All these predefined layouts are used within different layout sets. Set the application's **layoutSet** option to one of the predefined layout sets. In this instance, all your views will be displayed in frames of a particular layout from the set depending on the current context of the view display.

**Read**

- [Layout Sets](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/')
- [Built-in Layouts](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/')

**Check**

- If possible, do not customize the markup of predefined layouts. But if you have to, remember to keep your modification when switching to a newer framework version.

- You can create custom layouts and organize custom layout sets if required. In this instance, remember to cover your code by tests and check them when switching to a newer framework version by yourself.

###View Design###

When a layout set is specified, you have to define only the changing content for each view.  The changing content will be called *view* here and everywhere in documentation.

The framework follows the [MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel) (Model-View-ViewModel) pattern. A Model is a JavaScript object that either represents data or receives data from a storage (local storage or remote server). A View is an HTML template with bindings and CSS rules. The ViewModel is a JavaScript object that prepares data for the View by adding new fields, calculating other ones or picking data from multiple Models. The scheme below will allow you to imagine the process of interaction between Views, ViewModels and Models.

![Application Structure](/images/PhoneJS/scheme-app-structure.png)

Divide view implementation onto three steps. Start with a **View**. Prepare a markup that is rendered to a view that is very close to a planned view. Whether or not the result is visually pleasing is irrelevant at this point. The main task is to provide all required elements on the view. The result can be then given to a graphic designer, while you work under the **ViewModel** and **Model** for this view.

**Read**

- [Views and Layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts '/Documentation/Guide/SPA_Framework/Views_and_Layouts/')


###Widgets###

DevExtreme comes with an extensive list of **UI and Visualization widgets**. These widgets are stylized in your application according to the stylesheets of the theme [applied to the application](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/'). Use these widgets in your application created using the DevExtreme SPA framework.

DevExtreme widgets can be created using the Knockout, jQuery or AngularJS approach. However, we recommend that you use the Knockout approach in the applications created using the DevExtreme SPA framework, since this framework is based on the Knockout template engine.

**Read**

- [UI Widgets](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/')
- [Data Visualization Widgets](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/')


**Check**

- Do not mix the jQuery and Knockout approaches when working with DevExtreme widgets. In particular, do not use Knockout bindings in widgets created using the jQuery approach. 
- Do not use the [DeferRendering](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/43%20Defer%20View%20Content%20Rendering.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Defer_View_Content_Rendering') widget on simple static views. This widget is helpful in complex views.
- Do not use the [LoadPanel](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/') to indicate a loading or refreshing state. Instead, use the [DeferRendering](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/43%20Defer%20View%20Content%20Rendering.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Defer_View_Content_Rendering') widget with an [enabled loading indicator](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/showLoadIndicator.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#showLoadIndicator').

###Navigation###

The framework's runtime takes care of navigation between views. You just specify the URL to which the framework navigates, defining routing rules beforehand. When a view is navigated to and rendered, it is made visible using specified animation or transition.

You can call the **navigate()** method of the HtmlApplication object from everywhere to navigate to an application view. In addition, DevExtreme widgets and commands have configuration options that take on a string or an object defining the view to navigate to. You can also bind any HTML element with an action that will navigate to the specified view. The string or object that defines the view to navigate to must respond to the application's **routing format**. The routing format can be specified so that it is possible to pass parameters when navigating to a view.

While an end user navigates from one view to another, the framework's navigation manager keeps a history of displayed views. In applications indicated as a 'mobile' application, information on navigated views is saved to **navigation stacks**.

![Navigation Stack](/images/PhoneJS/NavigationStack.png)

You can organize navigation to a view deeper in a navigation stack or return back within a stack. In addition, you can organize navigation to another navigation stack (based on another root view).

To provide backwards navigation, either a **Back button** is added automatically or a hardware Back button is activated (on Windows Phone devices). The Back button navigates to a previous view in the current navigation stack with animation that is opposite to the one that was used before.

In applications [marked as a 'website'](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/mode.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode'), browser history is used by the navigation system instead of building navigation stacks. Each navigated view is added next to the previous view in the navigation history.

**Read**

- [Navigation Routing Format](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/1%20Declare%20a%20Routing.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing')
- [Navigate to a View](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/2%20Navigate%20to%20a%20View.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View')
- [navigate()](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/navigate(uri_options).md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options')
- [dxAction](/api-reference/40%20SPA%20Framework/Markup%20Components/dxAction '/Documentation/ApiReference/SPA_Framework/Markup_Components/#dxAction')
- [Navigation History in Mobile Apps](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/5%20Navigation%20History%20in%20Mobile%20Apps.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps')
- [Navigate Back in Mobile Apps](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/4%20Navigate%20Back%20in%20Mobile%20Apps.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_Back_in_Mobile_Apps')
- [Navigation in Web Apps](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing/6%20Navigation%20in%20Web%20Apps.md '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Web_Apps')

**Check**

- Application navigation should be organized so that an end-user always understands where he/she is located in the application and how to return back to a view.
- The Back button is automatically added where it is needed. If you want to hide it where it is added or show it where it is not added, there is something wrong in the design of your application.
- Do not change the transition animation direction of the automatically added Back button.
- The Back button must not appear on root views, since a root view is the very beginning of the navigation stack.
- When using the predefined SlideOut layout, root views contain the Menu button on a toolbar. This button shows/hides a global navigation menu. Child views have the Back button on the place of the Menu button. To access the global navigation menu, use the "slide" gesture. Do not change this behavior.
- Use the DevExreme **dxAction** binding to specify a URL to which to navigate when clicking an HTML element, instead of the using the standard **href="#url"** attribute.

###Toolbar Buttons###

The layouts that are supplied with the framework include the **Toolbar** widget. For each toolbar, a **command container** is defined using the **data-options** attribute set to **dxCommandContainer**. A command container has an identifier specified. You can define a **command** and map it to the required command container. All the commands that are mapped to a certain command container will be displayed as toolbar buttons or as items in the toolbar's overflow menu. To specify a function that must be performed when clicking the button, a text and an icon for the button, specify the corresponding command configuration options.

**Read**

- [Add Commands to Views](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/6%20Add%20Commands%20to%20Views.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views')
- [dxCommand](/api-reference/40%20SPA%20Framework/Markup%20Components/dxCommand '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/')
- [commandMapping](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/commandMapping.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping('))
- [Default Command Mapping](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/6%20Default%20Command%20Mapping.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Default_Command_Mapping')

**Check**

- Do not add buttons to a toolbar directly. Use commands instead.

###Icons###

Both the command buttons and widgets that you add to your application can be displayed with icons. The framework comes with an **Icon Library**, which contains many frequently used icons. Each icon is appropriate for a specific theme and has a particular look in that theme. To allow you to easily utilize an icon from the Icon Library, commands and widgets expose the **icon** option within their configuration object. This option takes on an icon name.

You can extend the Icon library. In addition, you can use custom icons by assigning a file path to the **icon** option.

**Read**

- [Use Icon Library](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/')
- [dx-icon-IconName CSS class](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-icon-IconName.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-icon-IconName')


###ViewModel###

The **ViewModel** is a JavaScript object that prepares data for the View by adding new fields, calculating other ones or picking data from multiple Models. In a DevExtreme application template, ViewModels are implemented in separate files that are linked in the application page. In these files, there is a function that has the same name as the View template. This function returns the ViewModel object.

ViewModel objects can be used to handle the application's view-related events.

**Read**

- [Define a View](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/1%20Define%20a%20View.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Define_a_View')
- [Handle View Events](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/9%20Handle%20View%20Events.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events')

**Check**

- Do not use global bindings.
- Do not access a markup from ViewModels. Instead, process a view markup on the [viewRendered](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewRendered.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewRendered') event.
- Do not use the [viewShowing](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShowing.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShowing') event to perform any "heavy" work. If possible, avoid using this event at all.
- Start loading data for a view on the [viewShown](/api-reference/40%20SPA%20Framework/HtmlApplication/4%20Events/viewShown.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShown') event.
- Use a TDD approach when implementing ViewModels.

###Model###

A **Model** is a JavaScript object that either represents data or receives data from a storage (local storage or remote server). In DevExtreme applications, you can use the **DataSource** and **Store** objects to read and write data from local and remote data storages. The DataSource is a stateful object that keeps sorting, grouping, filtering, and keeps data transformation options and applies them each time data is loaded. It also provides events intended to handle changing data and the state. A Store is a stateless object implementing a universal interface for reading and modifying data. Each Store contains the same set of methods. So you can use the same code to operate with different data storages. The DevExtreme widgets provide many capabilities for their easy use when they are bound to the DevExtreme DataSource.

**Read**

- [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [Data Source Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples/')

