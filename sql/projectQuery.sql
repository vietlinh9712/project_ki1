INSERT INTO DanhMuc(DanhMucID,TenDanhMuc)
	VALUES('D1','Length Conversion'),
		  ('D2','Area Conversion'),
		  ('D3','Volume Conversion'),
		  ('D4','Mass Conversion'),
		  ('D5','Temperature Conversion')
INSERT INTO DonVi(TenDonVi,DanhMucID,KiHieu)
	VALUES('Inches','D1','in'),
	      ('Feet','D1','ft'),
		  ('Yards','D1','yd'),
		  ('Miles','D1','M'),
		  ('millimeters','D1','mm'),
		  ('Meters','D1','m'),

		  ('Square inches','D2','in�'),
		  ('Square feet','D2','ft�'),
		  ('Square yards','D2','yd�'),
		  ('Acres','D2','ac'),
		  ('Hecrares','D2','Ha'),
		  ('Square miles','D2','M�'),
		  ('Square kilometers','D2','km�'),

		  ('fluid ounces','D3','fl'),
		  ('gallons','D3','gal'),
		  ('cubic feet','D3','ft�'),
		  ('cubic yards','D3','yd� '),

		  ('Ounces','D4','oz'),
		  ('Pounds','D4','lb'),
		  ('short tons','D4','stn'),
		  ('grams','D4','g'),
		  ('kilograms','D4','kg'),
		  ('mega grams','D4','�g'),

		  ('Fahrenheit','D5','�F'),
		  ('Celsius','D5','�C')

INSERT INTO SoSanh(DonViSoSanh,ID,DonViChuan,DanhMucID,TiLe)
	VALUES('km',1,'mm','D1',1000*1000),
		  ('ha',2,'mm','D1',1000*1000*1000),
		  ('m',3,'mm','D1',1000),
		  ('in',4,'mm','D1',25.4)


