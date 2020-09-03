CREATE TABLE QuocGia( 
	MaQuocGia int IDENTITY(1,1) PRIMARY KEY,
	TenQuocGia Nvarchar(255),
);
CREATE TABLE QuocKi(
	QuocKiID int IDENTITY(1,1) PRIMARY KEY,
	Thumbnail varchar(255),
	MaQuocGia int FOREIGN KEY REFERENCES QuocGia(MaQuocGia)
);

CREATE TABLE TienTe(
	ID int IDENTITY(1,1) PRIMARY KEY,
	FullName Nvarchar(255),
	KiHieu Nvarchar(20),
	QuocGia int FOREIGN KEY REFERENCES QuocGia(MaQuocGia)
);
CREATE TABLE SoSanh(
	MaSoSanh int IDENTITY(1,1) PRIMARY KEY,
	TenSoSanh Nvarchar(255),
	LoaiTienChuan int FOREIGN KEY REFERENCES TienTe(ID),
	LoaiQuyDoi int FOREIGN KEY REFERENCES TienTe(ID),
	TiLe float
);