CREATE PROCEDURE search_name_measure @keyword varchar(255)
AS
	IF EXISTS(SELECT * FROM T2004E_NhomViet_DonVi WHERE TenDonVi like @keyword OR KiHieu like @keyword)
		SELECT * FROM T2004E_NhomViet_DonVi WHERE TenDonVi like @keyword OR KiHieu like @keyword

CREATE PROCEDURE getTopCurrency
AS
	SELECT * FROM T2004E_NhomViet_DonVi AS DonVi WHERE DanhMucID = 6
	INNER JOIN T2004E_NhomViet_SoSanh AS SoSanh
	ON DonVi.DanhMuc

SELECT * FROM T2004E_NhomViet_DonVi
SELECT * FROM T2004E_NhomViet_SoSanh
SELECT * FROM T2004E_NhomViet_