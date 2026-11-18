// All website copy (EN + TR). Legal pages are arrays of { h, p: [...] } sections so they can be
// rendered as HTML and as plain text (privacy-policy.txt is generated from LEGAL.en.privacy).
// {seller} {email} {price} {refundDays} {trialDays} {domain} are filled in by build.mjs.

export const PAGES = {
  en: {
    lang: 'en', other: 'tr', otherLabel: 'Türkçe',
    nav: { features: 'Features', pricing: 'Pricing', faq: 'FAQ', install: 'Add to Chrome' },
    meta: {
      title: 'History Domain Cleaner — clear history for one site, not everything',
      desc: 'Chrome extension that clears browsing history for the sites and time ranges you choose. Live preview, autocomplete, auto-clean rules and an encrypted vault. 100% local.'
    },
    hero: {
      eyebrow: 'Chrome extension · 100% local',
      title: 'Clean one site —<br>not your whole history',
      sub: 'Chrome’s “Clear browsing data” wipes everything in a time range. History Domain Cleaner removes only the sites you choose — and shows you every entry before anything is deleted.',
      cta: 'Add to Chrome — it’s free', cta2: 'See Pro',
      note: 'Works in Chrome, Edge and other Chromium browsers.'
    },
    features: {
      title: 'Everything you need, nothing you don’t',
      items: [
        ['⚡', 'Two clicks for the site you’re on', 'Open it (or press Alt+Shift+H): the current site is already selected. Pick 15 min, 1 hour, today, yesterday, 7 days or a custom range.'],
        ['👀', 'See exactly what gets deleted', 'A live preview grouped by day, with titles and icons. Uncheck anything you want to keep or open it in a new tab first.'],
        ['🧭', 'Honest about Chrome’s limits', 'Chrome deletes a page with all of its visits. Pages also visited outside your range are flagged, and you can skip them.'],
        ['🔤', 'Site autocomplete', 'Suggestions from your own history with visit counts. Clean several sites at once, or filter by title or URL.'],
        ['🤖', 'Automatic rules', 'Clear a site on every browser start, or remove pages you haven’t visited in N days.'],
        ['💾', 'Safe by default', 'Export to CSV or JSON before deleting. Deletion keeps running even if you close the popup. Right-click any page to clean it.']
      ]
    },
    show: [
      { img: 2, title: 'Find any site in a keystroke', text: 'Start typing and pick from the sites you actually visit, with visit counts. Keyboard friendly: arrows, Enter, Esc.' },
      { img: 3, title: 'No surprises', text: 'Before deleting you see the count, the sites and the exact time range — plus a clear note if a page was also visited outside it.' },
      { img: 5, title: 'Pro: hide it, don’t lose it', text: 'Move entries into an encrypted vault on your device. They disappear from Chrome history and address-bar suggestions, and open only with your password.' }
    ],
    privacy: {
      title: 'Your history never leaves your device',
      items: ['No account', 'No analytics or tracking', 'No servers — nothing is uploaded', 'Pro licenses are verified offline'],
      link: 'Read the privacy policy'
    },
    pricing: {
      title: 'Simple pricing', sub: 'Cleaning your history is free and unlimited, forever.',
      free: { name: 'Free', price: '$0', items: ['Clean any site, any time range', 'Live preview, autocomplete, filters', 'Out-of-range visit warnings', 'Export, right-click menu, shortcut', '3 automatic rules'], cta: 'Add to Chrome' },
      pro: { name: 'Pro', price: '{price}', per: 'one-time', items: ['Everything in Free', 'Encrypted vault', 'Unlimited automatic rules', 'Lifetime license — no subscription'], cta: 'Buy Pro', ctaNone: 'Upgrade inside the extension', trial: 'Try Pro free for {trialDays} days inside the extension — no account needed. {refundDays}-day money-back guarantee.' }
    },
    faq: {
      title: 'Questions',
      items: [
        ['Is my browsing history sent anywhere?', 'No. Everything runs locally in your browser. The extension has no server, no analytics and no account. Even Pro licenses are checked offline.'],
        ['Why does it say a page was “also visited outside the range”?', 'Chrome can only delete a page together with all of its visits. If you visited a page today and last week, deleting “today” would also remove last week’s visit. The extension tells you and lets you skip those pages.'],
        ['What happens if I forget my vault password?', 'The vault is encrypted with your password and we never see it, so it cannot be recovered. You can reset the vault, which permanently deletes its contents.'],
        ['How do I get Pro?', 'Start the free trial or buy Pro from the Pro page inside the extension. After purchase you receive a license key by email; paste it into the extension to activate.'],
        ['Can I get a refund?', 'Yes — within {refundDays} days of purchase, no questions asked. See the refund policy.'],
        ['Which browsers are supported?', 'Google Chrome, Microsoft Edge and other Chromium-based browsers.']
      ]
    },
    footer: { privacy: 'Privacy', terms: 'Terms', refund: 'Refunds', contact: 'Contact' },
    legalTitles: { privacy: 'Privacy Policy', terms: 'Terms of Service', refund: 'Refund Policy' },
    updated: 'Last updated',
    back: '← Home',
    buy: {
      title: 'Get History Domain Cleaner Pro',
      sub: 'One-time payment of {price}. Lifetime license, no subscription.',
      items: ['Encrypted vault', 'Unlimited automatic rules', '{refundDays}-day money-back guarantee'],
      how: 'After payment, your license key is emailed to the address you enter at checkout — usually within a few hours, at most 24 hours. Open the extension → Pro → paste the key → Activate.',
      cta: 'Continue to secure checkout',
      secure: 'Payments are processed securely by Paddle.com, our Merchant of Record. Taxes are calculated at checkout.',
      soon: 'Purchases open very soon. Meanwhile you can try Pro free for {trialDays} days inside the extension. Questions: {email}'
    },
    thanks: {
      title: 'Thank you for buying Pro!',
      steps: ['Your license key will be emailed to you within 24 hours (usually much sooner). Check your spam folder too.', 'Open the extension and click PRO in the header.', 'Paste the key into "Have a license key?" and click Activate.'],
      help: 'No email after 24 hours? Write to {email} with your Paddle receipt.'
    }
  },

  tr: {
    lang: 'tr', other: 'en', otherLabel: 'English',
    nav: { features: 'Özellikler', pricing: 'Fiyat', faq: 'SSS', install: 'Chrome’a ekle' },
    meta: {
      title: 'History Domain Cleaner — tüm geçmişi değil, tek bir siteyi temizleyin',
      desc: 'Seçtiğiniz sitelerin geçmişini seçtiğiniz aralıkta temizleyen Chrome eklentisi. Canlı önizleme, site önerileri, otomatik kurallar ve şifreli kasa. %100 yerel.'
    },
    hero: {
      eyebrow: 'Chrome eklentisi · %100 yerel',
      title: 'Tüm geçmişi değil,<br>tek bir siteyi temizleyin',
      sub: 'Chrome’un “Tarama verilerini temizle” özelliği seçtiğiniz aralıktaki her şeyi siler. History Domain Cleaner yalnızca seçtiğiniz siteleri temizler ve silmeden önce her kaydı gösterir.',
      cta: 'Chrome’a ekle — ücretsiz', cta2: 'Pro’ya bakın',
      note: 'Chrome, Edge ve diğer Chromium tabanlı tarayıcılarda çalışır.'
    },
    features: {
      title: 'İhtiyacınız olan her şey, fazlası değil',
      items: [
        ['⚡', 'Bulunduğunuz site için iki tık', 'Açın (ya da Alt+Shift+H): açık olan site zaten seçili. 15 dk, 1 saat, bugün, dün, 7 gün veya özel bir aralık seçin.'],
        ['👀', 'Neyin silineceğini görün', 'Başlık ve simgeleriyle güne göre gruplanmış canlı önizleme. Saklamak istediklerinizi işaretten çıkarın ya da önce yeni sekmede açın.'],
        ['🧭', 'Chrome’un sınırları konusunda dürüst', 'Chrome bir sayfayı tüm ziyaretleriyle birlikte siler. Aralık dışında da ziyaret edilen sayfalar işaretlenir; isterseniz atlarsınız.'],
        ['🔤', 'Site önerileri', 'Kendi geçmişinizden, ziyaret sayılarıyla öneriler. Aynı anda birden fazla siteyi temizleyin ya da başlık/URL ile filtreleyin.'],
        ['🤖', 'Otomatik kurallar', 'Bir siteyi her tarayıcı açılışında temizleyin ya da N gündür girmediğiniz sayfaları silin.'],
        ['💾', 'Varsayılan olarak güvenli', 'Silmeden önce CSV veya JSON olarak dışa aktarın. Popup’ı kapatsanız da silme devam eder. Herhangi bir sayfaya sağ tıklayıp temizleyin.']
      ]
    },
    show: [
      { img: 2, title: 'Siteyi tek tuşla bulun', text: 'Yazmaya başlayın ve gerçekten ziyaret ettiğiniz siteler arasından, ziyaret sayılarıyla seçin. Klavye dostu: oklar, Enter, Esc.' },
      { img: 3, title: 'Sürpriz yok', text: 'Silmeden önce kayıt sayısını, siteleri ve tam zaman aralığını görürsünüz; bir sayfa aralık dışında da ziyaret edildiyse açıkça belirtilir.' },
      { img: 5, title: 'Pro: gizleyin, kaybetmeyin', text: 'Kayıtları cihazınızdaki şifreli kasaya taşıyın. Chrome geçmişinden ve adres çubuğu önerilerinden kalkar, yalnızca parolanızla açılır.' }
    ],
    privacy: {
      title: 'Geçmişiniz cihazınızdan çıkmaz',
      items: ['Hesap yok', 'Analiz veya izleme yok', 'Sunucu yok — hiçbir şey yüklenmez', 'Pro lisansları çevrimdışı doğrulanır'],
      link: 'Gizlilik politikasını okuyun'
    },
    pricing: {
      title: 'Basit fiyatlandırma', sub: 'Geçmiş temizliği her zaman ücretsiz ve sınırsız.',
      free: { name: 'Ücretsiz', price: '$0', items: ['Her site, her zaman aralığı', 'Canlı önizleme, öneriler, filtreler', 'Aralık dışı ziyaret uyarıları', 'Dışa aktarma, sağ tık menüsü, kısayol', '3 otomatik kural'], cta: 'Chrome’a ekle' },
      pro: { name: 'Pro', price: '{price}', per: 'tek seferlik', items: ['Ücretsizdeki her şey', 'Şifreli kasa', 'Sınırsız otomatik kural', 'Ömür boyu lisans — abonelik yok'], cta: 'Pro’yu satın al', ctaNone: 'Eklentinin içinden yükseltin', trial: 'Pro’yu eklentinin içinden {trialDays} gün ücretsiz deneyin; hesap gerekmez. {refundDays} gün para iade garantisi.' }
    },
    faq: {
      title: 'Sorular',
      items: [
        ['Tarama geçmişim bir yere gönderiliyor mu?', 'Hayır. Her şey tarayıcınızda yerel olarak çalışır. Eklentinin sunucusu, analizi ya da hesabı yoktur. Pro lisansları bile çevrimdışı doğrulanır.'],
        ['Neden bir sayfa için “aralık dışında da ziyaret edilmiş” yazıyor?', 'Chrome bir sayfayı yalnızca tüm ziyaretleriyle birlikte silebilir. Bir sayfayı bugün ve geçen hafta ziyaret ettiyseniz, “bugün”ü silmek geçen haftaki ziyareti de kaldırır. Eklenti bunu size söyler ve bu sayfaları atlamanıza izin verir.'],
        ['Kasa parolamı unutursam ne olur?', 'Kasa parolanızla şifrelenir ve parolanızı biz hiç görmeyiz; bu yüzden kurtarılamaz. Kasayı sıfırlayabilirsiniz; bu, içeriğini kalıcı olarak siler.'],
        ['Pro’yu nasıl alırım?', 'Eklentinin içindeki Pro sayfasından ücretsiz denemeyi başlatın ya da Pro’yu satın alın. Satın aldıktan sonra lisans anahtarınız e-postayla gelir; eklentiye yapıştırıp etkinleştirin.'],
        ['İade alabilir miyim?', 'Evet — satın alımdan sonraki {refundDays} gün içinde, gerekçe sorulmadan. İade politikasına bakın.'],
        ['Hangi tarayıcılar destekleniyor?', 'Google Chrome, Microsoft Edge ve diğer Chromium tabanlı tarayıcılar.']
      ]
    },
    footer: { privacy: 'Gizlilik', terms: 'Şartlar', refund: 'İade', contact: 'İletişim' },
    legalTitles: { privacy: 'Gizlilik Politikası', terms: 'Kullanım Şartları', refund: 'İade Politikası' },
    updated: 'Son güncelleme',
    back: '← Ana sayfa',
    buy: {
      title: 'History Domain Cleaner Pro’yu alın',
      sub: 'Tek seferlik {price}. Ömür boyu lisans, abonelik yok.',
      items: ['Şifreli kasa', 'Sınırsız otomatik kural', '{refundDays} gün para iade garantisi'],
      how: 'Ödemeden sonra lisans anahtarınız, ödeme sırasında girdiğiniz e-posta adresine gönderilir — genellikle birkaç saat içinde, en geç 24 saatte. Eklentiyi açın → Pro → anahtarı yapıştırın → Etkinleştir.',
      cta: 'Güvenli ödemeye devam et',
      secure: 'Ödemeler, Satıcı Kaydımız (Merchant of Record) olan Paddle.com tarafından güvenle işlenir. Vergiler ödeme sırasında hesaplanır.',
      soon: 'Satın alma çok yakında açılıyor. Bu arada Pro’yu eklentinin içinden {trialDays} gün ücretsiz deneyebilirsiniz. Sorular: {email}'
    },
    thanks: {
      title: 'Pro’yu satın aldığınız için teşekkürler!',
      steps: ['Lisans anahtarınız 24 saat içinde (genellikle çok daha önce) e-postanıza gönderilecek. Spam klasörünü de kontrol edin.', 'Eklentiyi açın ve başlıktaki PRO’ya tıklayın.', 'Anahtarı “Lisans anahtarınız var mı?” alanına yapıştırıp Etkinleştir’e basın.'],
      help: '24 saat içinde e-posta gelmediyse Paddle makbuzunuzla birlikte {email} adresine yazın.'
    }
  }
};

const PADDLE_EN = 'Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.';
const PADDLE_TR = 'Sipariş sürecimiz çevrimiçi satıcımız Paddle.com tarafından yürütülür. Paddle.com tüm siparişlerimizin Satıcı Kaydıdır (Merchant of Record). Paddle tüm müşteri hizmetleri taleplerini karşılar ve iadeleri yönetir.';

export const LEGAL = {
  en: {
    privacy: [
      { h: 'Overview', p: ['History Domain Cleaner ("the extension") is provided by {seller} ("we"). This policy covers the extension and the website {domain}. The extension works entirely on your device: we do not collect, receive, sell or share your browsing history or any other personal data from the extension.'] },
      { h: 'What the extension does with your data', p: [
        'The extension reads your browser history only to show and delete the entries you ask for, to suggest site names you have visited, and to run automatic rules you create. Deleted entries are removed from your browser; nothing is sent anywhere.',
        'It saves these preferences locally on your device (chrome.storage): up to 8 recently used site names, your last selected time range, your "out-of-range visits" preference, and the automatic rules you create (site name, rule type, number of days).',
        'Files you create with the "Export" feature are saved only to your own device, at your request.'
      ] },
      { h: 'Permissions', p: [
        '"history": read and delete history entries you choose; suggest visited sites; run your rules.',
        '"storage": save the preferences, rules, vault and license described in this policy on your device.',
        '"activeTab": read the address of the current tab when you open the extension, so that site can be pre-selected.',
        '"favicon": show website icons from the browser\'s local icon cache.',
        '"contextMenus": add "Clear this site\'s history" to the right-click menu.',
        '"alarms": run your automatic rules on a schedule.'
      ] },
      { h: 'Encrypted vault (Pro)', p: ['If you use the encrypted vault, the entries you move into it (page address, title and visit time) are encrypted on your device before they are saved, using AES-256-GCM with a key protected by your vault password (PBKDF2-SHA256). The vault is stored only on your device. We never receive your password or vault contents and cannot recover them: if you forget your password, the vault cannot be opened. Uninstalling the extension or resetting the vault permanently deletes it.'] },
      { h: 'Pro license and trial', p: [
        'If you activate Pro, your license key is stored locally on your device and verified offline; the extension does not contact any server to check it. The license key contains an order reference and a date, and no personal information.',
        'If you start the free Pro trial, the trial start date (a single timestamp) is saved with chrome.storage.sync. If Chrome Sync is turned on, Google syncs this value between your signed-in browsers, as it does for other browser settings. No other data is stored in sync storage.'
      ] },
      { h: 'Purchases', p: ['Purchases are processed by Paddle.com, our Merchant of Record. Paddle collects the information needed to complete your order (such as your name, email address, billing country and payment details) and processes it under its own privacy policy (paddle.com/legal/privacy). We receive your email address and order details from Paddle and use them only to deliver your license key, provide support and meet legal and tax obligations.'] },
      { h: 'Website', p: ['The website does not use analytics or tracking. Our hosting provider may process technical data such as IP addresses in server logs to deliver and secure the website. Only the checkout page (/buy/) loads Paddle’s checkout script, which may use cookies required for payment processing and fraud prevention under Paddle’s privacy policy.'] },
      { h: 'Children', p: ['The extension and website are not directed at children under 13, and we do not knowingly collect their personal data.'] },
      { h: 'Your rights and contact', p: ['You can delete all data stored by the extension at any time by uninstalling it. For questions about this policy or to exercise your data protection rights regarding purchase information, contact {email}.'] },
      { h: 'Changes', p: ['We may update this policy. The "Last updated" date above shows the latest version; material changes will also be noted in the extension\'s store listing.'] }
    ],
    terms: [
      { h: 'Agreement', p: ['These terms govern your use of the History Domain Cleaner browser extension and the website {domain}, provided by {seller} ("we", "us"). By installing the extension or buying Pro you agree to these terms. Questions: {email}.'] },
      { h: 'Purchases and Merchant of Record', p: [PADDLE_EN, 'Prices are shown on this website and at checkout. Paddle may add sales tax or VAT depending on your location.'] },
      { h: 'License', p: [
        'The free version may be used free of charge for personal or business purposes.',
        'Buying Pro gives you a personal, non-exclusive, non-transferable, lifetime license to use the Pro features of the extension in browsers you use. It is a one-time payment, not a subscription. Do not share, resell or publish your license key; publicly shared keys may be revoked in an extension update.',
        'The free trial lasts {trialDays} days and can be started once.'
      ] },
      { h: 'Your responsibilities', p: [
        'Deleting browsing history is permanent; browsers provide no way to restore it. Review the preview before deleting and export first if you may need the data later.',
        'You are responsible for remembering your vault password. It cannot be recovered by us or anyone else.'
      ] },
      { h: 'Disclaimer', p: ['The extension is provided "as is" without warranties of any kind, to the fullest extent permitted by law. We do not guarantee it will be error-free or that browser vendors will not change the features it relies on.'] },
      { h: 'Limitation of liability', p: ['To the fullest extent permitted by law, we are not liable for any indirect or consequential damages or for loss of data arising from use of the extension. Our total liability is limited to the amount you paid for Pro. Nothing in these terms limits rights you have under mandatory consumer protection law.'] },
      { h: 'Changes and termination', p: ['We may update the extension and these terms. If we discontinue Pro, existing license holders keep access to Pro features in the last version they installed. You may stop using the extension at any time by uninstalling it.'] },
      { h: 'Governing law', p: ['These terms are governed by the laws of the Republic of Türkiye, without prejudice to mandatory consumer protection rules of your country of residence.'] }
    ],
    refund: [
      { h: '{refundDays}-day money-back guarantee', p: ['If you are not happy with History Domain Cleaner Pro, you can request a full refund within {refundDays} days of purchase — no questions asked.'] },
      { h: 'How to request a refund', p: [
        'Use the link in your Paddle receipt email, or visit paddle.net to find your order and request a refund. You can also email {email} with your order number and we will arrange it.',
        PADDLE_EN
      ] },
      { h: 'After a refund', p: ['Refunds are returned to the original payment method; timing depends on your bank or card provider. After a refund, the license key is added to the revocation list of the extension and stops working from the next extension update.'] }
    ]
  },
  tr: {
    privacy: [
      { h: 'Genel bakış', p: ['History Domain Cleaner ("eklenti"), {seller} ("biz") tarafından sunulur. Bu politika eklentiyi ve {domain} web sitesini kapsar. Eklenti tamamen cihazınızda çalışır: tarama geçmişinizi veya başka bir kişisel verinizi eklentiden toplamayız, almayız, satmayız ve paylaşmayız.'] },
      { h: 'Eklenti verilerinizle ne yapar', p: [
        'Eklenti tarama geçmişinizi yalnızca istediğiniz kayıtları göstermek ve silmek, ziyaret ettiğiniz siteleri önermek ve oluşturduğunuz otomatik kuralları çalıştırmak için okur. Silinen kayıtlar tarayıcınızdan kaldırılır; hiçbir şey bir yere gönderilmez.',
        'Şu tercihleri cihazınızda yerel olarak saklar (chrome.storage): en fazla 8 son kullanılan site adı, son seçilen zaman aralığı, "aralık dışı ziyaretler" tercihi ve oluşturduğunuz otomatik kurallar (site adı, kural türü, gün sayısı).',
        '"Dışa aktar" özelliğiyle oluşturduğunuz dosyalar yalnızca isteğiniz üzerine kendi cihazınıza kaydedilir.'
      ] },
      { h: 'İzinler', p: [
        '"history": seçtiğiniz geçmiş kayıtlarını okumak ve silmek, ziyaret edilen siteleri önermek, kurallarınızı çalıştırmak.',
        '"storage": bu politikada açıklanan tercihleri, kuralları, kasayı ve lisansı cihazınızda saklamak.',
        '"activeTab": eklentiyi açtığınızda o sitenin hazır seçilebilmesi için geçerli sekmenin adresini okumak.',
        '"favicon": site simgelerini tarayıcının yerel simge önbelleğinden göstermek.',
        '"contextMenus": sağ tık menüsüne "Bu sitenin geçmişini temizle" eklemek.',
        '"alarms": otomatik kurallarınızı zamanlanmış olarak çalıştırmak.'
      ] },
      { h: 'Şifreli kasa (Pro)', p: ['Şifreli kasayı kullanırsanız, kasaya taşıdığınız kayıtlar (sayfa adresi, başlık ve ziyaret zamanı) kaydedilmeden önce cihazınızda, kasa parolanızla korunan bir anahtarla (PBKDF2-SHA256) AES-256-GCM kullanılarak şifrelenir. Kasa yalnızca cihazınızda saklanır. Parolanızı veya kasa içeriğinizi hiçbir zaman almayız ve kurtaramayız: parolanızı unutursanız kasa açılamaz. Eklentiyi kaldırmak veya kasayı sıfırlamak kasayı kalıcı olarak siler.'] },
      { h: 'Pro lisansı ve deneme', p: [
        'Pro\'yu etkinleştirirseniz lisans anahtarınız cihazınızda saklanır ve çevrimdışı doğrulanır; eklenti bunun için hiçbir sunucuya bağlanmaz. Lisans anahtarı bir sipariş referansı ve tarih içerir, kişisel bilgi içermez.',
        'Ücretsiz Pro denemesini başlatırsanız, denemenin başlangıç tarihi (tek bir zaman damgası) chrome.storage.sync ile kaydedilir. Chrome Senkronizasyonu açıksa Google bu değeri, diğer tarayıcı ayarlarında olduğu gibi oturum açtığınız tarayıcılar arasında eşitler. Senkronizasyon deposunda başka veri tutulmaz.'
      ] },
      { h: 'Satın alımlar', p: ['Satın alımlar, Satıcı Kaydımız (Merchant of Record) olan Paddle.com tarafından işlenir. Paddle siparişinizi tamamlamak için gereken bilgileri (adınız, e-posta adresiniz, fatura ülkeniz ve ödeme bilgileriniz gibi) toplar ve kendi gizlilik politikası (paddle.com/legal/privacy) kapsamında işler. Biz Paddle\'dan e-posta adresinizi ve sipariş bilgilerinizi alırız ve bunları yalnızca lisans anahtarınızı teslim etmek, destek sağlamak ve yasal ve vergisel yükümlülükleri yerine getirmek için kullanırız.'] },
      { h: 'Web sitesi', p: ['Web sitesi analiz veya izleme kullanmaz. Barındırma sağlayıcımız, siteyi sunmak ve güvenliğini sağlamak için sunucu kayıtlarında IP adresi gibi teknik verileri işleyebilir. Yalnızca ödeme sayfası (/buy/), Paddle’ın ödeme betiğini yükler; bu betik Paddle’ın gizlilik politikası kapsamında ödeme işlemi ve dolandırıcılık önleme için gerekli çerezleri kullanabilir.'] },
      { h: 'Çocuklar', p: ['Eklenti ve web sitesi 13 yaşın altındaki çocuklara yönelik değildir ve bilerek onların kişisel verilerini toplamayız.'] },
      { h: 'Haklarınız ve iletişim', p: ['Eklentinin sakladığı tüm verileri istediğiniz zaman eklentiyi kaldırarak silebilirsiniz. Bu politika hakkındaki sorularınız veya satın alma bilgilerinizle ilgili veri koruma haklarınızı kullanmak için {email} adresine yazın.'] },
      { h: 'Değişiklikler', p: ['Bu politikayı güncelleyebiliriz. Yukarıdaki "Son güncelleme" tarihi en güncel sürümü gösterir; önemli değişiklikler eklentinin mağaza sayfasında da belirtilir.'] }
    ],
    terms: [
      { h: 'Sözleşme', p: ['Bu şartlar, {seller} ("biz") tarafından sunulan History Domain Cleaner tarayıcı eklentisinin ve {domain} web sitesinin kullanımını düzenler. Eklentiyi yükleyerek veya Pro satın alarak bu şartları kabul edersiniz. Sorular için: {email}.'] },
      { h: 'Satın alımlar ve Satıcı Kaydı', p: [PADDLE_TR, 'Fiyatlar bu web sitesinde ve ödeme sayfasında gösterilir. Paddle, bulunduğunuz yere göre satış vergisi veya KDV ekleyebilir.'] },
      { h: 'Lisans', p: [
        'Ücretsiz sürüm kişisel veya ticari amaçlarla ücretsiz kullanılabilir.',
        'Pro satın almak size, eklentinin Pro özelliklerini kullandığınız tarayıcılarda kullanmanız için kişisel, münhasır olmayan, devredilemez ve ömür boyu bir lisans verir. Bu tek seferlik bir ödemedir, abonelik değildir. Lisans anahtarınızı paylaşmayın, satmayın veya yayımlamayın; herkese açık paylaşılan anahtarlar bir eklenti güncellemesiyle iptal edilebilir.',
        'Ücretsiz deneme {trialDays} gün sürer ve bir kez başlatılabilir.'
      ] },
      { h: 'Sorumluluklarınız', p: [
        'Tarama geçmişini silmek kalıcıdır; tarayıcılar geri getirme imkânı sunmaz. Silmeden önce önizlemeyi kontrol edin ve verilere daha sonra ihtiyacınız olabilecekse önce dışa aktarın.',
        'Kasa parolanızı hatırlamak sizin sorumluluğunuzdadır. Parola bizim veya başka birinin tarafından kurtarılamaz.'
      ] },
      { h: 'Garanti reddi', p: ['Eklenti, yasaların izin verdiği en geniş ölçüde, hiçbir garanti olmaksızın "olduğu gibi" sunulur. Hatasız olacağını veya tarayıcı üreticilerinin dayandığı özellikleri değiştirmeyeceğini garanti etmeyiz.'] },
      { h: 'Sorumluluğun sınırlandırılması', p: ['Yasaların izin verdiği en geniş ölçüde, eklentinin kullanımından doğan dolaylı zararlardan veya veri kaybından sorumlu değiliz. Toplam sorumluluğumuz Pro için ödediğiniz tutarla sınırlıdır. Bu şartlardaki hiçbir hüküm, emredici tüketici koruma mevzuatından doğan haklarınızı sınırlamaz.'] },
      { h: 'Değişiklikler ve sona erme', p: ['Eklentiyi ve bu şartları güncelleyebiliriz. Pro\'yu sonlandırırsak mevcut lisans sahipleri, yükledikleri son sürümdeki Pro özelliklerine erişmeye devam eder. Eklentiyi kaldırarak kullanımı istediğiniz zaman sonlandırabilirsiniz.'] },
      { h: 'Uygulanacak hukuk', p: ['Bu şartlar, ikamet ettiğiniz ülkenin emredici tüketici koruma kuralları saklı kalmak kaydıyla Türkiye Cumhuriyeti hukukuna tabidir.'] }
    ],
    refund: [
      { h: '{refundDays} gün para iade garantisi', p: ['History Domain Cleaner Pro\'dan memnun kalmazsanız, satın alımdan sonraki {refundDays} gün içinde gerekçe sorulmadan tam iade talep edebilirsiniz.'] },
      { h: 'İade nasıl talep edilir', p: [
        'Paddle makbuz e-postanızdaki bağlantıyı kullanın ya da siparişinizi bulup iade talep etmek için paddle.net adresini ziyaret edin. Sipariş numaranızla {email} adresine de yazabilirsiniz; iadeyi biz başlatırız.',
        PADDLE_TR
      ] },
      { h: 'İade sonrası', p: ['İadeler orijinal ödeme yöntemine yapılır; süre bankanıza veya kart sağlayıcınıza bağlıdır. İade sonrasında lisans anahtarı eklentinin iptal listesine eklenir ve bir sonraki eklenti güncellemesinden itibaren çalışmaz.'] }
    ]
  }
};
