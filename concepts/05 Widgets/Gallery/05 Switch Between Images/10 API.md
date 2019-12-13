[note]In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to switch images. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To switch the **Gallery** to the next or previous image, call the [nextItem(animation)](/api-reference/10%20UI%20Widgets/dxGallery/3%20Methods/nextItem(animation).md '/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#nextItemanimation') or [prevItem(animation)](/api-reference/10%20UI%20Widgets/dxGallery/3%20Methods/prevItem(animation).md '/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#prevItemanimation') method, respectively.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        var gallery = $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person4.png"
            ],
            height: 300
        }).dxGallery("instance");

        $("#nextButton").dxButton({
            text: "Next",
            onClick: function () {
                gallery.nextItem(true);
            }
        });

        $("#prevButton").dxButton({
            text: "Previous",
            onClick: function () {
                gallery.prevItem(true);
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300">
    </dx-gallery>
    <dx-button
        text="Next"
        (onClick)="goToNextItem()">
    </dx-button>
    <dx-button
        text="Next"
        (onClick)="goToPreviousItem()">
    </dx-button>

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxButtonModule, DxGalleryModule, DxGalleryComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxGalleryComponent, { static: false }) gallery: DxGalleryComponent;
        // Prior to Angular 8
        // @ViewChild(DxGalleryComponent) gallery: DxGalleryComponent;
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person4.png"
        ];
        goToNextItem () {
            this.gallery.instance.nextItem(true);
        }
        goToPreviousItem () {
            this.gallery.instance.prevItem(true);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule,
            DxButtonModule
        ],
        // ...
    })

---

To navigate to a specific image, call the [goToItem(itemIndex, animation)](/api-reference/10%20UI%20Widgets/dxGallery/3%20Methods/goToItem(itemIndex_animation).md '/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#goToItemitemIndex_animation') method. The first argument should be the index of the required image in the [dataSource](/api-reference/10%20UI%20Widgets/dxGallery/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/dataSource/').

---
#####jQuery

    <!--JavaScript-->
    var gallery = $("#galleryContainer").dxGallery("instance");
    // Goes to the third image
    gallery.goToItem(2, true);

#####Angular

    <!--TypeScript-->
    import { DxGalleryModule, DxGalleryComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxGalleryComponent, { static: false }) gallery: DxGalleryComponent;
        // Prior to Angular 8
        // @ViewChild(DxGalleryComponent) gallery: DxGalleryComponent;
        goToItem (index) {
            this.gallery.goToItem(index, true);
        }
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
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview)
- [Gallery API Reference](/api-reference/10%20UI%20Widgets/dxGallery '/Documentation/ApiReference/UI_Widgets/dxGallery/')
