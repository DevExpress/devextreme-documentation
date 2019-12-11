---
module: ui/popup
inherits: ..\dxOverlay\dxOverlay.md
---
---
##### widgettree
visible: true

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Popup** widget is a pop-up window overlaying the current view.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxPopup` jQuery plug-in.

        <!--HTML-->
        <div id="popup"></div>

    <!---->

        <!--JavaScript-->
        $("#popup").dxPopup({
            showTitle: true,
            title: 'Popup title'
        });

- **Knockout**  
 Add a div element and apply the `dxPopup` binding to this element.

        <!--HTML-->
        <div data-bind="dxPopup: {
            showTitle: true,
            title: 'Popup title'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-popup` directive to this element.

        <!--HTML-->
        <div dx-popup="{
            showTitle: true,
            title: 'Popup title'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxPopup section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/2%20List%20of%20Overlay%20Widgets/dxPopup.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#List_of_Overlay_Widgets/dxPopup') of the [Overlay Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationspopuppopuppopup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>