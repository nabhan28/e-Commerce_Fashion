
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const menu = document.getElementById('menu');

menuBtn?.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn?.addEventListener('click', () => {
    menu.classList.remove('active');
});

const shopData = {
    women: {
        title: "Women's Collection",
        description: "Discover our latest styles for women",
        categories: {
            dresses: {
                name: "Dresses",
                image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800",
                products: [
                    {
                        id: 1,
                        name: "Floral Maxi Dress",
                        price: 189.99,
                        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800",
                        description: "A beautiful floral maxi dress perfect for summer occasions.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.5,
                        reviews: [
                            { name: "Sarah M.", date: "2024-02-15", rating: 5, text: "Beautiful dress! The fabric is high quality and the fit is perfect." },
                            { name: "Emily R.", date: "2024-02-10", rating: 4, text: "Lovely dress but runs slightly large." }
                        ]
                    },
                    {
                        id: 2,
                        name: "Evening Gown",
                        price: 299.99,
                        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800",
                        description: "An elegant evening gown for special occasions.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.8,
                        reviews: [
                            { name: "Jessica T.", date: "2024-02-18", rating: 5, text: "Stunning dress! Perfect for formal events." }
                        ]
                    },
                    {
                        id: 3,
                        name: "Floral Dress",
                        price: 299.99,
                        image: "https://kitristudio.com/cdn/shop/files/1905124PPF_AURORAPINKFLORAL_001_V2.jpg?crop=center&height=2048&v=1740586832&width=1200",
                        description: "Feminine, floaty, and effortlessly elegant—the Aurora Dress is your new wardrobe hero.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 3.2,
                        reviews: [
                            { name: "Rach H", date: "2024-07-18", rating: 4, text: "Stunning dress! Perfect for beach parties." }
                        ]
                    },
                    {
                        id: 4,
                        name: "Maxi Dress",
                        price: 450.00,
                        image: "https://kitristudio.com/cdn/shop/files/aurora-pink-heart-print-maxi-dress-by-kitri-studio-29469106077747.jpg?crop=center&height=2048&v=1740049194&width=1200",
                        description: "retro-inspired pink heart motif printed on a playful pink backdrop.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.3,
                        reviews: [
                            { name: "Polly L", date: "2024-07-18", rating: 4, text: "I recommend this product." },
                            { name: "Emily S", date: "2024-09-06", rating: 4.5, text: "Gorgeous dress, fitted well and looks so stylish. Perfect dress for wedding guest!" }
                        ]
                    },
                    {
                        id: 5,
                        name: "Minii Dress",
                        price: 189.50,
                        image: "https://kitristudio.com/cdn/shop/files/harlow-blurred-floral-mini-dress-by-kitri-studio-29471528779827.jpg?crop=center&height=2048&v=1740049258&width=2048",
                        description: "Short and sweet. Harlow is a Cheongsam-inspired mini dress cut from luxurious viscose satin fabrication.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.2,
                        reviews: [
                            { name: "Beth H", date: "2023-06-23", rating: 4, text: "I have never had so many compliments on a dress before, everyone loved it! It is also true to size." },
                            { name: "Lesley H", date: "2024-01-15", rating: 4.5, text: "its a lovely flattering dress and i like the style very much." }
                        ]
                    },
                    
                ]
            },
            tops: {
                name: "Tops",
                image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800",
                products: [
                    {
                        id: 1,
                        name: "Cuff Shirt",
                        price: 199.00,
                        image: "https://kitristudio.com/cdn/shop/files/2401214W_KIRSTEN_WHITE_084V2.jpg?crop=center&height=2048&v=1740047856&width=2048",
                        description: "Crafted from crisp cotton poplin, her boxy, cropped silhouette is effortlessly modern, while the wide sleeves finished with soft feathered cuffs bring a touch of playful drama.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4,
                        reviews: [
                            { name: "Sarah M.", date: "2024-02-15", rating: 4.1, text: "Beautiful shirt! The fabric is high quality and the fit is perfect." },
                            { name: "Emily R.", date: "2024-02-10", rating: 3.9, text: "Lovely top but runs slightly large." }
                        ]
                    },
                    {
                        id: 2,
                        name: "Demi Black Trailing Floral Print Top",
                        price: 200.00,
                        image: "https://kitristudio.com/cdn/shop/files/demi-black-trailing-floral-print-top-by-kitri-studio-46356471021868.jpg?crop=center&height=2048&v=1740048006&width=2048",
                        description: "Demi's low V-neckline with keyhole details keeps things flirty and her slightly cropped fit brushes the top of your jeans perfectly.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 5,
                        reviews: [
                            { name: "Sally M.", date: "2024-02-15", rating: 5, text: "Beautiful top. Fits perfectly." }
                        ]
                    },
                    {
                        id: 3,
                        name: "Lorna Ivory Alpaca Blend Zip Collar Sweater",
                        price: 229.00,
                        image: "https://kitristudio.com/cdn/shop/files/LornaIvory.jpg?crop=center&height=2048&v=1740050200&width=2048",
                        description: "ivory alpaca blend sweater with a quarter-zip collar and drop shoulder sleeves. ",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.4,
                        reviews: [
                            { name: "Andrea F", date: "2024-07-22", rating: 5, text: "It’s pretty" },
                            { name: "HELEN J", date: "2024-03-12", rating: 1, text: "This one was made of thinner wool and the zip does not run smoothly and is stuck in one position. " }
                            
                        ]
                    },
                    {
                        id: 4,
                        name: "Martha Pink Wave Print Top",
                        price: 199.00,
                        image: "https://kitristudio.com/cdn/shop/files/martha-pink-wave-print-top-by-kitri-studio-44960818528556.jpg?crop=center&height=2048&v=1740048131&width=1200",
                        description: "Her shirred back panel keeps things comfortable with a ruched bust and gently peplumed hem for a playful silhouette.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 3.8,
                        reviews: [
                            { name: "Michelle", date: "2024-07-22", rating: 3.5, text: "Very flattering cut.  Really impressed with the quality." },
                            { name: "Milly T", date: "2024-03-12", rating: 4, text: "Beautiful well made top, colours are incredible. It is quite cropped (I'm 5'8) which I'm happy with but worth sizing up if you want less skin on show " }
                            
                        ]
                    },

                ]
            },
            bottoms: {
                name: "Bottoms",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800",
                products: [
                    {
                        id: 21,
                        name: "High-Waist Jeans",
                        price: 89.99,
                        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800",
                        description: "Classic high-waist jeans with perfect fit.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.8,
                        reviews: [
                            { name: "Emma S.", date: "2024-02-15", rating: 5, text: "Best jeans ever!" }
                        ]
                    },
                    {
                        id: 22,
                        name: "Pleated Skirt",
                        price: 69.99,
                        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800",
                        description: "Elegant pleated skirt for any occasion.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.6,
                        reviews: [
                            { name: "Sophie M.", date: "2024-02-14", rating: 5, text: "Beautiful pleating!" }
                        ]
                    },
                    {
                        id: 23,
                        name: "Wide-Leg Pants",
                        price: 79.99,
                        image: "https://offduty.in/cdn/shop/files/SHEIN_Tall_Pantalon_droit_unicolore_franais_taille_longue_avec_fermeture__glissire__Mode_en_ligne__SHEIN_FRANCE_main_4.jpg?v=1726647321",
                        description: "Comfortable and stylish wide-leg pants.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.5,
                        reviews: [
                            { name: "Rachel H.", date: "2024-02-13", rating: 4, text: "So comfortable!" }
                        ]
                    },
                    {
                        id: 24,
                        name: "Pencil Skirt",
                        price: 59.99,
                        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800",
                        description: "Classic pencil skirt for professional wear.",
                        sizes: ["XS", "S", "M", "L", "XL"],
                        rating: 4.7,
                        reviews: [
                            { name: "Linda B.", date: "2024-02-12", rating: 5, text: "Perfect for work!" }
                        ]
                    },
                ]
            }
        }
    },
    men: {
        title: "Men's Collection",
        description: "Explore our selection for men",
        categories: {
            shirts: {
                name: "Shirts",
                image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800",
                products: [
                    {
                        id: 31,
                        name: "Men's Soft-Hue Shirt Slim Fit",
                        price: 79.99,
                        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTim1x76c_fwZtC_qfHe2E4zpfYFa12kdZX8TPJWZW_vb5eOLFXXoNmDTUpg4j1vEF_JtgLfnICdExlf58JId8mWQPRoP6lviX-HtJaUNd6SJKRcvu00CDN",
                        description: "Timeless white button-up shirt.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.8,
                        reviews: [
                            { name: "John M.", date: "2024-02-15", rating: 5, text: "Perfect fit!" }
                        ]
                    },
                    {
                        id: 32,
                        name: "Denim Shirt",
                        price: 89.99,
                        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsA90ndeDtFiQ8SK3ro-TocOpj9iNTzNw07c_zRuJGwX1ZIK193PSZrhEgr1YDsTybukterXvuuApzWi_yIsTW23DH7hmkO5wf8v5BcpRS&usqp=CAE",
                        description: "Classic denim shirt for casual wear.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.6,
                        reviews: [
                            { name: "Mike R.", date: "2024-02-14", rating: 5, text: "Great quality!" }
                        ]
                    },
                    {
                        id: 33,
                        name: "Men Comfort Spread Collar Casual Shirt",
                        price: 69.99,
                        image: "https://www.snitch.co.in/cdn/shop/files/cd24e9720c0d8f6934d78c9bc3a152cc.jpg?v=1736946217",
                        description: "Classic plaid pattern shirt.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.5,
                        reviews: [
                            { name: "David K.", date: "2024-02-13", rating: 4, text: "Nice pattern!" }
                        ]
                    },
                    {
                        id: 34,
                        name: "Regular Fit Beige Oxford Shirt",
                        price: 84.99,
                        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6Igk-ZQyRykzB60SGPMMxi0giKEmr147X_mc1lRYdB0KCfBOwih9bU9JgfvJCqySOxqWC2T69HxmW80CNZe0HjWpMIsIiFDRCdZil-0XLLM_JMLRl&usqp=CAc",
                        description: "Classic Oxford shirt for formal wear.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.7,
                        reviews: [
                            { name: "Tom B.", date: "2024-02-12", rating: 5, text: "Perfect for work!" }
                        ]
                    },
                    {
                        id: 35,
                        name: "White Linen Shirt",
                        price: 74.99,
                        image: "https://images.unsplash.com/photo-1598961942613-ba897716405b?auto=format&fit=crop&w=800",
                        description: "Breathable linen shirt for summer.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.4,
                        reviews: [
                            { name: "James P.", date: "2024-02-11", rating: 4, text: "Great for summer!" }
                        ]
                    },
                    {
                        id: 36,
                        name: "Striped Oversize Fit Casual Shirt",
                        price: 69.99,
                        image: "https://www.rockstarjeans.com/cdn/shop/files/1_84ff9f7e-2eeb-4291-a3e7-0943779ba819.jpg?v=1688130648",
                        description: "Classic striped pattern shirt.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.3,
                        reviews: [
                            { name: "Robert L.", date: "2024-02-10", rating: 4, text: "Nice design!" }
                        ]
                    }
                ]
            },
            tshirts: {
                name: "T-Shirts",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800",
                products: [
                    {
                        id: 41,
                        name: "Basic White T-Shirt",
                        price: 29.99,
                        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800",
                        description: "Essential white t-shirt for everyday wear.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.5,
                        reviews: [
                            { name: "Jack R.", date: "2024-02-15", rating: 5, text: "Perfect basic tee!" }
                        ]
                    },
                    {
                        id: 42,
                        name: "Graphic T-Shirt",
                        price: 34.99,
                        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSa_NGQruZj0-C3Kp4eNmssqmY-ABlyx-mGP_QlUcJSCTCpRylrqMM-d4D3Zl4FDcw4LqmNTDg0pTqqBsqYXXpferHwJYLqmLT9M58&usqp=CAc",
                        description: "Cool graphic design t-shirt.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.3,
                        reviews: [
                            { name: "Steve M.", date: "2024-02-14", rating: 4, text: "Great design!" }
                        ]
                    },
                    {
                        id: 43,
                        name: "Colourblocked Raglan Sleeves Cotton Oversized T-shirt",
                        price: 24.99,
                        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbFgn4NZdRfLyan6pXSKyjZ8sYUROPkGwCJa0eKjgPAXdar2dTp8OjG8d2HZXylkdBPKu_0S63qTWOT0oMqRgNudP8SVSX2D6NaaRlmiq6GUo892optRG56NT8fGy7-rLz3w&usqp=CAc",
                        description: "Classic v-neck t-shirt.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.4,
                        reviews: [
                            { name: "Brian K.", date: "2024-02-13", rating: 4, text: "Nice fit!" }
                        ]
                    },
                    {
                        id: 44,
                        name: "Striped T-Shirt",
                        price: 32.99,
                        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3INDTUDDgDbLdP1jvYa0sC7fzirDRjt5YjhEcn0XxuSsSRbSF5hyyMzbqBtxhVOj7Gpz0OQwQ5JQos4TkyAhslTTwDFwTYeFC6aH06FdVVNQ1C9IF&usqp=CAc",
                        description: "Classic striped pattern t-shirt.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.6,
                        reviews: [
                            { name: "Alex P.", date: "2024-02-12", rating: 5, text: "Love the stripes!" }
                        ]
                    },
                    {
                        id: 45,
                        name: "Regular Fit Collared T-shirt",
                        price: 39.99,
                        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaxLNadtCpAQobbwNoghWcq1Emb8eOFbFJ_sJ8qgZrlClMB7T3sdKAyJZBodsudKAB2QSCH1X9uERj9mNnuOle0dvt5bRvzwNll8wYX0abjcCqFPUj0WxqnZFA8mR9W0HoBPo&usqp=CAc",
                        description: "Comfortable long sleeve t-shirt.",
                        sizes: ["S", "M", "L", "XL", "XXL"],
                        rating: 4.7,
                        reviews: [
                            { name: "Daniel W.", date: "2024-02-11", rating: 5, text: "Perfect for cooler days!" }
                        ]
                    }
                ]
            },
            bottoms: {
                name: "Bottoms",
                image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800",
                products: [
                    {
                        id: 51,
                        name: "Straight Regular Jeans",
                        price: 89.99,
                        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTte04ulpajr94kWY8pCdqNvHB0B7VlxphAJ2X_COp-Eai-9Lhy5VyaBNaLr3R-TEbhonHIj_0Xfqwu8tgsofjf9Zb_MZHffKu_Nmmb-cm2hlgPcq558_0pZ1_YZZ4en9Fi7J4l&usqp=CAc",
                        description: "Classic fit denim jeans.",
                        sizes: ["30", "32", "34", "36", "38"],
                        rating: 4.7,
                        reviews: [
                            { name: "David M.", date: "2024-02-15", rating: 5, text: "Perfect fit!" }
                        ]
                    },
                    {
                        id: 52,
                        name: "Men Pure Cotton Loose Fit Jeans",
                        price: 69.99,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRD5PaoMh8CIJcoGQF3535I0TAXu5Tzy24A&s",
                        description: "Classic chino pants for casual wear.",
                        sizes: ["30", "32", "34", "36", "38"],
                        rating: 4.5,
                        reviews: [
                            { name: "Robert B.", date: "2024-02-14", rating: 4, text: "Great casual pants!" }
                        ]
                    },
                    {
                        id: 53,
                        name: "Regular Fit Twill cargo trousers",
                        price: 79.99,
                        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNmumWbtXAFJPChVdjFcos_skUnQ9Kfa_7rib2vX63BKK96fcHSd8x4x2QcUlcKLIVj5r2SMv4ks8wEBiojTv7gMJsllQPzCwhuSEWfR_7lQQmpgwMu2mjJKNQSop-4x446r4L&usqp=CAc",
                        description: "Functional cargo pants with multiple pockets.",
                        sizes: ["30", "32", "34", "36", "38"],
                        rating: 4.4,
                        reviews: [
                            { name: "William K.", date: "2024-02-13", rating: 4, text: "Love the pockets!" }
                        ]
                    },
                    {
                        id: 54,
                        name: "Mens Fashion Multi Pocket Casual Breathable Baggy Cargo Pants In Apricot",
                        price: 94.99,
                        image: "https://littleboxindia.com/cdn/shop/files/28d_d3808282-d2fc-45e4-88eb-23cb4910b970_720x.jpg?v=1740750143",
                        description: "Formal dress pants for business wear.",
                        sizes: ["30", "32", "34", "36", "38"],
                        rating: 4.8,
                        reviews: [
                            { name: "James H.", date: "2024-02-12", rating: 5, text: "Perfect for work!" }
                        ]
                    },
                    {
                        id: 55,
                        name: "Slim Fit Jeans",
                        price: 84.99,
                        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/459688/item/ingoods_65_459688_3x4.jpg?width=369",
                        description: "Modern slim fit jeans.",
                        sizes: ["30", "32", "34", "36", "38"],
                        rating: 4.6,
                        reviews: [
                            { name: "Michael P.", date: "2024-02-11", rating: 5, text: "Great fit!" }
                        ]
                    }
                ]
            }
        }
    }
};

let cartCount = 0;
const cartBtn = document.getElementById('cartBtn');

function updateCart() {
    cartCount++;
    cartBtn.textContent = `Cart (${cartCount})`;
}
function selectSize(size) {
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-size="${size}"]`).classList.add('selected');
}
function initProductPage() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const category = params.get('category');
    const subcategory = params.get('subcategory');

    if (!productId || !category || !subcategory) return;

    const product = findProduct(productId, category, subcategory);
    if (!product) return;

    const container = document.getElementById('productContainer');
    if (!container) return;

    container.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info-detail">
            <h2>${product.name}</h2>
            <p class="product-price">$${product.price}</p>
            <div class="size-selection">
                <h3>Select Size</h3>
                <div class="size-options">
                    ${product.sizes.map(size => `
                        <button class="size-option" data-size="${size}" onclick="selectSize('${size}')">${size}</button>
                    `).join('')}
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="updateCart()">Add to Cart</button>
            <p class="product-description">${product.description}</p>
        </div>
    `;
    const reviewsList = document.getElementById('reviewsList');
    if (reviewsList) {
        reviewsList.innerHTML = product.reviews.map(review => `
            <div class="review-item">
                <div class="review-header">
                    <span class="reviewer-name">${review.name}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `).join('');
    }
}

function findProduct(productId, category, subcategory) {
    return shopData[category]?.categories[subcategory]?.products.find(p => p.id === parseInt(productId));
}
function initShopPage() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const subcategory = params.get('subcategory');
    
    const shopTitle = document.getElementById('shopTitle');
    const shopDescription = document.getElementById('shopDescription');
    const categoriesGrid = document.getElementById('categoriesGrid');

    if (!categoriesGrid) return;

    if (category && shopData[category]) {
        const categoryData = shopData[category];
        shopTitle.textContent = categoryData.title;
        shopDescription.textContent = categoryData.description;

        if (subcategory && categoryData.categories[subcategory]) {
            const products = categoryData.categories[subcategory].products;
            categoriesGrid.innerHTML = products.map(product => `
                <div class="product-card">
                    <a href="product.html?category=${category}&subcategory=${subcategory}&id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-info">
                            <h4>${product.name}</h4>
                            <p class="price">$${product.price}</p>
                            <div class="rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}</div>
                        </div>
                    </a>
                </div>
            `).join('');
        } else {
            categoriesGrid.innerHTML = Object.entries(categoryData.categories).map(([key, value]) => `
                <div class="category-card">
                    <a href="shop.html?category=${category}&subcategory=${key}">
                        <img src="${value.image}" alt="${value.name}">
                        <div class="category-info">
                            <h4>${value.name}</h4>
                        </div>
                    </a>
                </div>
            `).join('');
        }
    }
}

if (window.location.pathname.includes('shop.html')) {
    initShopPage();
} else if (window.location.pathname.includes('product.html')) {
    initProductPage();
}
