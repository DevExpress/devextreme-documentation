Opening popups using [services](https://angular.dev/guide/di/creating-injectable-service) is a common practice in Angular libraries. DevExtreme Popup allows you to use `DxPopupService` to initiate popups directly from .ts files without involving any template code.

`DxPopupService` is imported from `'devextreme-angular/ui/popup'` and functions as a typical Angular service. The service has one method, `open`, which takes two arguments:

1. The component class to be used as the content of the popup.
2. The popup configuration, which includes [properties](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/) of the Popup component.

The `open` method returns an object of the `DxPopupServiceComponent` type. This type is similar to `DxPopupComponent` but includes a `contentRef` property. Use `contentRef.instance` to access the instance of the component set as the popup content.

---
##### Angular

    <!-- tab: app.component.ts -->
    export class AppComponent {
        employees: Employee[];

        constructor(
            employeeService: EmployeeService,
            private popupService: DxPopupService
        ) {
            this.employees = employeeService.getEmployees();
        }

        showInfo(employee: Employee) {
            const popupRef = this.popupService.open(EmployeeInfoComponent, {
                showTitle: true,
                title: 'Information',
                container: 'html',
                width: 300,
                showCloseButton: true,
            });

            popupRef.contentRef.instance.currentEmployee = employee;
        }
    }

    <!-- tab: employee-info.component.ts -->
    import { Component, Input } from '@angular/core';
    @Component({
        standalone: true,
        selector: '',
        template: `<div>
        <p>
            Full Name:
            <span>
            {{ currentEmployee['FirstName'] }}
            {{ currentEmployee['LastName'] }}
            </span>
        </p>
        <p>
            Birth Date:
            <span>{{ currentEmployee['BirthDate'] }}</span>
        </p>
        <p>
            Address:
            <span>{{ currentEmployee['Address'] }}</span>
        </p>
        <p>
            Hire Date:
            <span>{{ currentEmployee['HireDate'] }}</span>
        </p>
        <p>
            Position:
            <span>{{ currentEmployee['Position'] }}</span>
        </p>
    </div>`,
    })

    export class EmployeeInfoComponent {
        @Input() currentEmployee: Record<string, any> = {};
    }

---

[tags] angular