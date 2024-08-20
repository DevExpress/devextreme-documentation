These types configure specific components. Each component has its own set.

**Modular Projects**

To get component-specific types, import the `ComponentTypes` declaration where `Component` is the component name:

    <!-- tab: App.tsx -->
    import DateBox, { DateBoxTypes } from 'devextreme-react/date-box';

    const dateType: DateBoxTypes.DateType = 'datetime';

    function App() {
        return (
            <DateBox type={dateType} />
        );
    }

    export default App;

After importing, search through all types using `DateBoxTypes.` without extra imports.

**Non-Modular Projects**

Find component types under the corresponding namespace:

    const dateType: DevExpress.ui.dxDateBox.DateType = 'datetime';
