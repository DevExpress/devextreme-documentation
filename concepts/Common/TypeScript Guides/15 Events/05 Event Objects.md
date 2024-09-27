DevExtreme components define types that supply event argument data. Naming convention is the following: the argument type of the `contentReady` event handler is `ContentReadyEvent`.

Event objects are unions created from [basic event types](/Documentation/Guide/Common/TypeScript_Guides/Events/#Event_Object_Parts). This improves the readability of event definitions:

    export type AppointmentTooltipShowingEvent = Cancelable & EventInfo<dxScheduler> & {
        readonly targetElement: DxElement;
        readonly appointments: AppointmentTooltipShowingAppointmentInfo[];
    };

    export type CellContextMenuEvent = NativeEventInfo<dxScheduler, MouseEvent | PointerEvent | TouchEvent> & {
        readonly cellData: any;
        readonly cellElement: DxElement;
    };

The example above reads as follows:

**AppointmentTooltipShowing** is a synthetic event which can be cancelled. The event object contains common synthetic event fields and 2 extra fields: **targetElement** and **appointments**.

**CellContextMenu** is a common native event which cannot be cancelled. The event object contains common native event fields and 2 extra fields: **cellData** and **cellElement**. Underlying native event may be a MouseEvent, PointerEvent, or TouchEvent.