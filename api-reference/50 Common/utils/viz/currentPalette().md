---
id: viz.currentPalette()
module: viz/palette
export: currentPalette
---
---
##### shortDescription
Gets the current [palette](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/palette.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#palette')'s name.

##### return: String
The current palette's name.

---
---
##### jQuery

    <!-- tab: index.js -->
    var paletteName = DevExpress.viz.currentPalette();
    // ===== or when using modules =====
    import { currentPalette } from 'devextreme/viz/palette';
     
    let paletteName = currentPalette();

##### Angular

    <!-- tab: app.component.ts -->
    import { currentPalette } from 'devextreme/viz/palette';
     
    let paletteName = currentPalette();

##### Vue

    <!-- tab: App.vue -->
    import { currentPalette } from 'devextreme/viz/palette';
     
    let paletteName = currentPalette();

##### React

    <!-- tab: App.js -->
    import { currentPalette } from 'devextreme/viz/palette';
     
    let paletteName = currentPalette();

---