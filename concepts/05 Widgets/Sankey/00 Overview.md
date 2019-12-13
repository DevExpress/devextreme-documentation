The **Sankey** is a widget that visualizes the flow magnitude between value sets. The values are connected. A wider connection denotes a higher flow magnitude.

Start configuring the **Sankey** by binding it to your data source. Refer to the articles in the [Data Binding](/concepts/05%20Widgets/Sankey/03%20Data%20Binding '/Documentation/Guide/Widgets/Sankey/Data_Binding/') section for more information.

Next, get familiar with the widget's elements using the following element map. Hover over an element to see its name or click on it to navigate to its article.

<img src="/Content/images/doc/19_2/Sankey/overview.png" style="display:block;margin-left:auto;margin-right:auto" usemap="#image-map" alt="DevExtreme HTML5 JavaScript Sankey">

<map name="image-map">
    <area target="_blank" alt="Title" title="Title" href="/Documentation/Guide/Widgets/Sankey/Title_and_Subtitle/" coords="352,27,197,0" shape="rect">
    <area target="_blank" alt="Subtitle" title="Subtitle" href="/Documentation/Guide/Widgets/Sankey/Title_and_Subtitle/" coords="331,44,219,27" shape="rect">
    <area target="_blank" alt="Exporting/Printing" title="Exporting/Printing" href="/Documentation/Guide/Widgets/Sankey/Client-Side_Exporting_and_Printing/" coords="515,5,549,39" shape="rect">
    <area target="_blank" alt="Tooltip" title="Tooltip" href="/Documentation/Guide/Widgets/Sankey/Tooltips/Overview/" coords="88,177,223,239" shape="rect">
    <area target="_blank" alt="Node" title="Node" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="1,123,9,56" shape="rect">
    <area target="_blank" alt="Node" title="Node" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="1,153,9,171" shape="rect">
    <area target="_blank" alt="Node" title="Node" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="1,201,9,287" shape="rect">
    <area target="_blank" alt="Node" title="Node" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="551,111,543,56" shape="rect">
    <area target="_blank" alt="Node" title="Node" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="543,141,551,239" shape="rect">
    <area target="_blank" alt="Node" title="Node" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="543,269,551,287" shape="rect">
    <area target="_blank" alt="Node Label" title="Node Label" href="/Documentation/Guide/Widgets/Sankey/Node_Labels/Overview/" coords="16,83,59,96" shape="rect">
    <area target="_blank" alt="Node Label" title="Node Label" href="/Documentation/Guide/Widgets/Sankey/Node_Labels/Overview/" coords="16,156,58,169" shape="rect">
    <area target="_blank" alt="Node Label" title="Node Label" href="/Documentation/Guide/Widgets/Sankey/Node_Labels/Overview/" coords="17,238,56,251" shape="rect">
    <area target="_blank" alt="Node Label" title="Node Label" href="/Documentation/Guide/Widgets/Sankey/Node_Labels/Overview/" coords="495,77,536,91" shape="rect">
    <area target="_blank" alt="Node Label" title="Node Label" href="/Documentation/Guide/Widgets/Sankey/Node_Labels/Overview/" coords="493,183,537,198" shape="rect">
    <area target="_blank" alt="Node Label" title="Node Label" href="/Documentation/Guide/Widgets/Sankey/Node_Labels/Overview/" coords="495,272,537,285" shape="rect">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="9,56,542,80" shape="rect">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="9,81,73,84,138,91,199,99,275,111,338,120,380,127,432,133,467,137,505,139,542,141,542,169,511,169,473,168,424,163,353,153,298,145,220,134,166,125,117,117,86,114,36,111,9,110" shape="poly">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="9,110,41,113,80,121,120,131,162,145,196,158,234,173,274,189,308,205,352,222,386,234,434,251,481,262,518,267,542,269,542,283,486,274,446,264,394,247,353,233,296,210,252,192,205,173,160,155,112,139,66,127,9,121" shape="poly">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="9,153,9,164,64,165,115,167,152,168,187,169,241,171,287,174,319,176,362,178,405,179,442,181,475,182,491,182,541,185,544,175,284,164,137,156" shape="poly">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="9,201,9,231,52,228,88,223,88,195,46,199" shape="poly">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="542,80,542,110,502,112,458,119,431,124,415,128,328,154,303,162,257,177,226,186,222,158,267,143,327,125,376,110,424,99,474,88" shape="poly">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="10,232,10,287,53,285,89,284,127,280,165,275,197,273,244,267,300,260,342,254,382,249,435,244,475,241,506,239,543,238,543,183,476,186,434,189,390,194,343,200,284,206,240,212,172,219,80,227,52,229" shape="poly">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="362,253,386,261,418,269,448,276,473,279,494,282,491,276,450,271,425,266,402,260,371,249" shape="poly">
    <area target="_blank" alt="Link" title="Link" href="/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/" coords="10,170,36,171,58,174,77,176,85,177,92,173,69,169,10,164" shape="poly">
</map>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}

#####See Also#####
- [Sankey API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/')
