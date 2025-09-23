This tutorial illustrates how to customize the Chat empty view. The following live example demonstrates the result:

<div class="simulator-desktop-container" data-view="/Content/Applications/25_2/UIWidgets/Chat/EmptyView/index.html, /Content/Applications/25_2/UIWidgets/Chat/EmptyView/index.js, /Content/Applications/25_2/UIWidgets/Chat/EmptyView/index.css" style="height: 520px;"></div>

To implement custom markup for the Chat empty view, specify the [emptyViewTemplate]() property. This tutorial defines an empty view container that includes a title and subtitle, as well as integrates the DevExtreme [TileView]() component:

---

##### jQuery

    <!-- tab: index.js -->
    $("#chat").dxChat({
        emptyViewTemplate: (data, element) => {
            const $container = $("<div>").addClass('empty-view-container').css({'width': '100%', 'height': '100%'});

            $container.append(
                $('<div>').addClass("empty-view-titlebox").append(
                    $('<div>').addClass("empty-view-title").text("How can HR Assistant help you today?"),
                    $('<div>').addClass("empty-view-subtitle").text(data.texts.message),
                ),
                $('<div>').attr('id', 'tile-view-container').dxTileView({
                    // ...
                }),
            );

            return $container;
        },
    });

##### Angular

##### Vue

##### React

---

This tutorial also implements the **texts**.**message** variable defined in the **emptyViewTemplate** parameter. The **texts** object includes the following variables:

<table class="dx-table">
    <tr>
        <th>Variable</th>
        <th>Value</th>
    </tr>
    <tr>
        <td><b>message</b></td>
        <td>"There are no messages in this chat"</td>
    </tr>
    <tr>
        <td><b>prompt</b></td>
        <td>"Write your first message"</td>
    </tr>
</table>

Chat localizes these texts following your application locale. For more information about DevExtreme localization, refer to the following topic: [Localization](/Documentation/Guide/Common/Localization/).

### Customize Chat when Empty View is Displayed

You can implement customizations outside of the empty view container and display them only when the empty view is active. For instance, to implement a custom Chat background color when the empty view is active, add the [:has()](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) pseudo-class to your CSS selector:

    <!-- tab: index.css -->
    #chat:has(.dx-chat-messagelist-empty-view) {
        background-color: #D8E9FF;
    }