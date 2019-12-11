---
module: ui/toast
inherits: ..\dxOverlay\dxOverlay.md
---
---
##### widgettree
displayTime: 20000,
visible: true,
message: "Toast message"

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Toast** is a widget that provides pop-up notifications.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxToast` jQuery plug-in.

        <!--HTML-->
        <div id="toast"></div>

    <!---->

        <!--JavaScript-->
        $("#toast").dxToast({
            message: 'The toast message',
            type: 'success',
            displayTime: 3000
        });

- **Knockout**  
 Add a div element and apply the `dxToast` binding to this element.

        <!--HTML-->
        <div data-bind="dxToast: {
            message: 'The toast message',
            type: 'success',
            displayTime: 3000
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-toast` directive to this element.

        <!--HTML-->
        <div dx-toast="{
            message: 'The toast message',
            type: 'success',
            displayTime: 3000
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on the principles of working with the widget in the [dxToast section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets/2%20List%20of%20Overlay%20Widgets/dxToast.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#List_of_Overlay_Widgets/dxToast') of the [Overlay Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/30%20Overlay%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstoasttoasttoast/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>