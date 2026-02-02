@echo off
echo ----------------------------------------
echo METGEO360 OTOMATIK GUNCELLEME SISTEMI
echo ----------------------------------------
echo.
echo 1. Klasorler taraniyor ve harita verileri olusturuluyor...
python site_guncelle.py
echo.
echo 2. Degisiklikler GitHub'a gonderiliyor...
git add .
git commit -m "Yeni proje eklendi ve harita guncellendi"
git push
echo.
echo ----------------------------------------
echo ISLEM TAMAM! Siteniz 1 dakika icinde guncellenecek.
echo ----------------------------------------
pause