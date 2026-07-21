---
id: dxCardView.Options.cardHeader
type: CardHeader
inheritsType: CardHeader
---
---
##### shortDescription
Configures the card header.

---
---

##### jQuery

    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        cardHeader: {
            visible: true,
            template: (data, container) => {
                const text = data.card.data.Task_Subject;
                $(container).addClass('task__header-container');
                return $('<div>')
                    .addClass('task__header')
                    .attr('title', text)
                    .text(text);
            },
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view>
        <dxo-card-view-card-header 
            [visible]="true" 
            template="headerTemplate"
        >
        </dxo-card-view-card-header>
        <div *dxTemplate="let model of 'headerTemplate'">
            <card-header [text]="model.card.data.Task_Subject" />
        </div>
    </dx-card-view>

    <!-- tab: card-header.component.html -->
    <div class="header" [title]="text">
        {{ text }}
    </div>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView>
            <DxCardHeader
                :visible="true"
                template="headerTemplate"
            />
            <template #headerTemplate="{
                data: {
                    card: {
                            data: task,
                        }
                    }
                }">
                <HeaderTemplate :text="task.Task_Subject"/>
            </template>
        </DxCardView>
    </template>

    <script setup lang="ts">
    import DxCardView, { DxCardHeader } from 'devextreme-vue/card-view';
    </script>

    <!-- tab: HeaderTemplate.vue -->
    <template>
        <div className="task__header" :title="text">
            {{ text }}
        </div>
    </template>

    <script setup lang="ts">
    defineProps<{
        text: string,
    }>();
    </script>

##### React

    <!-- tab: App.tsx -->
    import CardView, { CardHeader ) from 'devextreme-react/card-view';

    function App() {
        return (
            <CardView>
                <CardHeader
                    visible={true}
                    render={
                        (model) => <HeaderTemplate text={((model.card.data) as Task).Task_Subject} />
                    }
                />
            </CardView>
        )
    }

    <!-- HeaderTemplate.tsx -->
    import React from 'react';

    interface HeaderTemplateProps {
        text: string;
    }

    const HeaderTemplate = ({ text }: HeaderTemplateProps) => {
        return (
            <div className="task__header" title={text}>
                {text}
            </div>
        );
    }

    export default HeaderTemplate;

---