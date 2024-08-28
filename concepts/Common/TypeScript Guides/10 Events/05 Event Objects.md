Each component has event types that define arguments for handling events. Naming convention is the following: the argument type of the `contentReady` event handler is `ContentReadyEvent`.

Events are unions built up from common and specific parts (to simplify reading them):

    export type AppointmentTooltipShowingEvent = Cancelable & EventInfo<dxScheduler> & {
        readonly targetElement: DxElement;
        readonly appointments: AppointmentTooltipShowingAppointmentInfo[];
    };

    export type CellContextMenuEvent = NativeEventInfo<dxScheduler, MouseEvent | PointerEvent | TouchEvent> & {
        readonly cellData: any;
        readonly cellElement: DxElement;
    };

The example above reads as follows:

*The **AppointmentTooltipShowing** event object is a common synthetic event object. It is cancelable and includes **targetElement** and **appointments**.*

*The **CellContextMenu** event object is a common native event. It is not cancelable, and native event may be a **MouseEvent**, **PointerEvent**, or **TouchEvent**. It includes **cellData** and **cellElement**.*