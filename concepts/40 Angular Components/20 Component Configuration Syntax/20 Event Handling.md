    <!-- tab: app.component.html -->
    <dx-button
        text="OK"
        (onClick)="okClicked($event)">
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxButtonModule, type DxButtonTypes } from 'devextreme-angular/ui/button';
    import notify from 'devextreme/ui/notify';

    @Component({
        // ...
        standalone: true,
        imports: [DxButtonModule]
    })
    export class AppComponent {
        okClicked(e: DxButtonTypes.ClickEvent) {
            notify('The OK button was clicked');
        }
    }

In nested components, the `()` syntax cannot be used. Use the `[]` syntax instead:

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxi-data-grid-column type="buttons">
            <dxi-data-grid-button
                [onClick]="okClicked">
            </dxi-data-grid-button>
        </dxi-data-grid-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule, type DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
    import notify from 'devextreme/ui/notify';

    @Component({
        // ...
        standalone: true,
        imports: [DxDataGridModule]
    })
    export class AppComponent {
        okClicked = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
            notify('The OK button was clicked');
        };
    }

#include ng-zoneless-callbacks-note