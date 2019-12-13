DevExtreme editors support the `formControlName` directive needed for features of <a href="https://angular.io/guide/reactive-forms" target="_blank">reactive forms</a>...

    <!-- tab: app.component.html -->
    <form [formGroup]="myForm">
        <dx-text-box
            name="email"
            formControlName="email"
            [isValid]="emailControl.valid || emailControl.pristine"
            [validationError]="{ message: 'Email is invalid'}">
        </dx-text-box>
    </form>

    <!-- tab: app.component.ts -->
    import { Component, OnInit } from '@angular/core';
    import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
    // ...
    export class AppComponent implements OnInit {
        email: string;
        emailControl: AbstractControl;
        myForm: FormGroup;
        ngOnInit() {
            this.myForm = new FormGroup({
                email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
            });
            this.emailControl = this.myForm.controls['email'];
        }
    }

    <!-- tab: app.module.ts -->
    // ...
    import { ReactiveFormsModule } from '@angular/forms';
    import { DxTextBoxModule } from 'devextreme-angular';

    @NgModule({
        // ...
        imports: [
            // ...
            DxTextBoxModule,
            ReactiveFormsModule
        ]
    })
    export class AppModule { }

... and `ngModel` binding necessary to use the editors in <a href="https://angular.io/guide/forms" target="_blank">template-driven forms</a>:

    <!-- tab: app.component.html -->
    <form>
        <dx-text-box
            name="email"
            email required
            #emailControl="ngModel"
            [(ngModel)]="email"
            [isValid]="emailControl.valid || emailControl.pristine"
            [validationError]="{ message: 'Email is invalid'}">
        </dx-text-box>
    </form>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        email: string;
    }

    <!-- tab: app.module.ts -->
    // ...
    import { FormsModule } from '@angular/forms';
    import { DxTextBoxModule } from 'devextreme-angular';

    @NgModule({
        // ...
        imports: [
            // ...
            DxTextBoxModule,
            FormsModule
        ]
    })
    export class AppModule { }
