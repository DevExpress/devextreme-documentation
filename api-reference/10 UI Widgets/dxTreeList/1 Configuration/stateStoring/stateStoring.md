---
##### merge

---
State storing enables the widget to save applied settings and restore them the next time the widget is loaded. Assign **true** to the **stateStoring**.[enabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring/enabled.md '{basewidgetpath}/Configuration/stateStoring/#enabled') option to enable this functionality.

State storing saves the following options:

<table class="multicolumn-list">
    <tr>
        <td>
            <ul>
                <li><a href="{basewidgetpath}/Configuration/#focusedRowKey">focusedRowKey</a></li>
                <li><a href="{basewidgetpath}/Configuration/#filterValue">filterValue</a></li>
                <li><a href="{basewidgetpath}/Configuration/#selectedRowKeys">selectedRowKeys</a></li>
                <li><b>searchPanel</b>.<a href="{basewidgetpath}/Configuration/searchPanel/#text">text</a></li>
                <li><b>filterPanel</b>.<a href="{basewidgetpath}/Configuration/filterPanel/#filterEnabled">filterEnabled</a></li>
                <li><b>paging</b>.<a href="{basewidgetpath}/Configuration/paging/#pageSize">pageSize</a></li>
                <li><b>paging</b>.<a href="{basewidgetpath}/Configuration/paging/#pageIndex">pageIndex</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#fixedPosition">fixedPosition</a></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#visibleIndex">visibleIndex</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#dataField">dataField</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#name">name</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#dataType">dataType</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#width">width</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#visible">visible</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#sortOrder">sortOrder</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#sortIndex">sortIndex</a></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#filterValue">filterValue</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#selectedFilterOperation">selectedFilterOperation</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#filterValues">filterValues</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#filterType">filterType</a></li>
                <li><b>columns</b>.<a href="{basewidgetpath}/Configuration/columns/#fixed">fixed</a></li>
            </ul>
        </td>
    </tr>
</table>  

[note] The expanded row keys are not saved if the [autoExpandAll](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/autoExpandAll.md '{basewidgetpath}/Configuration/#autoExpandAll') is set to **true**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/StatePersistence/"
}

#####See Also#####
- [state()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/state().md '{basewidgetpath}/Methods/#state')