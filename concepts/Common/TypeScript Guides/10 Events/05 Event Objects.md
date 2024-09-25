Each component has event types that define arguments for handling events. Naming convention is the following: the argument type of the `contentReady` event handler is `ContentReadyEvent`.

Events are unions built up from [common and specific parts](/Documentation/Guide/Common/TypeScript_Guides/Syntax_Elements/#Writable_Fields) (to simplify reading them):

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