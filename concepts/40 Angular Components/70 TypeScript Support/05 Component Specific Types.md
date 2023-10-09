To get component-specific types, import the `DxComponentTypes` declaration where `Component` is the component name:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDateBoxTypes } from 'devextreme-angular/ui/date-box';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        dateType: DxDateBoxTypes.DateType = "datetime";
    }

    <!-- tab: app.component.html -->
    <dx-date-box ...
        [type]="dateType"
    >
    </dx-date-box>

If you need the same type for multiple components, you can also import this type from `common` submodule:

    <!-- tab: app.component.ts -->
    // In the sample below, ValidationRule is imported for each component:

    import { Component } from '@angular/core';
    import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
    import { DxFormTypes } from 'devextreme-angular/ui/form';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        dataGridValidationRule: DxDataGridTypes.ValidationRule;
        formValidationRule: DxFormTypes.ValidationRule;
    }
    
    // In the sample below, ValidationRule is imported from the common submodule:

    import { Component } from '@angular/core';
    import { ValidationRule } from 'devextreme/common';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent {
        dataGridValidationRule: ValidationRule;
        formValidationRule: ValidationRule;
    }