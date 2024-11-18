const flashDealsProducts = [
  {
    image:
      "https://res.cloudinary.com/dj3qdir59/image/upload/v1709756141/techmart/gaming-mouse.webp",
    name: "Gaming Mouse Pro X",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    rating: 4.5,
    reviews: 256,
    sold: 3120,
  },
  {
    image:
      "https://res.cloudinary.com/dj3qdir59/image/upload/v1709756141/techmart/webcam-4k.webp",
    name: "4K Webcam Ultra",
    price: 79.99,
    originalPrice: 159.99,
    discount: 50,
    rating: 4,
    reviews: 167,
    sold: 890,
  },
  {
    image:
      "https://res.cloudinary.com/dj3qdir59/image/upload/v1709756141/techmart/keyboard-rgb.webp",
    name: "Mechanical Keyboard RGB",
    price: 89.99,
    originalPrice: 179.99,
    discount: 50,
    rating: 5,
    reviews: 445,
    sold: 4567,
  },
  {
    image:
      "https://res.cloudinary.com/dj3qdir59/image/upload/v1709756141/techmart/portable-ssd.webp",
    name: "Portable SSD 1TB",
    price: 129.99,
    originalPrice: 249.99,
    discount: 48,
    rating: 4.5,
    reviews: 334,
    sold: 2234,
  },
  {
    image:
      "https://res.cloudinary.com/dj3qdir59/image/upload/v1709756141/techmart/gaming-headset.webp",
    name: "Wireless Gaming Headset",
    price: 69.99,
    originalPrice: 139.99,
    discount: 50,
    rating: 4,
    reviews: 223,
    sold: 1678,
  },
];

// Product generation helpers
const productTypes = [
  "Laptop",
  "Smartphone",
  "Tablet",
  "Smartwatch",
  "Headphones",
  "Speaker",
  "Camera",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Microphone",
  "Webcam",
  "Router",
  "Storage",
  "Power Bank",
];
const brands = [
  "TechPro",
  "SmartX",
  "EliteGear",
  "NextGen",
  "PrimeTech",
  "UltraMax",
  "CoreTech",
  "PowerTech",
  "InnovatePro",
  "FutureTech",
];
const features = [
  "Wireless",
  "Pro",
  "Ultra",
  "Elite",
  "Premium",
  "Advanced",
  "Smart",
  "Professional",
  "Gaming",
  "4K",
  "HD",
  "Portable",
];

const images = {
  Laptop: [
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
  ],
  Smartphone: [
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
  ],
  Headphones: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29",
  ],
  Smartwatch: [
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
    "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
  ],
  Camera: [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
    "https://images.unsplash.com/photo-1581591524425-c7e0978865fc",
  ],
  Monitor: [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    "https://images.unsplash.com/photo-1551645120-d70bfe84c826",
    "https://images.unsplash.com/photo-1585792180666-f7347c490ee2",
  ],
  Keyboard: [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    "https://images.unsplash.com/photo-1595225476474-87563907a212",
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
  ],
  Mouse: [
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
    "https://images.unsplash.com/photo-1563297007-0686b7003af7",
  ],
};

function generateRandomProduct() {
  const type = productTypes[Math.floor(Math.random() * productTypes.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const feature = features[Math.floor(Math.random() * features.length)];
  const name = `${brand} ${feature} ${type}`;

  // Get relevant image based on product type
  let image;
  if (images[type]) {
    const typeImages = images[type];
    image = typeImages[Math.floor(Math.random() * typeImages.length)];
    // Add Unsplash parameters for optimization
    image += "?auto=format,compress&q=90&w=400&fit=crop";
  } else {
    // Fallback image if type not found
    image =
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format,compress&q=90&w=400&fit=crop";
  }

  // Generate random price between 29.99 and 1999.99
  const price = (Math.random() * (1999.99 - 29.99) + 29.99).toFixed(2);
  const discount = Math.floor(Math.random() * 30) + 20; // 20-50% discount
  const originalPrice = (price / (1 - discount / 100)).toFixed(2);

  // Generate random rating and reviews
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 500) + 1;
  const sold = Math.floor(Math.random() * 5000) + 100;

  return {
    image,
    name,
    price: Number(price),
    originalPrice: Number(originalPrice),
    discount,
    rating: Number(rating),
    reviews,
    sold,
  };
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = "★".repeat(fullStars);
  if (hasHalfStar) stars += "☆";
  while (stars.length < 5) stars += "☆";
  return stars;
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className =
    "product-card border rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300 ease-in-out opacity-0";

  setTimeout(() => {
    card.classList.remove("opacity-0");
    card.classList.add("opacity-100");
  }, 50);

  card.innerHTML = `
    <div class="relative group">
      <img 
        src="${product.image}" 
        alt="${product.name}" 
        class="w-full h-48 object-contain p-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
        ${product.discount}% OFF
      </span>
    </div>
    <div class="p-3">
      <h3 class="font-medium text-sm mb-1 line-clamp-2 h-10">${
        product.name
      }</h3>
      <div class="flex items-center mb-1">
        <div class="flex text-yellow-400">${generateStars(product.rating)}</div>
        <span class="ml-1 text-xs text-gray-500">(${product.reviews})</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <span class="font-bold text-base">$${product.price}</span>
          <span class="text-xs text-gray-500 line-through">$${
            product.originalPrice
          }</span>
        </div>
      </div>
      <p class="text-xs text-gray-500 mt-1">${product.sold.toLocaleString()} sold</p>
      <button class="w-full bg-[#1a1f2c] text-white py-1.5 rounded text-sm mt-2 hover:bg-[#2a2f3c] transition-colors duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]">
        Add to Cart
      </button>
    </div>
  `;

  return card;
}

// Add some CSS to your HTML head
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .product-card {
    transform: translateY(0);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .product-card-animation {
    animation: fadeInUp 0.6s ease-out forwards;
  }
`;
document.head.appendChild(style);

// Modified insert function for initial products
const flashDealsContainer = document.querySelector("section:first-child .grid");
flashDealsProducts.forEach((product, index) => {
  const card = createProductCard(product);
  card.style.animationDelay = `${index * 100}ms`;
  card.classList.add("product-card-animation");
  flashDealsContainer.appendChild(card);
});

// Modified infinite scroll functionality
let isLoading = false;
let loadingIndicator = null;

function createLoadingIndicator() {
  const indicator = document.createElement("div");
  indicator.className = "flex justify-center items-center py-4 col-span-full";
  indicator.innerHTML = `
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1a1f2c]"></div>
  `;
  return indicator;
}

const loadMoreProducts = () => {
  if (isLoading) return;

  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate trigger point based on viewport width
  // For mobile (<768px): trigger when 1.5x viewport height from bottom
  // For tablets (768px-1024px): trigger when 600px from bottom
  // For desktop (>1024px): trigger when 1000px from bottom
  let triggerOffset;
  if (viewportWidth < 768) {
    triggerOffset = viewportHeight * 1.5; // This makes it trigger much earlier on mobile
  } else if (viewportWidth < 1024) {
    triggerOffset = 600;
  } else {
    triggerOffset = 1000;
  }

  const scrollPosition = window.innerHeight + window.scrollY;
  const pageEnd = document.documentElement.offsetHeight - triggerOffset;

  if (scrollPosition >= pageEnd) {
    isLoading = true;

    // Show loading indicator
    if (!loadingIndicator) {
      loadingIndicator = createLoadingIndicator();
      flashDealsContainer.appendChild(loadingIndicator);
    }

    // Simulate network delay for smooth loading experience
    setTimeout(() => {
      // Generate 4 new random products
      const newProducts = Array(4)
        .fill()
        .map(() => generateRandomProduct());

      // Remove loading indicator
      if (loadingIndicator) {
        loadingIndicator.remove();
        loadingIndicator = null;
      }

      // Add new products with staggered animation
      newProducts.forEach((product, index) => {
        const card = createProductCard(product);
        card.style.animationDelay = `${index * 100}ms`;
        card.classList.add("product-card-animation");
        flashDealsContainer.appendChild(card);
      });

      isLoading = false;
    }, 800);
  }
};

// Debounce scroll event for better performance
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(loadMoreProducts, 100);
});
