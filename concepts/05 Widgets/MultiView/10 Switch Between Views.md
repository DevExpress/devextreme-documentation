By default, an end user can switch between views by swiping. Assign **false** to the [swipeEnabled](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#swipeEnabled') option to disable this feature.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: multiViewItems,
            swipeEnabled: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        [swipeEnabled]="false">
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        multiViewItems = [ ... ];
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

---

You can switch the views from code by changing the [selectedIndex](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#selectedIndex') or [selectedItem](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#selectedItem') option.

---
##### jQuery

    <!--JavaScript-->$("#multiViewContainer").dxMultiView("option", "selectedIndex", 1);

##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        [(selectedIndex)]="selectedIndex">
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        multiViewItems = [ ... ];
        selectedIndex: number = 0;
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

---

By default, the **MultiView** widget animates switching between views. You can disable animation by setting the [animationEnabled](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/animationEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#animationEnabled') option to **false**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: multiViewItems,
            animationEnabled: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-multi-view
        [dataSource]="multiViewItems"
        [animationEnabled]="false">
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        multiViewItems = [ ... ];
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

---

#####See Also#####
- [MultiView - Customize Item Appearance](/concepts/05%20Widgets/MultiView/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/MultiView/Customize_Item_Appearance')
- [MultiView - Loop the Views](/concepts/05%20Widgets/MultiView/15%20Loop%20the%20Views.md '/Documentation/Guide/Widgets/MultiView/Loop_the_Views')
- [MultiView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/MultiView/Overview)
- [MultiView API Reference](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/')

[tags]multi view, multiView, views, switch, swipe, animate