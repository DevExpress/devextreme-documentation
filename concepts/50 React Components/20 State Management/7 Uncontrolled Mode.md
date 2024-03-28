Uncontrolled DevExtreme components maintain and update their own state.

To specify an initial property value in this mode, add the `default` prefix to the property name. In the example below, the `defaultCurrentDate` attribute defines the initial value of the `currentDate` property.

    <!-- tab: App.jsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.compact.css';
    import Scheduler from 'devextreme-react/scheduler';

    const Appointments = [
        {
            text: 'Website Re-Design Plan',
            startDate: new Date(2019, 4, 22, 9, 30),
            endDate: new Date(2019, 4, 22, 11, 30),
        },
        {
            text: 'Book Flights to San Fran for Sales Trip',
            startDate: new Date(2019, 4, 22, 12, 0),
            endDate: new Date(2019, 4, 22, 13, 0),
            allDay: true,
        },
        {
            text: 'Install New Router in Dev Room',
            startDate: new Date(2019, 4, 23, 10, 30),
            endDate: new Date(2019, 4, 23, 16, 30),
        },
    ];

    const App = () => {
        return (
            <Scheduler
            dataSource={Appointments}
            height={600}
            editing={false}
            defaultCurrentDate={new Date(2019, 4, 22)}
            currentDate={new Date(2019, 4, 22)}
            startDayHour={9}
            />
        );
    };

    export default App;