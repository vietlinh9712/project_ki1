CREATE DATABASE Project

CREATE TABLE DanhMuc(
	DanhMucID varchar(20) PRIMARY KEY,
	TenDanhMuc Nvarchar(255)
);
CREATE TABLE DonVi(
	ID int IDENTITY(1,1) PRIMARY KEY,
	TenDonVi Nvarchar(255),
	DanhMucID varchar(20) FOREIGN KEY REFERENCES DanhMuc(DanhMucID),
	KiHieu varchar(20)
);
CREATE TABLE SoSanh(
	DonViSoSanh Nvarchar(20),
	ID int FOREIGN KEY REFERENCES DonVi(ID),
	DonViChuan Nvarchar(20),
	DanhMucID varchar(20) FOREIGN KEY REFERENCES DanhMuc(DanhMucID),
	TiLe float
);

SELECT * FROM SoSanh
