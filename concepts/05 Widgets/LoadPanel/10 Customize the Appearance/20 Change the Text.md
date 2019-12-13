To change the text displayed by the **LoadPanel**, use the [message](/api-reference/10%20UI%20Widgets/dxLoadPanel/1%20Configuration/message.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#message') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            message: "Please, wait..."
        });
        
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-panel
        [closeOnOutsideClick]="true"
        [(visible)]="isLoadPanelVisible"
        message="Please, wait...">
    </dx-load-panel>
    <dx-button
        text="Show the Load Panel"
        (onClick)="isLoadPanelVisible = true">
    </dx-button>

    <!--TypeScript-->
    import { DxLoadPanelModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadPanelVisible: boolean = false;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadPanelModule,
            DxButtonModule
        ],
        // ...
    })

---

#####See Also#####
- [LoadPanel - Customize the Loading Indicator](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance/10%20Customize%20the%20Loading%20Indicator.md '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Customize_the_Loading_Indicator/')
- [LoadPanel - Hide the Pane](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance/30%20Hide%20the%20Pane.md '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Hide_the_Pane/')
- [LoadPanel - Color the Shading of the Background](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance/40%20Color%20the%20Shading%20of%20the%20Background.md '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Color_the_Shading_of_the_Background/')
- [LoadPanel - Resize and Relocate](/concepts/05%20Widgets/LoadPanel/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/')
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/LoadPanel/Overview)
- [LoadPanel API Reference](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/')

[tags]loadPanel, load panel, overlay, load panel text