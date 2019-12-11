---
module: ui/resizable
inherits: ..\DOMComponent\DOMComponent.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Resizable** widget enables its content to be resizable in the UI.

---
The **Resizable** widget is an element that can be resized by an end user. It displays data located inside the HTML element of the widget. You can specify minimum and maximum size using the [minHeight](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/minHeight.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minHeight'), [minWidth](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/minWidth.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minWidth'), [maxHeight](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/maxHeight.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxHeight') and [maxWidth](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/maxWidth.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxWidth') options. The [handles](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/handles.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#handles') option enables you to specify which element borders are used as a handle for resizing.

You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxResizable` jQuery plug-in.

        <!--HTML-->
        <div id="myResizable">
            <p>Widget content</p>
        </div>

    <!---->

        <!--JavaScript-->
        $("#myResizable").dxResizable({
            handles: 'right bottom',
            minHeight: 100,
            minWidth: 200,
            maxHeight: 400,
            maxWidth: 300,
            height: 150,
            width: 250
        });

- **Knockout**  
 Add a div element and apply the `dxResizable` binding to this element.

        <!--HTML-->
        <div data-bind="dxResizable: {
            handles: 'right bottom',
            minHeight: 100,
            minWidth: 200,
            maxHeight: 400,
            maxWidth: 300,
            height: 150,
            width: 250
        }">
            <p>Widget content</p>
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-resizable` directive to this element.

        <!--HTML-->
        <div dx-resizable="{
            handles: 'right bottom',
            minHeight: 100,
            minWidth: 200,
            maxHeight: 400,
            maxWidth: 300,
            height: 150,
            width: 250
        }">
            <p>Widget content</p>
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find the detailed information on principles of working with the widget in the [dxResizable section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets/dxResizable.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxResizable') of the [Individual Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/') article.