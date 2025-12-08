This tutorial illustrates how to customize the Chat's empty view. The following live example demonstrates the result:

<div class="simulator-desktop-container" data-view="/Content/Applications/25_2/UIWidgets/Chat/EmptyView/index.html, /Content/Applications/25_2/UIWidgets/Chat/EmptyView/index.js, /Content/Applications/25_2/UIWidgets/Chat/EmptyView/index.css" style="border-radius: 20px;"></div>

To implement custom markup for the Chat's empty view, specify the [emptyViewTemplate](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/emptyViewTemplate.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#emptyViewTemplate') property. This tutorial defines an empty view container that includes a title and subtitle, as well as integrates the DevExtreme [TileView](/concepts/05%20UI%20Components/TileView/00%20Overview.md '/Documentation/Guide/UI_Components/TileView/Overview/') component:

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

    <div class="demo-viewport">
        <dx-chat ...
            emptyViewTemplate="emptyView"
        >
            <div *dxTemplate="let data of 'emptyView'">
                <div class="empty-view-titlebox">
                    <div class="empty-view-title">How can HR Assistant help you today?</div>
                    <div class="empty-view-subtitle">{{ data.texts.message }}</div>
                </div>
                <dx-tile-view ... >
                    <!-- ... -->
                </dx-tile-view>
            </div>
        </dx-chat>
    </div>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxChat ...
        empty-view-template="emptyView"
    >
        <template #emptyView="{ data }">
            <div class="empty-view-titlebox">
                <div class="empty-view-title">How can HR Assistant help you today?</div>
                <div class="empty-view-subtitle">{{ data.texts.message }}</div>
            </div>
            <DxTileView ... >
                <!-- ... -->
            </DxTileView>
        </template>
    </DxChat>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DxChat from 'devextreme-vue/chat';
    import DxTileView from 'devextreme-vue/tile-view';

    // ...
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import Chat from 'devextreme-react/chat';
    import TileView from 'devextreme-react/tile-view';

    function renderEmptyView(data: { texts: { message: string } }): JSX.Element {
        return (
            <React.Fragment>
                <div className="empty-view-titlebox">
                    <div className="empty-view-title">How can HR Assistant help you today?</div>
                    <div className="empty-view-subtitle">{data.texts.message}</div>
                </div>
                <TileView ... />
            </React.Fragment>
        );
    }

    function App(): JSX.Element {
        return (
            <div className="demo-container">
                <Chat ...
                    emptyViewRender={renderEmptyView}
                />
            </div>
        );
    }

---

To view the full source code of this tutorial, refer to the following example:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-chat-empty-view-customization9"
}

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

Chat localizes these texts following your application locale. For more information about DevExtreme localization, refer to the following topic: [Localization](/concepts/Common/Localization '/Documentation/Guide/Common/Localization/').

### Customize Chat when Empty View is Displayed

You can implement customizations outside of the empty view container and display them only when the empty view is active. For instance, to implement a custom Chat background color when the empty view is active, implement the [:has()](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) CSS pseudo-class:

    <!-- tab: index.css -->
    #chat:has(.dx-chat-messagelist-empty-view) {
        background-color: #D8E9FF;
    }