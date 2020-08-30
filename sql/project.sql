CREATE DATABASE Project_ki1

CREATE TABLE DanhMuc(
	DanhMucID int IDENTITY(1,1) PRIMARY KEY,
	TenDanhMuc Nvarchar(255)
);
CREATE TABLE DonVi(
	DonViID int IDENTITY(1,1) PRIMARY KEY,
	TenDonVi Nvarchar(25),
	KiHieu Nvarchar(25),
	DanhMucID int FOREIGN KEY REFERENCES DanhMuc(DanhMucID)
);
CREATE TABLE SoSanh(
	MaSoSanh int IDENTITY(1,1),
	TenSoSanh Nvarchar(255),
	DonViQuyDoi int FOREIGN KEY REFERENCES DonVi(DonViID),
	DonViChuan int FOREIGN KEY REFERENCES DonVi(DonViID),
	TiLe float
);
