---
default: null
type: template
---
---
##### shortDescription
The template to be used for rendering date scale items.

##### param(itemData): object
The currently rendered object that represents a date scale item.

##### param(itemIndex): number
The index of the date scale item to be rendered.

##### param(itemElement): jQuery
An HTML element of the date scale item to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
A binding context of a date template is the object that corresponds to the currently rendered item of the date scale.

---

#####Angular

Use a variable that is declared in the template via the `let` keyword to access day scale item fields in **Angular** apps. 

    <!--HTML-->
    <dx-scheduler ...
        [views]="views">
        <div *dxTemplate="let date of 'dateTemplate'">
            <div class="date">{{date.text}}</div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  { 
        // ...
        views = [
            "day",
            { type: "workWeek", dateCellTemplate: "dateTemplate" }
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

In **AngularJS** apps, if you need to access date scale item fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, object fields are unavailable. To access another binding context within a date scale template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-scheduler="{ 
            ...
            views: views
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'dateTemplate' }">
                <div class="date">{{ item.text }}</div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    var DemoApp = angular.module('DemoApp', ['dx']);
    DemoApp.controller('DemoController', function DemoController($scope) {
        // ...
        $scope.views = [
            "day",
            { type: "workWeek", dateCellTemplate: "dateTemplate" }
        ];
    });

---

[note]There is no **dateCellTemplate** in such views as 'day' and 'timelineDay'.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')