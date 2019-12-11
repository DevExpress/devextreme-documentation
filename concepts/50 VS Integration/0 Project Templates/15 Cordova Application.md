**Cordova Application** is a project template for building an Appache Cordova HTML/JS application based on the [DevExtreme SPA Framework](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework) and [DevExtreme widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/UI_Widgets_Library).

[note]The DevExtreme **Cordova Application** template is available only in Visual Studio 2015 and later vesions.

The **Cordova Application** project is a [Basic Application](#Basic_Application) project wrapped into a **Blank App (Appache Cordova)** project. The Basic Application files are stored in the *"www"* folder of the project. For more information of the **Blank App (Appache Cordova)** project, refer to the [Tools for Appache Cordova](https://taco.visualstudio.com/en-us/docs/get-started-vs-tools-apache-cordova) documentation.

![DevExtreme Cordova Application Structure](/images/DevExtreme/DevExtreme_CordovaProject.png)

In addition to the Basic Application files, the DevExtreme Cordova Application project includes the *"gruntfile.js"* file that holds instructions for the task updating DevExtreme libraries. For more information on Grunt, refer to [gruntjs.com](https://gruntjs.com).

The *"bower.json"* file contains information on the packages required for the DevExtreme SPA framework. Learn more about Bower at [bower.io](https://bower.io).

![bower.json contents](/images/DevExtreme/CordovaApp_BowerContents.png)

