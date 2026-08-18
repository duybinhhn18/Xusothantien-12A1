window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// function checkScreenSize() {
//   if (window.innerWidth < 796) {
//     document.body.innerHTML =
//       '<h1 style = "color:white; text-align:center; font-size: 2rem">Xin lỗi, hiện tại bản mobile của web đang phát triển. <br> Vui lòng sử dụng màn hình to hơn hoặc xoay ngang trình duyệt.</h1>';
//   }
// }

// // Kiểm tra ngay khi tải trang
// checkScreenSize();

// // Kiểm tra lại nếu người dùng thay đổi kích thước trình duyệt
// window.addEventListener("resize", checkScreenSize);
