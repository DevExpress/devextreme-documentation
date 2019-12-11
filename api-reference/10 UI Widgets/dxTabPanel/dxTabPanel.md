---
module: ui/tab_panel
inherits: ..\dxMultiView\dxMultiView.md
---
---
##### widgettree
dataSource: [
        {
            title: "Info",
            text: "John Smith, 1986"
        },
        {
            title: "Contacts",
            text: "phone: (555)555-5555, email: John.Smith@example.com"
        },
        {
            title: "Address",
            text: "CA San Francisco Stanford Ave st."
        }
],
height: 200

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **TabPanel** is a widget consisting of the [Tabs](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/') and [MultiView](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/') widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTabPanel` jQuery plug-in.

        <!--HTML-->
        <div id="tabPanel"></div>

    <!---->

        <!--JavaScript-->
        $("#tabPanel").dxTabPanel({
            dataSource: tabPanelData,
            swipeEnabled: true,
            loop: true,
            animationEnabled: false
        });

- **Knockout**  
 Add a div element and apply the `dxTabPanel` binding to this element.

        <!--HTML-->
        <div data-bind="dxTabPanel: {
            dataSource: tabPanelData,
            swipeEnabled: true,
            loop: true,
            animationEnabled: false
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-tab-panel` directive to this element.

        <!--HTML-->
        <div dx-tab-panel="{
            dataSource: tabPanelData,
            swipeEnabled: true,
            loop: true,
            animationEnabled: false
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

Since the **TabPanel** widget is used to display multiple items, it supports common the Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxTabPanel section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/1%20List%20of%20Collection%20Container%20Widgets/dxTabPanel.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxTabPanel') of the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationtabpaneltabpaneltabpanel/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=SyGIlFZY_S0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=42" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>