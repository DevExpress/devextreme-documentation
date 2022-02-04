---
id: dxValidationSummary.refreshValidationGroup()
---
---
##### shortDescription
Refreshes the ValidationSummary subscription to a target ValidationGroup.

---
Use this method if target ValidationGroup is recreated.

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
                $("<div></div>").dxTextBox({}) 
                .dxValidator({
                    validationRules: [{ type: 'required' }],
                    validationGroup: "group"
                })
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
                <dxi-validation-rule type="required">
                </dxi-validation-rule>
            </dx-validator>
        </dx-text-box>
        <dx-text-box *ngIf="visible">
            <dx-validator>
                <dxi-validation-rule type="required">
                </dxi-validation-rule>
            </dx-validator>
        </dx-text-box>
        <dx-validation-summary #summary></dx-validation-summary>
    </dx-validation-group>
    <dx-button
        text="Validate group"
        (onClick)="validateGroup()"
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
        validateGroup() {
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
                <DxTextBox v-if="visible">
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxValidationSummary 
                    :ref="summaryRefKey"
                />
            </DxValidationGroup>
            <DxButton
                text="Validate"
                @click="validateGroup"
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
                validateGroup() {
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
        let validationGroup = null;
        let summary = null;
        const validateGroup = () => {
            validationGroup.instance.validate();
        };
        const removeGroup = () => {
            setVisible(false);
        }
        const renderGroup = () => {
            setVisible(true);
            summary.instance.refreshValidationGroup(); // Refresh the subscription to ValidationGroup after rendering
        }
        return (
            <div>
                <ValidationGroup
                    ref={ref => validationGroup = ref}
                >
                    { visible && <div>
                        <TextBox>
                            <Validator>
                                <RequiredRule />
                            </Validator>
                        </TextBox>
                        <TextBox>
                            <Validator>
                                <RequiredRule />
                            </Validator>
                        </TextBox>
                    </div> }
                    <ValidationSummary 
                        ref={ref => summary = ref}
                    />
                </ValidationGroup>
                <Button
                    text="Validate"
                    onClick={validateGroup}
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