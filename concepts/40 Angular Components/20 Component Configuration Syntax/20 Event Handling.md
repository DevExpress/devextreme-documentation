    <!-- tab: app.component.html -->
    <dx-button
        text="OK"
        (onClick)="okClicked($event)">
    </dx-button>

    <!-- tab: app.component.ts -->
    import notify from "devextreme/ui/notify";
    // ...
    export class AppComponent {
        okClicked (e) {
            notify("The OK button was clicked")
        }
    }

To handle events in a nested component, use a different syntax:

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxi-column type="buttons">
            <dxi-button
                [onClick]="okClicked">
            </dxi-button>
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import notify from "devextreme/ui/notify";
    // ...
    export class AppComponent {
        okClicked (e) {
            notify("The OK button was clicked")
        }
    }