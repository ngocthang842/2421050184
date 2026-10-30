       var danhSachBaiHat = [
        {
            id: 1,
            ten: "3 PHẢI 6 ĐỪNG",
            duongDanAnh:"3 phai 6 dung.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/INJuqE_34eQ?si=X0ED3G_iiIwF0tF3",
        },

        {
            id: 2,
            ten: "Xuân Thì (OST Hẹn Em Ngày Nhật Thực)",
            duongDanAnh:"Hen_em_ngay_nhat_thuc.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/UbhxtQybTFo?si=xJel2a5_UtbhhyCr",
        },

        {
            id: 3,
            ten: "Quốc Thiên - Hoa Và Váy",
            duongDanAnh:"hoa_va_vay.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/UAYA8DxU3uM?si=II6ZCPmTtwXHjsos",
        },

        {
            id: 4,
            ten: "KẺ ĐIÊN TIN VÀO TÌNH YÊU ",
            duongDanAnh:"ke_dien_tin_vao_tinh_yeu.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/JKwO77UUEYk?si=NJn46qHPSNEy1wbf",
        }
    ];

    function chonBai(id) {
        for (let i = 0; i < danhSachBaiHat.length; i++) {
            if(danhSachBaiHat[i].id == id){
                document.getElementsByClassName("video")[0].src =danhSachBaiHat[i].duongDanYoutube
            }
        }
    }