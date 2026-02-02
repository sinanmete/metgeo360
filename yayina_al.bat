@echo off
color 0A
echo ================================================
echo   METGEO360 OTOMASYON ROBOTU BASLATILIYOR
echo ================================================
echo.

echo [1/3] Python veri taramasi basliyor...
python site_guncelle.py
IF %ERRORLEVEL% NEQ 0 (
    color 0C
    echo.
    echo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    echo   HATA: Python scripti calisirken sorun cikti!
    echo   Lutfen yukaridaki hata mesajini okuyun.
    echo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    pause
    exit /b
)
echo ... Veriler basariyla hazirlandi.
echo.

echo [2/3] Degisiklikler GitHub'a paketleniyor...
git add .
git commit -m "Otomatik guncelleme: %date% %time%"
echo.

echo [3/3] GitHub Sunucusuna Gonderiliyor...
git push
IF %ERRORLEVEL% NEQ 0 (
    color 0C
    echo.
    echo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    echo   HATA: Dosyalar GitHub'a GONDERILEMEDI!
    echo   Internet baglantini veya GitHub girisini kontrol et.
    echo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    pause
    exit /b
)

color 0A
echo.
echo ================================================
echo   ISLEM BASARIYLA TAMAMLANDI!
echo   Siteniz 1-2 dakika icinde guncellenecektir.
echo ================================================
pause