const btn = document.querySelector('.btn-2');
const googlePlayDiv = document.querySelector('.google-play');

btn.addEventListener('click', function() {
    googlePlayDiv.classList.toggle('visible');
});

document.addEventListener('click', function(event) {
    if (!btn.contains(event.target) && !googlePlayDiv.contains(event.target)) {
        googlePlayDiv.classList.remove('visible');
    }
});

// les langues
const translations = {
    "welcome_message": {
      "fr": "Plus d'un milliard de personnes connectées",
      "en": "More than a billion people connected",
      "zh-CN": "超过十亿人已连接",
      "zh-TW": "超過十億人已連接",
      "es": "Más de mil millones de personnes connectadas",
      "id": "Lebih dari satu miliar orang terhubung",
      "ar": "أكثر من مليار شخص متصل",
      "ja": "10億人以上が接続中",
      "ko": "10억 명 이상이 연결됨",
      "lo": "ຫຼາຍກວ່າໜຶ່ງພັນລ້ານຄົນເຊື່ອມຕໍ່",
      "tr": "Bir milyardan fazla kişi bağlı",
      "de": "Mehr als eine Milliarde Menschen sind verbunden",
      "it": "Più di un miliardo di persone connesse",
      "th": "มากกว่าหนึ่งพันล้านคนที่เชื่อมต่อ",
      "ms": "Lebih daripada satu bilion orang yang berhubung",
      "pt": "Mais de um bilhão de pessoas conectadas",
      "ru": "Более миллиарда человек подключено",
      "vi": "Hơn một tỷ người đã kết nối"
    },
    "chat_call_more": {
      "fr": "Chat, appel et bien plus encore!",
      "en": "Chat, call, and more!",
      "zh-CN": "聊天、通话等！",
      "zh-TW": "聊天、通話等！",
      "es": "¡Chat, llamadas y más!",
      "id": "Obrolan, panggilan, dan banyak lagi!",
      "ar": "الدردشة والمكالمات والمزيد!",
      "ja": "チャット、通話など！",
      "ko": "채팅, 통화 등!",
      "lo": "ສົນທະນາ, ໂທ, ແລະອື່ນໆ!",
      "tr": "Sohbet, arama ve daha fazlası!",
      "de": "Chat, Anruf und mehr!",
      "it": "Chat, chiamate e molto altro!",
      "th": "แชท โทร และอื่นๆ!",
      "ms": "Sembang, panggilan, dan banyak lagi!",
      "pt": "Chat, chamadas e muito mais!",
      "ru": "Чат, звонки и многое другое!",
      "vi": "Trò chuyện, gọi điện và hơn thế nữa!"
    },
    "download_from_appstore": {
      "fr": "Télécharger depuis l'App Store",
      "en": "Download from the App Store",
      "zh-CN": "从应用商店下载",
      "zh-TW": "從應用商店下載",
      "es": "Descargar desde la App Store",
      "id": "Unduh dari App Store",
      "ar": "تحميل من متجر التطبيقات",
      "ja": "App Store からダウンロード",
      "ko": "앱 스토어에서 다운로드",
      "lo": "ດາວໂຫຼດຈາກຮ້ານຄ້າ APP",
      "tr": "Uygulama Mağazasından indir",
      "de": "Aus dem App Store herunterladen",
      "it": "Scarica dall'App Store",
      "th": "ดาวน์โหลดจากแอปสโตร์",
      "ms": "Muat turun dari App Store",
      "pt": "Baixar da App Store",
      "ru": "Скачать из App Store",
      "vi": "Tải xuống từ App Store"
    },
    "appstore": {
      "fr": "App Store",
      "en": "App Store",
      "zh-CN": "应用商店",
      "zh-TW": "應用商店",
      "es": "App Store",
      "id": "App Store",
      "ar": "متجر التطبيقات",
      "ja": "アプリストア",
      "ko": "앱 스토어",
      "lo": "ຮ້ານຄ້າ APP",
      "tr": "Uygulama Mağazası",
      "de": "App Store",
      "it": "App Store",
      "th": "แอปสโตร์",
      "ms": "App Store",
      "pt": "App Store",
      "ru": "Магазин приложений",
      "vi": "Cửa hàng ứng dụng"
    },
    "footer": {
        "platform": {
          "fr": "Plateforme",
          "en": "Platform",
          "zh-CN": "平台",
          "zh-TW": "平台",
          "es": "Plataforma",
          "id": "Platform",
          "ar": "منصة",
          "ja": "プラットフォーム",
          "ko": "플랫폼",
          "lo": "ພາດຟອມ",
          "tr": "Platform",
          "de": "Plattform",
          "it": "Piattaforma",
          "th": "แพลตฟอร์ม",
          "ms": "Platform",
          "pt": "Plataforma",
          "ru": "Платформа",
          "vi": "Nền tảng"
        },
        "support": {
          "fr": "Support",
          "en": "Support",
          "zh-CN": "支持",
          "zh-TW": "支援",
          "es": "Soporte",
          "id": "Dukungan",
          "ar": "الدعم",
          "ja": "サポート",
          "ko": "지원",
          "lo": "ສະຫນັບສະຫນູນ",
          "tr": "Destek",
          "de": "Support",
          "it": "Supporto",
          "th": "สนับสนุน",
          "ms": "Sokongan",
          "pt": "Suporte",
          "ru": "Поддержка",
          "vi": "Hỗ trợ"
        },
        "about": {
          "fr": "À propos",
          "en": "About",
          "zh-CN": "关于",
          "zh-TW": "關於",
          "es": "Acerca de",
          "id": "Tentang",
          "ar": "حول",
          "ja": "について",
          "ko": "정보",
          "lo": "ກ່ຽວກັບ",
          "tr": "Hakkında",
          "de": "Über",
          "it": "Informazioni",
          "th": "เกี่ยวกับ",
          "ms": "Tentang",
          "pt": "Sobre",
          "ru": "О нас",
          "vi": "Về chúng tôi"
        },
        "french": {
          "fr": "Français",
          "en": "French",
          "zh-CN": "法语",
          "zh-TW": "法語",
          "es": "Francés",
          "id": "Prancis",
          "ar": "الفرنسية",
          "ja": "フランス語",
          "ko": "프랑스어",
          "lo": "ພາສາຝຣັ່ງ",
          "tr": "Fransızca",
          "de": "Französisch",
          "it": "Francese",
          "th": "ภาษาฝรั่งเศส",
          "ms": "Perancis",
          "pt": "Francês",
          "ru": "Французский",
          "vi": "Tiếng Pháp"
        }
    },
    "download_for_android": {
      "fr": "Télécharger pour Android",
      "en": "Download for Android",
      "zh-CN": "下载 Android 版",
      "zh-TW": "下載 Android 版",
      "es": "Descargar para Android",
      "id": "Unduh untuk Android",
      "ar": "تنزيل لنظام Android",
      "ja": "Android版をダウンロード",
      "ko": "Android용 다운로드",
      "lo": "ດາວໂຫຼດສຳລັບ Android",
      "tr": "Android için indir",
      "de": "Für Android herunterladen",
      "it": "Scarica per Android",
      "th": "ดาวน์โหลดสำหรับ Android",
      "ms": "Muat turun untuk Android",
      "pt": "Baixar para Android",
      "ru": "Скачать для Android",
      "vi": "Tải xuống cho Android"
    },
    "download_from_microsoft": {
      "fr": "Télécharger depuis Microsoft",
      "en": "Download from Microsoft",
      "zh-CN": "从 Microsoft 下载",
      "zh-TW": "從 Microsoft 下載",
      "es": "Descargar desde Microsoft",
      "id": "Unduh dari Microsoft",
      "ar": "تنزيل من Microsoft",
      "ja": "Microsoft からダウンロード",
      "ko": "Microsoft에서 다운로드",
      "lo": "ດາວໂຫຼດຈາກ Microsoft",
      "tr": "Microsoft'tan indir",
      "de": "Von Microsoft herunterladen",
      "it": "Scarica da Microsoft",
      "th": "ดาวน์โหลดจาก Microsoft",
      "ms": "Muat turun dari Microsoft",
      "pt": "Baixar da Microsoft",
      "ru": "Скачать из Microsoft",
      "vi": "Tải xuống từ Microsoft"
    },
    "download_from_mac_appstore": {
      "fr": "Télécharger depuis le Mac App Store",
      "en": "Download from the Mac App Store",
      "zh-CN": "从 Mac App Store 下载",
      "zh-TW": "從 Mac App Store 下載",
      "es": "Descargar desde la Mac App Store",
      "id": "Unduh dari Mac App Store",
      "ar": "تنزيل من متجر تطبيقات Mac",
      "ja": "Mac App Store からダウンロード",
      "ko": "Mac App Store에서 다운로드",
      "lo": "ດາວໂຫຼດຈາກ Mac App Store",
      "tr": "Mac App Store'dan indir",
      "de": "Aus dem Mac App Store herunterladen",
      "it": "Scarica dal Mac App Store",
      "th": "ดาวน์โหลดจาก Mac App Store",
      "ms": "Muat turun dari Mac App Store",
      "pt": "Baixar da Mac App Store",
      "ru": "Скачать из Mac App Store",
      "vi": "Tải xuống từ Mac App Store"
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-lang").forEach(button => {
        button.addEventListener("click", (event) => {
            const selectedLang = button.getAttribute("data-lang");

            if (translations.welcome_message[selectedLang]) {
                document.getElementById("welcome_message").textContent = translations.welcome_message[selectedLang];
                document.getElementById("chat_call_more").textContent = translations.chat_call_more[selectedLang];
                document.getElementById("download_from_appstore").textContent = translations.download_from_appstore[selectedLang];
                document.getElementById("appstore").textContent = translations.appstore[selectedLang];
                document.getElementById("download_for_android").textContent = translations.download_for_android[selectedLang];
                document.getElementById("download_from_microsoft").textContent = translations.download_from_microsoft[selectedLang];
                document.getElementById("download_from_mac_appstore").textContent = translations.download_from_mac_appstore[selectedLang];
                document.getElementById("platform").textContent = translations.footer.platform[selectedLang];
                document.getElementById("support").textContent = translations.footer.support[selectedLang];
                document.getElementById("about").textContent = translations.footer.about[selectedLang];
                document.getElementById("french").textContent = translations.footer.french[selectedLang];
            } else {
                alert("erreur ouvrez la console");
                console.log("La traduction n'est pas disponible pour cette langue : " + selectedLang);
            }
        });
    });
});
  
  function getLangCode(lang) {
      const langMap = {
          "Francais": "fr",
          "Anglais": "en",
          "简体中": "zh-CN",
          "繁體中文（臺灣": "zh-TW",
          "Espagnol": "es",
          "Bahasa Indonesia": "id",
          "العربية": "ar",
          "日本語": "ja",
          "한국어": "ko",
          "ພາສາລາວ": "lo",
          "Türkçe": "tr",
          "Deutsch": "de",
          "Italiano": "it",
          "ภาษาไทย": "th",
          "Bahasa Melayu": "ms",
          "Português": "pt",
          "Русский": "ru",
          "Tiếng Việt": "vi"
      };
      return langMap[lang] || "fr"; 
  }
  
  