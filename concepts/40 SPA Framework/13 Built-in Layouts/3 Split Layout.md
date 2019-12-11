The Split layout is designed for Windows Phone, iOS and Android tablet applications to effectively organize space on a screen. In this layout, there are two panes - a "master" pane and a "detail" pane. A "master" pane usually presents a list of items. A "detail" pane presents detail information on the item selected in the "master" pane. The type of the layout controller and the layout markup to be used for each pane are determined in a root Split layout controller. The **IOSSplitLayoutController** that is used in iOS apps applies the [Simple](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/4%20Simple%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout') layout for both panes. The **AndroidSplitLayoutController** that is used in Android apps and **Win8SplitLayoutController** that is used in Windows Phone apps apply the [Empty](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/5%20Empty%20Layout.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Empty_Layout') layout for both panes. 

When defining views, specify the pane in which a view will be displayed in the Split layout by using the [pane](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#pane) option of the corresponding **dxView** markup component. In addition, denote the layout placeholder in which the view will be displayed within the pane. The Simple and Empty layouts that are used in split layout panes provide the 'content' placeholder. So, put the view's markup within this placeholder. For details on how to do this, refer to the [Insert View into Layout](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/4%20Insert%20View%20into%20Layout.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Insert_View_into_Layout') topic.

<a id="iOSSplitLayout"></a><h4>iOS</h4>

![Split](/images/PhoneJS/split-ios.png)

**Links**:

	<!--HTML--><link rel="dx-template" type="text/html" href="layouts/Split/SplitLayout.html" />
	<script type="text/javascript" src="layouts/Split/SplitLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/Split/SplitLayout.css" />
	<link rel="dx-template" type="text/html" href="layouts/Simple/SimpleLayout.html" />
	<script type="text/javascript" src="layouts/Simple/SimpleLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/Simple/SimpleLayout.css" />

<a id="AndroidSplitLayout"></a><h4>Android</h4>

![Split](/images/PhoneJS/split_android.png)

**Links**:

	<!--HTML--><link rel="dx-template" type="text/html" href="layouts/Split/SplitLayout.html" />
	<script type="text/javascript" src="layouts/Split/SplitLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/Split/SplitLayout.css" />
	<link rel="dx-template" type="text/html" href="layouts/Empty/EmptyLayout.html" />
	<script type="text/javascript" src="layouts/Empty/EmptyLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/Empty/EmptyLayout.css" />

<a id="WinPhoneSplitLayout"></a><h4>Windows Phone</h4>

![Split](/images/PhoneJS/split-win8.png)

**Links**:

	<!--HTML--><link rel="dx-template" type="text/html" href="layouts/Split/SplitLayout.html" />
	<script type="text/javascript" src="layouts/Split/SplitLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/Split/SplitLayout.css" />
	<link rel="dx-template" type="text/html" href="layouts/Empty/EmptyLayout.html" />
	<script type="text/javascript" src="layouts/Empty/EmptyLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/Empty/EmptyLayout.css" />

<a id="CustomSplitLayout"></a><h4>Customize Split Layout</h4>

You can replace layouts used in panes with other ones. For this purpose, you will have to specify a custom [layout set](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/layoutSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet') where you will create the **IOSSplitLayoutController**, **AndroidSplitLayoutController** or/and **Win8SplitLayoutController** controller(s) passing an object with a specified **panesConfig** field as a parameter.

	<!--JavaScript-->window.MyApp = {};
	$(function() {
		MyApp.app = new DevExpress.framework.html.HtmlApplication({
			layoutSet:[
				{ platform: 'android', controller: new IOSSplitLayoutController() },
				{ platform: 'ios', controller: new IOSSplitLayoutController({paneConfig: {
						content: {
							controller: new DX.framework.html.NavBarController(),
							selector: ".master-pane"
						},
						detail: {
							controller: new DX.framework.html.SimpleLayoutController(),
							selector: ".detail-pane"
						}					
					})
				},
				{ platform: 'win8', phone: false, controller: new Win8SplitLayoutController() }
			],
			namespace: MyApp
		});
	});

<a id="ShowBlankView"></a><h4>Show Blank View in a Detail Pane</h4>

Views shown in a "detail" pane may be accompanied by commands. After executing these commands, navigation to a view may be required. For instance, a particular view should be shown instead of the detail view of the object that has just been removed via a "Delete" command. In phone applications, the "Delete" command executed in a detail view usually returns to a list view (a previous view). In a tablet application, a list view remains displayed in the "master" pane when performing manipulations in the "detail" pane. Thus, it is recommended that you navigate to a blank view in the "detail" pane in such scenarios. The "Blank" view is available within the [application project template](/concepts/40%20SPA%20Framework/01%20Application%20Project '/Documentation/Guide/SPA_Framework/Application_Project/') that comes with DevExtreme. You can use this view as is.

	<!--JavaScript-->handleDelete: function() {
        //If an object is removed
            if(viewInfo.canBack) {
                AppNamespace.app.back();
            }
            else {
                AppNamespace.app.navigate("Blank", { target: "current" });
            }
        //
    },

<a id="ShowBlankView"></a><h4>Save the State of Slitted Views</h4>

When refreshing an application page in a browser, the application is recreated and the views that were displayed before the refresh should be displayed again. If you are going to run a Split layout application in a browser, implement the saving and restoring of the application's state. For this purpose, add the Split layout's controller to the *state sources* collection of the application's [state manager](/api-reference/40%20SPA%20Framework/StateManager '/Documentation/ApiReference/SPA_Framework/StateManager/'). To do this, access the state manager using the [stateManager](/api-reference/40%20SPA%20Framework/HtmlApplication/2%20Fields/stateManager.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Fields/#stateManager') field of the [HtmlApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object and call the [addStateSource(stateSource)](/api-reference/40%20SPA%20Framework/StateManager/3%20Methods/addStateSource(stateSource).md '/Documentation/ApiReference/SPA_Framework/StateManager/Methods/#addStateSourcestateSource') method passing the Split layout controller as a parameter.

	<!--JavaScript-->window.MyApp = window.MyApp || {};
	$(function() {
		MyApp.app = new DevExpress.framework.html.HtmlApplication({
			namespace: MyApp,
			layoutSet: DevExpress.framework.html.layoutSets['split'],
			//...
		});
		MyApp.app.stateManager.addStateSource(DevExpress.framework.html.layoutSets["split"].controller);
		//...
	});

The Split layout controller can be treated as a state source because it has the methods that are required by the state manager to save/restore/remove the application state.

To save the state of the Split layout application when the application page is refreshed, call the [saveState](/api-reference/40%20SPA%20Framework/HtmlApplication/3%20Methods/saveState().md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#saveState') method of the **HtmlApplication** object on the window's **unload** event.

    <!--JavaScript-->$(window).unload(function() {
        MyApp.app.saveState();
    });

The **saveState** method will call the **saveState** method of the application's state manager. The latter will send a request to save the state to all the registered state sources, and to the Split layout controller in particular.

[note]This method is called in the DevExtreme [Basic Application](/concepts/50%20VS%20Integration/0%20Project%20Templates/1%20Basic%20Application.md '/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application') and [Multi-Channel Application](/concepts/50%20VS%20Integration/0%20Project%20Templates/15%20Multi-Channel%20Application '/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application') templates provided by Visual Studio when the [DevExtreme Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete') package is installed.

The saved state will be automatically restored by the framework when recreating the application.