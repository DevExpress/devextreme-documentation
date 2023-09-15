To get component-specific types, import the `DxComponentTypes` declaration where `Component` is the component name:

    <!-- tab: App.vue -->
    <template>
        <DxDateBox :type="dateType" />
    </template>

    <script setup lang="ts">
    import DxDateBox from "devextreme-vue/date-box";
    import type { DxDateBoxTypes } from "devextreme-vue/date-box";

    const dateType: DxDateBoxTypes.DateType = "datetime";
    </script>

If you need the same type for multiple components, you can also import this type from `common` submodule:

    <!-- tab: App.vue -->
    // In the sample below, ValidationRule is imported for each component:

    import { DxDataGridTypes } from 'devextreme-vue/data-grid';
    import { DxFormTypes } from 'devextreme-vue/form';

    const dataGridValidationRule: DxDataGridTypes.ValidationRule;
    const formValidationRule: DxFormTypes.ValidationRule;
    
    // In the sample below, ValidationRule is imported from the common submodule:

    import { ValidationRule } from 'devextreme-vue/common';

    const dataGridValidationRule: ValidationRule;
    const formValidationRule: ValidationRule;