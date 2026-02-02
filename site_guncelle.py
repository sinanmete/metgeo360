import os
import json

# Ayarlar
kok_dizin = "." 
cikti_dosyasi = "tours.json"
domain = "https://metgeo360.com"

projeler = []

# Klasörleri tara (kagithane, bubblebee vb.)
for klasor in os.listdir(kok_dizin):
    yol = os.path.join(kok_dizin, klasor)
    
    # Sadece klasörleri al, .git veya assets gibi klasörleri atla
    if os.path.isdir(yol) and not klasor.startswith(".") and klasor != "assets":
        
        # Eğer içinde index.html yoksa bu bir tur değildir, atla
        if not os.path.exists(os.path.join(yol, "index.html")):
            continue

        veriler = {
            "id": klasor,
            "isim": klasor.upper(), # Klasör ismini BÜYÜK HARF yapar
            "url": f"{domain}/{klasor}/",
            "lat": 37.8716, # Varsayılan Konya Enlem
            "lng": 32.4853, # Varsayılan Konya Boylam
            "resim": "" 
        }

        # 1. Koordinat Okuma (koordinat.txt varsa)
        coord_file = os.path.join(yol, "koordinat.txt")
        if os.path.exists(coord_file):
            try:
                with open(coord_file, "r", encoding="utf-8") as f:
                    content = f.read().strip()
                    lat, lng = content.split(",")
                    veriler["lat"] = float(lat.strip())
                    veriler["lng"] = float(lng.strip())
            except:
                print(f"HATA: {klasor} koordinat dosyası bozuk.")

        # 2. Kapak Resmi Bulma
        for img in ["kapak.jpg", "thumbnail.jpg", "cover.png", "arkaplan.jpg"]:
            if os.path.exists(os.path.join(yol, img)):
                veriler["resim"] = f"{klasor}/{img}"
                break
        
        # Eğer resim bulamadıysa ana dizindeki varsayılanı kullan
        if not veriler["resim"]:
            veriler["resim"] = "arkaplan.jpg" 

        projeler.append(veriler)

# JSON dosyasını yaz
with open(cikti_dosyasi, "w", encoding="utf-8") as f:
    json.dump(projeler, f, ensure_ascii=False, indent=4)

print(f"Islem Tamam! {len(projeler)} adet proje haritaya eklendi.")