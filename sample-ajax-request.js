$.ajax({
    url: "/_api/web/lists/getbytitle('CRUDList')/items",
    type: "POST",
    headers: {
        "Accept": "application/json; charset=utf-8",
        "Content-Type": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val()
    }
})