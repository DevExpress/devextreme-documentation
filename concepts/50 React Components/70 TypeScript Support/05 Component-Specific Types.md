To import component-specific types, use the `ComponentTypes` declaration where `Component` is the component name:

    <!-- tab: App.tsx -->
    import DateBox, { DateBoxTypes } from "devextreme-react/date-box";

    const dateType: DateBoxTypes.DateType = "datetime";

    function App() {
        return (
            <DateBox type={dateType} />
        );
    }
    </script>

You can also [import component-specific types](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/) from `devextreme/ui` package.