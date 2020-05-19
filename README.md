# WHMCS-API
_WHMCS API is a client platform made in nodejs for WHMCS_
**Initializing**
```javascript
let init = {
        // Specifying API.php Endpoint
        "endpoint": "path/to/includes/api.php",
        // Authentication
        "identifier":"",
        "secret":"",
        // OR
        "username": "",
        "password": "",
        // Other Required Parameters.
        "accesskey":"",
        "responsetype":"json" // Change this to break the module :-)
    }
whmcs.initialize(init)
```

**Calling API**
*This WHMCS API client uses promise based calling. This is an example.*
```javascript
whmcs.call(API_Index, Parameters)
    .then(data => console.log(data))
    .catch(error => console.error(new Error(error)))
```
*Parameters should contain the API Index's Request Parameter.*

**Example:**
![GetInvoice](https://i.imgur.com/l3nIqZq.png)
*You don't have to specify action parameter. This is how we're gonna specify invoiceid parameter:*
```javascript
whmcs.call("GetInvoice", {
    invoiceid: 1
}).then(data => console.log(data))
  .catch(error => console.error(new Error(error)))
```
