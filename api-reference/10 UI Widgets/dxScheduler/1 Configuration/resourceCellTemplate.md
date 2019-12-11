---
default: null
type: template
---
---
##### shortDescription
The template to be used for rendering resource headers.

##### param(itemData): object
The resource header object to be rendered.

##### param(itemIndex): number
The index of the resource header to be rendered.

##### param(itemElement): jQuery
An HTML element of the resource header to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
A binding context of a resource template is the data source object that corresponds to the currently rendered resource header.

---

#####Angular

Use a variable that is declared in the template via the `let` keyword to access resource object fields in **Angular** apps. 

    <!--HTML-->
    <dx-scheduler ...
        [groups]="['priorityId']"
        [resources]="resources"
        resourceCellTemplate="resourceTemplate">
        <div *dxTemplate="let resource of 'resourceTemplate'">
            <img [src]="resource.image">
            <div class="resource-header">{{resource.text}}</div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent  { 
        // ...
        priorityData = [
            { text: "Low Priority", image: "img1.png", id: 1, color: "#1e90ff" },
            { text: "High Priority", image: "img2.png", id: 2, color: "#ff9747" }
        ];
        resources = [{ 
            field: "priorityId", 
            allowMultiple: false, 
            dataSource: this.priorityData, 
            label: "Priority" 
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

#####AngularJS#####

In the **AngularJS** apps, if you need to access resource object fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, the fields of resource object are unavailable. To access another binding context within a resource template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

    <!--HTML-->
    <div dx-scheduler="options" dx-item-alias="item">
        <div data-options="dxTemplate: { name: 'resource' }">
            <img src="{{item.image}}">
            <div class="resource-header">{{item.text}}</div>
        </div>
    </div>

    <!--JavaScript-->
    var priorityData = [
        { text: "Low Priority", image: "img1.png", id: 1, color: "#1e90ff" },
        { text: "High Priority", image: "img2.png", id: 2, color: "#ff9747" }
    ];

    var DemoApp = angular.module('DemoApp', ['dx']);
    DemoApp.controller('DemoController', function DemoController($scope) {
        $scope.options = { 
            // ...
            groups: ["priorityId"],
            resources: [{ 
                field: "priorityId", 
                allowMultiple: false, 
                dataSource: priorityData, 
                label: "Priority" 
            }],
            resourceCellTemplate: 'resource'
        };
    });
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scheduler-cell_templates"
}

#####See Also#####
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')