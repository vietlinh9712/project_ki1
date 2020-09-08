INSERT INTO T2004E_NhomViet_DanhMuc(TenDanhMuc)
	VALUES('Length'),
		  ('Area'),
		  ('Volume'),
		  ('Mass'),
		  ('Temperature'),
		  ('Currency')

INSERT INTO T2004E_NhomViet_QuocGia(TenQuocGia,QuocKi)
	VALUES('Romania','../images/flags/2000px-Flag_of_Romania.svg_-300x200.png'),
		  ('Switzerland','../images/flags/3857101_640px-300x200.jpg'),
		  ('Russian','../images/flags/2096155911-300x201.jpg'),
		  ('America','../images/flags/quốc-kỳ-hoa-kỳ-300x214.png')

INSERT INTO T2004E_NhomViet_DonVi(TenDonVi,KiHieu,DoPhoBien,DanhMucID,QuocGia)
	VALUES('Inches','in',2,1,NULL),
	      ('Feet','ft',3,1,NULL),
		  ('Meters','m',3,1,NULL),

		  ('Square inches','in²',3,2,NULL),
		  ('Square feet','ft²',3,2,NULL),
		  ('Square meters','m²',1,2,NULL),

		  ('fluid ounces','fl',0,3,NULL),
		  ('gallons','gal',0,3,NULL),
		  ('cubic feet','ft³',1,3,NULL),

		  ('short tons','stn',2,4,NULL),
		  ('Ounces','oz',0,4,NULL),
		  ('Pounds','lb',2,4,NULL),
		

		  ('Fahrenheit','°F',1,5,NULL),
		  ('Celsius','°C',1,5,NULL),

		  ('Romanian Leu','RON',NULL,6,'Romania'),
		  ('Swiss Franc','CHF',NULL,6,'Switzerland'),
		  ('Russian Ruble','RUB',NULL,6,'Russian'),
		  ('United States Dollar','USD',NULL,6,'America')


INSERT INTO T2004E_NhomViet_SoSanh(TenSoSanh,DonViQuyDoi,DonViChuan,DanhMucID,TiLe)
	VALUES('inch to met','Inches','Meters',1,0.0254),
		  ('feet to met','Feet','Meters',1,0.3048),

		  ('in² to m²','Square inches','Square meters',2,0.00064516),
		  ('ft² to m²','Square feet','Square meters',2,0.092903),

		  ('fl to ft³','fluid ounces','cubic feet',3,0.001044),
		  ('gal to ft³','gallons','cubic feet',3,0.133681),

		  ('stn to lb','short tons','Pounds',4,14),
		  ('oz to lb','Ounces','Pounds',4,0.0625),

		  ('°F to °C','Fahrenheit','Celsius',5,0),
		  ('°C to °F','Celsius','Fahrenheit',5,89.6),

		  ('RON to USD','Romanian Leu','United States Dollar',6,0.243587),
		  ('CHF to USD','Swiss Franc','United States Dollar',6,1.09451),
		  ('RUB to USD','Russian Ruble','United States Dollar',6,0.0131361)


SELECT * FROM T2004E_NhomViet_DanhMuc
SELECT * FROM T2004E_NhomViet_QuocGia
SELECT * FROM T2004E_NhomViet_DonVi
SELECT * FROM T2004E_NhomViet_SoSanh