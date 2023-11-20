
fetch("https://api.giphy.com/v1/gifs/random?api_key=43EwelydlVY7dxERDiMUfAy9QfFEtMO4")
.then(function(response)
{
    return response.json();
}
)
.then(function(jsondata)
{
    console.log(jsondata);
    var gifurl = jsondata.data.images.original.url;
    console.log(gifurl);
    var gifmg = document.createElement("img");
    gifmg.setAttribute("src",gifurl);
    document.body.appendChild(gifmg);
}
)
