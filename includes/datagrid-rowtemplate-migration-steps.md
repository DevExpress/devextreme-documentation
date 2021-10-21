1. If `<tbody>` contained custom classes or attributes, use the [onRowPrepared](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowPrepared) to add them to the **dataRowTemplate**.

1. If you implemented custom row alternation logic, you can remove it and set the [rowAlternationEnabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#rowAlternationEnabled) property to **true**.

1. If you implemented custom hover logic, you can remove it. Instead, set the [hoverStateEnabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#hoverStateEnabled) property to **true** and use the `dx-state-hover` class to specify custom hover styles.