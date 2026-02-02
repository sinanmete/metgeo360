@echo off
color 0B
echo ================================================
echo   YEREL ON IZLEME MODU (OFFLINE)
echo ================================================
echo.

echo [1/2] Veriler tazeleniyor (Json guncelleme)...
python site_guncelle.py
echo.

echo [2/2] Sanal Sunucu Baslatiliyor...
echo.
echo Tarayiciniz birazdan otomatik acilacak.
echo Kapatmak icin bu siyah pencereyi kapatmaniz yeterli.
echo.

REM Tarayıcıyı 2 saniye sonra aç (Sunucu kendine gelsin diye)
timeout /t 2 >nul
start http://localhost:8000

REM Sunucuyu başlat
python -m http.server 8000
pause