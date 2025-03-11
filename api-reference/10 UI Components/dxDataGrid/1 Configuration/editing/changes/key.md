The **key** property supports both simple and composite keys.

    <!-- tab: JavaScript -->changes.push({
        type: 'update',
        data: { FirstName : 'name1', LastName: 'name2' }

        key: 1 // simple key
        // or ...
        key: {ID: 1, SecondID: 2} // composite key
    });

[important] In batch [editing mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode), the "insert" operation generates a temporary GUID-like key that starts with the `_DX_KEY_` prefix. Avoid basing application logic on this key.