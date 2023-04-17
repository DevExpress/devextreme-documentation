---
uid: common/grids:StateStoring
isType: 
---
---
##### shortDescription
Configures state storing.

---
<!--
State storing enables the UI component to save applied settings and restore them the next time the UI component is loaded. Assign **true** to the **stateStoring**.[enabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/stateStoring/enabled.md '{basewidgetpath}/Configuration/stateStoring/#enabled') property to enable this functionality.

State storing saves the following properties:

&lt;table class="multicolumn-list"&gt;
    &lt;tr&gt;
        &lt;td&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="{basewidgetpath}/Configuration/#filterValue"&gt;filterValue&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="{basewidgetpath}/Configuration/#focusedRowKey"&gt;focusedRowKey&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="{basewidgetpath}/Configuration/#selectedRowKeys"&gt;selectedRowKeys&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="{basewidgetpath}/Configuration/#selectionFilter"&gt;selectionFilter&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;filterPanel&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/filterPanel/#filterEnabled"&gt;filterEnabled&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;paging&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/paging/#pageSize"&gt;pageSize&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;paging&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/paging/#pageIndex"&gt;pageIndex&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;searchPanel&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/searchPanel/#text"&gt;text&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/td&gt;
        &lt;td&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#dataField"&gt;dataField&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#dataType"&gt;dataType&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#filterType"&gt;filterType&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#filterValue"&gt;filterValue&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#filterValues"&gt;filterValues&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#fixed"&gt;fixed&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#fixedPosition"&gt;fixedPosition&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#groupIndex"&gt;groupIndex&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt; 
        &lt;/td&gt;
        &lt;td&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#name"&gt;name&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#selectedFilterOperation"&gt;selectedFilterOperation&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#sortIndex"&gt;sortIndex&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#sortOrder"&gt;sortOrder&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#visible"&gt;visible&lt;/a&gt; (only if the &lt;a href="{basewidgetpath}/Configuration/columnChooser/"&gt;column chooser&lt;/a&gt; is &lt;a href="{basewidgetpath}/Configuration/columnChooser/#enabled"&gt;enabled&lt;/a&gt;)&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#visibleIndex"&gt;visibleIndex&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;b&gt;columns&lt;/b&gt;.&lt;a href="{basewidgetpath}/Configuration/columns/#width"&gt;width&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;    

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/StatePersistence/"
}

#####See Also#####
- [state()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/state().md '{basewidgetpath}/Methods/#state')

-->