Import the DevExtreme components you are going to use from specific modules. In the following code, the [DxButton](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Button/PredefinedTypes) component is imported:

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxButton
            text="Click me"
            @click="sayHelloWorld"
        />
    </template>

    <script>
    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxButton
        },
        methods: {
            sayHelloWorld() {
                alert('Hello world!')
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxButton
            text="Click me"
            @click="sayHelloWorld"
        />
    </template>

    <script setup>
    import DxButton from 'devextreme-vue/button';

    const sayHelloWorld = () => {
        alert('Hello world!')
    }
    </script>

Nested DevExtreme components should also be imported (`DxArgumentAxis`, `DxSeries`, and `DxLegend` in the following code):

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxChart
            :data-source="data">
            <DxArgumentAxis :tick-interval="10" />
            <DxSeries type="bar" />
            <DxLegend :visible="false" />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxSeries,
        DxLegend
    } from 'devextreme-vue/chart';

    const data = [{
        arg: 1990,
        val: 5320816667
    }, {
        arg: 2000,
        val: 6127700428
    }, {
        arg: 2010,
        val: 6916183482
    }];

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxSeries,
            DxLegend
        },
        data() {
            return {
                data
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxChart
            :data-source="data">
            <DxArgumentAxis :tick-interval="10" />
            <DxSeries type="bar" />
            <DxLegend :visible="false" />
        </DxChart>
    </template>

    <script setup>
    import DxChart, {
        DxArgumentAxis,
        DxSeries,
        DxLegend
    } from 'devextreme-vue/chart';

    const data = [{
        arg: 1990,
        val: 5320816667
    }, {
        arg: 2000,
        val: 6127700428
    }, {
        arg: 2010,
        val: 6916183482
    }];
    </script>
