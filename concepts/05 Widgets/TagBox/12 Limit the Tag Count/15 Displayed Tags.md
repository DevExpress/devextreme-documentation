Specify the [maxDisplayedTags](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/maxDisplayedTags.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#maxDisplayedTags') option to limit the number of displayed tags. In this case, when the specified limit is exceeded, the widget replaces tags with a single multi-tag displaying the number of selected items. The **TagBox** can display the multi-tag alone or with ordinary tags depending on the [showMultiTagOnly](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/showMultiTagOnly.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showMultiTagOnly') option's value.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        var products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];

        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            maxDisplayedTags: 3,
            showMultiTagOnly: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products"
        [maxDisplayedTags]="3"
        [showMultiTagOnly]="false">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

You can also customize the multi-tag within the [onMultiTagPreparing](/api-reference/10%20UI%20Widgets/dxTagBox/1%20Configuration/onMultiTagPreparing.md '/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onMultiTagPreparing') event handler. In the following code, the multi-tag's text is changed and it is shown only when a user selects all items:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            maxDisplayedTags: 2,
            onMultiTagPreparing: function (args) {
                var selectedItemsLength = args.selectedItems.length,
                    totalCount = products.length;
                if (selectedItemsLength < totalCount) {
                    args.cancel = true;
                } else {
                    args.text = "All selected (" + selectedItemsLength + ")";
                    args.multiTagElement.addClass("red");
                }
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products"
        [maxDisplayedTags]="2"
        (onMultiTagPreparing)="onMultiTagPreparing($event)">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ];
        onMultiTagPreparing (e) {
            let selectedItemsLength = e.selectedItems.length,
                totalCount = this.products.length;
            if (selectedItemsLength < totalCount) {
                e.cancel = true;
            } else {
                e.text = "All selected (" + selectedItemsLength + ")";
                e.multiTagElement.classList.add("red");
            }
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/"
}
