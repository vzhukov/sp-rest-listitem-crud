// List Display Name
var listTitle = "CRUDList";
// Base REST url
var restBaseUrl = _spPageContextInfo.webServerRelativeUrl + "_api/web/lists/getbytitle('" + listTitle + "')"
// Item ID
var itemId = 1;
// Field Internal Name
var fieldName = "MultiLookup" + "Id" //pseudo field


//Create
$.ajax({
    url: restBaseUrl + "/items",
    type: "POST",
    headers: {
        "Content-Type": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val() // <-- digest
    },
    data: JSON.stringify({
        "__metadata": { "type": "SP.Data.CRUDListListItem" }, // <-- entity type name
        "MultiLookupId": {
            "results": [1, 2, 3]  // <-- lookup item ID
        }
    }),
    success: function(data){
        // item has been created
    }
});



//Read
$.ajax({
    url: restBaseUrl + "/items(" + itemId + ")?$select=MultiLookupId,MultiLookup/Id,MultiLookup/Title&$expand=MultiLookup",
    type: "GET"
});



//Update
$.ajax({
    url: restBaseUrl + "/items(" + itemId + ")", // <-- list item id
    type: "POST",
    headers: {
        "Content-Type": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(), // <-- digest
        "X-HTTP-Method": "MERGE", // <-- for update request
        "IF-MATCH": "*" // <-- for update request
    },
    data: JSON.stringify({
        "__metadata": { "type": "SP.Data.CRUDListListItem" }, // <-- entity type name
        "MultiLookupId": {
            "results": [4, 5]  // <-- lookup item ID
        }
    }),
    success: function(data){
        // item has been updated
    }
});



//Delete (Field value)
$.ajax({
    url: restBaseUrl + "/items(" + itemId + ")", // <-- list item id
    type: "POST",
    headers: {
        "Content-Type": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(), // <-- digest
        "X-HTTP-Method": "MERGE", // <-- for update request
        "IF-MATCH": "*" // <-- for update request
    },
    data: JSON.stringify({
        "__metadata": { "type": "SP.Data.CRUDListListItem" }, // <-- entity type name
        "MultiLookupId": null // Delete field value
    }),
    success: function(data){
        // item has been updated
    }
});
