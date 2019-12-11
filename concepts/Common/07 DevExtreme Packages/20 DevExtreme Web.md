DevExtreme Web ships with a rich library of client-side widgets that can be used in any web application or website.

DevExtreme Web is distributed as a ZIP file. Unzip the downloaded archive to a directory where you wish to store the files. Note that this is not a temporary folder - no further installation or unpacking is required. However, if you need to change these files to a different directory, simply move them to the new location.

The DevExtreme Web folder contains the following subfolders.

**Application Template**  
A template for web applications that utilize [DevExtreme widgets](/concepts/Common/05%20Introduction%20to%20DevExtreme/20%20Web%20Development/10%20Overview '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview'). Read the [Web Application](/concepts/10%20UI%20Widgets/0%20Basics/30%20Application%20Templates/0%20Web%20Application.md '/Documentation/Guide/UI_Widgets/Basics/Application_Templates/#Web_Application') topic in the **UI Widgets** | [Application Templates](/Documentation/Guide/UI_Widgets/Basics/Application_Templates/#Application_Templates) article to learn the details on this project template.

**Demos**  

The source code for all [web demos](WebDevelopment/Demos) that are presented on the site. You can find the source code of these demos in the following directory.

*C:\Users\Public\Documents\DevExpress Demos 16.1\DevExtreme*

**Eula**  

Familiarize yourself with the End-User License Agreement that comes with DevExtreme, as well as with the licenses of the **Globalize**, **jQuery** and **Knockout** libraries that are used in DevExtreme applications.

**Exporter**  

Scripts that provide the operation of the deprecated [Exporter](/api-reference/20%20Data%20Visualization%20Widgets/80%20dxExporter '/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/') widget.

**Lib**  

The libraries that must be included to DevExtreme applications.

- **css**  
[Style sheets for styling](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') applications for different platforms.  
- **js**  
The JavaScript libraries required for DevExtreme mobile applications.

    [note]Reference only one of the following libraries per application. Their combination may cause unexpected results.

    - *dx.web.js*  
    DevExtreme sources for [Web-optimized DevExtreme UI widgets](/concepts/Common/05%20Introduction%20to%20DevExtreme/20%20Web%20Development/10%20Overview/10%20UI%20Widgets%20Library.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview/UI_Widgets_Library') (mini and full versions).
    - *dx.viz.js*  
    DevExtreme sources for [DevExtreme Data Visualization widgets](/concepts/Common/05%20Introduction%20to%20DevExtreme/20%20Web%20Development/10%20Overview/20%20Data%20Visualization%20Library.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview/Data_Visualization_Library') (mini and full versions).
    - *dx.viz-web.js*  
    The dx.web and dx.viz libraries that are presented in one file.
    - *jquery-X.X.X.js*  
    The [jQuery](https://jquery.com) library that is required by the dx.web, dx.viz and dx.viz-web libraries (minified and full versions).
    - *globalize.js*, *cldr.js*, *cldr/event.js*, *cldr/supplemental.js*, *globalize.js*, *globalize/message.js*, *globalize/number.js*, *globalize/currency.js*, *globalize/date.js*  
    JavaScript libraries for internationalization and localization required by the dx.mobile library (minified and full versions).
    - *knockout-X.X.X.js*  
    The JavaScript library that is required if you use the MVVM approach and the [Knockout](https://knockoutjs.com) library for binding.
    - *angular.js*, *angular-sanitize.js* and *angular-route.js*  
    The JavaScript libraries that are required if you use DevExtreme Web UI widgets in [AngularJS](https://angularjs.org) applications.
    - *jszip.js*  
    The JavaScript library that is required if you use [export](/concepts/10%20UI%20Widgets/70%20Data%20Grid/090%20Client-Side%20Export '/Documentation/Guide/UI_Widgets/Data_Grid/Client-Side_Export/') in the [DataGrid](/api-reference/10%20UI%20Widgets/dxDataGrid '/Documentation/ApiReference/UI_Widgets/dxDataGrid/') widget.
    - **Localization**  
    [Ready-to-use dictionaries](/concepts/10%20UI%20Widgets/80%20Common/10%20Localization/2%20Use%20Predefined%20Dictionaries.md '/Documentation/Guide/UI_Widgets/Common/Localization/#Use_Predefined_Dictionaries') for localization of UI widgets into the **ru**, **ja** and **de** locales.

    - **vectormap-data**  
    Predefined data sources for the [VectorMap](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/') widget. For details on how to use it, refer to the [Providing Data](/concepts/20%20Data%20Visualization/35%20VectorMap/20%20Providing%20Data '/Documentation/Guide/Data_Visualization/VectorMap/Providing_Data/') article.
    - **vectormap-utils**  
    Libraries for [working with binary sources](/Documentation/Guide/Widgets/VectorMap/Providing_Data/#Data_for_Areas/Using_a_Binary_Source) in the [VectorMap](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/') widget.

- **layouts**  
Predefined desktop [layout templates](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts '/Documentation/Guide/SPA_Framework/Built-in_Layouts/') for web applications built using the [DevExtreme SPA framework](/concepts/Common/05%20Introduction%20to%20DevExtreme/10%20Mobile%20Development/10%20Overview/20%20SPA%20Framework.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework').

**Theme Builder**  

A site for modifying the [predefined themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') that come with the product.
