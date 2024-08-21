Each component has event types that define arguments for handling events. Naming convention is the following: the argument type of the `contentReady` event handler is `ContentReadyEvent`.

Event types are based on common parts:

    export type AppointmentClickEvent = Cancelable & NativeEventInfo<dxScheduler, KeyboardEvent | MouseEvent | PointerEvent> & TargetedAppointmentInfo & {
        readonly appointmentElement: DxElement;
    };

### Common Event Parts

Events are [intersection types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types) built up from common and specific parts:

    export type AppointmentTooltipShowingEvent = Cancelable & EventInfo<dxScheduler> & {
        readonly targetElement: DxElement;
        readonly appointments: AppointmentTooltipShowingAppointmentInfo[];
    };

    export type CellContextMenuEvent = NativeEventInfo<dxScheduler, MouseEvent | PointerEvent | TouchEvent> & {
        readonly cellData: any;
        readonly cellElement: DxElement;
    };