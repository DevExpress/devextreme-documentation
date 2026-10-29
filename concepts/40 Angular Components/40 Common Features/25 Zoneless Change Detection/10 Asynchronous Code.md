In zoneless applications, Angular does not update the view when asynchronous code assigns values to class fields (for example, in timers, promises, `fetch` requests, or third-party library callbacks). Store these values in signals:

    <!-- tab: app.component.html -->
    <dx-list [dataSource]="tasks()"></dx-list>

    <!-- tab: app.component.ts -->
    import { Component, signal } from '@angular/core';
    import { DxListModule } from 'devextreme-angular';

    @Component({
        // ...
        standalone: true,
        imports: [DxListModule]
    })
    export class AppComponent {
        tasks = signal<string[]>([]);

        constructor() {
            fetch('https://example.com/api/tasks')
                .then((response) => response.json())
                .then((tasks: string[]) => this.tasks.set(tasks));
        }
    }

If asynchronous code changes a bound array or its items in place, the component does not receive the change. Pass a new array to the signal's `set()` or `update()` method instead.

You can also call [markForCheck()](https://angular.dev/api/core/ChangeDetectorRef#markForCheck) after the change.
