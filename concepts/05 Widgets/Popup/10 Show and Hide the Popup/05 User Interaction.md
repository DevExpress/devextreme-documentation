The **Popup** can also be hidden when a user clicks outside it. To control this behavior of the **Popup**, use the [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnOutsideClick') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            closeOnOutsideClick: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        [closeOnOutsideClick]="true">
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isPopupVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule
        ],
        // ...
    })

---