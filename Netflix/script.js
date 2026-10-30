var danhSachPhim = [
    {
        id: 1,
        ten: "3 PHẢI 6 ĐỪNG",
        anhBanner: "../Ảnh/3 phai 6 dung.jpg",
    },
    {
        id: 2,
        ten: "Hẹn Em Ngày Nhật Thực",
        anhBanner: "../Ảnh/Hen_em_ngay_nhat_thuc.jpg",
    },
    {
        id: 3,
        ten: "Kẻ điên tin vào tình yêu",
        anhBanner: "../Ảnh/ke_dien_tin_vao_tinh_yeu.jpg",
    },
    {
        id: 4,
        ten: "Hoa và váy",
        anhBanner: "../Ảnh/hoa_va_vay.jpg",
    },
    {
        id: 5,
        ten: "Bóng chuyền",
        anhBanner: "../Ảnh/bong_chuyen.jpg",
    },
];
  
function chonPhim(id) {
    for (let i = 0; i < danhSachPhim.length; i++) {
        if (danhSachPhim[i].id == id) {
            document.getElementsByClassName("banner-img")[0].src = danhSachPhim[i].anhBanner;
        }
    }
}