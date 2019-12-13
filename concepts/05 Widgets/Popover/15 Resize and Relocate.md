To change the size of the **Popover**, specify the [height](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#height') and [width](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#width') options.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            height: 300,
            width: 500
        });
    });

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [height]="300"
        [width]="500">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Popover content</p>
        </text>)
        .Height(300)
        .Width(500)
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---

If you need to position the **Popover** against a certain side of the [target element](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target'), set the [position](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#position') option.

---
##### jQuery 

    <!--JavaScript-->
    $(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            position: "top" // or "bottom" | "left" | "right"
        });
    });

##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        position="top"> <!-- or "bottom" | "left" | "right" -->
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Popover content</p>
        </text>)
        .Position(Position.Top) // or Position.Bottom | Position.Left | Position.Right
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---


#####See Also#####
- [Popover - Show and Hide the Popover](/concepts/05%20Widgets/Popover/10%20Show%20and%20Hide%20the%20Popover '/Documentation/Guide/Widgets/Popover/Show_and_Hide_the_Popover/')
- [Popover - Customize the Content](/concepts/05%20Widgets/Popover/05%20Customize%20the%20Appearance/05%20Customize%20the%20Content '/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/')
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popover/Overview)

[tags]popover, overlay, size, height, width, position