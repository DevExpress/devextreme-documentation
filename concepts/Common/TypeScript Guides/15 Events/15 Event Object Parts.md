Most event arguments have a core part, either `EventInfo` or `NativeEventInfo`. These types may include [conditional elements](/concepts/Common/TypeScript%20Guides/90%20Syntax%20Elements/90%20Conditional%20Types.md '/Documentation/Guide/Common/TypeScript_Guides/Syntax_Elements/#Conditional_Types') for integration with third-party libraries.

<table class="dx-table">
    <tr>
        <th>Event part</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/Common_Types/events/EventInfo/">EventInfo</a></td>
        <td><code>EventInfo</code> is used for synthetic events.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/Common_Types/events/NativeEventInfo/">NativeEventInfo</a></td>
        <td><code>NativeEventInfo</code> is used for browser events.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/Common_Types/events/ItemInfo/">ItemInfo</a></td>
        <td>Events involving collection items include an <code>ItemInfo</code> part.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/Common_Types/events/ChangedOptionInfo/">ChangedOptionInfo</a></td>
        <td><code>OptionChanged</code> event objects include <code>ChangedOptionInfo</code>.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/Common_Types/events/InitializedEventInfo/">InitializedEventInfo</a></td>
        <td>Events involving initialization use <code>InitializedEventInfo</code>.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/Common_Types/events/Cancelable/">Cancelable</a></td>
        <td>If an event argument type includes <code>Cancelable</code>, the event can be canceled by setting the <code>cancel</code> property.</td>
    </tr>
</table>