Angular v16+ features "Angular Signals", a new method to track and respond to changes in page data.

**Signals** are wrappers that listen to changes in page data. You can create two kinds of signals:

* A *writable signal* wraps around a variable and fires when the variable's value changes. You can reference this signal throughout the application to manually overwrite the value of the underlying variable.
* A *computed signal* wraps around other signals and uses internal logic to process their data.

You can respond to signals with **effects**. Effects are functions that run when one or more signals fire.

If you want to integrate this capability into your application, you can examine a sample DevExtreme application with signals and effects.

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/devbox/dx-signals-l5mt79?file=%2Fsrc%2Fapp%2Fapp.component.ts"
}

* The `prefix` signal in the example monitors the state of the "Prefix" dropdown. When the user changes the active option, the corresponding `effect` function filters the list of employees, and selects rows with employees that match the selected prefix.
* The `selectedRows` signal monitors the state of the table and reports changes to the row selection.
* The `selectionMessage` computed signal listens to the `selectedRows` signal. It joins the names of the selected employees into a single string. The table caption includes this string.

[note]

**dxForm**.[formData](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData) does not support signals. To use signals with **formData**, implement one of the following approaches:

- Create a new object bound to a signal and synchronize this object with **formData** in [onFieldDataChanged](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onFieldDataChanged):

        <!-- tab: app.component.html -->
        <dx-form
            [formData]="formData"
            (onFieldDataChanged)="handleFieldDataChanged($event)"
        ></dx-form>

        <!-- tab: app.component.ts -->
        import { Component, signal } from "@angular/core";
        import { DxFormModule, type DxFormTypes } from "devextreme-angular/ui/form";

        // ...
        export class AppComponent {
            formData = { firstName: "John", lastName: "Doe", age: 30 };
            formDataSignal = signal({ ...this.formData });
            handleFieldDataChanged(e: DxFormTypes.FieldDataChangedEvent): void {
                if (!e.dataField) return;
                this.formDataSignal.set({ ...this.formData });
            }
        }


- Configure item [templates](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template) for all dxForm fields and bind signals to each component's **value** property:

        <!-- tab: app.component.html -->
        <dx-form>
            <dxi-form-item itemType="simple" dataField="firstName">
                <div *dxTemplate>
                    <dx-text-box
                        [value]="formDataSignal().firstName"
                        (onValueChanged)="updateField('firstName', $event.value)"
                    ></dx-text-box>
                </div>
            </dxi-form-item>
            <dxi-form-item itemType="simple" dataField="lastName">
                <div *dxTemplate>
                    <dx-text-box
                        [value]="formDataSignal().lastName"
                        (onValueChanged)="updateField('lastName', $event.value)"
                    ></dx-text-box>
                </div>
            </dxi-form-item>
            <dxi-form-item itemType="simple" dataField="age">
                <div *dxTemplate>
                    <dx-number-box
                        [value]="formDataSignal().age"
                        (onValueChanged)="updateField('age', $event.value)"
                    ></dx-number-box>
                </div>
            </dxi-form-item>
        </dx-form>

        <!-- tab: app.component.ts -->
        import { Component, signal } from "@angular/core";

        // ...
        export class AppComponent {
            formDataSignal = signal({ firstName: "John", lastName: "Doe", age: 30 });
            updateField(field: string, value: any) {
                this.formDataSignal.update((d) => ({ ...d, [field]: value }));
            }
        }

[/note]

[tags] angular