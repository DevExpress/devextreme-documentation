User information is stored in the same `src\auth.js` module. You can use its `getUser()` method to access this information:

    <!-- tab: JavaScript -->
    <template>
        <!-- ... -->
    </template>
    
    <script>
    import auth from '../auth';

    export default {
        created() {
            auth.getUser().then((e) => {
                if (e.data) {
                    // User is authenticated 
                    ...
                }
            });
        },
        // ...
    }
    </script>