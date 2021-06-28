import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
                اشتراک
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                ثبت نام
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <Router>
            <nav className="nav d-flex justify-content-between">
              <Link to="/home" className="p-2 link-secondary">
                خانه
              </Link>
              <Link to="/tehran" className="p-2 link-secondary">
                تهران
              </Link>
              <Link to="/isfahan" className="p-2 link-secondary">
                اصفهان
              </Link>
              <Link to="/shiraz" className="p-2 link-secondary">
                شیراز
              </Link>
              <Link to="/mashhad" className="p-2 link-secondary">
                مشهد
              </Link>
              <Link to="/tabriz" className="p-2 link-secondary">
                تبریز
              </Link>
              <Link to="/yazd" className="p-2 link-secondary">
                یزد
              </Link>
              <Link to="/ardebil" className="p-2 link-secondary">
                اردبیل
              </Link>
              <Link to="/gilan" className="p-2 link-secondary">
                گیلان
              </Link>
              <Link to="/mazandaran" className="p-2 link-secondary">
                مازندران
              </Link>
              <Link to="/bandarabbas" className="p-2 link-secondary">
                بندرعباس
              </Link>
              <Link to="/kerman" className="p-2 link-secondary">
                کرمان
              </Link>
              <Link to="/semnan" className="p-2 link-secondary">
                سمنان
              </Link>
            </nav>
          </Router>
        </div>
      </div>

      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <img
              src="https://i.pinimg.com/originals/ba/de/3f/bade3f5134bd8c16fae9cb800023ab23.jpg"
              alt="n/a"
              id="around_the_world_img"
            ></img>
            <h1 className="display-4 fst-italic" style={{ textAlign: "right" }}>
              با ما، به هرکجای دنیا که می‌خواهید سفر کنید
            </h1>
            <p className="lead my-3" style={{ textAlign: "right" }}>
              این یک تکست بی معنی است که تکرار شده است این یک تکست بی معنی است
              که تکرار شده است این یک تکست بی معنی است که تکرار شده است این یک
              تکست بی معنی است که تکرار شده است این یک تکست بی معنی است که تکرار
              شده است{" "}
            </p>
            <p className="lead mb-0">
              <a href="Continue reading.html" className="text-white fw-bold">
                ...در ادامه بخوانید
              </a>
            </p>
          </div>
        </div>
      </main>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/tehran" component={Tehran}></Route>
        <Route path="/isfahan" component={Isfahan}></Route>
        <Route path="/shiraz" component={Shiraz}></Route>
        <Route path="/mashhad" component={Mashhad}></Route>
        <Route path="/tabriz" component={Tabriz}></Route>
        <Route path="/yazd" component={Yazd}></Route>
        <Route path="/ardebil" component={Ardebil}></Route>
        <Route path="/gilan" component={Gilan}></Route>
        <Route path="/mazandaran" component={Mazandaran}></Route>
        <Route path="/bandarabbas" component={Bandarabbas}></Route>
        <Route path="/kerman" component={Kerman}></Route>
        <Route path="/semnan" component={Semnan}></Route>
      </Switch>
      <footer className="blog-footer">
        <div className="row-md-6" id="about_us">
          <h3>درباره‌ی ما</h3>
          <p>
            این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
            تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی
            است که تکرار شده این یک تکست بی معنی است که تکرار شده{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div className="Home">
      <div className="row">
        <div className="col-md-12">
          <article className="blog-post">
            <h2 className="blog-post-title">موضوع بی معنی</h2>
            <p className="blog-post-meta">نوشته شده در تاریخ 30 بهمن 99</p>

            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی
              است که تکرار شده{" "}
            </p>
            <hr></hr>
            <p>
              این یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که
              تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی
              است که تکرار شدهاین یک تکست بی معنی است که تکرار شده
            </p>
            <blockquote>
              <p>
                این یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که
                تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی
                است که تکرار شدهاین یک تکست بی معنی است که تکرار شده
              </p>
            </blockquote>
            <p>
              این یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که
              تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی
              است که تکرار شدهاین یک تکست بی معنی است که تکرار شده
            </p>
            <h2>موضوع بی معنی</h2>
            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی
              است که تکرار شده{" "}
            </p>
            <h3>موضوع بی معنی</h3>
            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده این یک تکست بی معنی است که تکرار شده{" "}
            </p>
            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده این یک تکست بی معنی است که تکرار شده{" "}
            </p>
            <h3>موضوع بی معنی</h3>
            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی
              است که تکرار شده{" "}
            </p>
            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده{" "}
            </p>
            <p>این یک تکست بی معنی است که تکرار شده </p>
          </article>

          <article className="blog-post">
            <h2 className="blog-post-title">موضوع بی معنی</h2>
            <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی
              است که تکرار شده .
            </p>
            <blockquote>
              <p>
                این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
                تکرار شده{" "}
              </p>
            </blockquote>
            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی
              است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست
              بی معنی است که تکرار شده
            </p>
            <p>
              این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که
              تکرار شده{" "}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

function Tehran() {
  return (
    <div className="Tehran">
      <h1 style={{ textAlign: "center" }}>تهران</h1>
      <img
        src="https://wallpaperaccess.com/full/1291453.jpg"
        alt="تهران"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد تهران</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          تهران یکی از مهم‌ترین مراکز گردشگری ایران به حساب می‌آید و دارای
          مجموعه‌ای از جاذبه‌های گردشگری است که شامل کاخ‌ها و موزه‌هایش می‌شود.
          میدان و برج آزادی، برج میلاد، پل طبیعت و کاخ گلستان از جاذبه های
          گردشگری مهم شهر تهران هستند. تهران در سال ۲۰۰۹ میلادی، میزبان ۶۴۶ هزار
          گردشگر خارجی بود و در سال ۲۰۱۲ به 1.11 میلیون نفر تغییر یافت. افزایش
          پیوستهٔ ورود گردشگران خارجی به این شهر باعث شد آمار این گردشگران در
          سال ۲۰۱۵ به 1.51 میلیون نفر برسد. عراقی ها بیشترین درصد مسافران خارجی
          را بین سالهای 2012 تا 2016 در تهران تشکیل میدادند که این میزان در سال
          2016 بیش از 450 هزار نفر بود. تهران با جذب 1.64 میلیون گزدشگر در سال
          2016 یکی از مهمترین شهرهای خاورمیانه در زمینه گردشگری بوده است و پس از
          شهرهای دبی، ژوهانسبورگ، ریاض و ابوظبی در رتبه پنجم از حیث ورود گردشگر
          در خاورمیانه است.
        </p>
      </article>
    </div>
  );
}

function Isfahan() {
  return (
    <div className="Isfahan">
      <h1 style={{ textAlign: "center" }}>اصفهان</h1>
      <img
        src="https://images.kojaro.com/2020/8/29c87dc1-bc25-4a8a-8c94-8529e7e26dcb.jpg"
        alt="اصفهان"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد اصفهان</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          اصفهان شهری تاریخی در مرکز ایران است. این شهر سومین شهر بزرگ و پرجمعیت
          ایران بعد از دو شهر تهران و مشهد است. این شهر در دوران صفویان به عنوان
          پایتخت ایران انتخاب شده بود و در این دوران شکوه بسیار زیادی داشت.
          بسیاری از میراث تاریخی شهر اصفهان در یونسکو به ثبت جهانی رسیده است.
          اصفهان سرشار از آثار تاریخی و دیدنی است که در اینها میتوان به آثار
          بینظیری مانند میدان نقش جهان، مسجد امام، سی و سه پل، پل خواجو، پل
          مارنان، مسجد جامع اصفهان، کاخ عالی قاپو، کاخ هشت بهشت، کلیسا وانک و
          هتل عباسی اشاره کرد. اصفهان مکانهای تفریحی بسیار زیادی دارد. مانند
          پارک جنگلی ناژوان که از معروف‌ترین پارک‌های جنگلی اصفهان است که از
          امکاناتی مانند باغ پرندگان و خزندگان و پارک آبی برخورددار است. همچنین
          بام شهر اصفهان در شمال غرب این شهر بام شهر اصفهان آکواریوم اصفهان در
          پارک جنگلی ناژوان به عنوان اولین تونل آکواریوم ایران در نوروز سال ۱۳۹۵
          افتتاح شد و در آن انواع ماهی‌ها و آبزیان وجود دارد. سینماهای این شهر 9
          عدد هستند که از معروفترین آنها میتوان به پردیس سیتی سنتر و سینما قدس
          اشاره کرد. همچنین سینما ساحل، سینما فلسطین و سینما سپاهان از دیگر
          سینماهای معروف این شهر هستند.
        </p>
      </article>
    </div>
  );
}

function Shiraz() {
  return (
    <div className="Shiraz">
      <h1 style={{ textAlign: "center" }}>شیراز</h1>
      <img
        src="https://aminmana.com/wp-content/uploads/2019/04/shiraz.jpg"
        alt="شیراز"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد شیراز</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          شیراز یکی از کلان شهرهازرگ ایران است و مرکز استان فارس است. شیراز
          پنجمین شهر بزرگ و پرجمعیت ایران می باشد. شیراز به عنوان یکی از
          مهم‌ترین مراکز گردشگری و توریستی ایران مطرح بوده و با جاذبه‌های تاریخی
          فراوان برای گردشگران داخلی و خارجی شناخته شده‌است. از جاذبه‌های تاریخی
          شهر شیراز می‌توان به آتشکدهٔ صمیکان، آرامگاه حافظ، آرامگاه خواجوی
          کرمانی، آرامگاه سعدی، ارگ کریم‌خان، باغ جهان‌نما، باغ ارم، باغ تخت،
          باغ چهل‌تن، باغ دلگشا، باغ عفیف‌آباد، باغ نارنجستان قوام، باغ هفت‌تن،
          خانه صالحی، چاه مرتاض علی، حمام باغ نشاط، عمارت باغ ایلخانی، عمارت باغ
          نشاط، عمارت دیوانخانه و قصر ابونصر اشاره کرد. از جاذبه‌های طبیعی شهر
          شیراز می‌توان به آبشار کوهمره سرخی، برم‌دلک، پارک قلعه‌بندر، پارک ملی
          بمو، باغ پرندگان شیراز و چشمه جوشک اشاره کرد. سرانه فضای سبز در شیراز
          در سال ۱۳۸۷ برابر با ۱۲٫۷ متر مربع به ازای هر تن است. هم‌اکنون در شهر
          شیراز ۱۱۸ پارک فعالیت می‌کنند که این تعداد شامل 48 پارک شهری و 70 پارک
          محله ای است که از این جهت مساحت کل پارکها در شیراز ۲٬۱۷۰٬۵۵۰ متر مربع
          است که از این میزان ۱۲۸٬۰۴۴ متر مربع متعلق به پارکهای محله ای است و
          همچنین پارک آزادی با ۲۰۴٬۱۹۱ مترمربع مساحت بزرگترین پارک شیراز محسوب
          می‌شود.
        </p>
      </article>
    </div>
  );
}
function Mashhad() {
  return (
    <div className="Mashhad">
      <h1 style={{ textAlign: "center" }}>مشهد</h1>
      <img
        src="http://mashadmag.ir/wp-content/uploads/2019/01/Mashad-1.jpg"
        alt="مشهد"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد مشهد</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          مشهد کلان‌شهری در شمال شرقی ایران و مرکز استان خراسان رضوی است. این
          شهر در زمان افشاریان، پایتخت ایران بود. مشهد با ۳۵۱ کیلومتر مربع
          مساحت، این شهر به واسطهٔ وجود حرم علی بن موسی الرضا، هشتمین امام مذهب
          شیعه، سالانه پذیرای بیش از ۲۷ میلیون زائر از داخل و دو میلیون زائر از
          خارج از کشور است. آرامگاه علی بن موسی الرضا در مشهد که با نام حرم امام
          رضا و حرم رضوی شناخته می‌شود، مجموعه‌ای دربرگیرندهٔ آرامگاه علی بن
          موسی الرضا و بناهایی دیگر است. این مجموعه از نظر مساحت بزرگترین و از
          لحاظ جمعیت دومین مسجد در جهان است. این مجموعه شامل مسجد گوهرشاد، یک
          موزه، دو کتابخانه، چهار مدرسه علوم دینی، یک گورستان، دانشگاه علوم
          اسلامی رضوی، یک سالن غذاخوری برای زائران، رواق‌های وسیع برای
          نمازگزاران و چندین ساختمان دیگر است. از سناباد و توس قدیم آثار تاریخی
          زیادی بر جای نمانده‌است. هم‌اکنون شهر توس در حال بازسازی است. چهار
          طاقی بازه هور از قدیمی‌ترین بناهای موجود در محدودهٔ شهر است که زمان
          ساخت آن را سدهٔ سوم م تخمین می‌زنند. برخی از جاذبه‌های تاریخی مشهد
          عبارتند از: آرامگاه نادرشاه، آرامگاه خواجه ربیع، آرامگاه فردوسی،
          ایستگاه راه‌آهن، گنبد خشتی، گنبد هارونیه و مدرسه عباسقلیخان. جاذبه‌های
          طبیعی که در نزدیکی شهر مشهد قرار دارند، شامل ییلاقات شاندیز، طرقبه،
          زشک، روستای کنگ، نغندر، جاغرق، چالیدره، پارک جنگلی وکیل‌آباد، باغ‌وحش
          وکیل‌آباد، آبشار ارتکند، پارک جنگلی نه‌دره در دو کیلومتری جنوب مشهد،
          بوستان کوهسنگی، آبشار قره سو، دره اخلمد، فریزی، سد ارداک، هفت حوض،
          چشمه گیلاس و چشمه گراب هستند.
        </p>
      </article>
    </div>
  );
}

function Tabriz() {
  return (
    <div className="Tabriz">
      <h1 style={{ textAlign: "center" }}>تبریز</h1>
      <img
        src="https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1394/06/03/13940603114647695955824.jpg"
        alt="تبریز"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد تبریز</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          تبریز کلانشهری در منطقهٔ آذربایجان ایران و مرکز استان آذربایجان شرقی
          است. این شهر، بزرگ‌ترین قطب اقتصادی منطقهٔ آذربایجان ایران و مرکز
          اداری، ارتباطی، بازرگانی، سیاسی، صنعتی، فرهنگی و نظامی این منطقه
          شناخته می‌شود. تبریز چهارمین شهر بزرگ ایران است. اکثر ساکنان تبریز
          آذری هستند و به زبان ترکی آذربایجانی صحبت میکنند. از بناهای تاریخی
          تبریز، می‌توان به بناهای باستانی ارگ تبریز و مسجد کبود در قسمت مرکزی
          شهر اشاره نمود. ارگ تبریز بنایی آجری است که پیش از سال ۷۰۱ خورشیدی بر
          روی آواره‌های مسجدی ساخته شده و از نظر سادگی، اندازه و پایداری،
          چشم‌گیر است. مسجد کبود، بنایی است که حدود سال ۸۲۹ خورشیدی ساخته شده و
          به دلیل کاشی‌کاریِ آبیِ تزئینیِ زیبایش، شهرت یافته‌است. بازار تبریز که
          توسط یونسکو در فهرست میراث جهانی ثبت شده‌است در مرکز شهر قرار دارد.
          این بازار هنوز یکی از مراکز اقتصادی مهم شهر به حساب می آید. در حاشیه
          تبریز بناهایی نظیر مسجد عینالی در بالای کوه عینالی، مشرف به تبریز قرار
          گرفته و گمان میرود در دوران پیش از اسلام، آتشگاه تبریز بوده است. بنای
          شاه‌گلی یا ایل‌گلی نیز در پارک بزرگ جنوب شرق تبریز قرار دارد. شاه گلی
          کاخ ییلاقی والیان و حاکمان تبریز به شمار میرفت که در زمان قاجار کار
          برای تبدیل آن به تفرجگاه عمومی آغاز شد و سرانجام در دوران پیش از
          انقلاب اسلامی با بازسازی عمارت مرکزی و افزودن گذرگاه پیاده‌روی به آن
          این محل به تفرجگاه عمومی تغییر کاربری د نیزاده‌شد. کاخ شهرداری تبریز و
          کاخ استانداری آذربایجان شرقی در مرکز از بناهای دوران معاصر تبریز می
          باشند که هر دو متعلق به دوره بین دو جنگ جهانی اول و دوم می‌باشند.
        </p>
      </article>
    </div>
  );
}

function Yazd() {
  return (
    <div className="Yazd">
      <h1 style={{ textAlign: "center" }}>یزد</h1>
      <img
        src="https://www.bultannews.com/files/fa/news_albums/654356/8251/resized/resized_1236704_194.jpg"
        alt="یزد"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد یزد</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          یزد یکی از کلان‌شهرهای ایران و مرکز استان و شهرستان یزد می‌باشد که در
          مجاورت و نزدیک به مرکز ایران است. بافت تاریخی این شهر در سال ۱۳۹۶ ثبت
          جهانی شد. شهر یزد یکی از قطبهای پزشکی ایران به‌شمار می‌آید. یزد در بین
          رشته‌های شیرکوه در دشتی گسترده به نام دشت یزد ـ اردکان قرار گرفته‌است.
          یزد در منطقه فلات مرکزی ایران واقع شده است. بافت تاریخی شهر یزد در
          تاریخ ۱۶ اسفند ۱۳۸۴ با شماره ثبت ۱۵۰۰۰، به‌عنوان یکی از آثار ملی ایران
          به ثبت رسیده‌است. شهر یزد به دلیل معماری تاریخی ارزشمند و بافت سنتی
          دست نخورده اش در 18 تیر سال 1396 در فهرست میراث جهانی یونسکو به ثبت
          رسید. این شهر تاریخی به عنوان اولین شهر ایران و بیست و دومین اثر
          تاریخی کشور در فهرست میراث جهانی یونسکو به ثبت رسید. مسلماً بارزترین
          خصوصیت شهر یزد را می‌توان وجود محله‌های قدیمی و سنتی با کوچه پس
          کوچه‌های خشت و گلی در هم تنیده، بازارها، مساجد، حمام و خانه‌های آن
          دانست. در مجموع ۷۷ محله از مجموعه محلات شهر یزد به دلیل قرار گرفتن در
          محدوده بافت تاریخی یا در حریم آن، در سال ۱۳۸۴ تحت عنوان بافت تاریخی
          یزد به ثبت ملی رسیده اند مهم‌ترین محلهٔ باستانی یزد چهار منار می‌باشد.
          محلات مسجد جامع، بازار نو، فهادان و شاه ابوالقاسم در محور اصلی گردشگری
          یزد و حدفاصل مسجد جامع و زندان اسکندر قرار دارند.
        </p>
      </article>
    </div>
  );
}

function Ardebil() {
  return <h1></h1>;
}

function Gilan() {
  return <h1></h1>;
}

function Mazandaran() {
  return <h1></h1>;
}

function Bandarabbas() {
  return <h1></h1>;
}

function Kerman() {
  return <h1></h1>;
}

function Semnan() {
  return <h1></h1>;
}
export default App;
