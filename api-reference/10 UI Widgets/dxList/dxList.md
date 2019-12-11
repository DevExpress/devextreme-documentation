---
module: ui/list
type: object
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### widgettree
dataSource: ["Prepare 2013 Financial","Prepare 3013 Marketing Plan","Update Personnel Files","Review Health Insurance Options Under the Affordable Care Act","Choose between PPO and HMO Health Plan",
    "Google AdWords Strategy","New Brochures","2013 Brochure Designs","Brochure Design Review","Website Re-Design Plan","Rollout of New Website and Marketing Brochures",
    "Update Sales Strategy Documents","Create 2012 Sales Report","Direct vs Online Sales Comparison Report"]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **List** is a widget that represents a collection of items in a scrollable list.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxList` jQuery plug-in.

        <!--HTML-->
        <div id="list"></div>

    <!---->

        <!--JavaScript-->
        $("#list").dxList({
            dataSource: listData,
            grouped: true,
            showDeleteControls: true,
            showReorderControls: true,
            showSelectionControls: true
        });

- **Knockout**  
 Add a div element and apply the `dxList` binding to this element.

        <!--HTML-->
        <div data-bind="dxList: {
            dataSource: listData,
            grouped: true,
            showDeleteControls: true,
            showReorderControls: true,
            showSelectionControls: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-list` directive to this element.

        <!--HTML-->
        <div dx-list="{
            dataSource: listData,
            grouped: true,
            showDeleteControls: true,
            showReorderControls: true,
            showSelectionControls: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

The **List** widget supports common Collection Container functionality. You can find detailed information on the principles of working with collection container widgets in the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/') guide. For detailed information on working with the **List** widget, refer to the [dxList guide](/concepts/10%20UI%20Widgets/20%20UI%20Widgets%20-%20Deep%20Dive/dxList '/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxList/').

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistslistlistlisteditingandapi/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>