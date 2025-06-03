DevExtreme editors support [reactive](https://angular.dev/guide/forms/reactive-forms) and [template-driven](https://angular.dev/guide/forms/template-driven-forms) Angular forms.

To implement a reactive form, specify the `formControlName` input:

    <!-- tab: app.component.html -->
    <form [formGroup]="myForm">
        <dx-text-box
            name="email"
            formControlName="email"
            [isValid]="emailControl.valid || emailControl.pristine"
            [validationError]="{ message: "Email is invalid"}">
        </dx-text-box>
    </form>

    <!-- tab: app.component.ts -->
    import { Component, OnInit } from "@angular/core";
    import { FormGroup, FormControl, AbstractControl, Validators } from "@angular/forms";
    // ...
    export class AppComponent implements OnInit {
        email: string;
        emailControl: AbstractControl;
        myForm: FormGroup;
        ngOnInit() {
            this.myForm = new FormGroup({
                email: new FormControl("", Validators.compose([Validators.required, Validators.email]))
            });
            this.emailControl = this.myForm.controls["email"];
        }
    }

    <!-- tab: app.module.ts -->
    // ...
    import { ReactiveFormsModule } from "@angular/forms";
    import { DxTextBoxModule } from "devextreme-angular";

    @NgModule({
        // ...
        imports: [
            // ...
            DxTextBoxModule,
            ReactiveFormsModule
        ]
    })
    export class AppModule { }

To implement a template-driven form, specify the `NgModel` directive. Bind `NgModel` to a [template reference variable](https://angular.dev/guide/templates/variables#template-reference-variables) to utilize the built-in validation functionality of Angular forms.

    <!-- tab: app.component.html -->
    <form>
        <dx-text-box
            name="email"
            email required
            #emailControl="ngModel"
            [(ngModel)]="email"
            [isValid]="emailControl.valid || emailControl.pristine || false"
            [validationError]="{ message: "Email is invalid"}">
        </dx-text-box>
    </form>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        email: string = "";
    }

    <!-- tab: app.module.ts -->
    // ...
    import { FormsModule } from "@angular/forms";
    import { DxTextBoxModule } from "devextreme-angular";

    @NgModule({
        // ...
        imports: [
            // ...
            DxTextBoxModule,
            FormsModule
        ]
    })
    export class AppModule { }

[note] DevExtreme [Validator](/Documentation/ApiReference/UI_Components/dxValidator/) does not support Angular forms. If you implement `NgModel` and `<dx-validator>` within the same DevExtreme component, validation is called on page load due to a known [issue](https://github.com/angular/angular/issues/14988) with the `NgModel` directive. Utilize Angular's built-in validation with Angular forms or implement DevExtreme validation within a DevExtreme [Form](/Documentation/Guide/UI_Components/Form) component.