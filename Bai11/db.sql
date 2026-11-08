-- Câu lệnh tạo database
-- create database + tên datab

create database Netflix if not exists Netflix;
create table 

-- phim
    id int; --key
    ten_phim varchar(100);
    thoi_luong int;
    nam int;
    gioi_thieu varchar(255);
    dao_dien_id int;

create table if not exists phim (
    id int auto_increment primary key,
    ten_phim varchar(100),
    thoi_luong int,
    nam int,
    gioi_thieu varchar(255),
    dao_dien_id int,
);

-- phim_dien_vien
    id int; --key
    phim_id int;
    dien_vien_id int;

create table if not exists phim_dien_vien(
    id int auto_increment primary key,
    phim_id int not null,
    dien_vien_id int not null,
);

--phim_the_loai
    id int; --key
    phim_id int;
    dien_vien_id int;

create table if not exists phim_the_loai(
    id int auto_increment primary key,
    phim_id int not null,
    dien_vien_id int not null,
);

-- nguoi_dung
    id int; --key
    ten_dang_nhap varchar(50);
    mat_khau varchar(30);
    email varchar(50);
    so_dien_thoai varchar(10);

create table if not exists nguoi_dung(
    id int auto_increment primary key,
    ten_dang_nhap varchar(50) not null,
    mat_khau varchar(30) not null,
    email varchar(50) not null,
    so_dien_thoai varchar(10) not null,
);

-- dao_dien
    id int; --key
    ten varchar(50);

create table if not exists dao_dien(
    id int auto_increment primary key,
    ten varchar(50) not null,
);

-- the_loai
    id int; --key
    ten_dao_dien varchar(50);

create table if not exists the_loai(
    id int auto_increment primary key,
    ten_dao_dien varchar(50) not null;
)

-- dien_vien
    id int; --key
    ten_dien_vien varchar(50);

create table if not exists dien_vien(
    id int auto_increment primary key,
    ten_dien_vien varchar(50),
);

-- quoc_gia
    id int; --key
    ten_quoc_gia varchar(50);

create table if not exists quoc_gia(
    id int auto_increment primary key,
    ten_quoc_gia varchar(50),
);