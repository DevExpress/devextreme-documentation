---
id: dxPivotGridFieldChooser.Options.state
type: Object
default: null
---
---
##### shortDescription
The widget's state.

---
The state includes field configurations, expanded headers, and other settings. The following code shows how to use the state to cancel or apply the settings to the **PivotGrid** widget:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
        });
        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource,
            // ...
        });
        var fieldChooser = $("#fieldChooserContainer").dxPivotGridFieldChooser({
            dataSource: pivotGridDataSource,
            applyChangesMode: "onDemand",
            // ...
        }).dxPivotGridFieldChooser("instance");
        $("#apply").dxButton({
            text: "Apply Changes",
            onClick: function () {
                var state = fieldChooser.option("state");
                pivotGridDataSource.state(state);
            }
        });
        $("#cancel").dxButton({
            text: "Cancel Changes",
            onClick: function () {
                fieldChooser.option("state", pivotGridDataSource.state();
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import {
        DxPivotGridModule,
        DxPivotGridFieldChooserModule, 
        DxButtonModule
    } from "devextreme-angular";
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: any;
        state: any;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({ ... });
        }
        applyChanges() {
            this.pivotGridDataSource.state(this.state);
        }
        cancelChanges() {
            this.state = this.pivotGridDataSource.state();
        }
    }
    @NgModule({
        imports: [
            DxPivotGridModule,
            DxPivotGridFieldChooserModule,
            DxButtonModule,
            // ...
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        ...
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>
    <dx-pivot-grid-field-chooser 
        ...
        [dataSource]="pivotGridDataSource"
        applyChangesMode="onDemand"
        [(state)]="state">
    </dx-pivot-grid-field-chooser>
    <dx-button
        text="Apply Changes"
        (onClick)="applyChanges()">
    </dx-button>
    <dx-button
        text="Cancel Changes"
        (onClick)="cancelChanges()">
    </dx-button>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StandaloneFieldChooser/"
}

#####See Also#####
- [applyChanges()](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser/3%20Methods/applyChanges().md '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Methods/#applyChanges')
- [cancelChanges()](/api-reference/10%20UI%20Widgets/dxPivotGridFieldChooser/3%20Methods/cancelChanges().md '/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Methods/#cancelChanges')
- [PivotGridDataSource - state()](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/state().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#state')