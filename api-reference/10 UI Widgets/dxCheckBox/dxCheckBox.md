---
module: ui/check_box
inherits: ..\Editor\Editor.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **CheckBox** is a small box, which when selected by the end user, shows that a particular feature has been enabled or a specific option has been chosen.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxCheckBox` jQuery plug-in.

        <!--HTML-->
        <div id="checkBox"></div>

    <!---->

        <!--JavaScript-->
        $("#checkBox").dxCheckBox({
            text: 'Option enabled',
            value: true
        });

- **Knockout**  
 Add a div element and apply the `dxCheckBox` binding to this element.

        <!--HTML-->
        <div data-bind="dxCheckBox: {
            text: 'Option enabled',
            value: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-check-box` directive to this element.

        <!--HTML-->
        <div dx-check-box="{
            text: 'Option enabled',
            value: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxCheckBox section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/List%20of%20Editor%20Widgets/dxCheckBox.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxCheckBox') of the [Editor Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscheckboxcheckboxcheckbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>