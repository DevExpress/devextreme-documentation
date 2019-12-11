Default templates are based on data source fields. You can control their appearance by adding or removing particular fields from data source objects. For example, the **List** widget has a [default template for items](/api-reference/10%20UI%20Widgets/dxList/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxList/Default_Item_Template/') that contain the **text**, **visible**, and **disabled** fields. If you assign the following array to the widget's **dataSource** option, all the items have text, the second item is disabled, and the third is invisible:

    <!--JavaScript-->
    var fruits = [
        { text: "Apples" },
        { text: "Oranges", disabled: true },
        { text: "Lemons", visible: false }
    ];

You can achieve the same in the markup using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxItem/') component that supports default and [custom templates](/Documentation/Guide/Widgets/Common/Templates/#In_Collection_Widgets). Do not set the widget's **dataSource** option in this case. This approach is for Angular, AngularJS, and Knockout only.

---
#####Angular

    <!--HTML-->
    <dx-list ... >
        <dxi-item text="Apples"></dxi-item>
        <dxi-item text="Oranges" [disabled]="true"></dxi-item>
        <dxi-item text="Lemons" [visible]="false"></dxi-item>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-list="{ ... }">
            <div data-options="dxItem: { text: 'Apples' }"></div>
            <div data-options="dxItem: { text: 'Oranges', disabled: true }"></div>
            <div data-options="dxItem: { text: 'Lemons', visible: false }"></div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            // ...
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: { ... }">
        <div data-options="dxItem: { text: 'Apples' }"></div>
        <div data-options="dxItem: { text: 'Oranges', disabled: true }"></div>
        <div data-options="dxItem: { text: 'Lemons', visible: false }"></div>
    </div>


    <!--JavaScript-->
    var viewModel = {
        // ...
    };

    ko.applyBindings(viewModel);

---

Default templates and the fields available in them depend on the widget. For a list of default templates for a widget, search for "default template" in the left menu.
