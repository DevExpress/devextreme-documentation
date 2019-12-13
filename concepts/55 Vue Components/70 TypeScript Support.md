DevExtreme Vue components are supplied with TypeScript declarations. Strict typing allows you to catch bugs at earlier stages and use features like code completion and automated refactoring.

The following code shows an example of using TypeScript with DevExtreme components in a Vue application:

    <!-- tab: App.vue -->
    <template>
        <div>
            <dx-list :items="items" ref="list">
                <template #item="{data}">
                    <Item :text="data.text" />
                </template>
            </dx-list>
        </div>
    </template>

    <script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator';
    import { DxList } from 'devextreme-vue/ui/list';
    import Item from './components/Item.vue';
    
    interface IListItemProps {
        text: string;
    }
    
    @Component({
        components: {
            DxList,
            Item
        }
    })

    export default class App extends Vue {
        public $refs: Vue['$refs'] & {
            list?: DxList,
        } = {};
        
        public items: IListItemProps[] = [
            { text: 'Item 1' },
            { text: 'Item 2' },
            { text: 'Item 3' }
        ];
    }
    </script>

    <!-- tab: Item.vue -->
    <template>
        <div @click="addCounter">
            {{text}} was clicked {{counter}} times
        </div>
    </template>
    
    <script lang='ts'>
    import { Component, Prop, Vue } from 'vue-property-decorator';  

    @Component
    export default class Item extends Vue {
        @Prop() public text!: string;
        public counter: number = 0;
        public addCounter() {
            this.counter = this.counter + 1;
        }
    }
    </script>

#####See Also#####
- <a href="https://vuejs.org/v2/guide/typescript.html" target="_blank">TypeScript Support in Vue Documentation</a>