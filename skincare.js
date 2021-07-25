
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

var products = JSON.parse(localStorage.getItem('products'));
var i = 0;
var numProd = 0;
var singleProduct;

var body = document.getElementById('productContainer');

var singleContainer = document.getElementById('single-container');

function showProducts(p) {
    let mov = p;
    numProd = 0;
    singleContainer.innerHTML = null;
    mov.forEach(function (el) {
        if (el.category == "Skincare")
            appendProduct(el);
    });
}

function appendProduct(el) {
    numProd++;
    let frame = document.createElement('div');
    frame.setAttribute('class', 'frame');

    let brand_name = document.createElement('div');
    brand_name.setAttribute('class', 'brand-name');

    let b_n = document.createElement('div');

    let brand = document.createElement('p');
    brand.textContent = el.brand;

    let name = document.createElement('p');
    name.innerText = el.name;
    b_n.addEventListener('click', function () {
        leadToProductPage(el);
    })
    b_n.append(brand, name);

    brand_name.append(b_n);

    let image_button = document.createElement('div');
    image_button.setAttribute('class', 'image-button');
    let image_f = document.createElement('img');
    image_f.src = el.image;

    let click = document.createElement('p');
    click.textContent = "click>>>"

    image_button.append(image_f, click);

    if (el.deal == 'Best') {
        let btn = document.createElement('button');
        btn.textContent = "Best Deals";
        frame.append(btn);
        image_button.append(image_f, click, btn);
    }
    else if (el.deal == "Low") {
        let btn = document.createElement('button');
        btn.textContent = "Low Price Picks";
        frame.append(btn);
        image_button.append(image_f, click, btn);
    }
    let discountContainer = document.createElement('div');
    discountContainer.setAttribute('class', 'discount-container');
    if (el.discount != 0 && el.discount != "None") {
        let actual_price = document.createElement('p');
        actual_price.innerHTML = `RRP <s>Rs. ${Math.floor(Number(el.price) * (100 + el.discount) / 100)}</s>`;
        let discount_circle = document.createElement('div');
        discount_circle.setAttribute('class', 'discount');
        discount_circle.textContent = `SAVE ${el.discount}%`;
        discountContainer.append(actual_price, discount_circle)
    }

    let priceContainer = document.createElement('div');
    priceContainer.setAttribute('class', 'price-container');
    let price = document.createElement('p');
    price.setAttribute('class', 'price');

    let price_comma = el.price.trim().split("");
    if (price_comma.length > 6) {
        price_comma = price_comma[0] + "," + price_comma[1] + price_comma[2] + price_comma[3] + price_comma[4] + price_comma[5] + price_comma[6];
    }
    else {
        price_comma = el.price;
    }
    price.innerText = `Rs. ${price_comma}`;

    let off = document.createElement('p');
    off.setAttribute('class', 'off');
    off.textContent = "Extra 8% Off"

    priceContainer.append(price, off);

    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'button-container');
    let btn_add = document.createElement('button');
    btn_add.textContent = "ADD TO BAG";
    btn_add.addEventListener('click', function () {
        addToBAg(el);
        console.log(el);
    })
    buttonContainer.append(btn_add);

    frame.append(brand_name, image_button, discountContainer, priceContainer, buttonContainer);
    singleContainer.append(frame);
}

function lowestPrice() {
    let products = JSON.parse(localStorage.getItem('products'));
    products = products.sort(function (a, b) {
        if (a.category == 'Skincare')
            return a.price - b.price;
    });
    showProducts(products);
}

function biggestDiscount() {
    let products = JSON.parse(localStorage.getItem('products'));
    products = products.sort(function (a, b) {
        if (a.category == 'Skincare' && a.discount != '0' && a.discount != 'None')
            return b.discount - a.discount;
    });
    showProducts(products);
}

function brandAZ() {
    let products = JSON.parse(localStorage.getItem('products'));
    let prod = products.sort(function (a, b) {
        if (a.category == 'Skincare') {
            let A = a.brand.toLowerCase();
            let B = b.brand.toLowerCase();
            if (A < B) {
                return -1;
            }
            else if (A > B) {
                return 1;
            }
            return 0;
        }
    });
    showProducts(prod);
}

function nameAZ() {
    let products = JSON.parse(localStorage.getItem('products'));
    let prod = products.sort(function (a, b) {
        if (a.category == 'Skincare') {
            let A = a.name.toLowerCase();
            let B = b.name.toLowerCase();
            if (A < B) {
                return -1;
            }
            else if (A > B) {
                return 1;
            }
            return 0;
        }
    });
    showProducts(prod);
}

showProducts(products);

function filterLine(n) {
    let clarins = document.getElementById('Clarins');
    let eltamd = document.getElementById('EltaMD');
    let elizabethArden = document.getElementById('Elizabeth Arden');
    let filorga = document.getElementById('Filorga');
    let clinique = document.getElementById('Clinique');
    let timelessSkinCare = document.getElementById('Timeless Skin Care');
    let marvis = document.getElementById('Marvis');
    let dermadoctor = document.getElementById('DERMAdoctor');
    let laRocheyPosay = document.getElementById('La Rochey Posay');
    let products = JSON.parse(localStorage.getItem('products'));
    let prod = [];
    let i = 0;
    if (clarins.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "Clarins") {
                prod.push(products[i]);
            }
        }
    }
    if (eltamd.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "EltaMD") {
                prod.push(products[i]);
            }
        }
    }
    if (elizabethArden.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "Elizabeth Arden") {
                prod.push(products[i]);
            }
        }
    }
    if (clinique.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "Clinique") {
                prod.push(products[i]);
            }
        }
    }
    if (timelessSkinCare.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "Timeless Skin Care") {
                prod.push(products[i]);
            }
        }
    }

    if (filorga.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "Filorga") {
                prod.push(products[i]);
            }
        }
    }
    if (marvis.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "Marvis") {
                prod.push(products[i]);
            }
        }
    }
    if (dermadoctor.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "DERMAdoctor") {
                prod.push(products[i]);
            }
        }
    }
    if (laRocheyPosay.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].brand == "La Rochey Posay") {
                prod.push(products[i]);
            }
        }
    }

    if (clarins.checked == false && eltamd.checked == false && elizabethArden.checked == false && clinique.checked == false && timelessSkinCare.checked == false && filorga.checked == false && marvis.checked == false && dermadoctor.checked == false && laRocheyPosay.checked == false) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare') {
                prod.push(products[i]);
            }
        }
    }
    showProducts(prod);
}

function filterDeals() {
    let low = document.getElementById('Low');
    let best = document.getElementById('Best');
    let products = JSON.parse(localStorage.getItem('products'));
    let prod = [];
    let i = 0;
    if (low.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].deal == "Low") {
                prod.push(products[i]);
            }
        }
    }

    if (best.checked == true) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare' && products[i].deal == "Best") {
                prod.push(products[i]);
            }
        }
    }

    if (low.checked == false && best.checked == false) {
        for (i = 0; i < products.length; i++) {
            if (products[i].category == 'Skincare') {
                prod.push(products[i]);
            }
        }
    }
    showProducts(prod);
}

var bag;
function addToBAg(e) {

    bag = JSON.parse(localStorage.getItem('bag'));

    if (bag == null) {
        bag = [];
    } else {
        bag = JSON.parse(localStorage.getItem('bag'));
    }

    bag.push(e);
    
    localStorage.setItem('bag', JSON.stringify(bag));
}

function leadToProductPage(e) {
    singleProduct = e;
    localStorage.setItem('singleProduct', JSON.stringify(singleProduct));
    window.location.href = "productDetails.html";
}