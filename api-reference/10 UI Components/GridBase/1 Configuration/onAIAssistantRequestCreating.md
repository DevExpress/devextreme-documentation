---
id: GridBase.Options.onAIAssistantRequestCreating
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an AI Assistant request is created.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the request.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.context): Record
{WidgetName} context (data and component state information) included in the AI Assistant request.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.responseSchema): Record
The JSON schema of the AI Assistant response.

##### field(e.additionalInfo): Record
Additional information included in the AI Assistant request.

---
Use this handler to modify the AI Assistant request.

The following code snippet modifies the **e.context** parameter to add context to the request:

---

##### jQuery

	<!-- tab: index.js -->
	$('#{widgetname}-container').dx{WidgetName}({
		onAIAssistantRequestCreating(e) {
			e.context = {
				...e.context,
				// Add context here
			};
		},
	});

##### Angular

	<!-- tab: app.component.html -->
	<dx-{widget-name} ...
		(onAIAssistantRequestCreating)="handleAIAssistantRequestCreating($event)"
	></dx-{widget-name}>

	<!-- tab: app.component.ts -->
	import { Dx{WidgetName}Module, type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';

	// ...
	export class AppComponent {
		handleAIAssistantRequestCreating(e: Dx{WidgetName}Types.AIAssistantRequestCreatingEvent) {
			e.context = {
				...e.context,
				// Add context here
			};
		}
	}

##### Vue

	<!-- tab: App.vue -->
	<template>
		<Dx{WidgetName} ...
			@a-i-assistant-request-creating="handleAIAssistantRequestCreating"
		/>
	</template>

	<script setup lang="ts">
	import { Dx{WidgetName}, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';

	function handleAIAssistantRequestCreating(e: Dx{WidgetName}Types.AIAssistantRequestCreatingEvent) {
		e.context = {
			...e.context,
			// Add context here
		};
	}
	</script>

##### React

	<!-- tab: App.tsx -->
	import { {WidgetName}, type {WidgetName}Types } from 'devextreme-react/{widget-name}';

	function handleAIAssistantRequestCreating(e: {WidgetName}Types.AIAssistantRequestCreatingEvent) {
		e.context = {
			...e.context,
			// Add context here
		};
	}

	function App() {
		return (
			<{WidgetName} ...
				onAIAssistantRequestCreating={handleAIAssistantRequestCreating}
			/>
		);
	}

---
