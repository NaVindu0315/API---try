//linking the api
fetch("https://hplussport.com/api/products.php")
//creating the function to get the output in json
.then(function(response)

{
    return response.json();
}

)
.then(function(jsondata)
{
    console.log(jsondata);
}
)
