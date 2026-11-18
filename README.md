# historycleaner.app — web sitesi

Site `tools/site/` içindeki kaynaklardan üretilir ve `website/` klasörüne yazılır. **`website/` içini elle düzenlemeyin**, her derlemede silinip yeniden oluşturulur.

| Dosya | İçerik |
|---|---|
| `site.config.mjs` | Satıcı adı, e-posta, fiyat, iade süresi, Chrome Web Store linki, Paddle ödeme linki |
| `content.mjs` | Tüm metinler (EN/TR) ve yasal sayfalar (gizlilik, şartlar, iade) |
| `site.css` | Stil |

```
cd tools
npm run store-assets   # (arayüz değiştiyse) ekran görüntülerini yeniler
npm run site           # website/ + privacy-policy.txt üretir
npm run site:preview   # http://localhost:4173
node site/check-site.mjs   # tüm sayfaları, linkleri, görselleri ve mobil taşmayı kontrol eder
```

`privacy-policy.txt` da aynı kaynaktan üretilir; politikayı yalnızca `content.mjs` içinde değiştirin.

## Yayına alma (Hostinger)

### A) Hostinger'da web hosting paketiniz varsa (en kolay)
1. hPanel → **Websites** → historycleaner.app → **File Manager**
2. `public_html` klasörünü açın, içinde varsayılan dosya varsa silin.
3. `website/` klasörünün **içindekileri** (klasörün kendisini değil) `public_html` içine yükleyin.
4. hPanel → **Security → SSL**: SSL'in etkin olduğundan emin olun (`.app` uzantısı yalnızca HTTPS ile açılır).
5. https://historycleaner.app adresini açın.

### B) Sadece alan adı + e-posta aldıysanız → GitHub Pages (ücretsiz)
1. GitHub'da yeni, herkese açık bir depo oluşturun (ör. `historycleaner-site`) ve `website/` içindekileri yükleyin (`CNAME` dosyası dahil).
2. Depo → Settings → **Pages** → Source: `main` dalı, `/ (root)`.
3. Hostinger hPanel → **Domains → DNS / Nameservers → DNS kayıtları**:
   - `@` için mevcut A kayıtlarını silin, şu dört **A** kaydını ekleyin: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` için **CNAME** → `<github-kullanıcı-adınız>.github.io`
   - **MX ve e-posta ile ilgili kayıtlara (MX, TXT/SPF, DKIM) dokunmayın**, yoksa support@ e-postası çalışmaz.
4. GitHub Pages ayarında Custom domain = `historycleaner.app`, DNS doğrulanınca **Enforce HTTPS** işaretleyin. Sertifika birkaç dakika ile birkaç saat arası sürebilir; `.app` HTTPS olmadan açılmaz, bu sürede site görünmeyebilir.

## Paddle başvurusundan önce
- [ ] `site.config.mjs` → `sellerName` (yasal adınız veya şirket unvanı) dolduruldu — sayfalardaki sarı **[SELLER LEGAL NAME]** işaretleri kalmadı
- [ ] `cwsUrl` = Chrome Web Store sayfanızın adresi
- [ ] Site HTTPS ile açılıyor; /privacy/, /terms/, /refund/ sayfaları çalışıyor
- [ ] Yasal metinleri (özellikle "Uygulanacak hukuk") bir hukukçuya/mali müşavire gösterdiniz
