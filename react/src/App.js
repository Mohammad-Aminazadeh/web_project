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
            <h1 className="display-4 fst-italic" style={{textAlign: "right"}}>
              با ما، به هرکجای دنیا که می‌خواهید سفر کنید
            </h1>
            <p className="lead my-3" style={{textAlign: "right"}}>
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
          تهران کلان شهر دوست داشتنی ایران مراکز گردشگری زیادی برای تفریح و
          سرگرمی دارد. بسیاری برای گردش عصرانه خود، یکی از پارک های جذاب و مفرح
          این شهر را انتخاب می کنند و برخی در جستجوی سکوت و آرامش، به یکی از
          رستوران ها و کافه های متعدد تهران می روند و ساعتی را با دوستان شان
          خلوت می کنند. از همین رو ما در این مطلب از مجله ی گردشگری الی گشت قصد
          داریم به چند مورد از بهترین مراکز گردشگری تهران اشاره داشته باشیم تا
          زمانی که خواستید اوقات فراغتتان را در کنار دوستان و خانوادتان سپری
          کنید با جاذبه های پایتخت ایران آشنایی بیشتری داشته باشید.
        </p>
      </article>
    </div>
  );
}

function Isfahan() {
  return <h1></h1>;
}

function Shiraz() {
  return <h1></h1>;
}

function Mashhad() {
  return <h1></h1>;
}

function Tabriz() {
  return <h1></h1>;
}

function Yazd() {
  return <h1></h1>;
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
