---
id: dxValidationSummary.refreshValidationGroup()
---
---
##### shortDescription
Resubscribes the ValidationSummary to a target [ValidationGroup](/api-reference/10%20UI%20Components/dxValidationGroup '/Documentation/ApiReference/UI_Components/dxValidationGroup/').

---
Use this method if target **ValidationGroup** is recreated.

---
##### jQuery
    <!-- tab: index.html -->
    <div id="container"></div>
    <div id="summary"></div>
    <div id="validate-group"></div>
    <div id="remove-group"></div>
    <div id="render-group"></div>

    <!-- tab: index.js -->
    $(function() {

        function renderGroup() {
            $("#container").append(
                $("<div></div>").dxTextBox({}) 
                .dxValidator({
                    validationRules: [{ type: 'required' }],
                    validationGroup: "group"
                }),
                // Initialize other ValidationGroup members
            );
        }

        renderGroup();

        const summary = $("#summary").dxValidationSummary({
            validationGroup: "group"
        }).dxValidationSummary('instance');

        $("#validate-group").dxButton({
            text: "Validate",
            validationGroup: "group",
            onClick: function(e) {
                e.validationGroup.validate();
            }
        });

        $("#remove-group").dxButton({
            text: "Remove group",
            onClick: function() {
                $("#container").empty();
            }
        });

        $("#render-group").dxButton({
            text: "Render group",
            onClick: function() {
                renderGroup();
                summary.refreshValidationGroup(); // Refresh the subscription to ValidationGroup after rendering
            }
        });
  
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-validation-group #group>
        <dx-text-box *ngIf="visible">
            <dx-validator>
                <dxi-validation-rule type="required" />
            </dx-validator>
        </dx-text-box>
        <!-- Initialize other ValidationGroup members -->
        <dx-validation-summary #summary />
    </dx-validation-group>
    <dx-button
        text="Validate"
        (onClick)="validate()"
    >
    </dx-button>
    <dx-button
        text="Remove group"
        (onClick)="removeGroup()"
    >
    </dx-button>
    <dx-button
        text="Render group"
        (onClick)="renderGroup()"
    >
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxValidationGroupComponent, DxValidationSummaryComponent } from 'devextreme-angular';

    //...

    export class AppComponent {
        @ViewChild('group', {static: false}) validationGroup!: DxValidationGroupComponent
        @ViewChild('summary', {static: false}) summary!: DxValidationSummaryComponent
        visible: boolean = true;
        removeGroup() {
            this.visible = false;
        }
        renderGroup() {
            this.visible = true;
            this.summary.instance.refreshValidationGroup(); // Refresh the subscription to ValidationGroup after rendering
        }
        validate() {
            this.validationGroup.instance.validate();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="container">
            <DxValidationGroup
                :ref="groupRefKey"
            >
                <DxTextBox v-if="visible">
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <!-- Initialize other ValidationGroup members -->
                <DxValidationSummary 
                    :ref="summaryRefKey"
                />
            </DxValidationGroup>
            <DxButton
                text="Validate"
                @click="validate"
            />
            <DxButton
                text="Remove group"
                @click="removeGroup"
            />
            <DxButton
                text="Render group"
                @click="renderGroup"
            />
        </div>
    </template>

    <script>
        // ...
        export default {
            // ...
            data() {
                return {
                    groupRefKey: 'group',
                    summaryRefKey: 'summary',
                    visible: true
                }
            },
            methods: {
                validate() {
                    this.validationGroup.validate();
                },
                removeGroup() {
                    this.visible = false;
                },
                renderGroup() {
                    this.visible = true;
                    this.summary.refreshValidationGroup(); // Refresh the subscription to ValidationGroup after rendering
                }
            },
            computed: {
                validationGroup() {
                    return this.$refs[this.groupRefKey].instance;
                },
                summary() {
                    return this.$refs[this.summaryRefKey].instance;
                }
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    // ...

    function App() {
        const [visible, setVisible] = useState(true);
        const validationGroup = React.createRef();
        const summary = React.createRef();
        const validate = () => {
            validationGroup.current.instance().validate();
        };
        const removeGroup = () => {
            setVisible(false);
        }
        const renderGroup = () => {
            setVisible(true);
            summary.current.instance().refreshValidationGroup(); // Refresh the subscription to ValidationGroup after rendering
        }
        return (
            <div>
                <ValidationGroup
                    ref={validationGroup}
                >
                    { visible && <div>
                        <TextBox>
                            <Validator>
                                <RequiredRule />
                            </Validator>
                        </TextBox>
                        {/* Initialize other ValidationGroup members */}
                    </div> }
                    <ValidationSummary 
                        ref={summary}
                    />
                </ValidationGroup>
                <Button
                    text="Validate"
                    onClick={validate}
                />
                <Button
                    text="Remove group"
                    onClick={removeGroup}
                />
                <Button
                    text="Render group"
                    onClick={renderGroup}
                />
            </div>
        );
    }

    export default App;

---