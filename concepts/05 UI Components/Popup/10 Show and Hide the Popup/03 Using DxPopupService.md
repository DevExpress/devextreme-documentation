DevExtreme Popup includes a `DxPopupService` that allows you to initiate popups directly from .ts files without template code. The use of [services](https://angular.dev/guide/di/creating-injectable-service) that display popups is a common practice in Angular libraries. 

`DxPopupService` is imported from `'devextreme-angular/ui/popup'` and functions as a typical Angular service. To show a Popup with `DxPopupService`, call the `open` method. The method takes two arguments:

1. The Angular component class to be used as the content of the popup.
2. The popup configuration, which includes [properties](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/') of the Popup component.

The `open` method returns a `DxPopupServiceComponent` object. This type extends `DxPopupComponent` with a `contentRef` property. Use `contentRef.instance` to access the component that serves as popup content.

---
##### Angular

    <!-- tab: app.component.ts -->
    import { DxPopupService } from 'devextreme-angular/ui/popup';
    // ...
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

You can access the Popup instance through `DxPopupServiceComponent`. Call the [hide()](/api-reference/10%20UI%20Components/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Components/dxPopup/Methods/#hide') method to close the Popup programmatically:

---
##### Angular

    <!-- tab: app.component.ts -->
    import { DxPopupService, DxPopupServiceComponent } from 'devextreme-angular/ui/popup';
    // ...
    export class AppComponent {
        employees: Employee[];
        popupRef!: DxPopupServiceComponent;

        constructor(
            employeeService: EmployeeService,
            private popupService: DxPopupService
        ) {
            this.employees = employeeService.getEmployees();
        }

        showInfo(employee: Employee) {
            this.popupRef = this.popupService.open(EmployeeInfoComponent, {
                showTitle: true,
                title: 'Information',
                container: 'html',
                width: 300
            });

            this.popupRef.contentRef.instance.currentEmployee = employee;
        }

        closePopup() {
            this.popupRef.instance.hide();
        }
    }

---

[tags] angular