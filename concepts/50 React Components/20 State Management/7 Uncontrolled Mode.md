Uncontrolled DevExtreme components maintain and update their own state.

To specify an initial property value in this mode, add the `default` prefix to property names. The following code snippet defines an initial `currentDate` value using the `defaultCurrentDate` property:

    <!-- tab: App.tsx -->
    import { Scheduler } from 'devextreme-react/scheduler';

    const currentDate = new Date();

    function App() {
        return (
            <Scheduler ...
                defaultCurrentDate={currentDate}
            />
        );
    };
