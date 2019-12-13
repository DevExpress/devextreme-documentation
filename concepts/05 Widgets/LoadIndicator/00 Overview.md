The **LoadIndicator** is a UI element notifying the viewer that a process is in progress.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadIndicator/Overview/"
}

The following code adds a simple **LoadIndicator** to your page. You can change the widget size, using the [height](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#height') and [width](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#height') options.

---
##### jQuery

    <!--HTML-->
    <div id="loadIndicatorContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#loadIndicatorContainer").dxLoadIndicator({
            visible: true,
            height: 40,
            width: 40
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-indicator
        [(visible)]="isLoadIndicatorVisible"
        [height]="40"
        [width]="40">
    </dx-load-indicator>

    <!--TypeScript-->
    import { DxLoadIndicatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule
        ],
        // ...
    })

---

If you need to use a custom image in the **LoadIndicator**, assign its URL to the [indicatorSrc](/api-reference/10%20UI%20Widgets/dxLoadIndicator/1%20Configuration/indicatorSrc.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#indicatorSrc') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#loadIndicatorContainer").dxLoadIndicator({
            visible: true,
            indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-indicator
        [(visible)]="isLoadIndicatorVisible"
        [indicatorSrc]="indicatorUrl">
    </dx-load-indicator>

    <!--TypeScript-->
    import { DxLoadIndicatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible: boolean = true;
        indicatorUrl: string = "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg";
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-configurewidget
- [LoadIndicator - Show and Hide Using the API](/concepts/05%20Widgets/LoadIndicator/05%20Show%20and%20Hide%20Using%20the%20API.md '/Documentation/Guide/Widgets/LoadIndicator/Show_and_Hide_Using_the_API/')
- [LoadIndicator API Reference](/api-reference/10%20UI%20Widgets/dxLoadIndicator '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/')
- [LoadPanel - Overview](/concepts/05%20Widgets/LoadPanel/00%20Overview.md '/Documentation/Guide/Widgets/LoadPanel/Overview/')

[tags]loadIndicator, load indicator, loading indicator, overview, overlay