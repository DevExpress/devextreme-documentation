## Predefined Controls

Predefined controls appear on the toolbar depending on whether a specific {WidgetName} feature is enabled. The following table illustrates the dependency:

<table class="dx-table">
	<tr>
		<th>Control Name</th>
		<th>Image</th>
		<th>Prerequisites</th>
	</tr>
	<tr>
		<td><i>addRowButton</i></td>
		<td><img src="/images/DataGrid/icons/toolbar_add.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar AddButton" style="margin:1px; vertical-align:middle"/></td>
		<td><a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#allowAdding">allowAdding</a> to <b>true</b></td>
	</tr>
	<tr>
		<td><i>applyFilterButton</i></td>
		<td><img src="/images/DataGrid/icons/toolbar_applyFilter.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar ApplyFilterButton" style="margin:1px; vertical-align:middle"/></td>
		<td><a href="{basewidgetpath}/Configuration/filterRow/">filterRow</a>.<a href="{basewidgetpath}/Configuration/filterRow/#visible">visible</a> is set to <b>true</b> and filterRow.<a href="{basewidgetpath}/Configuration/filterRow/#applyFilter">applyFilter</a> is set to <i>"onClick"</i></td>
	</tr>
	<tr>
		<td><i>columnChooserButton</i></td>
		<td><img src="/images/DataGrid/icons/columnChooser.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar ColumnChooserButton" style="margin:1px; vertical-align:middle"/></td>
		<td><a href="{basewidgetpath}/Configuration/columnChooser/">columnChooser</a>.<a href="{basewidgetpath}/Configuration/columnChooser/#enabled">enabled</a> is set to <b>true</b></td>
	</tr>
	<tr>
		<td><i>revertButton</i></td>
		<td><img src="/images/DataGrid/icons/toolbar_revert.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar RevertButton" style="margin:1px; vertical-align:middle"/></td>
		<td><a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i></td>
	</tr>
	<tr>
		<td><i>saveButton</i></td>
		<td><img src="/images/DataGrid/icons/toolbar_save.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar SaveButton" style="margin:1px; vertical-align:middle"/></td>
		<td><a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#mode">mode</a> is set to <i>"batch"</i> and <a href="{basewidgetpath}/Configuration/editing/">editing</a>.<a href="{basewidgetpath}/Configuration/editing/#allowUpdating">allowUpdating</a> is <b>true</b></td>
	</tr>
	<tr>
		<td><i>searchPanel</i></td>
		<td><img src="/images/DataGrid/icons/toolbar_searchPanel.png" alt="DevExtreme JavaScript jQuery Angular UI component {WidgetName} Toolbar searchPanel" style="margin:1px; vertical-align:middle"/></td>
		<td><a href="{basewidgetpath}/Configuration/searchPanel/">searchPanel</a>.<a href="{basewidgetpath}/Configuration/searchPanel/#visible">visible</a> is set to <b>true</b></td>
	</tr>
	${{datagrid_unique_toolbar_items}}
</table>

If you need to customize a predefined item, add an object to the **items[]** array. This object must contain the item's [name](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/) that you want to customize. If an item does not need customization, simply include its name in the **toolbar**.**items[]** array. 

The below example shows how to add items with and without customization. Note that the corresponding {WidgetName} features are enabled:

---
##### jQuery

		<!--tab: index.js-->
		$(function(){
			$("#gridContainer").dxDataGrid({
				// ...
				editing: {
					allowAdding: true
				},
				columnChooser: {
					enabled: true
				},
				toolbar: {
					items: [ "addRowButton", {
						name: "columnChooserButton",      
						locateInMenu: "auto",
						location: "after"
					}]  
				}
					
			});
		});

##### Angular

		<!-- tab: app.component.html -->
		<dx-data-grid ...>
		<dxo-editing [allowAdding]="true"></dxo-editing>
			<dxo-column-chooser [enabled]="true"></dxo-column-chooser>
			<dxo-toolbar>
				<dxi-item name="addRowButton"></dxi-item>
				<dxi-item 
					name="columnChooserButton"
					locateInMenu="auto"
					location="after">
				</dxi-item>
			</dxo-toolbar>
		</dx-data-grid>

		<!-- tab: app.module.ts -->
		import { BrowserModule } from '@angular/platform-browser';
		import { NgModule } from '@angular/core';
		import { AppComponent } from './app.component';
		 
		import { DxDataGridModule } from 'devextreme-angular';
		 
		@NgModule({
			declarations: [
				AppComponent
			],
			imports: [
				BrowserModule,
				DxDataGridModule,
			],
			providers: [ ],
			bootstrap: [AppComponent]
		})
		export class AppModule { }

##### Vue

		<!-- tab: App.vue -->
		<template>
			<DxDataGrid ... >
				<DxEditing :allow-adding="true" />
				<DxColumnChooser :enabled="true"/>
				<DxToolbar>
					<DxItem name="addRowButton" />
					<DxItem
						name="columnChooserButton"
						locate-in-menu="auto"
						location="after"
					/>
				</DxToolbar>
			</DxDataGrid>
		</template>
		<script>
		import { DxDataGrid, DxEditing, DxColumnChooser, DxToolbar, DxItem } from 'devextreme-vue/data-grid';

		export default {
			components: {
				DxDataGrid,
				DxEditing,
				DxToolbar, 
				DxItem,
				DxColumnChooser
			}
		};
		</script>

##### React

		<!-- tab: App.js -->
		import DataGrid, { Editing, Toolbar, Item, ColumnChooser } from 'devextreme-react/data-grid';
		// ...
		function App() {
			return (
				<DataGrid ... >
					<Editing allowAdding={true} />
					<ColumnChooser enabled={true} />
					<Toolbar>
						<Item name="addRowButton" />
						<Item
							name="columnChooserButton"
							locateInMenu="auto"
							location="after"
						/>
					</Toolbar>
				</DataGrid>
			);
		}

---

[important] The {WidgetName} does not display controls missing from the **items[]** array. Ensure that this array includes controls for all enabled features.

## DevExtreme Components
You can use DevExtreme components as toolbar items. Set the [widget]({currentpath}/#widget) property to specify the component that you want to use and configure the component's [options]({currentpath}/#options):

---
##### jQuery

		<!--tab: index.js-->
		$(function(){
			$("#gridContainer").dxDataGrid({
				// ...
				toolbar: {
					items: [{
						widget: "dxSelectBox",
						options: {
							// SelectBox properties are specified here
						}
					}]  
				}
			});
		});

##### Angular

		<!-- tab: app.component.html -->
		<dx-data-grid ... >
			<dxo-toolbar>
				<dxi-item>
					<dx-select-box
						<!-- SelectBox properties are specified here -->
					></dx-select-box>
				</dxi-item>
			</dxo-toolbar>
		</dx-data-grid>

		<!-- tab: app.module.ts -->
		import { BrowserModule } from '@angular/platform-browser';
		import { NgModule } from '@angular/core';
		import { AppComponent } from './app.component';
		 
		import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
		 
		@NgModule({
			declarations: [
				AppComponent
			],
			imports: [
				BrowserModule,
				DxDataGridModule,
				DxSelectBoxModule,
			],
			providers: [ ],
			bootstrap: [AppComponent]
		})
		export class AppModule { }


##### Vue

		<!-- tab: App.vue -->
		<template>
			<DxDataGrid ... >
				<DxToolbar>
					<DxItem>
						<dxSelectBox
							<!-- SelectBox properties are specified here -->
						/>
					</DxItem>
				</DxToolbar>
			</DxDataGrid>
		</template>
		<script>
		import { DxDataGrid, DxToolbar, DxItem } from 'devextreme-vue/data-grid';
		import { DxSelectBox } from 'devextreme-vue/select-box';

		export default {
			components: {
				DxDataGrid, 
				DxToolbar, 
				DxItem,
				DxSelectBox
			}
		};
		</script>

##### React

		<!-- tab: App.js -->
		import { SelectBox } from 'devextreme-react/select-box';
		import DataGrid, { Toolbar, Item } from 'devextreme-react/data-grid';
		// ...
		function App() {
			return (
				<DataGrid ... >
					<Toolbar>
						<Item>
							<SelectBox
								// SelectBox properties are specified here
							/>
						</Item>
					</Toolbar>
				</DataGrid>
			);
		}

---

## Custom Controls
To use a custom control, specify a [template]({currentpath}/#template) for it.
