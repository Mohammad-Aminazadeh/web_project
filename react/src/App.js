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
		   پنج هتل برتر تهران به ترتیب عبارت است از: هتل لاله، هتل اسپیناس پالاس، هتل انقلاب، هتل نووتل و هتل پارسیان آزادی.
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
		  پنج هتل برتر شهر اصفهان به ترتیب عبارت است از: هتل عباسی، هتل کوثر، هتل آسمان، هتل پیروزی و هتل آوین.
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
  return (
    <div className="Ardebil">
      <h1 style={{ textAlign: "center" }}>اردبیل</h1>
      <img
        src="https://safarmarket.com/blog/data/uploaded_files/d762334fbcc5c0a8b561b504.jpg"
        alt="اردبیل"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد اردبیل</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          اردبیل یکی از کلان شهرهای ایران و مرکز استان اردبیل است. این شهر در
          قبل و پس از اسلام، مرکز آذربایجان بوده‌است. اردبیل از شهرهای باستانی و
          تاریخی ایران است. این شهر در نزدیکی مرز جمهوری آذربایجان قرار گرفته و
          از سردترین شهرهای ایران محسوب می‌گردد که جاذبه‌های طبیعی زیادی دارد.
          این شهر در 220 کیلومتری تبریز و در 580 کیلومتری تهران واقع شده است.
          آرامگاه شیخ صفی‌الدین میراث جهانی یونسکو، مسجد جامع اردبیل و بقعه سید
          امین الدین جبراییل از بناهای تاریخی مهمّ این شهر به‌شمار می‌روند.
          مضافاً این که کوه سبلان یا ساوالان، دریاچه شورابیل (در داخل شهر)،
          رودخانه بالیقلوچای (در داخل شهر)، آبشار سیبیه خانی «آق بلاغ» لرد،
          دریاچه نئور، جنگل فندق‌لو، پیست اسکی آلوارس، پیست اسکی روی چمن جنگل
          فندقلوی نمین(اردبیل)، پیکره سنگی بابا داوود عنبران، شهر توریستی سرعین،
          روستای گردشگری لرد ، تفرجگاه بولاغلار و دهکده سولان، پل معلق شیشه ای
          هیر، دریاچه سوها، پل معلق پیرتقی، تفرجگاه بولاغلار در زمره جاذبه‌های
          گردشگری مهم این شهر به حساب می‌آیند. اردبیل به واسطه داشتن تاریخ کهن
          در ادوار مختلف و تکامل در این دوره‌ها صنایع دستی مختلفی را در جهت نیاز
          به ان به تکامل رسانده و به جوامع مختلف معرفی و صادر نموده است.
        </p>
      </article>
    </div>
  );
}

function Gilan() {
  return (
    <div className="Gilan">
      <h1 style={{ textAlign: "center" }}>گیلان</h1>
      <img
        src="https://shahrak-arash.com/wp-content/uploads/2021/01/gilan-11.jpg"
        alt="گیلان"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد گیلان</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          گیلان خطه ای از بهشت زیبای ایران زمین است که با تمام جاذبه های دیدنی
          اش هیچ گاه برای سفر تکراری نمیشود. در این مطلب قصد داریم لیستی کامل از
          جاهای دیدنی گیلان در اختیارتان قرار دهیم تا این بار که خواستید مقصد
          سفرتان در این استان باشد جاذبه های گردشگری بیشتری را بشناسید. البته
          اگر دوست دارید اقامت در طبیعت زیبای شمال ایران را تجربه کنید بهتر است
          قبل از سفر برای اجاره ویلا شمال مثل اجاره ویلا رامسر به سایت سلطان سفر
          سر بزنید.
        </p>
      </article>
    </div>
  );
}

function Mazandaran() {
  return (
    <div className="Mazandaran">
      <h1 style={{ textAlign: "center" }}>مازندران</h1>
      <img
        src="https://www.finds.ir/img/2020042876011819.jpg"
        alt="مازندران"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد مازندران</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          مازندران یکی از قطب های گردشگری کشور محسوب می شود که هرساله پذیرای
          گردشگران بسیاری از اقصی نقاط کشور است . این منطقه سرسبز چنان چشم نواز
          است که روح را جلا بخشیده و باعث طراوت وجود می شود . استان مازندران در
          شمال ایران و در کرانه های جنوبی دریای خزرقرار دارد و با استانهای
          گلستان، سمنان، تهران، البرز، قزوین و گیلان هم مرز است. قله دماوند
          مرتفع ترین قله ایران در استان مازندران و در شهرستان آمل قرار دارد. این
          استان دارای 22 شهرستان است که شهرستان ساری، مرکز و پرجمعیت ترین شهر
          این استان است. مردم مازندران به زبان تبری (مازندرانی) و فارسی صحبت می
          کنند. وجود جاذبه های گردشگری ، جاهای دیدنی، اماکن مقدس و مذهبی، و
          امکانات توریستی و تفریحی شهرهای استان مازندران آن را به قطب گردشگری
          ایران تبدیل نموده است . در این بخش از گردشگری نمناک شما را با جاذبه
          های گردشگری استان مازندران آشنا می کنیم.
        </p>
      </article>
    </div>
  );
}

function Bandarabbas() {
  return (
    <div className="Bandarabbas">
      <h1 style={{ textAlign: "center" }}>بندرعباس</h1>
      <img
        src="https://media.mehrnews.com/d/2017/12/24/3/2672251.jpg"
        alt="بندرعباس"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد بندرعباس</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          بندر عباس مرکز استان هرمزگان و یکی کلان‌شهرهای رسمی ایران است که در
          جنوب ایران قرارگرفته است. شهر بندرعباس پس از شهر شیراز، بزرگترین و
          پرجمعیت‌ترین شهر در جنوب ایران است. بندرعباس بزرگترین بندر ایران است.
          علاوه‌بر آن مجتمع بندری شهید رجایی و بندر شهید باهنر به‌عنوان نقطه
          اتکای اقتصاد ایران در جهت جابجایی کالا و نیز وجود کارخانه‌های پرشمار و
          بزرگ صنعتی؛ بندرعباس را به شهری مهم در زمینهٔ بازرگانی و صنعت کشور
          همچنین منطقه مبدل کرده‌است. فاصله بندرعباس تا تهران ۱۲۸۷ کیلومتر، تا
          تبریز ۱۸۰۰ کیلومتر ، تا اصفهان ۹۳۳ کیلومتر، تا شیراز ۵۷۷ کیلومتر و تا
          کرمان ۴۹۱ کیلومتر است. بندرعباس به دلیل شرایط ویژه خود همواره پذیرای
          مهمانان بسیاری از همه نقاط ایران است و جمعیت این شهر در فصل‌های مختلف
          سال متفاوت است و همین شرایط موجب شده تا این شهر به یکی از مقصدهای
          گردشگری دریایی جنوب کشور تبدیل شود. عمارت کلاه فرنگی قدیمی‌ترین بنای
          تاریخی بندرعباس است که بیش از سه قرن قدمت دارد و توسط هلندی‌ها ساخته
          شده‌است. این بنا در مجاورت اسکله قدیم بندرعباس رو به دریا و در بلوار
          طالقانی در محوطه حوزه علمیه قرار دارد. حمام گله‌داری که به حمام شاه
          عباسی هم معروف بوده از پنج گنبد بزرگ و کوچک تشکیل شده و ازجمله بناهای
          دوره قاجاری در بندرعباس است. این بنا که در محله قلعه‌شاهی (اوزی‌ها)
          واقع شده به همت حاج احمد گله‌داری مرمت شده‌است.
        </p>
      </article>
    </div>
  );
}

function Kerman() {
  return (
    <div className="Kerman">
      <h1 style={{ textAlign: "center" }}>کرمان</h1>
      <img
        src="https://cdn.mehrbooking.net/general/Images/Cities/kerman-ganjalikhan-mosque.jpg"
        alt="کرمان"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد کرمان</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          شهر کرمان یکی از کلانشهرهای ایران و مرکز استان کرمان پهناورترین استان
          ایران درجنوب شرقی این کشور واقع است. کرمان یکی از پنج شهر تاریخی ایران
          است. کرمان یکی از قطبهای عمل‌های سخت پزشکی پیوند اعضا در ایران است.
          کرمان به عنوان پایلوت دولت الکترونیک انتخاب شده‌است و در برنامه‌های
          توسعه کشور باید به شهری الکترونیکی تبدیل شود. کرمان به دلیل موقعیت خاص
          تاریخی، جغرافیایی و فرهنگی خود همیشه به عنوان یکی از مهم‌ترین مراکز
          گردشگری و توریستی ایران مطرح بوده و همه ساله میزبان تعداد فراوانی از
          گردشگران داخلی و خارجی است. کرمان از استان‌های مهم و تاریخی کشور به
          حساب می‌آید. استان کرمان مرکز جنوب‌شرق کشور است و به نوعی مرجع صنعتی،
          فرهنگی، سیاسی، کشاورزی دانشگاهی-علمی، مذهبی و سایر شاخص‌ها در میان
          استان‌های منطقه جنوب شرق کشور است. استان کرمان همچنین بیش از ۶۶۰ اثر
          ملی ثبت شده دارد و از استان‌های تاریخی ایران است. استان کرمان پنج اثر
          ثبت شده در میراث جهانی یونسکو دارد و رتبه نخست ایران را از این حیث
          دارد. کرمان همانند سایر شهرهای ایران، از انواع غذاهای سنتی و با
          طعم‌های متفاوت برخوردار است که برخی از آن‌ها در مناسبت‌های ویژه و
          تعداد بسیاری نیز به شکل عادی در طی سال تهیه می‌شود.
        </p>
      </article>
    </div>
  );
}

function Semnan() {
  return (
    <div className="Semnan">
      <h1 style={{ textAlign: "center" }}>سمنان</h1>
      <img
        src="https://www.alaedin.travel/Files/cities/semnan/Alaedin-Travel-Semnan-City-1.jpg"
        alt="سمنان"
        width={500}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">درمورد سمنان</h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>
        <p>
          سمنان یکی از شهرهای ایران، مرکز استان سمنان و شهرستان سمنان است. این
          شهر، در جنوب رشته کوه البرز و شمال دشت کویر، در فاصله ۲۱۶ کیلومتری
          تهران و در راه تهران به خراسان، در مسیر جاده ۴۴ قرار گرفته‌است. استان
          سمنان با بیش از ۷۲۹ گونه جاذبه طبیعی، تاریخی- فرهنگی و انسان‌ساخت، یکی
          از استان‌های دارای پتانسیل گردشگری در کشور محسوب می‌شود. از مجموع
          جاذبه‌های موجود در استان، ۸۶/۳۰٪ در شهرستان سمنان، سرخه و مهدی‌شهر و
          بقیه در سایر شهرستان‌ها توزیع شده‌اند. از سال ۱۳۸۹ به بعد شهرهای سرخه
          و مهدی‌شهر از شهرستان سمنان جدا شده‌اند، اما در بسیاری از آمارها هنوز
          با هم آورده می‌شوند. همچنین شهرهای گرمسار و آرادان و نیز شاهرود و
          میامی، به همین صورت است. در جنوب سمنان، مناطقی چون دشت کویر، ریگ جن،
          تپه دلازیان، و تپه‌های میرک دلازیان از مهم‌ترین ویژگی‌های جغرافیایی
          به‌شمار می‌روند. رودخانه فصلی گل رودبار در شمال غرب این شهر و با
          سرچشمه گرفتن از رشته کوه‌های البرز و گذر از شهر درجزین به دشت کویر
          می‌ریزد. رود گل رودبار از سه کیلومتری باختر مهدی‌شهر سرچشمه گرفته و
          شاخابه رودهای ده‌صوفیان و شهمیرزاد و کاریزهای روستای درجزین به این رود
          می‌پیوندند. رود گل رود در شمال سمنان در جایی به نام «آب پخش کن» به ۵
          شاخه بخش می‌شود. در اطراف شهر سمنان معادن گچ، نمک، زئولیت، بنتونیت،
          سلستین و غیره وجود دارند. از موارد مهم منابع زیرزمینی شهر سمنان به چاه
          نفت خوریان دلازیان در جنوب این شهر می‌توان اشاره نمود.
        </p>
      </article>
    </div>
  );
}
export default App;
