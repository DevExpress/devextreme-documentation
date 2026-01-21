To use a custom load indicator image, set **indicatorOptions**.[src](Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/indicatorOptions/#src) to the image URL.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            hideOnOutsideClick: true,
            indicatorOptions: {
                src: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-panel
        [hideOnOutsideClick]="true"
        [indicatorOptions]="indicatorOptions">
    </dx-load-panel>

    <!--TypeScript-->
    import { DxLoadPanelTypes } from 'devextreme-angular/ui/load-panel';
    // ...
    export class AppComponent {
        indicatorOptions: DxLoadPanelTypes.LoadPanelIndicatorProperties = {
            src: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
        };
    }

##### Vue

    <template>
        <DxLoadPanel
            :hide-on-outside-click="true"
            :indicator-options="indicatorOptions"
        />
    </template>

    <script setup lang="ts">
    import DxLoadPanel from 'devextreme-vue/load-panel';
    import { type DxLoadPanelTypes } from "devextreme-vue/load-panel";

    const indicatorOptions: DxLoadPanelTypes.LoadPanelIndicatorProperties = {
        src: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
    };
    </script>

##### React

    import React from 'react';
    import LoadPanel, { LoadPanelTypes } from 'devextreme-react/load-panel';

    const indicatorOptions: LoadPanelTypes.LoadPanelIndicatorProperties = {
        src: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
    };

    export default function App() {
        return (
            <LoadPanel
                hideOnOutsideClick={true}
                indicatorOptions={indicatorOptions}
            />
        );
    }

---

To hide a load indicator, disable the [showIndicator](/api-reference/10%20UI%20Components/dxLoadPanel/1%20Configuration/showIndicator.md '/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#showIndicator') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            hideOnOutsideClick: true,
            showIndicator: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-panel
        [hideOnOutsideClick]="true"
        [showIndicator]="false">
    </dx-load-panel>

##### Vue

    <template>
        <DxLoadPanel
            :hide-on-outside-click="true"
            :show-indicator="false"
        />
    </template>

    <script setup lang="ts">
    import DxLoadPanel from 'devextreme-vue/load-panel';
    </script>

##### React

    import React from 'react';
    import { LoadPanel } from 'devextreme-react/load-panel';

    export default function App() {
        return (
            <LoadPanel
                hideOnOutsideClick={true}
                showIndicator={false}
            />
        );
    }

---

#####See Also#####
- [LoadPanel - Change the Text](/concepts/05%20UI%20Components/LoadPanel/10%20Customize%20the%20Appearance/20%20Change%20the%20Text.md '/Documentation/Guide/UI_Components/LoadPanel/Customize_the_Appearance/Change_the_Text/')
- [LoadPanel - Hide the Pane](/concepts/05%20UI%20Components/LoadPanel/10%20Customize%20the%20Appearance/30%20Hide%20the%20Pane.md '/Documentation/Guide/UI_Components/LoadPanel/Customize_the_Appearance/Hide_the_Pane/')
- [LoadPanel - Color the Shading of the Background](/concepts/05%20UI%20Components/LoadPanel/10%20Customize%20the%20Appearance/40%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/UI_Components/LoadPanel/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [LoadPanel - Resize and Relocate](/concepts/05%20UI%20Components/LoadPanel/15%20Resize%20and%20Relocate.md '/Documentation/Guide/UI_Components/LoadPanel/Resize_and_Relocate/')
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadPanel/Overview)
- [LoadPanel API Reference](/api-reference/10%20UI%20Components/dxLoadPanel '/Documentation/ApiReference/UI_Components/dxLoadPanel/')

[tags]loadPanel, load panel, overlay, loading indicator, customize indicator, hide indicator