Angular activates change detection on each property change. This approach backfires when you try to pass functions to UI component properties that do not accept them. For example:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
 
    enum GridColumnsOption {
        PersonalDetails = 0,
        JobDetails = 1,
    }

    @Component({
        selector: 'app-component',
        template: `
            <dx-data-grid
                [columns]="getColumns(columnsOption)">
            </dx-data-grid>
        `,
    })

    export class AppComponent {
        columnsOption = GridColumnsOption.PersonalDetails;
        
        getColumns(option: GridColumnsOption): string[] {
            switch (option) {
                case GridColumnsOption.PersonalDetails:
                    return [
                        'name',
                        'address',
                        'phone',
                    ];
                case GridColumnsOption.JobDetails:
                    return [
                        'name',
                        'position',
                        'salary',
                    ];
                default:
                    return [];
            }
        }
    }

In the code above, the `getColumns()` function returns an array of objects, but this array is created from scratch each time the function is called. This is what happens when you run this code:

1. The `getColumns()` function returns an array.
2. The array gets assigned to the `columns` property. This activates change detection.
3. When comparing the old and new `columns` values, the change detection mechanism calls `getColumns()` again and receives a different array.
4. The array gets assigned to the `columns` property, and the cycle repeats infinitely.

To workaround this behavior, implement one of the following approaches:

**Use a component’s class field instead of a method.**

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    enum GridColumnsOption {
        PersonalDetails = 0,
        JobDetails = 1,
    }

    @Component({
        selector: 'app-component',
        template: `
            <dx-data-grid
                [columns]="columns[columnsOption]">
            </dx-data-grid>
        `,
    })

    export class AppComponent {
        columnsOption = GridColumnsOption.PersonalDetails;
        
        columns = {
            [GridColumnsOption.PersonalDetails]: [
                'name',
                'address',
                'phone',
            ],
            [GridColumnsOption.JobDetails]: [
                'name',
                'position',
                'salary',
            ],
        };
    }

**Rewrite a component’s class method to the custom [Angular pipe](https://angular.io/guide/pipes-custom-data-trans).**

    <!-- tab: app.component.ts -->
    import { 
        Component,
        Pipe,
        PipeTransform,
    } from '@angular/core';

    enum GridColumnsOption {
        PersonalDetails = 0,
        JobDetails = 1,
    }

    @Pipe({name: 'columnsPipe'})
    export class ExponentialStrengthPipe implements PipeTransform {
        transform(columnsOption: GridColumnsOption): string[] {
            switch (option) {
                case GridColumnsOption.PersonalDetails:
                    return [
                        'name',
                        'address',
                        'phone',
                    ];
                case GridColumnsOption.JobDetails:
                    return [
                        'name',
                        'position',
                        'salary',
                    ];
                default:
                    return [];
            }
        }
    }

    @Component({
        selector: 'app-component',
        template: `
            <dx-data-grid
                [columns]="columnsOption | columnsPipe">
            </dx-data-grid>
        `,
    })
    export class AppComponent {
        columnsOption = GridColumnsOption.PersonalDetails;
    } 

**Cache a returned value of the component’s method (for example, you can use universal apply pipe).** 

        <!-- tab: app.component.ts -->
        import { 
            Component,
            Pipe,
            PipeTransform, 
        } from '@angular/core';
        
        enum GridColumnsOption {
            PersonalDetails = 0,
            JobDetails = 1,
        }

        @Pipe({ name: 'apply' })
        export class ApplyPipe<TArgs, TReturn> implements PipeTransform {
            transform(func: ((...args: TArgs[]) => TReturn), ...args: TArgs[]): TReturn { return func(...args); }
        }

        @Component({
            selector: 'app-component',
            template: `
                <dx-data-grid
                    [columns]="getColumns | apply: columnsOption">
                </dx-data-grid>
            `,
        })
        export class AppComponent {
            columnsOption = GridColumnsOption.PersonalDetails;
            
            getColumns = (option: GridColumnsOption): string[] => {
                switch (option) {
                    case GridColumnsOption.PersonalDetails:
                        return [
                            'name',
                            'address',
                            'phone',
                        ];
                    case GridColumnsOption.JobDetails:
                        return [
                            'firstName',
                            'position',
                            'salary',
                        ];
                    default:
                        return [];
                }
            }
        }

[note]We recommend you to use an arrow function with this approach.
