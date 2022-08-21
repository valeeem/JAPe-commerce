function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend += 
        <div>
            <div>
                <div>
                    <img src=" `  + category.image + `" alt="product image" class="img-thumbnail"></img>
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>+ category.name  +</h4> 
                        <p> + category.description +</p> 
                        </div>
                        <small class="text-muted"> + category.soldCount +  artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    };
};

async function loadData(){
  let response = await fetch("https://japceibal.github.io/emercado-api/cats_products/101.json");
  response=response.json();
  showCategoriesList(data.products);
}
loadData();

console.log