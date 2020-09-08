INSERT INTO DanhMuc(TenDanhMuc)
	VALUES('Length'),
		  ('Area'),
		  ('Volume'),
		  ('Mass'),
		  ('Temperature')
INSERT INTO T2004E_NhomViet_DonVi(TenDonVi,KiHieu,DanhMucID)
	VALUES('Inches','in',1),
	      ('Feet','ft',1),
		  ('Yards','yd',1),
		  ('Miles','M',1),
		  ('millimeters','mm',1),
		  ('Meters','m',1),
		  ('kilometers','km',1),
		  ('centimeters','cm',1),

		  ('Square inches','in²',2),
		  ('Square feet','ft²',2),
		  ('Square yards','yd²',2),
		  ('Acres','ac',2),
		  ('Hecrares','Ha',2),
		  ('Square miles','M²',2),
		  ('Square kilometers','km²',2),

		  ('fluid ounces','fl',3),
		  ('gallons','gal',3),
		  ('cubic feet','ft³',3),
		  ('cubic yards','yd³',3),

		  ('Ounces','oz',4),
		  ('Pounds','lb',4),
		  ('short tons','stn',4),
		  ('grams','g',4),
		  ('kilograms','kg',4),
		  ('mega grams','µg',4),

		  ('Fahrenheit','°F',5),
		  ('Celsius','°C',5)
INSERT INTO T2004E_NhomViet_SoSanh(TenSoSanh,DonViQuyDoi,DonViChuan,DanhmucID,TiLe)
	VALUES('inch to met','Inches','Meters',1,0.0254),
		  ('feet to met','Feet','Meters',1,0.3048),
		  ('yard to met','Yards','Meters',1,0.9144),
		  ('Mile to met','Miles','Meters',1,1609),
		  ('millimet to met','millimeters','Meters',1,0.001),
		  ('kilomet to met','kilometers','Meters',1,1000),
		  ('centimet to met','centimeters','Meters',1,0.01)
		  ('met to met','Meters','Meters',1,1)

SELECT * FROM DanhMuc
SELECT * FROM T2004E_NhomViet_DonVi
SELECT * FROM T2004E_NhomViet_SoSanh

CREATE VIEW view_so_sanh
AS
SELECT DonVi.DanhMucID,DanhMuc.TenDanhMuc,SoSanh.*
FROM DonVi
INNER JOIN DanhMuc
ON DonVi.DanhMucID = DanhMuc.DanhMucID
INNER JOIN SoSanh
ON DonVi.DonViID = SoSanh.DonViQuyDoi

SELECT * FROM view_so_sanh