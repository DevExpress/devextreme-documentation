The Navbar layout is available for all platforms supported by the framework. This layout is characterized by the presence of a navigation control on a view. The navigation control is global navigation that provides access to the root views of the application.

<a id="iOSNavbarLayout"></a><h4>iOS</h4>

![NavBar iOS](/images/PhoneJS/navbar_ios.png)

[note]If you place a command in the 'ios-view-footer' command container, add the 'view-footer' content placeholder to your view as well. In this instance, the dxContent component with the 'ios-view-footer' command container defined in the layout will be rendered to the 'view-footer' content placeholder of your view.

**Links**:

	<!--HTML--><link rel="dx-template" type="text/html" href="layouts/NavBar/NavbarLayout.html" />
	<script type="text/javascript" src="layouts/NavBar/NavbarLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/NavBar/NavbarLayout.css" />

<a id="AndroidNavbarLayout"></a><h4>Android</h4>  

![NavBar Android](/images/PhoneJS/navbar_android.png)

**Links**:

	<!--HTML--><link rel="dx-template" type="text/html" href="layouts/NavBar/NavbarLayout.html" />
	<script type="text/javascript" src="layouts/NavBar/NavbarLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/NavBar/NavbarLayout.css" />

<a id="WinPhoneNavbarLayout"></a><h4>Windows Phone</h4>  

![NavBar Windows Phone](/images/PhoneJS/navbar_win8.png)

**Links**:

[note]The NavBar layout for Windows Phone requires links to the PivotLayout and SimpleLayout files in addition to the NavBar layout files.

    <!--HTML--><link rel="dx-template" type="text/html" href="layouts/NavBar/NavbarLayout.html" />
    <script type="text/javascript" src="layouts/NavBar/NavbarLayout.js"></script>
    <link rel="stylesheet" type="text/css" href="layouts/NavBar/NavbarLayout.css" />

    <link rel="stylesheet" type="text/css" href="layouts/Pivot/PivotLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Pivot/PivotLayout.html"/>
    <script type="text/javascript" src="layouts/Pivot/PivotLayout.js"></script>

    <link rel="stylesheet" type="text/css" href="layouts/Simple/SimpleLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Simple/SimpleLayout.html"/>
    <script type="text/javascript" src="layouts/Simple/SimpleLayout.js"></script>

<a id="GenericNavbarLayout"></a><h4>Generic</h4>  

![NavBar Generic](/images/PhoneJS/navbar_generic.png)

[note]If you place a command in the 'generic-view-footer' command container, add the 'view-footer' content placeholder to your view as well. In this instance, the dxContent component with the 'generic-view-footer' command container defined in the layout will be rendered to the 'view-footer' content placeholder of your view.

**Links**:

	<!--HTML--><link rel="dx-template" type="text/html" href="layouts/NavBar/NavbarLayout.html" />
	<script type="text/javascript" src="layouts/NavBar/NavbarLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/NavBar/NavbarLayout.css" />

