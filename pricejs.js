fetch('https://hplussport.com/api/products?order=price')
.then(function(response)
{
    return response.json();

}
)
.then(function(jsondata)

{
    for (items in jsondata)
    { ///begin

        var productname =jsondata[items].name;
        
        var products = document.createElement("li");
        
        products.innerHTML = productname;
        document.body.appendChild(products);
        ///end
        ///begin
        var prices =jsondata[items].price;
        var prc = document.createElement("li");
        prc.innerHTML =prices;
        document.body.appendChild(prc);

        ///end
        
     /*   var productimg = jsondata[items].image;
        var image = document.createElement("img");
        image.setAttribute('src',productimg);
        document.body.appendChild(image);*/
    }
    //price , order by price

}
)