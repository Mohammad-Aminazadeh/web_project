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
  return (
    <div className="Isfahan">
      
    </div>
  );
}

function Shiraz() {
  return (
    <div className="Shiraz">
      
    </div>
  );
}
function Mashhad() {
  return (
    <div className="Mashhad">
      
    </div>
  );
}

function Tabriz() {
  return (
    <div className="Tabriz">
      
    </div>
  );
}

function Yazd() {
  return (
    <div className="Yazd">
      
    </div>
  );
}

function Ardebil() {
  return (
    <div className="Ardebil">
      
    </div>
  );
}

function Rasht() {
  return (
    <div className="Rasht">
      
    </div>
  );
}

function Sari() {
  return (
    <div className="Sari">
      
    </div>
  );
}

function Bandarabbas() {
  return (
    <div className="Bandarabbas">
      
    </div>
  );
}

function Kerman() {
  return (
    <div className="Kerman">
      
    </div>
  );
}

function Semnan() {
  return (
    <div className="Semnan">
      
    </div>
  );
}
export default App;
