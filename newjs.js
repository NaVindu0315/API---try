fetch('https://hplussport.com/api/products?order=name')
.then(function(response)
{
    return response.json();

}
)
.then(function(jsondata)

{
    for (items in jsondata)
    {
        var productname =jsondata[items].name;
        var products = document.createElement("li");
        products.innerHTML = productname;
        document.body.appendChild(products);
        var productimg = jsondata[items].image;
        var image = document.createElement("img");
        image.setAttribute('src',productimg);
        document.body.appendChild(image);
    }

}
)