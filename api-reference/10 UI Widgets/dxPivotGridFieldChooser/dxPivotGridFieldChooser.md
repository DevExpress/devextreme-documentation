---
module: ui/pivot_grid_field_chooser
export: default
inherits: ..\Widget\Widget.md
---
---
##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
A complementary widget for the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') that allows you to manage data displayed in the **PivotGrid**. The field chooser is already integrated in the **PivotGrid** and can be invoked using the context menu. If you need to continuously display the field chooser near the **PivotGrid** widget, use the **PivotGridFieldChooser** widget.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
    });
    $(function () {
        $("#fieldChooser").dxPivotGridFieldChooser({
            dataSource: pivotGridDataSource
        });
        $("#pivotGrid").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });

    <!--HTML--><div id="fieldChooser"></div>
    <div id="pivotGrid"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-pivot-grid-field-chooser [dataSource]="pivotGridDataSource"></dx-pivot-grid-field-chooser>
    <dx-pivot-grid [dataSource]="pivotGridDataSource"></dx-pivot-grid>

    <!--TypeScript-->
    import { DxPivotGridFieldChooserModule } from "devextreme-angular";
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource = new PivotGridDataSource({
            // ...   
        });
    }
    @NgModule({
        imports: [
            // ...
            DxPivotGridFieldChooserModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-pivot-grid-field-chooser="{
            dataSource: pivotGridDataSource
        }"></div>
        <div dx-pivot-grid="{
            dataSource: pivotGridDataSource
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
                // ...   
            });
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxPivotGridFieldChooser: {
        dataSource: pivotGridDataSource
    }"></div>
    <div data-bind="dxPivotGrid: {
        dataSource: pivotGridDataSource  
    }"></div>

    <!--JavaScript-->var viewModel = {
        pivotGridDataSource: new DevExpress.data.PivotGridDataSource({
            // ...
        })
    };
    ko.applyBindings(viewModel);

---

Both the **PivotGridFieldChooser** and the **PivotGrid** must be bound to one and the same instance of the [PivotGridDataSource](/api-reference/30%20Data%20Layer/PivotGridDataSource '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/'). Create the **PivotGridDataSource** individually and then assign it to both widgets as shown in the code above.

 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridpivotgridpivotgridfieldchooser"
}