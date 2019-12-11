In most cases, you do not have to define [layouts](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/3%20Define%20Layouts.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Define_Layouts') yourself. The framework comes with a set of predefined layouts. You can find them in the following folder.

- [DevExtreme Mobile](/concepts/Common/07%20DevExtreme%20Packages/10%20DevExtreme%20Mobile.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Mobile')/[DevExtreme Web](/concepts/Common/07%20DevExtreme%20Packages/20%20DevExtreme%20Web.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Web')  
	The **lib**/**layouts** folder of the product's zip archive.
- [DevExtreme Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete').  
	The **DevExtreme**/**sources**/**lib**/**layouts** folder.

A folder with layouts is added to the [project template](/concepts/40%20SPA%20Framework/01%20Application%20Project '/Documentation/Guide/SPA_Framework/Application_Project/') as well. So you don't have to add them manually.

As you can see in the **layouts** folder, each layout is represented by a set of three files.

- *.html*  
	Includes HTML layout templates for different devices.
- *.css*  
	Includes CSS rules specific for different devices.
- *.js*  
	Contains a layout controller that shows a view using the layout template that is appropriate for the device on which the application is running.

Before using predefined layouts, find out which [content placeholders](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/4%20Insert%20View%20into%20Layout.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Insert_View_into_Layout') and [command containers](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/6%20Add%20Commands%20to%20Views.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views') are available in their device-specific versions. This information will be required when defining views and mapping the commands that are added to these views.

Below you will find details about each of the predefined layouts. In addition, you will learn how to use **layout sets** to specify which layouts should be used in your application and when.

