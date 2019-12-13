Angular activates change detection on each option change. This approach backfires when you try to pass functions to widget options that do not accept them. For example:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        template: `
            <dx-data-grid
                [columns]="getColumns()">
            </dx-data-grid>
        `,
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        getColumns() {
            return [
                { dataField: "firstName" },
                { dataField: "lastName" }
            ];
        }
    }

In the code above, the `getColumns()` function returns an array of objects, but this array is created from scratch each time the function is called. This is what happens when you run this code:

1. The `getColumns()` function returns an array.
1. The array gets assigned to the `columns` option. This activates change detection.
1. When comparing the old and new `columns` values, the change detection mechanism calls `getColumns()` again and receives a different array.
1. The array gets assigned to the `columns` option, and the cycle repeats infinitely.

To workaround this behavior, do one of the following:

- Return an object reference, not a new object, from the function:

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            selector: 'app-root',
            template: `
                <dx-data-grid
                    [columns]="getColumns()">
                </dx-data-grid>
            `,
            styleUrls: ['./app.component.css']
        })
        export class AppComponent {
            _columns: [
                { dataField: "firstName" },
                { dataField: "lastName" }
            ];
            getColumns() {
                return this._columns;
            }
        }

- Switch change detection to the `OnPush` mode:

        <!-- tab: app.component.ts -->
        import { Component, ChangeDetectionStrategy } from '@angular/core';

        @Component({
            // ...
            changeDetection: ChangeDetectionStrategy.OnPush
        })
        // ...
