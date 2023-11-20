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
    var name = jsondata[0].description;
    console.log(name);

    var product = document.createElement("li");
    product.innerHTML = name;
    document.body.appendChild(product);
}
)
