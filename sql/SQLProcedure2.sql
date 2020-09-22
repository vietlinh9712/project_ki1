	SELECT * FROM T2004E_NhomViet_MoTa

CREATE PROCEDURE T2004E_NhomViet_searchAllUnit @keyword Nvarchar(255)
AS
	SELECT * FROM T2004E_NhomViet_DonVi AS DonVi
	INNER JOIN T2004E_NhomViet_DanhMuc AS DanhMuc
	ON DanhMuc.DanhMucID = DonVi.DanhMucID
	WHERE LOWER(DonVi.TenDonVi) like @keyword OR LOWER(DonVi.KiHieu) like @keyword

CREATE PROCEDURE T2004E_NhomViet_getAllUnitByType @type Nvarchar(255)
AS
	SELECT * FROM T2004E_NhomViet_DonVi AS DonVi
		INNER JOIN T2004E_NhomViet_DanhMuc As DanhMuc
		ON DanhMuc.DanhMucID = DonVi.DanhMucID 
		INNER JOIN T2004E_NhomViet_SoSanh AS SoSanh
		ON SoSanh.DonViQuyDoi = DonVi.DonViID
		WHERE DanhMuc.TenDanhMuc = @type

CREATE PROCEDURE T2004E_NhomViet_searchUnitSameType @type Nvarchar(255), @keyword Nvarchar(255)
AS
	SELECT * FROM T2004E_NhomViet_DonVi AS DonVi
	INNER JOIN T2004E_NhomViet_DanhMuc AS DanhMuc
	ON DanhMuc.DanhMucID = DonVi.DonViID
	WHERE DonVi.TenDonVi like @keyword OR DonVi.KiHieu like @keyword AND DanhMuc.TenDanhMuc like @type


CREATE PROCEDURE T2004E_NhomViet_searchUnitSameKeyword @keyword Nvarchar(255)
AS
	SELECT * FROM T2004E_NhomViet_DonVi AS DonVi
	INNER JOIN T2004E_NhomViet_DanhMuc AS DanhMuc
	ON DonVi.DanhMucID = DanhMuc.DanhMucID
	INNER JOIN T2004E_NhomViet_MoTa AS MoTa
	ON DonVi.DonViID = MoTa.DonViID
	WHERE DonVi.TenDonVi like @keyword OR DonVi.KiHieu like @keyword