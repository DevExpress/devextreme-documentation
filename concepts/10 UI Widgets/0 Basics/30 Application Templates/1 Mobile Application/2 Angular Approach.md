DevExtreme widgets can easily be used in single-page applications built using the [AngularJS](https://angularjs.org) framework. To help you start quickly with an Angular-based application utilizing DevExtreme widgets, the **DevExtreme Mobile** package supplies the following **AngularJS** application templates.

- **Navbar**  
A mobile application template where the [NavBar](/api-reference/10%20UI%20Widgets/dxNavBar '/Documentation/ApiReference/UI_Widgets/dxNavBar/') widget is used for global navigation on iOS and Android devices and the [Pivot](/api-reference/10%20UI%20Widgets/dxPivot '/Documentation/ApiReference/UI_Widgets/dxPivot/') widget - on Windows Phone 8 devices.

- **SlideOut**  
A mobile application template where the [SlideOut](/api-reference/10%20UI%20Widgets/dxSlideOut '/Documentation/ApiReference/UI_Widgets/dxSlideOut/') widget is used for global navigation.

These application templates have a similar structure.

- **css**  
A folder with [common and platform-specific stylesheets](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') responsible for giving consistency to the application based on DevExtreme widgets. The application-specific stylesheets are also located in this folder.

- **lib**  
A folder with all the JavaScript libraries required for the DevExtreme widgets and AngularJS applications.

- **js**  
A folder where all the application-specific JavaScript logic is implemented.

- **partials**  
A folder with HTML templates for sample views and layouts of the application.

- *index.html*  
An application file (the main HTML template file of the application).

As you can see, the application template includes two sample views - 'Home' and 'About'. You can find their templates in the **partials**/*home.html* and **partials**\about.html files, and their controllers in the **js**/*controllers.js* file. Both these views are included to the application's routing - see the **js**/*app.js* file.

To display a toolbar on application views, both the view templates include a toolbar template defined in the **partials**/*toolbar.html* file. The toolbar template uses the DevExtreme [Toolbar](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/') widget and is managed by a controller defined in the **js**/*controllers.js* file.

**Navbar Application Template Specifics**

To provide a navigation control for both the 'Home' and 'About' views, the application page includes a layout template. You will find the *navbar.html* and *pivot.html* layout templates in the **partials** folder. To determine the platform of the device on which the application is currently running and to apply the *navbar.html* or *pivot.html* layout template respectively, the **device** service is implemented in the *services.js* file. Information on the current device is received by using the [DevExpress.devices.current()](/api-reference/50%20Common/utils/devices/3%20Methods/current().md '/Documentation/ApiReference/Common/Utils/devices/Methods/#current') method.

To provide a list of items for the navigation widget (**NavBar** or **Pivot**), the **navigationItems** service is implemented in the *services.js* file. To highlight the navigation item corresponding to the currently displayed view, the **getSelectedIndex** service of the **currentViewInfo** factory is added. The **currentViewInfo** factory also provides the **getTitle** service to determine a view title to be displayed on the toolbar.

**SlideOut Application Template Specifics**

The **SlideOut** widget is added as a navigation control directly to the application page. The visibility of the slide-out menu is managed by the **menu** factory implemented in the *services.js* file.

To provide a list of items for the slide-out menu, the *navigationItems* service is implemented in the *services.js* file. To highlight the navigation item corresponding to the currently displayed view, the **getSelectedIndex** service of the **currentViewInfo** factory is added. The **currentViewInfo** factory also provides the **getTitle** service to determine a view title to be displayed on the toolbar.


&nbsp;

Using these templates as a base you can easily implement mobile applications with various views. To learn how to add DevExtreme widgets using the AngularJS approach, refer to the [Widget Basics - AngularJS Approach](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Create_and_Configure_a_Widget') topic.

