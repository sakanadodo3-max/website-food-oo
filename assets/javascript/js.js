// ======================================================
// DOM ELEMENTS
// ======================================================

const menuGrid = document.getElementById("menuGrid");
const chips = document.querySelectorAll(".chip");
const searchInput = document.getElementById("searchInput");
const yearEl = document.getElementById("year");

const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("navLinks");

const toggleBtn = document.getElementById("toggleBtn");

// ======================================================
// GLOBAL VARIABLES
// ======================================================

let currentFilter = "all";
let currentQuery = "";
let currentLang = localStorage.getItem("lang") || "en";

// ======================================================
// THEME SYSTEM
// ======================================================

let savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.remove("light", "dark");
document.body.classList.add(savedTheme);
updateThemeIcon();

toggleBtn?.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
  updateThemeIcon();
});

function updateThemeIcon() {
  if (!toggleBtn) return;
  toggleBtn.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

// ======================================================
// HAMBURGER MENU
// ======================================================

hamburger?.addEventListener("click", () => {
  navLinks?.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("active");
  });
});

// ======================================================
// TRANSLATIONS
// ======================================================

const translations = {
  en: {
    logo: "Khmer Kitchen",
    navHome: "Home",
    navMenu: "Menu",
    navAbout: "About",
    navContact: "Contact",
    searchPlaceholder: "Search menu...",

    langBtn: "KH",

    /*card*/
    cardah:"Fish Amok",
    cardap:"Traditional Cambodian dish with coconut curry and steamed fish.",

    cardbh:" Khmer Noodles ",
    cardbp:"It is one of the most popular traditional Khmer foods, with a history dating back to ancient times.",

    carddh:"nomambeng snaul",
    carddp:"A traditional type of pancake with a thin outer crust and a filling made with bean paste.",

    cardch:" Grilled Meat",
    cardcp:"Grilled meat seasoned with spices and served with special sauce.",

    cardeh:" Soybean Drink",
    cardep:"It is a nutritious drink made from soybeans that is beneficial for health.",

    Matchalatte:"Matcha latte",
    Matchalattep:"Matcha Latte is a popular drink made from Japanese green tea (Matcha), hot water, and milk.",

    Brown:"Brown Sugar Milk Tea",
    Brownp:"A sweet and creamy drink made from rich brown sugar syrup, fresh milk, and often chewy cassava pearls.",

    Bluebean:"Blue bean dessert",
    Bluebeanp:"Blue bean porridge is a traditional Khmer dish with a sweet and fragrant taste.",

    bbrh:"Bbaro krueng",
    bbrp:"It is a popular daily Khmer dish, cooked by boiling rice with meat and other spices.",

    BaiSach:"Bai Sach Chrouk",
    BaiSacp:"Rice noodles topped with fish green curry gravy, often eaten for breakfast.",

    cardfh:"babaro krueng",
    cardfp:"It is a popular daily Khmer dish, cooked by boiling rice with meat and other spices.",

    wwww1:"Beef Lok Lak",
    www1p:"Fried beef slices served on lettuce, onions, and tomatoes, usually a three-course meal.",


    promoTitle:
      "The Perfect Space To Enjoy Fantastic Food",
    promoText:
      "Traditional Khmer dishes made with fresh ingredients.",
    seeMenu: "See Our Menus",

    foodpopulear:"POPULAR FOODS",

    foodour:"Our food",

    ourservicesh:"Our services",
    ourservicesp:"Discover our special features that make your food journey delightful and fun.",

    treeiconha:"Good Service",
    treeiconpa:"Provide attentive service with customer care.",

    treeiconhb:"Delicious Food",
    treeiconpb:"Tasty dishes that satisfy your cravings.",

    treeiconhc:"Great Atmosphere",
    treeiconpc:"A pleasant environment perfect for dining.",

    contactus:"Do You Want to <br> Contact Us",
    menuus:"Are You Looking <br> For Menu?",
    textmenu:"We provide the freshest and best quality food for you.",
    textcontact:"Get in touch with our team and receive quick support for your questions and requests.",

    cooktext:"Please enjoy our food shop.",
    textwww:"We bring you carefully prepared dishes made with love, ready to order and enjoy anytime.",
    li1:"Fresh ingredients, guaranteed quality.",
    li2:"Healthy and flavorful options.",
    li3:"The atmosphere in the shop is refreshing.",

    /*contact */
        contactinformation:
      "Contact Information",

    address: "Address:",

    scc:
      "Smaong Cheung Commune<br>Kamchay Mear District<br>Prey Veng Province",

    phon: "Phone Number:",

    emailoo:
      "+855 717 174 902<br>Monday-Friday : 7AM – 6PM",

    emailhh: "Email:",

    eooo:
      "koungsakana52@gmail.com <br>sakana09@gmail.com",

    amail: "Business Hours:",

    day:
      "Monday – Friday: 9AM – 6PM<br>Saturday: 10AM – 4PM<br>Sunday: Closed",

    fulln: "Full Name",

    emaila: "Email Address",

    sub: "Subject",

    phonn: "Phone Number",

    message: "Message",

    sendm: "Send Message",

    menuTitle: "Our <span>Menu</span>",

    filterAll: "All",

    filterMains: "Mains",

    filterSalads: "Salads",

    filterDrinks: "Drinks",

    filterDesserts: "Desserts",
    /*about */
    ooou:"our services",
    ooopu:"best <span>quality food</span> <br>With Us",

        textinbox: "Deliciousness Food",

    textinboxp:
      "Get more experience with us.",

    menu: "Menu",
    contact: "Contact",

    ourstory:"OUR <span>STORY</span>",

    storyour:"Welcome to our company! Our company was established in 2020 with the aim of providing quality service and support to customers.  With our excellent service, customers can have a great experience. Our company focuses on providing high-quality products and services and meeting customer needs.",

    ourmish:"Our Mission",
    ourmisp:"Our mission is to reformulate freshly made food to be of higher quality without compromising on quality, taste or experience.",

    ourmish1:"Our Passion",
    ourmisp1:"We’re passionate about creating memorable dining experiences and building a community around great food and good times.",

    ourmish2:"Our Community",
    ourmisp2:"Serving over 15,00 happy customers and counting. Your support fuels our growth and inspires our creativity.",
    
    mainhoo: "Mains",
    mainpoo: "Deliciously crafted dishes, made simple and satisfying for every craving.",
    saladhoo: "Salad",
    saladpoo: "Fresh, crisp, and full of flavor — quality greens for a healthy delight.",
    drinkhoo: "Drink",
    drinkpoo: "Refreshing beverages delivered fast — always chilled, always on time.",
    dessertshoo: "Desserts",
    ourmispdes:"Sweet endings that make every meal unforgettable.",

    wharmenu:"What Makes is menu",
    wharmenup:"Discover our unique features that make cooking smooth and delicious.",

    gotocontactas:"Go to About",
    gotoabout:"Go to Menu",
    gotocontact:"Go to Contact",
  },
  km: {
    logo: "ភោជនីយដ្ឋានខ្មែរ",
    navHome: "ទំព័រដើម",
    navMenu: "ម៉ឺនុយ",
    navAbout: "អំពីយើង",
    navContact: "ទំនាក់ទំនង",

    langBtn: "EN",

    promoTitle:
      "កន្លែងល្អឥតខ្ចោះសម្រាប់រីករាយជាមួយម្ហូបឆ្ងាញ់",

    promoText:
      "ម្ហូបខ្មែរបែបប្រពៃណីដែលប្រើគ្រឿងផ្សំស្រស់។",

    seeMenu: "មើលម៉ឺនុយ",
    
    foodpopulear:"ម៉ីនុយដែលពេញនិយម",

    foodour:"មុខម្ហូបផ្សេងៗ",

    searchPlaceholder: "ស្វែងរកម៉ឺនុយ...",

        /*card*/
    cardah:"អាមុកត្រី",
    cardap:"ម្ហូបប្រពៃណីខ្មែរ បំពងត្រីជាមួយក្រឡុកកូកូ និងគ្រឿងទេសច្រើនមុខ។",

    cardbh:"នំបញ្ចុក",
    cardbp:"គឺជាអាហារប្រពៃណីដ៏មានប្រជាប្រិយភាពបំផុតមួយរបស់ខ្មែរ ដែលមានប្រវត្តិកើតឡើងតាំងពីសម័យបុរាណ",

    carddh:"នំអំបែងស្នូល",
    carddp:"ជាប្រភេទនំប័ុងបែបប្រពៃណីដែលមានមួយចំនួបក្រៅស្តើង និងស្នូលខាងក្នុងដំណើរការដោយសាច់សណ្ដែកបណ្តុះ ",

    cardch:" សាច់អាំ ",
    cardcp:"សាច់អាំអាំងជាមួយគ្រឿងទេស និងទឹកជ្រលក់ពិសេស។  ",

    cardeh:" ទឹកសណ្តែក",
    cardep:"គឺជាភេសជ្ជៈដ៏មានជីវជាតិដែលធ្វើឡើងពីគ្រាប់សណ្ដែកសៀង ដែលជំនួយដល់សុខភាព។",

    Matchalatte:"ម៉ាចឆាឡាតេ",
    Matchalattep:"ម៉ាត់ឆាឡាតេ គឺជាភេសជ្ជៈដ៏ពេញនិយមមួយដែលផលិតចេញពីតែបៃតងជប៉ុន (ម៉ាត់ឆា) ទឹកក្តៅ និងទឹកដោះគោ។",

    Brown:"មីលធីប្រោនស៊ូហ្គឺ",
    Brownp:"ភេសជ្ជៈផ្អែម និងមានក្រែម ផលិតពីសុីរ៉ូស្ករត្នោតសម្បូរបែប ទឹកដោះគោស្រស់ និងគុជខ្យងដំឡូងមីដែលជារឿយៗអាចទំពារបាន។",

    Bluebean:"បបរសណ្ដែកខៀវ",
    Bluebeanp:"បបរសណ្ដែកខៀវ គឺជាម្ហូបប្រពៃណីខ្មែរ ដែលមានរសជាតិផ្អែមល្ហែម និងក្រអូប",

    bbrh:"បបរគ្រគ្រឿង",
    bbrp:"គឺមុខម្ហូបប្រចាំថ្ងៃដ៏ពេញនិយមមួយរបស់ខ្មែរ ដែលចម្អិនឡើងដោយការរម្ងាស់អង្ករជាមួយសាច់និង​ គ្រឿងទេសច្រើនទៀត",

    BaiSach:"បាយសាច់ជ្រូក",
    BaiSacp:"មី​បាយ​ប្រោះ​ពីលើ​ដោយ​ទឹកជ្រលក់​ការី​បៃតង​ត្រី ដែល​ជា​ញឹកញាប់​ត្រូវ​បាន​គេ​បរិភោគ​សម្រាប់​អាហារ​ពេល​ព្រឹក។",

    cardfh:"បបរគ្រឿង",
    cardfp:"គឺមុខម្ហូបប្រចាំថ្ងៃដ៏ពេញនិយមមួយរបស់ខ្មែរ ដែលចម្អិនឡើងដោយការរម្ងាស់អង្ករជាមួយសាច់និង​ គ្រឿងទេសច្រើនទៀត",

    wwww1:"សាច់គោឡុកឡាក់",
    www1p:"សាច់គោ​ចៀន​ជា​ចំណិតៗ បម្រើ​លើ​សាឡាដ ខ្ទឹមបារាំង និង​ប៉េងប៉ោះ ជាធម្មតា​ជាអាហារ​ ៣ ពេល",



    ourservicesh:"អំពីសេវាកម្ម",
    ourservicesp:"ស្វែងរកលក្ខណៈពិសេសរបស់យើង ដែលធ្វើឲ្យការធ្វើដំណើររបស់អ្នកជាមួយម្ហូបក្លាយជាការមានភាពរីករាយ និងសប្បាយ",

    treeiconha:"មានសេវាកម្មល្អ",
    treeiconpa:"ផ្តល់សេវាកម្មប្រកបដោយការយកចិត្តទុកដាក់ និងការជួយសម្រួលដល់អតិថិជន",

    treeiconhb:"អាហារឆ្ងាញៗ",
    treeiconpb:"ម្ហូបមានរសជាតិឆ្ងាញ់ បំពេញតាមចំណង់ចំណូលចិត្ត និងមិនប៉ះពាល់ដល់សុខភាព",

    treeiconhc:"បរិយាកាសល្អ",
    treeiconpc:"បរិយាកាសស្រស់ស្រាយ និងសមស្របសម្រាប់ការញ៉ាំអាហារ",

    contactus:"តើអ្នកចង់ <br> ទំនាក់ទំនងមកកាន់យើង",
    menuus:"តើអ្នកចង់ <br> ទៅមើលម៉ីនុយ",
    textmenu:"ពួកយើងខ្ញុំផ្តល់ជូនអាហារស្រស់ៗ និងមានគុណភាពល្អបំផុតសម្រាប់អ្នក។",
    textcontact:"សូមទាក់ទងជាមួយក្រុមការងាររបស់យើង ហើយទទួលបានការគាំទ្ររហ័សសម្រាប់សំណួរ និងសំណើរបស់អ្នក។",

    cooktext:"សូមរើករាយជាមួយហាងលក់អាហាររបស់យើង",
    textwww:"យើងខ្ញុំនាំមកជូនលោកអ្នកនូវមុខម្ហូបដែលរៀបចំយ៉ាងយកចិត្តទុកដាក់ ដែលផលិតឡើងដោយក្តីស្រលាញ់ រួចរាល់សម្រាប់ការបញ្ជាទិញ និងរីករាយជាមួយវាគ្រប់ពេលវេលា។",
    li1:"គ្រឿងផ្សំស្រស់ៗ ធានាគុណភាព។",
    li2:"ជម្រើសដែលមានសុខភាពល្អ និងរសជាតិឆ្ងាញ់។",
    li3:"បរិយាកាសនៅក្នុងហាងមានភាពស្រស់ស្រាយ។",

        contact: "ទំនាក់ទំនង",

    contactinformation:
      "ព័ត៌មានសម្រាប់ទំនាក់ទំនង",

    address: "អាសយដ្ឋាន",

    scc:
      "ឃុំស្មោងខាងជើង<br>ស្រុកកំចាយមារ<br>ខេត្តព្រៃវែង",

    phon: "លេខទូរស័ព្ទ",

    emailoo:
      "+855 717 174 902<br>ថ្ងៃច័ន្ទ-ថ្ងៃសុក្រ : ៧ព្រឹក – ៦ល្ងាច",

    emailhh: "អ៊ីមែល:",

    eooo:
      "koungsakana52@gmail.com <br>sakana09@gmail.com",

    amail: "ម៉ោងធ្វើការ:",

    day:
      "ថ្ងៃច័ន្ទ – ថ្ងៃសុក្រ: ៧ព្រឹក – ៦ល្ងាច<br>ថ្ងៃសៅរ៌: ៩ព្រឹក – ៤ល្ងាច<br>ថ្ងៃអាទិត្យ: ឈប់សម្រាក",

    fulln: "ឈ្មោះពេញ",

    emaila: "អាសយដ្ឋានអ៊ីមែល",

    sub: "ប្រធានបទ",

    phonn: "លេខទូរស័ព្ទ",

    message: "សារ",

    sendm: "ផ្ញើរសារ",

    menuTitle: "ម៉ឺនុយ <span>របស់យើង</span>",

    filterAll: "ទាំងអស់",

    filterMains: "ម្ហូបចម្បង",

    filterSalads: "សាឡាត់",

    filterDrinks: "ភេសជ្ជៈ",

    filterDesserts: "បង្អែម",

    /*about */
    ooou:"សេវាកម្មរបស់យើង",
    ooopu:"អាហារ<span>មានគុណភាពល្អ</span><br>ជាមួយពួកយើង",

    textinbox: "អាហារឆ្ងាញ់ពិសារ",

    textinboxp:
      "ទទួលបទពិសោធន៍ល្អជាមួយពួកយើង",

    menu: "ម៉ឺនុយ",

    contact: "ទំនាក់ទំនង",

    ourstory:"អំពីប្រវត្ត​ <span>របស់យើង</span>",

    storyour:"សូមស្វាគមន៍មកកាន់ហាងរបស់យើងខ្ញុំ! ហាងរបស់យើងខ្ញុំត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ ២០២០ ដោយមានគោលបំណងផ្តល់សេវាកម្ម និងការគាំទ្រដ៏មានគុណភាពដល់អតិថិជន។ ជាមួយនឹងសេវាកម្មដ៏ល្អឥតខ្ចោះរបស់យើងខ្ញុំ អតិថិជនអាចទទួលបានបទពិសោធន៍ដ៏អស្ចារ្យ។ ហាងរបស់យើងខ្ញុំផ្តោតលើការផ្តល់ផលិតផល និងសេវាកម្មដែលមានគុណភាពខ្ពស់ និងបំពេញតម្រូវការរបស់អតិថិជន។",

    ourmish:"បេសកកម្មរបស់យើង",
    ourmisp:"បេសកកម្មរបស់យើង​ គឺដើម្បីកែរសម្រួលឡើងវិញនូវអាហារដែលផលិតថ្មីៗដើម្បីកាន់តែមានគុណភាពខ្ពស់ និងមិនប៉ះពាល់ដល់គុណភាព រសជាតិ ឬបទពិសោធន៍។",

    ourmish1:"ចំណង់ចំណូលចិត្តរបស់យើង",
    ourmisp1:"យើងមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតបទពិសោធន៍ទទួលទានអាហារដែលមិនអាចបំភ្លេចបាន និងកសាងសហគមន៍មួយជុំវិញអាហារដ៏អស្ចារ្យ និងពេលវេលាល្អៗ។",

    ourmish2:"សហគមន៍របស់យើង",
    ourmisp2:"បម្រើអតិថិជនដែលពេញចិត្តជាង 15,000 នាក់ ហើយកំពុងបន្តកើនឡើងឥតឈប់ឈរ។ ការគាំទ្ររបស់អ្នកជំរុញកំណើនរបស់យើង និងជម្រុញភាពច្នៃប្រឌិតរបស់យើង។",
    
    mainhoo: "មុខម្ហូបចម្បង",
    mainpoo: "ម្ហូបឆ្ងាញ់ៗ ផលិតឡើងយ៉ាងសាមញ្ញ និងពេញចិត្តសម្រាប់គ្រប់ចំណង់អាហារ។",
    saladhoo: "សាឡាដ",
    saladpoo: "ស្រស់ៗ ស្រួយៗ និងពោរពេញដោយរសជាតិ — បន្លែបៃតងដែលមានគុណភាពសម្រាប់សុខភាព។",
    drinkhoo: "ភេសជ្ជៈ",
    drinkpoo: "ភេសជ្ជៈស្រស់ស្រាយដឹកជញ្ជូនលឿន — តែងតែត្រជាក់ និងតែងតែទាន់ពេលវេលា។",
    dessertshoo: "បង្អែម",
    ourmispdes:"ចុងបញ្ចប់ដ៏ផ្អែមល្ហែមដែលធ្វើឱ្យអាហារនីមួយៗមិនអាចបំភ្លេចបាន។",

    wharmenu:"មានម៉ឺនុយមួយចំនួន",
    wharmenup:"ស្វែងយល់ពីលក្ខណៈពិសេសតែមួយគត់របស់យើង ដែលធ្វើឱ្យដំណើរចម្អិនអាហាររលូន និង​ ឆ្ងុយឆ្ងាញ់។",

    gotocontactas:"ទៅកាន់​ អំពីយើង",
    gotoabout:"ទៅកាន់ មីនុយ",
    gotocontact:"ទៅកាន់ ទំនាក់ទំនង",
  }
};

function applyLanguage() {
  const t = translations[currentLang];
  Object.keys(t).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      if (["mainHeadingh", "menuTitle", "day", "scc", "emailoo", "eooo", "contactus","menuus","ooopu","ourstory"].includes(key)) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  document.body.classList.toggle("khmer", currentLang === "km");
  localStorage.setItem("lang", currentLang);
  renderMenu();
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "km" : "en";
  applyLanguage();
}

// ======================================================
// MENU DATA
// ======================================================

const MENU_ITEMS = [
  {
    id: "Garden Fresh Salad",
    title: { en: "Garden Fresh Salad", km: "Garden Fresh Salad" },
    price: 4.0,
    category: "salads",
    desc: {
      en: "Classic leafy green salad — light, crisp, versatile.",
      km: "សាឡាត់ស្លឹកបៃតង មានរសជាតិស្រាល ស្រួយ និងមានបន្លែច្រើនយ៉ាង។"
    },
    image: "https://i.pinimg.com/1200x/c0/04/f6/c004f6f9a24b3c091f40471ff6df472a.jpg"
  },
  {
    id: "Caesar Classic",
    title: { en: "Caesar Classic", km: "Caesar Classic" },
    price: 4.0,
    category: "salads",
    desc: {
      en: "Caesar Classic Classic Caesar salad with crisp greens.",
      km: "សាឡាត់ស្លឹកបៃតងបុរាណ មានរសជាតិស្រាល ស្រួយ។"
    },
    image: "https://i.pinimg.com/736x/17/19/9c/17199c736fa9db346ef6f02394508516.jpg"
  },
    {
    id: "amok",
    title: { en: "Fish Amok", km: "អាម៉ុកត្រី" },
    price: 5.00,
    category: "mains",
    desc: {
      en: "Traditional Cambodian steamed fish curry with coconut milk.",
      km: "អាម៉ុកត្រីគឺជាម្ហូបកូរ៉ីត្រីអាម៉ុកបែបប្រពៃណីជាមួយទឹកដោះគោខ្ទិះ។"
    },
    image: "  https://silkroadrecipes.com/wp-content/uploads/2024/08/Cambodian-Khmer-Fish-Amok-Recipe-square.jpg",
  },

  {
    id: "green-salad",
    title: { en: "Crunchy Green Salad", km: "សាឡាត់បៃតងក្រឡុក" },
    price: 4.00,
    category: "salads",
    desc: {
      en: "Fresh greens with a zesty lemon dressing.",
      km: "បន្លែបៃតងស្រស់ជាមួយទឹកជ្រលក់ក្រូចឆ្មារឆ្ងាញ់ដែលមានអត្ថប្រយោជន៌ដល់សុខភាព។"
    },
    image: "https://i.pinimg.com/1200x/0e/b5/07/0eb507b97f67a19e6667378e6239bf80.jpg",
  },
  {
    id: "KuyTeav",
    title:  {en: "Kuy Teav", km:"គុយទាវ"},
    price: 8.00,
    category: "mains",
    desc:{
      en: "A breakfast favorite made with pork or beef broth and rice noodles.",
      km: "អាហារពេលព្រឹកដែលពេញនិយមធ្វើជាមួយទឹកស៊ុបសាច់ជ្រូក ឬសាច់គោ និងមី។"},
    image: "https://i.pinimg.com/1200x/13/19/34/13193453c0e990dcadd34b5abcb492da.jpg",
  },
  {
    id: "Nom Banh Chok",
    title:  {en: "Nom Banh Chok", km:"នំបញ្ចុក"},
    price: 8.00,
    category: "mains",
    desc:{
      en: " Rice noodles topped with fish green curry gravy, often eaten for breakfast.",
      km: "មី​បាយ​ប្រោះ​ពីលើ​ដោយ​ទឹកជ្រលក់​ការី​បៃតង​ត្រី ដែល​ជា​ញឹកញាប់​ត្រូវ​បាន​គេ​បរិភោគ​សម្រាប់​អាហារ​ពេល​ព្រឹក។"},
    image: "https://i.pinimg.com/736x/e5/d6/67/e5d66743b20bf1330c4730df1cc8e50e.jpg",
  },
  {
    id: "Bai Sach Chrouk",
    title:  {en: "Bai Sach Chrouk", km:"បាយសាច់ជ្រូក"},
    price: 8.00,
    category: "mains",
    desc:{
      en: "Rice noodles topped with fish green curry gravy, often eaten for breakfast.",
      km: "មី​បាយ​ប្រោះ​ពីលើ​ដោយ​ទឹកជ្រលក់​ការី​បៃតង​ត្រី ដែល​ជា​ញឹកញាប់​ត្រូវ​បាន​គេ​បរិភោគ​សម្រាប់​អាហារ​ពេល​ព្រឹក។"},
    image: "https://i.pinimg.com/736x/63/28/f6/6328f607f65bc0931e8b28004113694f.jpg",
  },
    {
    id: "babaro krueng",
    title: { en: "Bbaro krueng", km: "បបរគ្រគ្រឿង" },
    price: 5.00,
    category: "mains",
    desc: {
      en: "It is a popular daily Khmer dish, cooked by boiling rice with meat and other spices.",
      km: "គឺមុខម្ហូបប្រចាំថ្ងៃដ៏ពេញនិយមមួយរបស់ខ្មែរ ដែលចម្អិនឡើងដោយការរម្ងាស់អង្ករជាមួយសាច់និង​ គ្រឿងទេសច្រើនទៀត"
    },
    image: "https://i.pinimg.com/1200x/0f/fd/28/0ffd28ae66602946c6df2ccff33b08ee.jpg",
  },
  {
    id: "Rice and ripe mangoes",
    title: {en:"Rice and ripe mangoes",
            km:"បាយដំណើប និងស្វាយទុំ"},
    price: 8.00,
    category: "desserts",
    desc:{en:"Rice and mango pudding is a popular dessert that is sweet, delicious.",
      km:"បាយដំណើបនិងស្វាយទុំ គឺជាបង្អែមដ៏ពេញនិយមមួយមុខដែលមានរសជាតិផ្អែម ឈ្ងុយឆ្ងាញ់"}, 
    image: "https://i.pinimg.com/1200x/dc/a0/dd/dca0dd4050b59f3b12636673d6623c98.jpg",
  },
  {
    id: "Sankhya Lapov",
    title:  {en: "Sankhya Lapov", km:"សង់ខ្យាល្ពៅ"},
    price: 8.00,
    category: "desserts",
    desc:{
      en: "A signature Khmer dessert featuring coconut cream and egg custard steamed inside a whole pumpkin.",
      km: "បង្អែមខ្មែរពិសេសមួយដែលមានក្រែមដូង និងស៊ុតខ្ទិះចំហុយនៅក្នុងល្ពៅទាំងមូល។"},
    image: "https://i.pinimg.com/736x/aa/a7/bf/aaa7bf78fd3d29dbfc092aadf970c5c6.jpg",
  },
  {
    id: "Brown Sugar Milk Tea",
    title: {en:"Brown Sugar Milk Tea",
            km:"Brown Sugar Milk Tea"},
    price: 8.00,
    category: "drinks",
    desc:{en:"A sweet and creamy drink made from rich brown sugar syrup, fresh milk, and often chewy cassava pearls.",km:"ភេសជ្ជៈផ្អែម និងមានក្រែម ផលិតពីសុីរ៉ូស្ករត្នោតសម្បូរបែប ទឹកដោះគោស្រស់ និងគុជខ្យងដំឡូងមីដែលជារឿយៗអាចទំពារបាន។"}, 
    image: "https://i.pinimg.com/736x/1d/cf/72/1dcf72fca6d5a4f44cc8fa3501bcd575.jpg",
  },
    {
    id: "Beef Lok Lak",
    title:  {en: "Beef Lok Lak", km:"សាច់គោឡុកឡាក់"},
    price: 8.00,
    category: "mains",
    desc:{
      en: "Fried beef slices served on lettuce, onions, and tomatoes, usually a three-course meal.",
      km: "សាច់គោ​ចៀន​ជា​ចំណិតៗ បម្រើ​លើ​សាឡាដ ខ្ទឹមបារាំង និង​ប៉េងប៉ោះ ជាធម្មតា​ជាអាហារ​ ៣ ពេល"},
    image: "https://i.pinimg.com/1200x/3c/bb/df/3cbbdfcd4a1a2c15eb318ce3a9a44e43.jpg",
  },
  ,{
    id: "Blue bean dessert",
    title: {en:"Blue bean dessert",
            km:"បបរសណ្ដែកខៀវ"},
    price: 8.00,
    category: "desserts",
    desc:{en:"Blue bean porridge is a traditional Khmer dish with a sweet and fragrant taste.",
      km:"បបរសណ្ដែកខៀវ គឺជាម្ហូបប្រពៃណីខ្មែរ ដែលមានរសជាតិផ្អែមល្ហែម និងក្រអូប"}, 
    image: "https://i.pinimg.com/1200x/01/70/df/0170dfbcd1957ddd8ab1c3342fd7bf1c.jpg",
  },
  {
    id: "babr lpow",
    title: {en:"Babr lpow",
            km:"បបរល្ពៅ"},
    price: 8.00,
    category: "desserts",
    desc:{en:"Babr lpow It is a delicious Khmer dessert, easy to make, and has many health benefits.",
      km:"បបរល្ពៅ គឺជាម្ហូបផ្អែមប្រពៃណីខ្មែរ ដែលមានរសជាតិផ្អែមល្ហែម និងក្រអូប ពិសេសពេលបន្ថែមទឹកដោះនិងខ្ទិះដូង"}, 
    image: "https://i.pinimg.com/736x/55/4b/f9/554bf935fcc9793d1e39956db2bd3599.jpg",
  },
  {
    id: "Matcha latte",
    title: {en:"Matcha latte",
            km:"ម៉ាត់ឆាឡាតេ"},
    price: 8.00,
    category: "drinks",
    desc:{en:"Matcha Latte is a popular drink made from Japanese green tea (Matcha), hot water, and milk.",
      km:"ម៉ាត់ឆាឡាតេ គឺជាភេសជ្ជៈដ៏ពេញនិយមមួយដែលផលិតចេញពីតែបៃតងជប៉ុន (ម៉ាត់ឆា) ទឹកក្តៅ និងទឹកដោះគោ។"}, 
    image: "https://i.pinimg.com/1200x/0b/1e/33/0b1e33aacaeda61bcff8918b9d7a56cb.jpg",
  },
  {
    id: "sugarcane juice",
    title: {en:"sugarcane juice",
            km:"ទឹកអំពៅ"},
    price: 8.00,
    category: "drinks",
    desc:{en:"Sugarcane juice is a refreshing, naturally sweet drink widely consumed in Cambodia",
      km:"ទឹកអំពៅគឺជាភេសជ្ជៈផ្អែមធម្មជាតិដ៏ស្រស់ស្រាយ ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយនៅក្នុងប្រទេសកម្ពុជា "}, 
    image: "https://i.pinimg.com/736x/16/7f/4b/167f4b277ee4db3439530e4ec546dbf7.jpg",
  },
  {
    id: "sugarcane juice",
    title: {en:"sugarcane juice",
            km:"ទឹកអំពៅ"},
    price: 8.00,
    category: "drinks",
    desc:{en:"Sugarcane juice is a refreshing, naturally sweet drink widely consumed in Cambodia",
      km:"ទឹកអំពៅគឺជាភេសជ្ជៈផ្អែមធម្មជាតិដ៏ស្រស់ស្រាយ ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយនៅក្នុងប្រទេសកម្ពុជា និងតំបន់ត្រូពិចដទៃទៀត។"}, 
    image: "https://i.pinimg.com/736x/70/a3/42/70a34253a88ecf33b2fd4636e5f87e11.jpg",
  },
      {
    id: "te kro ch chhma",
    title: { en: "te kro ch chhma", km: "តែក្រូចឆ្មា" },
    price: 4.00,
    category: "drinks",
    desc: {
      en: "It is a popular drink with a delicious sour taste, helps reduce fatigue, and provides many health benefits.",
      km: "គឺជាភេសជ្ជៈដ៏ពេញនិយមដែលមានរសជាតិជូរអែមឆ្ងាញ់ ជួយកាត់បន្ថយភាពនឿយហត់ និងផ្តល់អត្ថប្រយោជន៍"
    },
    image: "https://i.pinimg.com/736x/6d/9a/1a/6d9a1a9afdd38dba6907176210d243c2.jpg",
  },
    {
    id: "bokh lhoung",
    title: { en: "bokh lhoung", km: "បុខល្ហុង" },
    price: 4.00,
    category: "mains",
    desc: {
      en: "Papaya is a popular dish with a spicy, sour, and salty Southeast Asian flavor.",
      km: "បុកល្ហុង គឺជាមុខម្ហូបដ៏ពេញនិយម និងមានរសជាតិហឹរ ជូរ អែម ប្រៃ បែបអាស៊ីអាគ្នេយ៍"
    },
    image: "https://i.pinimg.com/736x/9c/5a/ca/9c5aca856d988a875e615c46fe243162.jpg",
  },
    {
    id: "png tea kaun",
    title: { en: "png tea kaun", km: "ពងទាកូន" },
    price: 4.00,
    category: "mains",
    desc: {
      en: "It is a popular and delicious snack that Cambodian people love to eat.",
      km: "គឺជាអាហារសម្រន់ដ៏ពេញនិយម និងមានឱជារសឈ្ងុយឆ្ងាញ់ ដែលប្រជាជនកម្ពុជានិយមទទួលទាន"
    },
    image: "https://i.pinimg.com/736x/77/2b/b3/772bb32e15c43969d9f9dd6d6d712d5d.jpg",
  },
    {
    id: "Passion Soda",
    title: { en: "Passion Soda", km: "ផាសិន សូដា" },
    price: 4.00,
    category: "drinks",
    desc: {
      en: "The tart taste of passion fruit and the refreshing taste of soda water.",
      km: "គឺជាភេសជ្ជៈដ៏ពេញនិយមរសជាតិជូរអែមរបស់ផ្លែផាសិន និងភាពស្រស់ស្រាយនៃទឹកសូដា។"
    },
    image: "https://i.pinimg.com/736x/14/1d/97/141d97058c3cb786ae8edb8365f7a062.jpg",
  },
    {
    id: "Spinach Glow",
    title: { en: "Spinach Glow", km: "នំអំបែងស្នូល" },
    price: 4.00,
    category: "mains",
    desc: {
      en: "is a classic leafy green salad that’s light, crisp, and versatile — perfect for menus or home meals.",
      km: "គឺជាសាឡាត់ស្លឹកបៃតងបុរាណដែលមានរសជាតិស្រាល ស្រួយ និងអាចប្រើប្រាស់បានច្រើនយ៉ាង ឬអាហារនៅផ្ទះ។"
    },
    image: "https://i.pinimg.com/1200x/08/5f/ba/085fba10311f8414441c705ef223ce62.jpg",
  },
    {
    id: "sach ang",
    title: { en: "sach ang", km: "សាចអាំង" },
    price: 4.00,
    category: "mains",
    desc: {
      en: "Barbecue is the most delicious of them all, a snack in the aisles, at the grill or at the store buffet.",
      km: "សាច់អាំង គឺជាមុខម្ហូបដ៏ពេញនិយមបំផុតមួយនៅក្នុងប្រទេសកម្ពុជា ដែលមានច្រើនទម្រង់ ចាប់តាំងពីសាច់ដោតឈើអាំងតាមចិញ្ចើមផ្លូវ រហូតដល់សាច់អាំងភ្នំភ្លើង ឬប៊ូហ្វេតាមហាង។"
    },
    image: "https://i.pinimg.com/736x/e9/c5/15/e9c515b8de5af3abcaf8d9263e9b38d0.jpg",
  },
  
];

// ======================================================
// IMAGE MODAL (FIXED)
// ======================================================

function showAlert(src) {
  const modal = document.getElementById("overlay");
  const alertImg = document.getElementById("alertImg");
  if (modal && alertImg) {
    alertImg.src = src;
    modal.style.display = "flex";
  }
}

function closeAlert() {
  const modal = document.getElementById("overlay");
  if (modal) modal.style.display = "none";
}

document.getElementById("overlay")?.addEventListener("click", e => {
  if (e.target.id === "overlay") closeAlert();
});

// ======================================================
// RENDER MENU
// ======================================================

function renderMenu() {
  if (!menuGrid) return;

  const filtered = MENU_ITEMS.filter(item => {
    const category = currentFilter === "all" || item.category === currentFilter;
    const title = item.title[currentLang].toLowerCase();
    const desc = item.desc[currentLang].toLowerCase();
    const query = currentQuery.toLowerCase();
    return category && (title.includes(query) || desc.includes(query));
  });

menuGrid.innerHTML =
  filtered.map((item, index) => `
    <div 
      class="food-card scroll-animate"
      style="--delay:${index * 0.1}s"
    >
      <div class="image-wrapper">
        <img
          src="${item.image}"
          alt="${item.title[currentLang]}"
          onclick="showAlert('${item.image}')"
        />
      </div>

      <div class="food-content">
        <h2>${item.title[currentLang]}</h2>
        <p>${item.desc[currentLang]}</p>

        <div class="food-footer">
          <span class="price">$${item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join("");


  handleScroll();
}

// ======================================================
// FILTER & SEARCH
// ======================================================

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.dataset.filter;
    renderMenu();
  });
});

searchInput?.addEventListener("input", e => {
  currentQuery = e.target.value;
  renderMenu();
});

// ======================================================
// SCROLL ANIMATION
// ======================================================

function handleScroll() {
  document.querySelectorAll(".scroll-animate").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("show");
  });
}

window.addEventListener("scroll", handleScroll);

// ======================================================
// FOOTER YEAR
// ======================================================

if (yearEl) yearEl.textContent = new Date().getFullYear();

// ======================================================
// NEWS SECTION
// ======================================================

const moreBtn = document.getElementById("moreBtn");

function initNewsCards() {
  const cards = document.querySelectorAll(".news-card");
  cards.forEach((card, index) => {
    card.classList.toggle("hidden", index >= 3);
  });
}

moreBtn?.addEventListener("click", () => {
  const hiddenCards = document.querySelectorAll(".news-card.hidden");
  if (hiddenCards.length > 0) {
    hiddenCards.forEach(card => card.classList.remove("hidden"));
    moreBtn.textContent = "Show Less";
  } else {
    document.querySelectorAll(".news-card").forEach((card, index) => {
      if (index >= 3) card.classList.add("hidden");
    });
    moreBtn.textContent = "Show More";
    document.querySelector(".news-section")?.scrollIntoView({ behavior: "smooth" });
  }
});

initNewsCards();

// ======================================================
// RECIPE SECTION
// ======================================================

document.querySelectorAll(".heartttt").forEach(btn => {
  btn.addEventListener("click", () => btn.classList.toggle("active"));
});

const observerttt = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("showttt");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".hiddenttt").forEach(el => observerttt.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".recipe-cardttt");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const visibleCards = 3;
  let expanded = false;

  cards.forEach((card, index) => {
    if (index >= visibleCards) card.style.display = "none";
  });

  showMoreBtn?.addEventListener("click", () => {
    if (!expanded) {
      // Show all cards
      cards.forEach(card => (card.style.display = "block"));
      showMoreBtn.textContent = "Show Less";
      expanded = true;
    } else {
      // Hide extra cards again
      cards.forEach((card, index) => {
        if (index >= visibleCards) card.style.display = "none";
      });
      showMoreBtn.textContent = "Show More";
      expanded = false;

      // Scroll back to section
      document.querySelector(".recipesttt")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ======================================================
// INIT
// ======================================================

applyLanguage();
renderMenu();
handleScroll();
// ======================================================
// RECIPE SCROLL ANIMATION
// ======================================================

