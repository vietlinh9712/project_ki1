CREATE DATABASE T2004E_NhomViet

CREATE TABLE T2004E_NhomViet_DanhMuc(
	DanhMucID int IDENTITY(1,1) PRIMARY KEY,
	TenDanhMuc Nvarchar(255)
);
CREATE TABLE T2004E_NhomViet_DonVi(
	DonViID int IDENTITY(1,1) PRIMARY KEY,
	TenDonVi Nvarchar(50) unique,
	KiHieu Nvarchar(50),
	DoPhoBien int CHECK(DoPhoBien IN(0,1,2,3)),
	DanhMucID int FOREIGN KEY REFERENCES T2004E_NhomViet_DanhMuc(DanhMucID)
);
CREATE TABLE T2004E_NhomViet_SoSanh(
	MaSoSanh int IDENTITY(1,1) PRIMARY KEY,
	TenSoSanh Nvarchar(255),
	DonViQuyDoi Nvarchar(50) FOREIGN KEY REFERENCES T2004E_NhomViet_DonVi(TenDonVi),
	DonViChuan Nvarchar(50) FOREIGN KEY REFERENCES T2004E_NhomViet_DonVi(TenDonVi),
	DanhMucID int FOREIGN KEY REFERENCES T2004E_NhomViet_DanhMuc(DanhMucID),
	TiLe float
);
CREATE TABLE T2004E_NhomViet_QuocGia( 
	MaQuocGia int IDENTITY(1,1) PRIMARY KEY,
	TenQuocGia Nvarchar(255),
	QuocKi Nvarchar(255)
);
