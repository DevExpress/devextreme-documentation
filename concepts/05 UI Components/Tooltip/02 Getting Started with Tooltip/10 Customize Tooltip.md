
---

##### jQuery

To customize Tooltip content, specify [contentTemplate](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#contentTemplate). If you assign a string to this property, Tooltip displays plain text in its container:

    <!-- tab: index.js -->
    $(function() {
        $('#like-tooltip').dxTooltip({
            contentTemplate: 'like'
        });

        $('#trash-tooltip').dxTooltip({
            contentTemplate() {
                return $('<div>')
                    .addClass('red-tooltip')
                    .text('Delete');
            },
        });

        $('#info-tooltip').dxTooltip({
            contentTemplate() {
                return $('<div>')
                    .addClass('blue-tooltip')
                    .text('Info');
            },
        });
    })

##### Angular

To customize Tooltip content, specify [contentTemplate](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#contentTemplate). If you assign a string to this property, Tooltip displays plain text in its container:

    <!-- tab: app.component.html -->
    <div class="tooltips">
        <dx-tooltip
            contentTemplate="Like"
        ></dx-tooltip>
        <dx-tooltip
            contentTemplate="trashTooltip"
        >
            <div *dxTemplate="let model of 'trashTooltip'">
                <div class="red-tooltip">Delete</div>
            </div>
        </dx-tooltip>
        <dx-tooltip
            contentTemplate="infoTooltip"
        >
            <div *dxTemplate="let model of 'infoTooltip'">
                <div class="blue-tooltip">Info</div>
            </div>
        </dx-tooltip>
    </div>

##### Vue

To customize Tooltip content, specify [contentTemplate](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#contentTemplate). If you assign a string to this property, Tooltip displays plain text in its container:

    <!-- tab: App.vue -->
    <template>
        <div class="tooltips">
            <DxTooltip
                content-template="Like"
            />
            <DxTooltip
                content-template="trashTooltip"
            >
                <template #trashTooltip>
                    <div class="red-tooltip">Delete</div>
                </template>
            </DxTooltip>
            <DxTooltip
                content-template="infoTooltip"
            >
                <template #infoTooltip>
                    <div class="blue-tooltip">Info</div>
                </template>
            </DxTooltip>
        </div>
    </template>

##### React

To customize Tooltip content, specify [contentRender](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#contentRender) or [contentComponent](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#contentComponent):

    <!-- tab: App.tsx -->
    function likeRender(): JSX.Element {
        return <div>Like</div>;
    }

    function trashRender(): JSX.Element {
        return (
            <div className='red-tooltip'>Delete</div>
        );
    }

    function infoRender(): JSX.Element {
        return (
            <div className='blue-tooltip'>Info</div>
        );
    }

    function App(): JSX.Element {
        return (
            <div className="tooltips">
                <Tooltip
                    contentRender={likeRender}
                />
                <Tooltip
                    contentRender={trashRender}
                />
                <Tooltip
                    contentRender={infoRender}
                />
            </div>
        )
    }

---

You can use CSS to customize the Tooltip's appearance. The code snippets above assigned CSS classes to all tooltips. This example defines those styles (`.red-tooltip` and `.blue-tooltip`):

---

##### jQuery

    <!-- tab: index.css -->
    .dx-overlay-content:has(.blue-tooltip),
    .dx-overlay-content:has(.blue-tooltip) .dx-popover-arrow::after {
        background-color: #0f6cbd;
        color: white;
    }

    .dx-overlay-content:has(.red-tooltip),
    .dx-overlay-content:has(.red-tooltip) .dx-popover-arrow::after {
        background-color: #d13438;
        color: white;
    }

##### Angular

    <!-- tab: app.component.scss -->
    ::ng-deep .dx-overlay-content:has(.blue-tooltip),
    ::ng-deep .dx-overlay-content:has(.blue-tooltip) .dx-popover-arrow::after {
        background-color: #0f6cbd;
        color: white;
    }

    ::ng-deep .dx-overlay-content:has(.red-tooltip),
    ::ng-deep .dx-overlay-content:has(.red-tooltip) .dx-popover-arrow::after {
        background-color: #d13438;
        color: white;
    }

##### Vue

    <!-- tab: main.css -->
    .dx-overlay-content:has(.blue-tooltip),
    .dx-overlay-content:has(.blue-tooltip) .dx-popover-arrow::after {
        background-color: #0f6cbd;
        color: white;
    }

    .dx-overlay-content:has(.red-tooltip),
    .dx-overlay-content:has(.red-tooltip) .dx-popover-arrow::after {
        background-color: #d13438;
        color: white;
    }

##### React

    <!-- tab: App.css -->
    .dx-overlay-wrapper > .dx-overlay-content:has(.blue-tooltip),
    .dx-overlay-wrapper > .dx-overlay-content:has(.blue-tooltip) .dx-popover-arrow::after {
        background-color: #0f6cbd;
        color: white;
    }

    .dx-overlay-wrapper > .dx-overlay-content:has(.red-tooltip),
    .dx-overlay-wrapper > .dx-overlay-content:has(.red-tooltip) .dx-popover-arrow::after {
        background-color: #d13438;
        color: white;
    }

---

#####See Also#####

- [Tooltip - Customize Content](/Documentation/Guide/UI_Components/Tooltip/Customize_the_Content/)
- [Examine CSS](/Documentation/Guide/Troubleshooting/Basics/#Examine_CSS)
- [:has() CSS pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)