---
module: ui/slider
inherits: ..\dxTrackBar\dxTrackBar.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Slider** is a widget that allows an end user to set a numeric value on a continuous range of possible values.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxSlider` jQuery plug-in.

        <!--HTML-->
        <div id="slider"></div>

    <!---->

        <!--JavaScript-->
        $("#slider").dxSlider({
            min: 0,
            max: 100,
            step: 5,
            label: {
                visible: true,
                position: 'bottom'
            }
        });

- **Knockout**  
 Add a div element and apply the `dxSlider` binding to this element.

        <!--HTML-->
        <div data-bind="dxSlider: {
            min: 0,
            max: 100,
            step: 5,
            label: {
                visible: true,
                position: 'bottom'
            }
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-slider` directive to this element.

        <!--HTML-->
        <div dx-slider="{
            min: 0,
            max: 100,
            step: 5,
            label: {
                visible: true,
                position: 'bottom'
            }
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxSlider section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/List%20of%20Editor%20Widgets/dxSlider.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxSlider') of the [Editor Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeslidersliderslider/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>