To switch between images on touch-enabled devices, the user can perform the swipe gesture. A more desktop-oriented solution for the same purpose are the **Next** and **Previous** navigation buttons. You can control the swipe gesture and the navigation buttons using the [swipeEnabled](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#swipeEnabled') and [showNavButtons](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/showNavButtons.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#showNavButtons') options, respectively.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png"
            ],
            height: 300,
            swipeEnabled: false,
            showNavButtons: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [swipeEnabled]="false"
        [showNavButtons]="true">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png"
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

With the buttons and swipe gesture, the user switches images in a particular order, and once the last image is reached, the user can only switch back. For this case, you can enable the user to jump straight to the first image, if you set the [loop](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#loop') option to **true**.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png"
            ],
            height: 300,
            loop: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [loop]="true">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png"
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

Below the current image, the **Gallery** shows navigation bullets that allow the user to switch images ignoring their order. To disable the navigation bullets, set the [indicatorEnabled](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/indicatorEnabled.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#indicatorEnabled') option to **false**. If you need to hide them completely, assign **false** to the [showIndicator](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/showIndicator.md '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#showIndicator') option.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png"
            ],
            height: 300,
            indicatorEnabled: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [indicatorEnabled]="false">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png"
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
- [Gallery - Set the Initial Image](/concepts/05%20Widgets/Gallery/10%20Set%20the%20Initial%20Image.md '/Documentation/Guide/Widgets/Gallery/Set_the_Initial_Image/')
- [Gallery - Enable the Slideshow](/concepts/05%20Widgets/Gallery/15%20Enable%20the%20Slideshow.md '/Documentation/Guide/Widgets/Gallery/Enable_the_Slideshow/')