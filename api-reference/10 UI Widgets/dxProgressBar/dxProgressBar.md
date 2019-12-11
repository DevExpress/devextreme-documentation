---
module: ui/progress_bar
inherits: ..\dxTrackBar\dxTrackBar.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ProgressBar** is a widget that shows current progress.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxProgressBar` jQuery plug-in.

        <!--HTML-->
        <div id="progressBar"></div>

    <!---->

        <!--JavaScript-->
        $("#progressBar").dxProgressBar({
            min: 0,
            max: 1000,
            showStatus: true,
            statusFormat: function(ratio, value) {
                return ratio * 100 + "% (" + value + ")";
            }
        });

- **Knockout**  
 Add a div element and apply the `dxProgressBar` binding to this element.

        <!--HTML-->
        <div data-bind="dxProgressBar: {
            min: 0,
            max: 1000,
            showStatus: true,
            statusFormat: function(ratio, value) {
                return ratio * 100 + "% (" + value + ")";
            }
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-progress-bar` directive to this element.

        <!--HTML-->
        <div dx-progress-bar="{
            min: 0,
            max: 1000,
            showStatus: true,
            statusFormat: function(ratio, value) {
                return ratio * 100 + "% (" + value + ")";
            }
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxProgressBar section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/List%20of%20Editor%20Widgets/dxProgressBar.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxProgressBar') of the [Editor Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsprogressbarprogressbarprogressbar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>