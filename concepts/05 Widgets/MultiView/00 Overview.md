The **MultiView** is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction. The widget is often used along with the [Tabs](/api-reference/10%20UI%20Widgets/dxTabs '/Documentation/ApiReference/UI_Widgets/dxTabs/') widget.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-multi_view-overview"
}

In the most simple case, the **MultiView** widget requires only the [dataSource](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#dataSource') option to be configured. Note that in such a case, data source items should have a structure similar to the [Default Item Template](/api-reference/10%20UI%20Widgets/dxMultiView/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxMultiView/Default_Item_Template/'). The following code adds the **MultiView** to your page.

---
##### jQuery

    <!--HTML-->
    <div id="multiViewContainer">

    <!--JavaScript-->
    var multiViewItems = [
        { text: "Personal Data" },
        { text: "Contacts" },
        { text: "Address" }
    ];

    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: multiViewItems
        });
    });

##### Angular

    <!--HTML-->
    <dx-multi-view>
        <dxi-item text="Personal Data"></dxi-item>
        <dxi-item text="Contacts"></dxi-item>
        <dxi-item text="Address"></dxi-item>
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

---

More often, structure of the data source item differs from the default. For correct rendering of views, specify a [custom template](/concepts/05%20Widgets/MultiView/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/MultiView/Customize_Item_Appearance'). 

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [MultiView - Customize Item Appearance](/concepts/05%20Widgets/MultiView/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/MultiView/Customize_Item_Appearance')
- [MultiView - Switch Between Views](/concepts/05%20Widgets/MultiView/10%20Switch%20Between%20Views.md '/Documentation/Guide/Widgets/MultiView/Switch_Between_Views')
- [MultiView - Loop the Views](/concepts/05%20Widgets/MultiView/15%20Loop%20the%20Views.md '/Documentation/Guide/Widgets/MultiView/Loop_the_Views')
- [MultiView API Reference](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/')

[tags]multi view, multiView, collection container, collection widget, navigation, overview