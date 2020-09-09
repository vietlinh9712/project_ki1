CREATE PROCEDURE T2004E_NhomViet_search_name_measure @keywords varchar(255)
AS
	IF EXISTS(SELECT * FROM T2004E_NhomViet_DonVi WHERE TenDonVi like @keywords OR KiHieu like @keywords)
		SELECT TOP(6) * FROM T2004E_NhomViet_DonVi
		INNER JOIN T2004E_NhomViet_DanhMuc
		ON T2004E_NhomViet_DonVi.DanhMucID = T2004E_NhomViet_DanhMuc.DanhMucID
		WHERE T2004E_NhomViet_DonVi.TenDonVi like @keywords OR T2004E_NhomViet_DonVi.KiHieu like @keywords
		ORDER BY T2004E_NhomViet_DonVi.TenDonVi ASC

CREATE PROCEDURE T2004E_NhomViet_getTopCurrency
AS
	SELECT TOP(10) * FROM T2004E_NhomViet_DonVi AS DonVi
	INNER JOIN T2004E_NhomViet_SoSanh AS SoSanh
	ON DonVi.DonViID = SoSanh.DonViQuyDoi
	INNER JOIN T2004E_NhomViet_DanhMuc AS DanhMuc
	ON DanhMuc.DanhMucID = DonVi.DanhMucID
	INNER JOIN T2004E_NhomViet_QuocGia AS QuocGia
	ON DonVi.DonViID = QuocGia.DonViID
	WHERE DanhMuc.TenDanhMuc = 'Currency'
	ORDER BY SoSanh.TiLe DESC

DROP PROCEDURE T2004E_NhomViet_getTopCurrency

SELECT * FROM T2004E_NhomViet_DonVi
SELECT * FROM T2004E_NhomViet_SoSanh
SELECT * FROM T2004E_NhomViet_DanhMuc

	SELECT T2004E_NhomViet_DonVi.DoPhoBien, T2004E_NhomViet_SoSanh.TenSoSanh,T2004E_NhomViet_SoSanh.DonViQuyDoi,T2004E_NhomViet_SoSanh.DonViChuan,T2004E_NhomViet_SoSanh.DanhMucID,T2004E_NhomViet_SoSanh.TiLe FROM T2004E_NhomViet_SoSanh
	INNER JOIN T2004E_NhomViet_DanhMuc
	ON T2004E_NhomViet_DanhMuc.DanhMucID = T2004E_NhomViet_SoSanh.DanhMucID
	INNER JOIN T2004E_NhomViet_DonVi
	ON T2004E_NhomViet_DonVi.DonViID = T2004E_NhomViet_SoSanh.DonVIQuyDoi 
	WHERE T2004E_NhomViet_DanhMuc.TenDanhMuc = 'Length'