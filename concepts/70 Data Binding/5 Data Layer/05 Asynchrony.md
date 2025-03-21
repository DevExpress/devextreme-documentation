---

##### jQuery

All data transfer operations in the data layer are asynchronous for both remote services and local data access. This setup supports the universal Store interface for any data source. The data transfer operations return a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a>. Use this Promise to specify callbacks for successful operation completion and operation failure.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            //success callback
        })
        .fail(function(error) {
            //error callback
        });

##### Angular

All data transfer operations in the data layer are asynchronous for both remote services and local data access. This setup supports the universal Store interface for any data source. The data transfer operations return a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a>. Use this Promise to specify callbacks for successful operation completion and operation failure.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            //success callback
        })
        .fail(function(error) {
            //error callback
        });

##### Vue

All data transfer operations in the data layer are asynchronous for both remote services and local data access. This setup supports the universal Store interface for any data source. The data transfer operations return a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a>. Use this Promise to specify callbacks for successful operation completion and operation failure.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            //success callback
        })
        .fail(function(error) {
            //error callback
        });

##### React

All data transfer operations in the data layer are asynchronous for both remote services and local data access. This setup supports the universal Store interface for any data source. The data transfer operations return a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a>. Use this Promise to specify callbacks for successful operation completion and operation failure.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            //success callback
        })
        .fail(function(error) {
            //error callback
        });

---