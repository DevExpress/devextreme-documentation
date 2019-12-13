By default, exactly one panel can be in the expanded state at one moment. To change this, switch the [collapsible](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/collapsible.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#collapsible') and [multiple](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#multiple') options to _true_.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#accordionContainer").dxAccordion({
            // ...
            // All panels may be collapsed
            collapsible: true,
            // Multiple panels may be expanded
            multiple: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-accordion
        [collapsible]="true" <!-- All panels may be collapsed -->
        [multiple]="true">   <!-- Multiple panels may be expanded -->
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

---

#####See Also#####
- [Accordion Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Accordion/Overview)
- [Accordion API Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/dxAccordion/')

[tags]accordion, behavior, collapse, expand, multiple