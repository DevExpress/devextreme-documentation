The **Gallery** is a widget that displays a collection of images in a carousel. The widget is supplied with various navigation controls that allow a user to switch between images.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview"
}

The following code adds the **Gallery** widget to your page. The simplest configuration of the widget requires only a [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#dataSource') and [height](/api-reference/10%20UI%20Widgets/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#height') to be specified.

---
#####jQuery

    <!--HTML--><div id="galleryContainer"></div>

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person4.png"
            ],
            height: 300
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person4.png"
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule
        ],
        // ...
    })

---

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Gallery - Switch Between Images](/concepts/05%20Widgets/Gallery/05%20Switch%20Between%20Images '/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/')
- [Gallery - Set the Initial Image](/concepts/05%20Widgets/Gallery/10%20Set%20the%20Initial%20Image.md '/Documentation/Guide/Widgets/Gallery/Set_the_Initial_Image/')
- [Gallery - Enable the Slideshow](/concepts/05%20Widgets/Gallery/15%20Enable%20the%20Slideshow.md '/Documentation/Guide/Widgets/Gallery/Enable_the_Slideshow/')
- [Gallery - Animate the Image Change](/concepts/05%20Widgets/Gallery/20%20Animate%20the%20Image%20Change.md '/Documentation/Guide/Widgets/Gallery/Animate_the_Image_Change/')
- [Gallery - Transform and Combine Images](/concepts/05%20Widgets/Gallery/25%20Transform%20and%20Combine%20Images.md '/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/')
- [Gallery - Customize Item Appearance](/concepts/05%20Widgets/Gallery/30%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Gallery/Customize_Item_Appearance/')
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')

[tags]gallery, overview