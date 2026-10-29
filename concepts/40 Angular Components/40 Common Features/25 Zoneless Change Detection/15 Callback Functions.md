Functions that you pass as property values are called outside Angular event bindings. Examples include the following:

- Event handlers in nested components, such as `[onClick]` in `dxi-data-grid-button`
- Functions in objects, such as **onItemClick** in Chat [suggestions](/Documentation/ApiReference/UI_Components/dxChat/Configuration/#suggestions) or **onClick** in Toolbar item [options](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#options)

In zoneless applications, Angular does not update the view when one of these functions assigns a value to a class field. Store data in a signal:

    <!-- tab: app.component.html -->
    <dx-data-grid [dataSource]="employees">
        <dxi-data-grid-column dataField="fullName"></dxi-data-grid-column>
        <dxi-data-grid-column type="buttons">
            <dxi-data-grid-button
                icon="info"
                [onClick]="showDetails">
            </dxi-data-grid-button>
        </dxi-data-grid-column>
    </dx-data-grid>
    <p>{{ selectedName() }}</p>

    <!-- tab: app.component.ts -->
    import { Component, signal } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';
    import { type DxDataGridTypes } from 'devextreme-angular/ui/data-grid';

    @Component({
        // ...
        standalone: true,
        imports: [DxDataGridModule]
    })
    export class AppComponent {
        employees = [{ fullName: 'John Heart' }, { fullName: 'Samantha Bright' }];
        selectedName = signal('');

        showDetails = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
            this.selectedName.set(e.row?.data.fullName);
        };
    }

Declare these callbacks as arrow functions so that `this` refers to your Angular component. You can also call [markForCheck()](https://angular.dev/api/core/ChangeDetectorRef#markForCheck) in these callbacks instead of storing data in a signal.
