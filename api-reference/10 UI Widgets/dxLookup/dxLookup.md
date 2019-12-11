---
module: ui/lookup
inherits: ..\dxDropDownList\dxDropDownList.md
---
---
##### widgettree
dataSource: ["Prepare 2013 Financial","Prepare 3013 Marketing Plan","Update Personnel Files","Review Health Insurance Options Under the Affordable Care Act","Choose between PPO and HMO Health Plan",
    "Google AdWords Strategy","New Brochures","2013 Brochure Designs","Brochure Design Review","Website Re-Design Plan","Rollout of New Website and Marketing Brochures",
    "Update Sales Strategy Documents","Create 2012 Sales Report","Direct vs Online Sales Comparison Report"]

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Lookup** is a widget that allows an end user to search for an item in a collection shown in a drop-down menu.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxLookup` jQuery plug-in.

        <!--HTML-->
        <div id="lookup"></div>

    <!---->

        <!--JavaScript-->
        $("#lookup").dxLookup({
            dataSource: lookupData,
            displayExpr: 'name',
            title: 'Lookup title',
            searchEnabled: true
        });

- **Knockout**  
 Add a div element and apply the `dxLookup` binding to this element.

        <!--HTML-->
        <div data-bind="dxLookup: {
            dataSource: lookupData,
            displayExpr: 'name',
            title: 'Lookup title',
            searchEnabled: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-lookup` directive to this element.

        <!--HTML-->
        <div dx-lookup="{
            dataSource: lookupData,
            displayExpr: 'name',
            title: 'Lookup title',
            searchEnabled: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

The **Lookup** widget supports common Collection Container, Editor, and Overlay widget functionality. Refer to the [Collection Container Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/'), [Editor Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/') and [Overlay Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/') articles for details on using common functions. For detailed information on working with the **Lookup** widget, refer to the [dxLookup guide](/concepts/10%20UI%20Widgets/20%20UI%20Widgets%20-%20Deep%20Dive/dxLookup '/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxLookup/').

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistslookuplookuplookup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>