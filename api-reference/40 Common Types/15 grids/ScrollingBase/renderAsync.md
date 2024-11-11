---
uid: common/grids:ScrollingBase.renderAsync
type: Boolean | undefined
default: undefined
---
---
##### shortDescription
Specifies whether to render rows after a user stops scrolling or at the same time as the user scrolls the {WidgetName}.

---
<!--
This property can have one of the following values:

&lt;table class="dx-table"&gt;
    &lt;tr&gt;
        &lt;th&gt;scrolling.renderAsync&lt;/th&gt;
        &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;b&gt;true&lt;/b&gt;&lt;/td&gt;
        &lt;td&gt;
            Rows are rendered &lt;i&gt;after&lt;/i&gt; a user stops scrolling.&lt;br&gt;
            In this mode, row content may take time to appear, but scrolling is smoother.
        &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;b&gt;false&lt;/b&gt;&lt;/td&gt;
        &lt;td&gt;
            Rows are rendered &lt;i&gt;at the same time&lt;/i&gt; as the user scrolls the {WidgetName}.&lt;br&gt;
            In this mode, row content is displayed quicker, but the component performance during scrolling may be lowered.
        &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;&lt;b&gt;undefined&lt;/b&gt;&lt;/td&gt;
        &lt;td&gt;The mode is defined automatically based on the row content.&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;

-->