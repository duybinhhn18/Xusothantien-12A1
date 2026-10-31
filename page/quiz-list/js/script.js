// Lấy tất cả các nút môn học
const buttons = document.querySelectorAll('.body__sidebar--subject-head');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Tìm đúng cái bảng <ul> nằm ngay bên dưới nút vừa bấm
    const currentSubmenu = button.nextElementSibling;

    // TÙY CHỌN: Nếu muốn bấm nút mới thì tự động đóng các bảng cũ lại, 
    // hãy bỏ comment (//) ở đoạn code dưới đây:
    document.querySelectorAll('.body__sidebar--subject-tests').forEach(sub => {
      if (sub !== currentSubmenu) sub.classList.remove('open');
    });
    buttons.forEach(btn => {
      if (btn !== button) btn.classList.remove('active');
    });

    // Bật/tắt bảng của nút hiện tại
    currentSubmenu.classList.toggle('open');
    button.classList.toggle('active');
  });
});