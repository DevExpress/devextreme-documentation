---
default: 'item'
type: template
---
---
##### shortDescription
Specifies a custom template for an appointment.

##### param(itemData): object
The appointment object to be rendered.

##### param(itemIndex): number
The index of the appointment to be rendered.

##### param(itemElement): jQuery
An HTML element of the appointment to be rendered.

##### return: string|Node|jQuery
A template name or container.

---
If you use the Angular, AngularJS or Knockout library, you can implement this template with the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. This template's binding context depends on the library you use.

---

#####Angular#####

In Angular apps, an item's object and index extend the standard binding context (a component instance). Access the former using the input variable that is declared after the `let` and before `of` keywords, and the latter by the variable that is set to the `index` property.

    <!--HTML-->
    <dx-scheduler ...
        [views]="views">
        <div *dxTemplate="let appointment of 'appointmentTemplate'; let i = index">
            <div class="appointment-header">[{{i}}] {{appointment.text}}</div>
            <div class="appointment-time">{{appointment.startDate}} - {{appointment.endDate}}</div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  { 
        // ...
        views = [
            "day",
            { type: "workWeek", appointmentTemplate: "appointmentTemplate" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })


#####AngularJS#####

In AngularJS apps, an item's object and index extend the standard binding context (the scope). Access the former using an alias that you specify in the `dx-item-alias` directive, and the latter the `$index` variable. Use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables if you need to access another binding context from the template.

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-scheduler="{ 
            ...
            views: views
        }" dx-item-alias="appItem">
            <div data-options="dxTemplate: { name: 'appointmentTemplate' }" style="padding: 0;">
                <div class="appointment-header">{{appItem.text}}</div>
                <div class="appointment-time">{{appItem.startDate}} - {{appItem.endDate}}</div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    var DemoApp = angular.module('DemoApp', ['dx']);
    DemoApp.controller('DemoController', function DemoController($scope) {
        // ...
        $scope.views = [
            "day",
            { type: "workWeek", appointmentTemplate: "appointmentTemplate" }
        ];
    });

---

#####See Also#####
- [Angular - Custom Templates](https://github.com/DevExpress/devextreme-angular#custom-templates)
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')