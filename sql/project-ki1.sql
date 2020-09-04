CREATE DATABASE Project_ki1

CREATE TABLE DanhMuc(
	DanhMucID int IDENTITY(1,1) PRIMARY KEY,
	TenDanhMuc Nvarchar(255)
);
CREATE TABLE DonVi(
	ID int IDENTITY(1,1) PRIMARY KEY,
	TenDonVi Nvarchar(225),
	KiHieu Nvarchar(25),
	DanhMucID int FOREIGN KEY REFERENCES DanhMuc(DanhMucID),
);
CREATE TABLE SoSanh(
	MaSoSanh int IDENTITY(1,1) PRIMARY KEY,
	TenSoSanh Nvarchar(255),
	DanhMucID int FOREIGN KEY REFERENCES DanhMuc(DanhMucID),
	ID int FOREIGN KEY REFERENCES DonVi(ID),
	DonViQuyDoi Nvarchar(25),
	DonViChuan Nvarchar(25),
	TiLe float
);
CREATE TABLE QuocGia( 
	MaQuocGia int IDENTITY(1,1) PRIMARY KEY,
	TenQuocGia Nvarchar(255),
);
CREATE TABLE QuocKi(
	QuocKiID int IDENTITY(1,1) PRIMARY KEY,
	Thumbnail varchar(255),
	MaQuocGia int FOREIGN KEY REFERENCES QuocGia(MaQuocGia)
);