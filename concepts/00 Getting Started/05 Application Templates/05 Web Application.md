[note]This article describes an application template for IDEs other than Visual Studio. Templates for Visual Studio are described in the **VS Integration** | [Project Templates](/concepts/50%20VS%20Integration/0%20Project%20Templates '/Documentation/Guide/VS_Integration/Project_Templates/') section.

The template for a web application is included in the DevExtreme zip archive that you can download [here](Buy). This template is located in the **Application Template** or in the **Application Templates\WebApp** folder depending on the package you have, and has the following structure.

- **css**  
A folder with common and platform-specific themes that give consistent appearance to a DevExtreme application. Refer to the [Predefined Themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') to learn more about these themes.

- **js**  
A folder with DevExtreme scripts and [scripts required by DevExtreme](/concepts/00%20Getting%20Started/01%20Installation/00%20DevExtreme%20Dependencies.md '/Documentation/Guide/Getting_Started/Installation/DevExtreme_Dependencies/').
[note]There are several editions of DevExtreme scripts, but this folder contains *dx.web.js* only. This script is more light-weight, but it does not include the DevExtreme Data Visualization widgets. If you need these widgets, use the *dx.viz-web.js* script from the **Lib\js** folder instead.

- *index.html*  
A file where all the required resources are linked. Note that [AngularJS](https://angularjs.org) and [Knockout](https://knockoutjs.com) are also linked, but commented out. Add your markup to this file.
[note]If you have replaced the *dx.web.js* script with *dx.viz-web.js* in the **js** folder, correct the link in this file as well.

- *index.js*  
A file for JavaScript logic behind your application.

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')

[tags]getting started, application template, web application