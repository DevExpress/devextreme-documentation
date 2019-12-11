Titles and subtitles are textual elements that provide an overview of what the **Funnel** visualizes.

![Funnel Title and Subtitle](/images/funnel/visual_elements/funnel-title.png)

The [title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/title/') object configures the title; the **title**.[subtitle](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/subtitle '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/title/subtitle/') object configures the subtitle.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            title: {
                text: "I am the Title",
                subtitle: {
                    text: "I am the Subtitle"
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-title
            text="I am the Title">
            <dxo-subtitle
                text="I am the Subtitle">
            </dxo-subtitle>
        </dxo-title>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart/"
}

You can set the title's text more concisely by assigning it directly to the **title** option. This is useful if you are satisfied with the title's default settings and do not need a subtitle. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            title: "I am the Title"
        });
    });

##### Angular

    <!--HTML--><dx-funnel ...
        text="I am the Title">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

Refer to the API reference's [title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/title/') section for information about all the title and subtitle options.

#####See Also#####
- [Adaptive Layout](/concepts/05%20Widgets/Funnel/89%20Adaptive%20Layout.md '/Documentation/Guide/Widgets/Funnel/Adaptive_Layout/')
