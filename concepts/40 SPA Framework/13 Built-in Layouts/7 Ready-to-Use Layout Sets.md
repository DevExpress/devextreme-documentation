In non-basic applications, different layouts can be used for different views. For example, Android apps have a navbar on root views only. So to implement such an application, you will have to use a Navbar layout for root views and a Simple layout for child views. To save you time, the framework comes with ready-to-use layout sets. 

- **navbar**  
	Different layout sets are used for different platforms.
	- **iOS**  
		All views are displayed in the [Navbar layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#iOSNavbarLayout).
	- **Android**  
		Root views are displayed in the [Navbar layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#AndroidNavbarLayout). Other views are displayed in the [Simple layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#AndroidSimpleLayout).
	- **Windows Phone 8**  
		Root views are displayed in the [Pivot layout](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/13%20Pivot%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Pivot_Layout'). Other views are displayed in the [Simple layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#WinPhone8SimpleLayout).
	- **generic**  
		All views are displayed in the [Navbar layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#GenericNavbarLayout).

- **slideOut**  
	All views are displayed in the [Slideout layout](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/2%20SlideOut%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#SlideOut_Layout') on all platforms.

- **split**  
	Designed to be used on Windows Phone, iOS and Android tablet devices.
	- **Windows Phone**  
		Root views are displayed in the [Navbar](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#WinPhoneNavbarLayout) layout. Other views are displayed in the [Split](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/3%20Split%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Split_Layout') layout.
	- **iOS** and **Android**  
		All views are displayed in the [Split](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/3%20Split%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Split_Layout') layout. It is recommended, that the first navigated view in an application includes global navigation. For this purpose, implement a 'navigation' view with a widget(s) that will allow you to navigate to the application's root views.

- **simple**  
	All views are displayed in the [Simple layout](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/4%20Simple%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout') on all platforms.

These layout sets are available from the **DevExpress.framework.html.layoutSets** object. To get a particular layout set, use one of the following approaches.

- **DevExpress.framework.html.layoutSets['navbar']**

- **DevExpress.framework.html.layoutSets.navbar**

To specify the layout set that you are going to use in your application, use the [layoutSet](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/layoutSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet') configuration option of your **HtmlApplication** object. 

    <!--JavaScript-->window.MyApp = {};
	$(function() {
		MyApp.app = new DevExpress.framework.html.HtmlApplication({
			namespace: MyApp,
			layoutSet: DevExpress.framework.html.layoutSets['navbar'],
			//...
		});
	});

Ensure that the layouts that are demanded by the specified layout set are linked in the application page. 

    <!--HTML--><!-- Layouts -->
    <script type="text/javascript" src="layouts/NavBar/NavbarLayout.js"></script>
    <link rel="stylesheet" type="text/css" href="layouts/NavBar/NavbarLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/NavBar/NavbarLayout.html"/>
    <script type="text/javascript" src="layouts/Pivot/PivotLayout.js"></script>
    <link rel="stylesheet" type="text/css" href="layouts/Pivot/PivotLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Pivot/PivotLayout.html"/>
    <script type="text/javascript" src="layouts/Simple/SimpleLayout.js"></script>
    <link rel="stylesheet" type="text/css" href="layouts/Simple/SimpleLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Simple/SimpleLayout.html"/>
