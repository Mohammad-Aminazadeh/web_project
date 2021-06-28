import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'style.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a className="link-secondary" href="#">اشتراک</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a className="link-secondary" href="#" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                    </a>
                    <a className="btn btn-sm btn-outline-secondary" href="#">ثبت نام</a>
                </div>
            </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <Router>
            <nav className="nav d-flex justify-content-between">
                <Link to="/tehran" className="p-2 link-secondary">تهران</Link>
                <Link to="/isfahan" className="p-2 link-secondary">اصفهان</Link>
                <Link to="/shiraz" className="p-2 link-secondary">شیراز</Link>
                <Link to="/mashhad" className="p-2 link-secondary">مشهد</Link>
                <Link to="/tabriz" className="p-2 link-secondary">تبریز</Link>
                <Link to="/yazd" className="p-2 link-secondary">یزد</Link>
                <Link to="/ardebil" className="p-2 link-secondary">اردبیل</Link>
                <Link to="/gilan" className="p-2 link-secondary">گیلان</Link>
                <Link to="/mazandaran" className="p-2 link-secondary">مازندران</Link>
                <Link to="/bandarabbas" className="p-2 link-secondary">بندرعباس</Link>
                <Link to="/kerman" className="p-2 link-secondary">کرمان</Link>
                <Link to="/semnan" className="p-2 link-secondary">سمنان</Link>
            </nav>
          </Router>
            
        </div>
      </div>

      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              {/* correct styles to match jsx style using {} */}
                <img src="https://i.pinimg.com/originals/ba/de/3f/bade3f5134bd8c16fae9cb800023ab23.jpg" alt="n/a" id="around_the_world_img"></img>
                <h1 className="display-4 fst-italic" style="text-align: right;">با ما، به هرکجای دنیا که می‌خواهید سفر کنید</h1>
                <p className="lead my-3" style="text-align: right;">این یک تکست بی معنی است که تکرار شده است این یک تکست بی معنی است که تکرار شده است این یک تکست بی معنی است که تکرار شده است این یک تکست بی معنی است که تکرار شده است این یک تکست بی معنی است که تکرار شده است </p>
                <p className="lead mb-0"><a href="Continue reading.html" className="text-white fw-bold">...در ادامه بخوانید</a></p>
            </div>
        </div>

        <div className="row mb-2">
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">تکست</strong>
                        <h3 className="mb-0">این یک تکست بی معنی است که تکرار شده </h3>
                        <div className="mb-1 text-muted">99/10/5</div>
                        <p className="card-text mb-auto">این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                        <a href="#" className="stretched-link">...در ادامه بخوانید</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">تکست</strong>
                        <h3 className="mb-0">این یک تکست بی معنی است که تکرار شده</h3>
                        <div className="mb-1 text-muted">99/11/25</div>
                        <p className="mb-auto">این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                        <a href="#" className="stretched-link">...در ادامه بخوانید</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <article className="blog-post">
                    <h2 className="blog-post-title">موضوع بی معنی</h2>
                    <p className="blog-post-meta">نوشته شده در تاریخ 30 بهمن 99</p>

                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                    <hr></hr>
                    <p>این یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شده</p>
                    <blockquote>
                        <p>این یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شده</p>
                    </blockquote>
                    <p>این یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شدهاین یک تکست بی معنی است که تکرار شده
                    </p>
                    <h2>موضوع بی معنی</h2>
                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                    <h3>موضوع بی معنی</h3>
                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                    <h3>موضوع بی معنی</h3>
                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                    <p>این یک تکست بی معنی است که تکرار شده </p>
                </article>

                <article className="blog-post">
                    <h2 className="blog-post-title">موضوع بی معنی</h2>
                    <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده .</p>
                    <blockquote>
                        <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                    </blockquote>
                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده
                    </p>
                    <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
                </article>
            </div>
        </div>
      </main>
      <footer className="blog-footer">
          <div className="row-md-6" id="about_us">
              <h3>درباره‌ی ما</h3>
              <p>این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده این یک تکست بی معنی است که تکرار شده </p>
          </div>
      </footer>
    </div>
  );
}

function Tehran() {
  return (
    <h1></h1>
  );
}

export default App;
