To get component-specific types, import the `ComponentTypes` declaration where `Component` is the component name:

    <!-- tab: App.tsx -->
    import DateBox, { DateBoxTypes } from 'devextreme-react/date-box';

    const dateType: DateBoxTypes.DateType = 'datetime';

    function App() {
        return (
            <DateBox type={dateType} />
        );
    }
    </script>

If you need the same type for multiple components, you can also import this type from `common` submodule:

    <!-- tab: App.tsx -->
    // In the sample below, ValidationRule is imported for each component:

    import { DataGridTypes } from 'devextreme-react/data-grid';
    import { FormTypes } from 'devextreme-react/form';

    const dataGridValidationRule: DataGridTypes.ValidationRule;
    const formValidationRule: FormTypes.ValidationRule;
    
    // In the sample below, ValidationRule is imported from the common submodule:

    import { ValidationRule } from 'devextreme-react/common';

    const dataGridValidationRule: ValidationRule;
    const formValidationRule: ValidationRule;