---
module: ui/scroll_view
inherits: ..\dxScrollable\dxScrollable.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **ScrollView** is a widget that enables a user to scroll its content.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxScrollView` jQuery plug-in.

        <!--HTML-->
        <div id="scrollView">
            . . .
        </div>

    <!---->

        <!--JavaScript-->
        $("#scrollView").dxScrollView({
            direction: 'both',
            onPullDown: function() {
                //process pullDown event
            },
            onReachBottom: function() {
                //process reachBottom event
            }
        });

- **Knockout**  
 Add a div element and apply the `dxScrollView` binding to this element.

        <!--HTML-->
        <div data-bind="dxScrollView: {
            direction: 'both',
            onPullDown: function() {
                //process pullDown event
            },
            onReachBottom: function() {
                //process reachBottom event
            }
        }">
            . . .
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-scroll-view` directive to this element.

        <!--HTML-->
        <div dx-scroll-view="{
            direction: 'both',
            onPullDown: function() {
                //process pullDown event
            },
            onReachBottom: function() {
                //process reachBottom event
            }
        }">
            . . .
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxScrollView section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets/dxScrollView.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxScrollView') of the [Individual Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposescrollviewscrollviewscrollview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>