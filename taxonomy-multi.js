// List Display Name
var listTitle = "CRUDList";
// Base REST url
var restBaseUrl = _spPageContextInfo.webServerRelativeUrl + "_api/web/lists/getbytitle('" + listTitle + "')"
// Item ID
var itemId = 1;
// Field Internal Name
var fieldName = "MultiTerm"


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
        "j9e7c67e91e64e8a8c26e61ec1e4007b": "-1;#|d3ce8903-4b4e-442e-8f19-161bf45be9e8;#-1;#|33899e31-576e-4254-a9cf-d53bac59935a"
    }),
    success: function(data){
        // item has been created
    }
});



//Read
$.ajax({
    url: restBaseUrl + "/items(" + itemId + ")?$select=" + fieldName,
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
        "j9e7c67e91e64e8a8c26e61ec1e4007b": "-1;#|d3ce8903-4b4e-442e-8f19-161bf45be9e8"
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
        "j9e7c67e91e64e8a8c26e61ec1e4007b": null // Delete field value
    }),
    success: function(data){
        // item has been updated
    }
});
