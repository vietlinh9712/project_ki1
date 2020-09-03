INSERT INTO QuocGia(TenQuocGia)
	VALUES('Viet Nam'),
		  ('America'),
		  ('Indonesia'),
		  ('Brazil')
INSERT INTO QuocKi(Thumbnail,MaQuocGia)
	VALUES('../images/flags/vietnam-flag-xs.png',1),
		  ('../images/flags/quốc-kỳ-hoa-kỳ-300x214.png',2),
		  ('../images/flags/indonesia-300x203.gif',3),
		  ('../images/flags/quốc-kỳ-brazil-300x210.jpg',4)
INSERT INTO TienTe(FullName,KiHieu,QuocGia)
	VALUES('Viet Nam Dong','VND',1),
		  ('United States Dollar','USD',2),
		  ('Indonesian Rupiah','IDR',3),
		  ('Brazilian Real','BRL',4)
INSERT INTO SoSanh(TenSoSanh,LoaiTienChuan,LoaiQuyDoi,TiLe)
	VALUES('USD-VND',2,1,23231),
	      ('USD-IDR',2,3,14849),
		  ('USD BRL',2,4,5.34)

SELECT * FROM TienTe
SELECT * FROM QuocKi
SELECT * FROM SoSanh


CREATE VIEW view_tiente
AS
SELECT QuocGia.TenQuocGia,TienTe.FullName,TienTe.KiHieu,QuocKi.Thumbnail,SoSanh.*
FROM QuocGia
INNER JOIN QuocKi
ON QuocGia.MaQuocGia = QuocKi.MaQuocGia
INNER JOIN TienTe
ON QuocGia.MaQuocGia = TienTe.QuocGia
INNER JOIN SoSanh
ON TienTe.ID = SoSanh.LoaiQuyDoi

SELECT * FROM view_tiente