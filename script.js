const books = [
  {
    id: 1,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: 86000,
    category: "kynang",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/d/n/dntttttuntitled_1.jpg",
    desc: "Đắc nhân tâm là cuốn sách đưa ra các lời khuyên về cách thức giao tiếp và ứng xử với con người trong cuộc sống hàng ngày cực kỳ giá trị.",
  },
  {
    id: 2,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: 79000,
    category: "kynang",
    image:
      "https://www.netabooks.vn/Data/Sites/1/Product/6476/nha-gia-kim-01.jpg",
    desc: "Một cuốn tiểu thuyết mang tính triết lý sâu sắc, theo chân hành trình của cậu bé chăn cừu Santiago đi tìm kiếm kho báu cuộc đời.",
  },
  {
    id: 3,
    title: "Cha Giàu Cha Nghèo (Tập 1)",
    author: "Robert T. Kiyosaki",
    price: 95000,
    category: "kinhte",
    image: "https://media.loveitopcdn.com/1203/sach-cha-giau-cha-ngheo.jpg",
    desc: "Cuốn sách kinh điển dạy tư duy về tài chính, quản lý tiền bạc và cách làm cho tiền bạc làm việc cho chính bạn một cách thông minh.",
  },
  {
    id: 4,
    title: "Kính Vạn Hoa (Phiên Bản Mới)",
    author: "Nguyễn Nhật Ánh",
    price: 125000,
    category: "thieunhi",
    image: "https://www.netabooks.vn/Data/Sites/1/Product/8700/1.jpg",
    desc: "Bộ truyện gắn liền với tuổi thơ của nhiều thế hệ học sinh Việt Nam với những câu chuyện học đường hài hước, kịch tính từ bộ ba Quý ròm, Tiểu Long, Hạnh.",
  },
  {
    id: 5,
    title: "Bí Mật Tư Duy Triệu Phú",
    author: "T. Harv Eker",
    price: 98000,
    category: "kinhte",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/i/m/image_188995_1_1.jpg",
    desc: "Cuốn sách tiết lộ những bí mật tại sao một số người lại đạt được những thành công rực rỡ, trong khi số khác lại chật vật qua ngày.",
  },
  {
    id: 6,
    title: "Thép Đã Tôi Thế Đấy",
    author: "Nikolai A.Ostrovsky",
    price: 105000,
    category: "vanhoc",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/9/7/9786049952012.jpg",
    desc: "Tiểu thuyết khắc họa hành trình từ một thiếu niên bướng bỉnh thành người chiến sĩ Hồng quân kiên cường, người đã vượt qua nghịch cảnh tàn khốc của chiến tranh và bệnh tật để cống hiến trọn vẹn cho lý tưởng cách mạng.",
  },
  {
    id: 7,
    title: "Tâm Lý Học Tội Phạm - Khi Kẻ Yếu Trở Thành Kẻ Săn Mồi",
    author: "Ngưng Thị Thâm Uyên",
    price: 110000,
    category: "kynang",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/8f/9c/89/251c028f79d164782349b983a841b53b.png.webp",
    desc: "Khám phá thế giới nội tâm phức tạp này sẽ mang lại cho bạn cảm giác hồi hộp, rùng rợn nhưng cũng rất lôi cuốn, giúp hiểu rõ hơn về góc khuất đen tối nhất của tâm trí con người.",
  },
  {
    id: 8,
    title: "CM-12 Phía Sau Kế Hoạch Phản Gián",
    author: "Nguyễn Khắc Đức",
    price: 210000,
    category: "vanhoc",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/z/7/z7559362432815_58b7db0644c7ffc7e9378ada6274a2f4_2.jpg",
    desc: "Cuốn sách tái hiện chiến dịch phản gián vĩ đại cùng tên của lực lượng Công an Nhân dân Việt Nam.",
  },
  {
    id: 9,
    title: "Hồi Ức Quảng Trị",
    author: "Nguyễn Thụy Kha",
    price: 83000,
    category: "vanhoc",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-h_i-_c-qu_ng-tr_.jpg",
    desc: "Cuốn sách đưa bạn đọc trở về với mùa hè đỏ lửa năm 1972, khi Thành Cổ Quảng Trị trở thành biểu tượng của sự kiên cường và hy sinh.",
  },
  {
    id: 10,
    title: "Bản Án Chế Độ Thực Dân Pháp",
    author: "Nguyễn Ái Quốc",
    price: 60000,
    category: "vanhoc",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935279172894.jpg",
    desc: "Bản án chế độ thực dân Pháp là một tác phẩm chính luận sâu sắc của Nguyễn Ái Quốc, viết bằng tiếng Pháp và ra mắt lần đầu vào năm 1925 tại Paris, trong bối cảnh cuộc đấu tranh chống lại chế độ thực dân Pháp đang diễn ra mạnh mẽ ở các thuộc địa.",
  },
  {
    id: 11,
    title: "Thư Vào Nam",
    author: "Lê Duẩn",
    price: 89000,
    category: "vanhoc",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134275-7ra0g-m8d5ljbsfdj8e8@resize_w900_nl.webp",
    desc: "Cuốn sách Thư vào Nam của cố Tổng Bí thư Lê Duẩn tập hợp các bức thư và bức điện quan trọng gửi Xứ ủy Nam Bộ, Trung ương Cục và các lãnh đạo chiến trường miền Nam trong giai đoạn kháng chiến chống Mỹ (1961 - 1975).",
  },
  {
    id: 12,
    title: "Tổng Hành Dinh Trong Mùa Xuân Toàn Thắng - Hồi Ức",
    author: "Đại Tướng Võ Nguyên Giáp",
    price: 85000,
    category: "vanhoc",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935279172863.jpg",
    desc: "Cuốn hồi ức Tổng hành dinh trong mùa Xuân toàn thắng gồm 10 chương, trong đó Đại tướng dành chín chương viết về các sự kiện lịch sử lớn của dân tộc và chương cuối cùng trình bày những điều tâm huyết, đúc kết cuộc đời cầm quân quang vinh của mình qua những năm tháng khốc liệt của chiến tranh. Cuốn sách giúp độc giả thấy rõ bản lĩnh và trí tuệ Việt Nam ở những thời điểm lịch sử quyết định: nhạy bén, sáng tạo, quyết đoán, nắm bắt thời cơ và nỗ lực cao độ nhằm quét sạch quân thù.",
  },
  {
    id: 13,
    title: "Thế Giới Còn Đổi Thay, Nhưng Tư Tưởng Hồ Chí Minh Sống Mãi",
    author: "Đại Tướng Võ Nguyên Giáp",
    price: 155000,
    category: "vanhoc",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-821el-mgorqqssfyfgbe",
    desc: "Cuốn sách Thế giới còn đổi thay, nhưng tư tưởng Hồ Chí Minh sống mãi tập hợp một số bài nghiên cứu đã được công bố của Đại tướng Võ Nguyên Giáp về tư tưởng Hồ Chí Minh, một lần nữa khẳng định giá trị lớn lao của tư tưởng Hồ Chí Minh đối với toàn nhân loại, trở thành nền tảng tư tưởng, kim chỉ nam cho hành động của toàn Đảng, toàn quân và toàn dân ta trong mọi thời kỳ cách mạng.",
  },
  {
    id: 14,
    title: "Hoàng Tử Bé",
    author: "Antoine de Saint-Exupéry",
    price: 74000,
    category: "thieunhi",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/5c/e7/68/26838e18d7f96d562d828980520019d2.jpg.webp",
    desc: "Một câu chuyện ngụ ngôn kể về một phi công bị rơi máy bay giữa sa mạc. Tại đây, anh gặp gỡ một cậu bé đến từ tiểu hành tinh B612. Thông qua các chuyến du hành và trò chuyện, cuốn sách truyền tải những bài học triết lý sâu sắc về tình yêu, trách nhiệm và ý nghĩa cuộc sống.",
  },
  {
    id: 15,
    title: "Peter Pan",
    author: "Sir James Matthew Barrie",
    price: 94000,
    category: "thieunhi",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/8/9/8935212367639.jpg",
    desc: "Cuốn sách kể về cậu bé tinh nghịch có khả năng bay lượn và không bao giờ chịu lớn. Cậu sống tại vùng đất thần tiên Neverland cùng các nàng tiên, người thổ dân và nhóm Cậu bé đi lạc. Tại đây, cậu trải qua những cuộc phiêu lưu ly kỳ chống lại Thuyền trưởng Hook hung ác.",
  },
  {
    id: 16,
    title: "Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn",
    author: "Huỳnh Thái Ngọc",
    price: 79000,
    category: "thieunhi",
    image:
      "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043561272_1_1.jpg",
    desc: "Thỏ Bảy Màu là fanpage sở hữu hơn 2,6tr lượt thích trên mạng xã hội. Với hình tượng nhân vật thú vị cùng phong cách sáng tạo độc đáo, Thỏ bảy màu vẫn luôn là thu hút được số lượng lớn người quan tâm thể hiện qua nhiều bài viết với hàng chục nghìn lượt like và share.",
  },
];

let cart = [];
const booksGrid = document.getElementById("booksGrid");
const cartSidebar = document.getElementById("cartSidebar");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const bookModal = document.getElementById("bookModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");

const checkoutModal = document.getElementById("checkoutModal");
const checkoutBtn = document.getElementById("checkoutBtn");
const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
const checkoutForm = document.getElementById("checkoutForm");

function renderBooks(booksList) {
  booksGrid.innerHTML = "";
  if (booksList.length === 0) {
    booksGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#999; margin-top:30px;">Không tìm thấy sách phù hợp.</p>`;
    return;
  }

  booksList.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-img" onclick="openProductDetail(${book.id})">
            <div class="book-info">
                <div class="book-title" onclick="openProductDetail(${book.id})">${book.title}</div>
                <div class="book-author">Tác giả: ${book.author}</div>
                <div class="book-price">${book.price.toLocaleString("vi-VN")}đ</div>
                <button class="btn-add-cart" onclick="addToCart(${book.id})">Thêm vào giỏ</button>
            </div>
        `;
    booksGrid.appendChild(card);
  });
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const category = link.getAttribute("data-category");
    if (category === "all") {
      renderBooks(books);
    } else {
      const filtered = books.filter((b) => b.category === category);
      renderBooks(filtered);
    }
  });
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase().trim();
  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(keyword) ||
      b.author.toLowerCase().includes(keyword),
  );
  renderBooks(filtered);
});

function openProductDetail(id) {
  const book = books.find((b) => b.id === id);
  if (!book) return;

  modalBody.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <div class="modal-info">
            <h2>${book.title}</h2>
            <p style="color:#555; font-style:italic;">Tác giả: ${book.author}</p>
            <h3 style="color:#dc3545; margin: 15px 0;">Giá: ${book.price.toLocaleString("vi-VN")}đ</h3>
            <div class="modal-desc"><strong>Mô tả sơ lược:</strong> <br>${book.desc}</div>
            <button class="btn-add-cart" style="margin-top:15px;" onclick="addToCart(${book.id}); toggleModal(false);">Thêm Vào Giỏ Hàng</button>
        </div>
    `;
  toggleModal(true);
}

function toggleModal(show) {
  if (show) bookModal.classList.add("open");
  else bookModal.classList.remove("open");
}
closeModalBtn.onclick = () => toggleModal(false);
function updateCartUI() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Giỏ hàng trống.</p>`;
    cartCount.innerText = "0";
    cartTotal.innerText = "0đ";
    return;
  }

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${(item.price * item.quantity).toLocaleString("vi-VN")}đ</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    <button class="btn-remove-item" onclick="removeFromCart(${item.id})">Xóa</button>
                </div>
            </div>
        `;
    cartItemsContainer.appendChild(cartItem);
  });

  cartCount.innerText = totalItems;
  cartTotal.innerText = totalPrice.toLocaleString("vi-VN") + "đ";
}

function addToCart(id) {
  const existingProduct = cart.find((item) => item.id === id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const book = books.find((b) => b.id === id);
    cart.push({ ...book, quantity: 1 });
  }
  updateCartUI();
  cartSidebar.classList.add("open");
}

function changeQuantity(id, amount) {
  const product = cart.find((item) => item.id === id);
  if (!product) return;

  product.quantity += amount;
  if (product.quantity <= 0) {
    removeFromCart(id);
  } else {
    updateCartUI();
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
}

cartToggleBtn.onclick = () => cartSidebar.classList.add("open");
closeCartBtn.onclick = () => cartSidebar.classList.remove("open");

checkoutBtn.onclick = () => {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sách trước khi mua.");
    return;
  }
  checkoutModal.classList.add("open");
};

closeCheckoutBtn.onclick = () => checkoutModal.classList.remove("open");

checkoutForm.onsubmit = (e) => {
  e.preventDefault();
  alert(
    "🎉 Đặt hàng thành công! Đơn hàng của bạn đang được Tiệm Sách đóng gói và xử lý.",
  );
  cart = [];
  updateCartUI();
  checkoutModal.classList.remove("open");
  cartSidebar.classList.remove("open");
};
document.addEventListener("DOMContentLoaded", () => {
  renderBooks(books);
});
