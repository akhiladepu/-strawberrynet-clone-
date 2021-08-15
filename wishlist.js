
var user = JSON.parse(localStorage.getItem("users"));
// console.log(user);
if (user != null) {
// console.log(user[0].fName);
    var userNameDisplay = document.getElementById("userNameDisplay");
    userNameDisplay.innerHTML = `${user[0].fName}`;
}


// Navigation Bar Script Starts Here
        window.onscroll = function () { myFunction() };

var navbar = document.getElementById("sample");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
// Navigation Bar Scrip Ends Here

// var p = [{ "brand": "Clarins", "name": "Body Treatment Oil-Tonic 100ml/3.3oz", "discount": "23", "rating": "5", "price": "4012.50", "image": "https://a.cdnsbn.com/images/products/250/01312680303.jpg", "deal": "Low", "category": "Skincare" }, { "brand": "EltaMD", "name": "UV Clear Facial Subnscreen SPF 46 - For Skin Types Prone To Acne, Rosa 48g/1.7oz ", "discount": "0", "rating": "4", "price": "3311.50", "image": "https://a.cdnsbn.com/images/products/250/20079465901.jpg", "deal": "None", "category": "Skincare" }, { "brand": "Filorga", "name": "NCEF-Nigth Mask 50ml/1.69oz", "discount": "12", "rating": "5", "price": "5142.50", "image": "https://a.cdnsbn.com/images/products/250/23991070901.jpg", "deal": "None", "category": "Skincare" }, { "brand": "Elizabeth Arden", "name": "Ceramide Retinol Capsules - Line Erasing Nigth Serum 60 Caps", "discount": "0", "rating": "4", "price": "5298.00", "image": "https://a.cdnsbn.com/images/products/250/23954980501.jpg", "deal": "None", "category": "Skincare" }, { "brand": "Clinique", "name": "Clarifying Lotion 2 400ml/13.5oz", "discount": "0", "rating": "4", "price": "2844.00", "image": "https://b.cdnsbn.com/images/products/250/13989180431.jpg", "deal": "Best", "category": "Skincare" }, { "brand": "Timeless Skin Care", "name": "20% Vitamin C Serum + Vitamin E + Ferulic Acid 30ml/1oz", "discount": "6", "rating": "5", "price": "1987.00", "image": "https://b.cdnsbn.com/images/products/250/24714281301.jpg", "deal": "None", "category": "Skincare" }, { "brand": "Timeless Skin Care", "name": "20% Vitamin C Serum + Vitamin E + Ferulic Acid 30ml/1oz", "discount": "6", "rating": "3", "price": "1987.00", "image": "https://b.cdnsbn.com/images/products/250/22533070901.jpg", "deal": "L", "category": "Skincare" }, { "brand": "Filorga", "name": "Meso-Mask Smoothning Radiance Mask 50ml/1.69oz", "discount": "34", "rating": "3", "price": "3039.00", "image": "https://b.cdnsbn.com/images/products/250/22533070901.jpg", "deal": "Low", "category": "Skincare" }, { "brand": "Marvis", "name": "Whitening Mint Toothpaste With Xylitol 85ml/4.2oz", "discount": "22", "rating": "4", "price": "818.50", "image": "https://c.cdnsbn.com/images/products/250/23141000007.jpg", "deal": "Low", "category": "Skincare" }, { "brand": "DERMAdoctor", "name": "KP Duty Dermatologist Formulated Body Scrub 472ml/16oz", "discount": "0", "rating": "4", "price": "3934.50", "image": "https://c.cdnsbn.com/images/products/250/17482140803.jpg", "deal": "None", "category": "Skincare" }, { "brand": "DERMAdoctor", "name": "KP Duty Dermatologist Formulated Body Scrub 472ml/16oz", "discount": "0", "rating": "5", "price": "3934.50", "image": "https://c.cdnsbn.com/images/products/250/18677808101.jpg", "deal": "L", "category": "Skincare" }, { "brand": "La Roche Posay", "name": "Cicaplast Baume B5 Soothing Repairing Balm 40ml/1.35oz", "discount": "3", "rating": "4", "price": "1130.00", "image": "https://c.cdnsbn.com/images/products/250/18677808101.jpg", "deal": "Low", "category": "Skincare" }, { "brand": "Clarins", "name": "Double Serum (Hydric + Lipidic System) Complete Age Control Concentrate 30ml/1oz", "discount": "0", "rating": "4", "price": "7479.50", "image": "https://c.cdnsbn.com/images/products/250/21495580301.jpg", "deal": "None", "category": "Skincare" }, { "brand": "Elizabeth Arden", "name": "Ceramide Capsules Daily Youth Restoring Serum - ADVANCED 9caps", "discount": "12", "rating": "5", "price": "7090.00", "image": "https://d.cdnsbn.com/images/products/250/21219180501.jpg", "deal": "Low", "category": "Skincare" }, { "brand": "Elizabeth Arden", "name": "Ceramide Lift and Firm Day Cream SPF 30 49g/1.7oz", "discount": "24", "rating": "4", "price": "4597.00", "image": "https://d.cdnsbn.com/images/products/250/15246380501.jpg", "deal": "Low", "category": "Skincare" }, { "brand": "Serge Lutens", "name": "La Fille De Berlin Eau De Parfum Spray 50ml/1.6oz", "discount": "37", "rating": "4", "price": "7401.50", "image": "https://a.cdnsbn.com/images/products/250/15728689106.jpg", "deal": "Editor", "category": "Perfume" }, { "brand": "Serge Lutens", "name": "La Fille De Berlin Eau De Parfum Spray 100ml/3.3oz", "discount": "30", "rating": "4", "price": "12583.00", "image": "https://a.cdnsbn.com/images/products/250/22667789106.jpg", "deal": "None", "category": "Perfume" }, { "brand": "Bvlgari", "name": "Petits Et Mamans Eau De Toilette Spray 100ml/3.3oz", "discount": "2", "rating": "4", "price": "4441.00", "image": "https://a.cdnsbn.com/images/products/250/02144435006.jpg", "deal": "None", "category": "Perfume" }, { "brand": "Serge Lutens", "name": "Nuit De Cellophane Eau De Parfum Spray 50ml/1.69oz", "discount": "24", "rating": "4", "price": "7986.00", "image": "https://a.cdnsbn.com/images/products/250/09971389106.jpg", "deal": "Low", "category": "Perfume" }, { "brand": "4711", "name": "Acqua Colonia White Peach & Coriander Eau De Cologne Spray 170ml/5.7oz", "discount": "30", "rating": "3", "price": "2065.00", "image": "https://b.cdnsbn.com/images/products/250/22620442906.jpg", "deal": "None", "category": "Perfume" }, { "brand": "4711", "name": "Acqua Colonia Lychee & White Mint Eau De Cologne Spray 170ml/5.7oz", "discount": "30", "rating": "4", "price": "2065.00", "image": "https://b.cdnsbn.com/images/products/250/25156642906.jpg", "deal": "Low", "category": "Perfume" }, { "brand": "Serge Lutens", "name": "La Religieuse Eau De Parfum Spray 50ml/1.6oz", "discount": "28", "rating": "4", "price": "8414.50", "image": "https://b.cdnsbn.com/images/products/250/19964089106.jpg", "deal": "None", "category": "Perfume" }, { "brand": "Paul Smith", "name": "Rose Eau De Parfum Spray 100ml/.4oz", "discount": "35", "rating": "4", "price": "3818.00", "image": "https://b.cdnsbn.com/images/products/250/07412574506.jpg", "deal": "None", "category": "Perfume" }, { "brand": "Elizabeth Arden", "name": "White Tea Vanilla Orchid Eau De Toilette Spray 100ml/3.3oz", "discount": "12", "rating": "4", "price": "3818.00", "image": "https://c.cdnsbn.com/images/products/250/24284780506.jpg", "deal": "None", "category": "Perfume" }, { "brand": "Lancome", "name": "Miracle Perfumed Body Lotion 150ml/5oz", "discount": "48", "rating": "4", "price": "1870.00", "image": "https://c.cdnsbn.com/images/products/250/12814180903.jpg", "deal": "Fragrance", "category": "Perfume" }, { "brand": "Elizabeth Arden", "name": "Green Teaa Energising Bath & Shower Gel 500ml/16.8oz", "discount": "28", "rating": "4", "price": "1792.00", "image": "https://c.cdnsbn.com/images/products/250/03480480503.jpg", "deal": "Low", "category": "Perfume" }, { "brand": "Lancome", "name": "Tresor Perfumed Shower Gel 150ml/5oz", "discount": "49", "rating": "4", "price": "1597.50", "image": "https://c.cdnsbn.com/images/products/250/13248380903.jpg", "deal": "Fragrance ", "category": "Perfume" }, { "brand": "Elizabeth Arden", "name": "White Tea Wild Rose Eau De Toilette Spray 100ml/3.3oz", "discount": "12", "rating": "4", "price": "3818.00", "image": "https://d.cdnsbn.com/images/products/250/24284580506.jpg", "deal": "None", "category": "Perfume" }, { "brand": "4711", "name": "Acqua Colonia White Peach & Coriander Eau De Cologne Spray 50ml/1.7oz", "discount": "34", "rating": "4", "price": "1286.00", "image": "https://d.cdnsbn.com/images/products/250/23288342906.jpg", "deal": "Fragrance", "category": "Perfume" }, { "brand": "Guerlain", "name": "Acqua Allegoria Mandarine Basilic Eau De Toilette Spray 125ml/4.4oz", "discount": "6", "rating": "4", "price": "9505.00", "image": "https://d.cdnsbn.com/images/products/250/12798080706.jpg", "deal": "None", "category": "Perfume" }, { "brand": "Jo Malone", "name": "Peony & Blush Suede Scent Surround Diffuser 165ml/5.6oz", "discount": "0", "rating": "4", "price": "8025.00", "image": "https://a.cdnsbn.com/images/products/250/24523989515.jpg", "deal": "None", "category": "Home Scents" }, { "brand": "Jo Malone", "name": "Wood Sage & Sea Salt Scented Candle 200g (2.5inch)", "discount": "0", "rating": "4", "price": "6428.00", "image": "https://a.cdnsbn.com/images/products/250/18384289516.jpg", "deal": "None", "category": "Home Scents" }, { "brand": "Glasshouse", "name": "Triple Scented Soy Candle - Lost In Amalfi (Sea Mist) 60g/2.1oz", "discount": "0", "rating": "4", "price": "1558.50", "image": "https://a.cdnsbn.com/images/products/250/25048763416.jpg", "deal": "None", "category": "Home Scents" }, { "brand": "Jo Malone", "name": "English Pear & Freesia Scent Surround Diffuser 165ml/5.6oz", "discount": "0", "rating": "4", "price": "8531.50", "image": "https://a.cdnsbn.com/images/products/250/17900989515.jpg", "deal": "None", "category": "Home Scents" }];

// localStorage.setItem("products", JSON.stringify(p));

// var products = JSON.parse(localStorage.getItem("wishlist"));

var data_div = document.getElementById("wishlistProductsShowCase");

function showProducts(data) {
    var productsData = data;

    data_div.innerHTML = "";

    data.forEach(function (object){
        addProductsToBrowser(object);
    });
}
var brandsObject = {};
var categoryObject = {};
var products = JSON.parse(localStorage.getItem('wishlist'));

showProducts(products);

function addProductsToBrowser(object) {
    
    var div = document.createElement("div");
    div.setAttribute("class", "product");

    
    let wishlistIcon = document.createElement("div");
    wishlistIcon.innerHTML = `<div class="heartimg"><button onclick="removeFromWishlist('${object.name}','${object.brand}','${object.price}','${object.category}')" class="wishlist-icon-fill" id="whishlistItem"></button></div>`;
    let pImage = document.createElement("img");
    pImage.setAttribute("class","productImage")
    pImage.src = object.image;
  
    let pBrandAndName = document.createElement("div");
    pBrandAndName.setAttribute("class", "productBrandAndName");

    let pBrand = document.createElement("div");
    pBrand.setAttribute("class", "productBrand");
    pBrand.innerHTML = object.brand;


    if (brandsObject[object.brand] == undefined) {
        brandsObject[object.brand] = 1;
    } else {
        let prev = brandsObject[object.brand];
        brandsObject[object.brand] += 1;
    }

    if (categoryObject[object.category] == undefined) {
        categoryObject[object.category] = 1;
    } else {
        let prev = categoryObject[object.category];
        categoryObject[object.category] += 1;
    }
    
    let pName = document.createElement("span");
    pName.setAttribute("class", "productName");
    pName.innerHTML = object.name;

    pBrandAndName.append(pBrand, pName);
    
    let pDiscount = document.createElement("div");
    pDiscount.setAttribute("class", "productDiscount");


    let pPreviousPrice = document.createElement("div");
    pPreviousPrice.setAttribute("class", "productPreviousPrice");

    if (object.discount != 0) {
        pDiscount.innerHTML = `SAVE ${object.discount}%`;

        let pPrePrice = Number(object.price) + Number(object.price * object.discount);
        pPreviousPrice.innerHTML = `<div><span>RRP  </span><span class="productPrePrice">Rs. ${pPrePrice}</span></div>`;
    } else {
        pDiscount.innerHTML = "";

        pPreviousPrice.innerHTML = "";
    }
    
    let pPrice = document.createElement("div");
    pPrice.setAttribute("class", "productPrice");
    pPrice.innerHTML = `Rs. ${object.price}`;


    let btn = document.createElement("button");
    btn.setAttribute("class", "productButton");
    btn.textContent = "Add to bag";
    btn.addEventListener("click", function () {
        addToBag(object);
    });    
    btn.style.display = "block";  

    
    let pRating = document.createElement("span");
    let rate = `<span class="productRating">`;
    for (var i = 1; i <= Number(object.rating); i++){
        rate += `<img alt="" src="https://a.cdnsbn.com/images/common/star_full.gif"></img>`

    }
    for (var i = 1; i <= 5 - Number(object.rating); i++){
        rate += `<img alt="" src="https://a.cdnsbn.com/images/common/star_empty.gif">`
    }
    rate += `</span>`;
    pRating.innerHTML = rate;

    
    let pExtraDiscount = document.createElement("div");
    pExtraDiscount.setAttribute("class", "productExtraDiscount");
    pExtraDiscount.innerHTML = "Extra 8% Off";

    div.append( wishlistIcon, pImage, pBrandAndName, pDiscount, pPrice, pPreviousPrice, btn, pRating, pExtraDiscount);//, btn

    data_div.append(div);
    
}

function removeFromWishlist(objName, objBrand, objPrice, objCategory) {
    // console.log(objName);
    // console.log(objBrand);
    // console.log(objPrice);
    // console.log(objCategory);
    // console.log("working");
    products;
    let i = 0;
    let temp = 0;
    var newProductsArray = [];
    for (i = 0; i < products.length; i++) {
        if (products[i].brand == objBrand && products[i].name == objName && products[i].category == objCategory && products[i].price == objPrice) {
            console.log('got culprit');
            console.log()
        } else {
            newProductsArray.push(products[i]);
        }
    }
    
    console.log('newProductsArray:', newProductsArray);
    // var j = 1 + temp;
    // for(j; j < products.length; j++) {
        
    //     newProductsArray.push(products[j]);
    // }

    //         console.log('newProductsArray:', newProductsArray)
    products = newProductsArray;
    
    showProducts(products);
}

function addToBag(obj) {

    console.log(obj);

    let array;

    array = localStorage.getItem("bag");

    if (array == null) {

        array = [];
        array.push(obj);
    
        localStorage.setItem("bag", JSON.stringify(array));

    } else {

        array = JSON.parse(localStorage.getItem("bag"));
    
        let found = false;

        for (var i = 0; i < array.length; i++) {
            if (array[i].name == obj.name) {
                found = true;
                break;
            }
        }

        if (found == false) {

            array.push(obj);

        }
        // else {

        //     alert("Product Already in Cart");

        // }
    
        localStorage.setItem("bag", JSON.stringify(array));
    }
}



// console.log(categoryObject);
var append_div = document.getElementById("wishListShowTotalProductsDiv");
var sample = document.createElement("div");
for (key in categoryObject) {
    let ele = document.createElement("a");

    ele.innerHTML = `<a onclick='filterByCategory("${key}")' class="categoryHover">${key} (${categoryObject[key]})</a><br>`;
// oncilck="refineProducts(${key})"
    sample.append(ele);
}

append_div.append(sample);

function filterByCategory(categoryType) {
    // console.log(console.log(categoryType));

    products;
    var reqCategory = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].category == categoryType) {
            reqCategory.push(products[i]);
        }
    }
    // console.log(reqCategory);
    showProducts(reqCategory);
}



// console.log(brandsObject);
var append_div = document.getElementById("scrollSectionBrands");
var sample = document.createElement("div");

for (key in brandsObject) {
    let ele = document.createElement("a");

    ele.innerHTML = `<label class="checkbox"><input type="checkbox"  class="filterBrands" onclick="filterBrands('${key}')" value="${key}" id="${key}"><span>${key} (${brandsObject[key]})</span></label>`;

    sample.append(ele);
}

append_div.append(sample);


    var prod = [];
function filterBrands(value) {
    products;
    let i = 0;
    var valueChecked = document.getElementById(value);
    if (valueChecked.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].brand == value) {
                prod.push(products[i]);
            }
        }
    } else if(valueChecked.checked == false){
        let temp = 0;
        for (var j = 0; j < prod.length; j++){
            if (prod[j].brand == value) {
                temp = j;
                break;
            }
        }

        // console.log('prod:', prod)

        var rem = prod.splice(temp);
        // console.log('rem:', rem)
        
        // console.log('prod:', prod)

        for (var j = 0; j < rem.length; j++){

            if (rem[j].brand != value) {
                temp = j;
                break;
            } else {
                temp = rem.length;
            }
        }

        // console.log(temp);

        for (temp; temp < rem.length; temp++){
            if (rem[temp] != undefined) {
                prod.push(rem[temp]);
            }
        }
    }
    
    // console.log('prod:', prod)
    showProducts(prod);
    if (prod.length == 0) {
        showProducts(products);
    }
}

function popularity() {
    var buttonName = document.getElementById("sortButtonName");
    buttonName.innerHTML = `SORT BY POPULARITY <a id="glyphicon">`;
    var popular = [];
    var productsData = products;
    for (var i = 0; i < productsData.length; i++) {
        if (productsData[i].rating == 5) {
            popular.push(productsData[i]);
        }
    }

    showProducts(popular);
}
function biggestDiscount() {
    var buttonName = document.getElementById("sortButtonName");
    buttonName.innerHTML = `SORT BY BIGGEST DISCOUNT <a id="glyphicon">`;
    var bigDiscount = [];
    var productsData = products;
    for (var i = 0; i < productsData.length; i++) {
        if (productsData[i].discount >= 30) {
            bigDiscount.push(productsData[i]);
        }
    }

    showProducts(bigDiscount);
}
function lowestPrice() {
    var buttonName = document.getElementById("sortButtonName");
    buttonName.innerHTML = `SORT BY LOWEST PRICE <a id="glyphicon">`;
    var productsData = products;

    productsData.sort(function (a, b) {
        return a.price - b.price;
    })

    showProducts(productsData)
}
function brandAZ() {
    var buttonName = document.getElementById("sortButtonName");
    buttonName.innerHTML = `SORT BY BRAND: A-Z<a id="glyphicon">`;
    brandsObject;
    products;
    var brandsArray = []

    for (key in brandsObject) {
        brandsArray.push(key);
    }

    brandsArray = brandsArray.sort();

    // console.log(brandsArray);
    var brandsAZ = [];
    
    for (var i = 0; i < brandsArray.length; i++) {

        for (j = 0; j < products.length; j++) {
            if (brandsArray[i] == products[j].brand) {
                brandsAZ.push(products[j]);
            }
        }

    }

    showProducts(brandsAZ);
}
function productAZ() {
    var buttonName = document.getElementById("sortButtonName");
    buttonName.innerHTML = `SORT BY PRODUCT: A-Z <a id="glyphicon">`;
    
    products;
    
    showProducts(products);
}





















































//onclick="filterByBrand(value)"value="${key}"
// var filterBrandsObject = {};
// function filterByBrand(brand) {
//     // console.log(brand);
//     let temp = brand;
//     let isFound = false;
//     for (key in filterBrandsObject) {
        
//         if (filterBrandsObject[key] == brand) {
//             isFound = true;
//             break;
//         }
//     }
//     if (isFound) {
//         delete filterBrandsObject.brand;
//     } else {
//         filterBrandsObject[temp] = 1;
//     }

//     console.log(filterBrandsObject);
//     // for (key in filterBrandsObject) {
    
//     // var 
//     // }
// }
// var append_div = document.getElementById("wishListShowTotalProductsDiv");
// var sample = document.createElement("div");
// for (key in brandsObject) {
//     let ele = document.createElement("a");

//     ele.innerHTML = `<a href="refineProducts(${key})">${key}<span>(${brandsObject[key]})</span></a><br>`;

//     sample.append(ele);
// }

// append_div.append(sample);




/*

var listBrands = JSON.parse(localStorage.getItem("wishlistBrands"));
    
    if (listBrands == null) {
        listBrands = [];
        listBrands.push(object.brand);
        localStorage.setItem("wishlistBrands", JSON.stringify(listBrands));
    } else {
        var isFound = false;
        for (var i = 0; i < listBrands.length; i++) {
            if (listBrands[i] == object.brand) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            listBrands.push(object.brand);
            localStorage.setItem("wishlistBrands", JSON.stringify(listBrands));
        }
    }

*/