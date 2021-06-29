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
            <h2 className="blog-post-title">جاذبه های گردشگری در ایران</h2>
            <p className="blog-post-meta">نوشته شده در تاریخ 30 بهمن 99</p>

            <p>
              ایران با تاریخی کهن، مردمی خونگرم و مهمان‌نواز، طبیعتی کم‌نظیر و
              فرهنگی رنگارنگ همواره مورد کم‌لطفی رسانه‌های خارجی قرار گرفته است.
              این پیام نادرست از رسانه‌های خارجی در کنار بی‌توجهی خودمان به این
              مرز و بوم تنها یک نتیجه در برداشته است و آن هم این است که نه مردم
              ایران و نه مردم دنیا، آن طور که شایسته است ایران را نمی‌شناسند و
              ندیده‌اند.
            </p>
            <hr></hr>
            <p>
              این موضوع ما را بر آن داشت که پایگاهی بسازیم بر بستر بی‌انتهای
              اینترنت که تصویر زیبای ایران را برای ایرانیان بهتر نقش کند و کجارو
              از مرداد ۹۴ کار خود را آغاز کرد. مردمی که سرزمین خود را بشناسند،
              شوق و دانش بیشتری برای معرفی آن به جامعه جهانی خواهند داشت و این
              کار بدون مشارکت تک‌تک ما به سرانجام نمی‌رسد.
            </p>
            <blockquote>
              <p>
                معمولا گردشگران به دلیل علاقه مندی به فرهنگ، طبیعت، یا آب و هوای
                مقصد مورد نظر یا وجود جاذبه های گردشگری تاریخی، آن محل را به
                عنوان مقصد سفر خود انتخاب می کنند. هر چند که جای جای کشور ایران
                می تواند به عنوان بهترین مقاصد گردشگری برای مسافران به شمار آید.
                اما در این میان برخی از استان های ایران توانسته اند، بیشترین
                میزان جذب گردشگر خارجی را به خود اختصاص دهند. این استان ها
                عبارتند از: خراسان رضوی، اصفهان، فارس، همدان، کرمانشاه، ایلام،
                آذربایجان غربی، اردبیل، آذربایجان شرقی، تهران، خوزستان، گیلان و
                همچنین سیستان و بلوچستان. لازم است بدانید استان ایلام محل ورود
                گردشگران عراقی از مرز این استان است و در رده دوم قرار گرفته است.
              </p>
            </blockquote>
            <p>
              کارشناسان میزان تولید ناخالصی ملی را که از طریق گردشگری در ایران
              به صورت غیر مستقیم به دست می آید، 6/1 درصد برآورد کرده اند. همچنین
              صنعت گردشگری در ایران نیم درصد اشتغال را به خود اختصاص داده است.
              اگر به این صنعت توجه بیشتری شود، صنعت گردشگری در ایران می تواند به
              بحران اشتغال کشور کمک بسیار کند. به دلیل تنوع بالایی که در صنعت
              گردشگری وجود دارد، این صنعت می تواند در اقتصاد کشور تاثیرات بسیار
              زیادی داشته باشد. با توسعه صنعت گردشگری می توان به کاهش بیکاری و
              توزیع درآمد و افزایش درآمد دولت کمک کرد.
            </p>
            <h2>جاذبه های گردشگری در ایران</h2>
            <p>
              ردشگری در ایران به عنوان مسافرت تفریحی به شمار می آید. اخیرا
              گردشگری را به هر گونه مسافرتی می گویند که شخص برای خارج شدن از
              محیط کار و زندگی خود انتخاب می کند. صنعت گردشگری در ایران دارای
              ظرفیت بالایی برای رشد و توسعه می باشد. گردشگری در ایران توانسته
              است رتبه دهم را در جاذبه های باستانی و تاریخی کسب کند. همچنین کشور
              ایران دارای رتبه پنجم در جاذبه های طبیعی در جهان می باشد.
            </p>
            <h3>جاذبه های گردشگری در ایران</h3>
            <p>
              ایران به عنوان یکی از مناطق امن از لحاظ امنیت برای گردشگران خارجی
              می باشد. طبق آماری که در سال 2008 به دست آمده است، میزان گردشگرانی
              که در این سال به ایران سفر کرده اند، 2.000.000 گردشگر خارجی بوده
              است در حالی که میزان گردشگرانی که در دنیا سفر کرده بودند، در این
              سال 842.000.000 جهانگرد بوده است
            </p>
            <p>
              از عوامل مهم در توسعه گردشگری در ایران آب های معدنی هستند که در
              برخی نواحی وجود دارند. چشمه های آب معدنی ایران با پراکندگی در برخی
              نواحی ایران سبب جذب گردشگران داخلی و خارجی شده اند. این چشمه ها در
              شهرهای مشگین شهر، مراغه، سرعین، اوج و لاریجان هستند.
            </p>
            <h3>جاذبه های گردشگری در ایران</h3>
            <p>
              در ناحیه شمالی ایران تالاب انزلی دربندر انزلی بهشت گیلان و شهر
              نیلوفرهای آبی، خط ساحلی خزر از فریدونکنار تا چالوس و ماسوله این
              شهر خیال انگیز و مه اندود از مناطق گردشگری در ایران هستند. مناطق
              کوهستانی که در ماسوله هستند، پارک جنگلی سی سنگان در شهرستان نوشهر
              گردشگران زیادی را به خود جذب می کنند. در این مناطق جنگلی امکانات
              مختلفی برای مسافران در نظر گرفته شده است. از دیگر جاذبه های دیدنی
              شمال ایران می توان به پارک ملی گلستان اشاره کرد. این پارک در میان
              گنبد کاووس این شهر زیبا در آغوش ترکمن صحرا و بجنورد قرار گرفته
              است. پارک ملی گلستان دارای منطقه اختصاصی تفرجگاه است که سالانه
              صدها هزار گردشگر به این منطقه وارد می شوند. از مناطق جنوبی ایران
              می توان به هرمز جزیره ی رنگین خلیج فارس و کناره های خلیج فارس
              اشاره کرد، این مناطق به دلیل آب و هوای گرم بهترین مکان برای اوقات
              فراغت در تابستان هستند. از دیدنی های این منطقه می توان به جنگل های
              حرا در سواحل بندرعباس اشاره کرد.
            </p>
            <p>
              از نواحی گردشگری در ایران برای ورزش های زمستانی می توان ارتفاعات
              البرز و زاگرس که پوشیده از برف هستند را نام برد. این نواحی با
              داشتن چشم اندازهای بسیار زیبا و طبیعی، چشمه سارها، غارهای طبیعی و
              آبشارها از مکان های پر بازدید در ایران هستند.
            </p>
            <p>
              در فصل تابستان مسافران زیادی از اردبیل، مشگین شهر، دامنه های سبلان
              و سهند و منطقه دماوند در البرز دیدن می کنند.در فصل گرما بهترین
              انتخاب سفر به استان اردبیل است. شمشک، توچال، پیست اسکی دیزین و
              آبعلی که در ارتفاعات البرز هستند، بهترین مناطق برای ورزش های
              زمستانی در ایران هستند. ‌
            </p>
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
      {/* <h1 style={{ textAlign: "center" }}>تهران</h1>
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
      </article> */}
    </div>
  );
}

function Isfahan() {
  return <div className="Isfahan"></div>;
}

function Shiraz() {
  return <div className="Shiraz"></div>;
}
function Mashhad() {
  return <div className="Mashhad"></div>;
}

function Tabriz() {
  return <div className="Tabriz"></div>;
}

function Yazd() {
  return <div className="Yazd"></div>;
}

function Ardebil() {
  return <div className="Ardebil"></div>;
}

function Rasht() {
  return <div className="Rasht"></div>;
}

function Sari() {
  return <div className="Sari"></div>;
}

function Bandarabbas() {
  return <div className="Bandarabbas"></div>;
}

function Kerman() {
  return <div className="Kerman"></div>;
}

function Semnan() {
  return <div className="Semnan"></div>;
}
export default App;
