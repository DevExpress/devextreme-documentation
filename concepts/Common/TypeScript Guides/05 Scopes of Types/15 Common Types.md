Each component includes the necessary types under its alias. However, if multiple components use the same type on the same page, it might be unclear which module to import from. In such cases, import the types from the `common` module.

---
##### jQuery

You can find common types under the following aliases:

- DevExpress.common

- DevExpress.common.charts

- DevExpress.common.grids

<!-- ... -->

    const toolbarItemsLocation: DevExpress.common.ToolbarItemLocation;

##### Angular

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
    
    // In the sample below, ValidationRule is imported from the common module:

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

Alternatively, define a union:

    type ValidationRule = DxDataGridTypes.ValidationRule | DxFormTypes.ValidationRule;
    const validationRule: ValidationRule;

##### Vue

    <!-- tab: App.vue -->
    // In the sample below, ValidationRule is imported for each component:

    import { DxDataGridTypes } from 'devextreme-vue/data-grid';
    import { DxFormTypes } from 'devextreme-vue/form';

    const dataGridValidationRule: DxDataGridTypes.ValidationRule;
    const formValidationRule: DxFormTypes.ValidationRule;
    
    // In the sample below, ValidationRule is imported from the common module:

    import { ValidationRule } from 'devextreme-vue/common';

    const dataGridValidationRule: ValidationRule;
    const formValidationRule: ValidationRule;

Alternatively, define a union:

    type ValidationRule = DxDataGridTypes.ValidationRule | DxFormTypes.ValidationRule;
    const validationRule: ValidationRule;

##### React

    // In the sample below, ToolbarItemLocation is imported for each component:

    import { DataGrid, DataGridTypes } from 'devextreme-react/data-grid';
    import { Popup, PopupTypes } from 'devextreme-react/popup';

    const toolbarItemsLocation: DataGridTypes.ToolbarItemLocation = 'center';
    // or
    const toolbarItemsLocation: PopupTypes.ToolbarItemLocation = 'center';

    // In the sample below, ToolbarItemLocation is imported from the common module:

    import { ToolbarItemLocation } from 'devextreme-react/common';
    const toolbarItemsLocation: ToolbarItemLocation;

Alternatively, define a union:

    type ToolbarItemLocation = DataGridTypes.ToolbarItemLocation | PopupTypes.ToolbarItemLocation;
    const toolbarItemsLocation: ToolbarItemLocation = 'center';

---