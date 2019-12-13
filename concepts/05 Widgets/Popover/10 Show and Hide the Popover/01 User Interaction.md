To specify when the **Popover** should be shown and hidden, set the [showEvent](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/showEvent '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/showEvent/') and [hideEvent](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/hideEvent '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/hideEvent/') options. These options can accept several events at once as well as an object.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
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
        hideEvent="dxhoverend">
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
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popover/Overview/"
}

The **Popover** can also be hidden when a user clicks outside it. To control this behavior of the **Popover**, use the [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#closeOnOutsideClick') option.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            closeOnOutsideClick: false
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
        [closeOnOutsideClick]="false">
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
        .CloseOnOutsideClick(false)
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---