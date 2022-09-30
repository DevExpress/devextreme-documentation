The Resizable UI component enables its content to be resizable in the UI.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Resizable/Overview/"
}

---
##### jQuery

The following code adds a resizable image to your page. Note that the image occupies 100% of the Resizable UI component.

    <!--HTML--><div id="resizable">
        <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    </div>

    <!--JavaScript-->$(function() {
        $("#resizable").dxResizable({
            width: 200,
            height: 200,
            minWidth: 30,
            minHeight: 30,
            maxWidth: 500,
            maxHeight: 500 
        });
    });

    <!--CSS-->#image {
        height: 100%;
        width: 100%
    }

---

[note]We recommend specifying the width- and height-related properties of the Resizable, because the content usually takes them into account.

To specify which sides of the Resizable - top, bottom, left, right or all at once - can be used for resizing content, set the [handles](/api-reference/10%20UI%20Components/dxResizable/1%20Configuration/handles.md '/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#handles') property. Note that this property can accept several values separated with space.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#resizable").dxResizable({
            // ...
            handles: "left right"
        });
    });

---

---
##### jQuery

If the Resizable UI component contains other UI components, make sure that it is instantiated _before_ the UI components. For example, the following code creates a resizable [Chart](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'). Note that the Resizable goes _before_ the Chart in the JavaScript code, and that makes the Resizable instantiated before the Chart.

    <!--HTML--><div id="resizable">
        <div id="chart"></div>
    </div>

    <!--JavaScript-->$(function() {
        $("#resizable").dxResizable({
            height: 400,
            width: 700,
            maxHeight: 500,
            maxWidth: 900,
            minHeight: 200,
            minWidth: 400,
            onResizeEnd: function (e) {
                $("#chart").dxChart("render");
            }
        });

        $("#chart").dxChart({
            dataSource: [
                { arg: 'Oranges', val: 10 },
                { arg: 'Apples', val: 15 },
                { arg: 'Bananas', val: 9 }
            ],
            series: { type: "bar" }
        });
    });

    <!--CSS-->#chart {
        height: 100%;
        width: 100%
    }

In the previous code, the handler of the [resizeEnd](/api-reference/10%20UI%20Components/dxResizable/4%20Events/resizeEnd.md '/Documentation/ApiReference/UI_Components/dxResizable/Events/#resizeEnd') event contains commands that [rerender](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/render().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#render') the Chart. That is because the Chart cannot track changes in the size of its container, and therefore, cannot be resized automatically each time such a change occurs. Apply this technique each time the content of the Resizable needs to be resized manually.

In addition to the **resizeEnd** event, the Resizable UI component fires the [resizeStart](/api-reference/10%20UI%20Components/dxResizable/4%20Events/resizeStart.md '/Documentation/ApiReference/UI_Components/dxResizable/Events/#resizeStart') and [resize](/api-reference/10%20UI%20Components/dxResizable/4%20Events/resize.md '/Documentation/ApiReference/UI_Components/dxResizable/Events/#resize') events. They also can be handled to resize the content of the Resizable UI component.

---

#####See Also#####
#include common-link-configurewidget
- [Resizable API Reference](/api-reference/10%20UI%20Components/dxResizable '/Documentation/ApiReference/UI_Components/dxResizable/')

[tags]dxresizable, resizable, overview, resize a UI component, resize