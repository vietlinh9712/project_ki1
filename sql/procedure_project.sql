CREATE PROCEDURE search_name_measure @keyword varchar(255)
AS
	IF EXISTS(SELECT * FROM T2004E_NhomViet_DonVi WHERE TenDonVi like @keyword OR KiHieu like @keyword)
		SELECT * FROM T2004E_NhomViet_DonVi WHERE TenDonVi like @keyword OR KiHieu like @keyword