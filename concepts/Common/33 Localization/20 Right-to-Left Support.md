Right-to-left (RTL) support allows the widget to adapt its content to right-to-left locales.

RTL layout can be specified for an individual widget using its **rtlEnabled** option:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            // ...
            rtlEnabled: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider ...
        [rtlEnabled]="true">
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

---

To apply RTL to your entire application, set the same option globally using the [config()](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig') function:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.config({ rtlEnabled: true });
        // ...
    });

#####Angular

    <!--TypeScript-->
    import config from 'devextreme/core/config';
    // ...
    export class AppComponent {
        constructor() {
            config({ rtlEnabled: true });      
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#####See Also#####
- **RTL Support Demo**: [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RightToLeftSupport/jQuery/Light) | [Navigation Widgets](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/NavigationRightToLeftSupport/jQuery/Light) | [Editors](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/EditorsRightToLeftSupport/jQuery/Light)
