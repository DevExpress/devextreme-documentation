**ItemInfo**

Events involving collection items include an `ItemInfo` part.

**ChangedOptionInfo**

`OptionChanged` event objects include `ChangedOptionInfo`.

**InitializedEventInfo**

Events involving initialization use `InitializedEventInfo`.

**Cancelable**

If an event argument type includes `Cancelable`, the event can be canceled by setting the `cancel` property:

    const onListDragStart = (e) => {
        e.cancel = true;
    };