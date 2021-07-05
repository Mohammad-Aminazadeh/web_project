import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // all cities data
    this.state = {
      cities_data: [],
      tehran_data: [],
      isfahan_data: [],
      shiraz_data: [],
      mashhad_data: [],
      tabriz_data: [],
      ardebil_data: [],
      gilan_data: [],
      mazandaran_data: [],
      bandarabbas_data: [],
      kerman_data: [],
      semnan_data: [],
    };
  }

  componentDidMount() {
    // fetch the city data from database
    fetch("http://localhost/Back_End/api/post/read.php")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cities_data: data });
      });

    // seperating each city data into it's own array
    for (let i = 0; i < this.state.cities_data.length; i++) {
      if (this.state.cities_data[i]["city_name"] == "تهران") {
        this.setState({ tehran_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "اصفهان") {
        this.setState({ isfahan_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "شیراز") {
        this.setState({ shiraz_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "مشهد") {
        this.setState({ mashhad_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "تبریز") {
        this.setState({ tabriz_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "یزد") {
        this.setState({ yazd_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "اردبیل") {
        this.setState({ ardebil_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "گیلان") {
        this.setState({ gilan_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "مازندران") {
        this.setState({ mazandaran_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "بندرعباس") {
        this.setState({ bandarabbas_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "کرمان") {
        this.setState({ kerman_data: this.state.cities_data[i] });
      } else if (this.state.cities_data[i]["city_name"] == "سمنان") {
        this.setState({ semnan_data: this.state.cities_data[i] });
      }
    }
  }

  render() {
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
                <Link to="/about" className="p-2 link-secondary">
                  درباره سایت
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
              <Switch>
                <Route path="/about" component={About}></Route>
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
            </Router>
          </div>
        </div>

        <main className="container">
          <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-12 px-0">
              <img
                src="https://iranstourism.com/wp-content/uploads/2019/06/Iran-tourism-1-870x438.png"
                alt="n/a"
                id="around_the_world_img"
                style={{ alignContent: "center" }}
              ></img>
              <h1
                className="display-4 fst-italic"
                style={{ textAlign: "right" }}
              >
                با ما، به هرکجای ایران که می‌خواهید سفر کنید
              </h1>
              <p className="lead my-3" style={{ textAlign: "right" }}>
                اطلاعات مفید برای گردشگری در ایران را از طریق ما بدست آورید و در
                سفرتان از ما استفاده کنید{" "}
              </p>
            </div>
          </div>
        </main>

        <footer className="blog-footer">
          <div className="row-md-6" id="about_us">
            <h3>ارتباط با ما</h3>
            <p>
              شما کاربر گرامی میتوانید با ما از طریق شماره همراه 09390125715 در
              ارتباط باشید و سوالات مرتبط با گردشگری را از شما بپرسید تا ما شما
              را راهنمایی کنیم.{" "}
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="col-md-12">
          <article className="blog-post">
            <h2 className="blog-post-title">درباره سایت</h2>
            <p className="blog-post-meta">نوشته شده در تاریخ 30 بهمن 99</p>

            {/* ahout us description */}
            <p>
              این سایت برای راهنمایی گردشگران طراحی شده است. کسانی که میخواهند
              به مناطق مختلف ایران سفر کنند میتوانند با ورود به این سایت از
              مطالب درباره گردشگری بهره مند شوند. کاربران میتوانند مطالب مرتبط
              با گردشگری درباره هر استان ایران را ببینند و در سفر خود از این
              مطالب استفاده کنند. در این سایت درباره هر استان مطالبی قرار داده
              شده است که کاربران میتوانند با ورود به لینک مرتبط با هر استان، با
              استان دلخواه خودشان آشنا شده و مناطق مختلف استانها برای گردشگری را
              مطالعه کنند. همینطور برای هر استان پنج هتل برتر آن استان هم نوشته
              شده است تا کاربران با هتلهای برتر هر استان آشنا شده و در سفر خود
              به یکی از این هتلها بروند.{" "}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

// function Switch_handler() {
//   return (

//   );
// }

function Tehran() {
  return (
    <div className="Tehran">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.tehran_data["city_name"]}
      </h1>
      <img
        src="https://wallpaperaccess.com/full/1291453.jpg"
        alt="تهران"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.tehran_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.tehran_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Isfahan() {
  return (
    <div className="Isfahan">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.isfahan_data["city_name"]}
      </h1>
      <img
        src="https://images.kojaro.com/2020/8/29c87dc1-bc25-4a8a-8c94-8529e7e26dcb.jpg"
        alt="اصفهان"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.isfahan_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.isfahan_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Shiraz() {
  return (
    <div className="Shiraz">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.shiraz_data["city_name"]}
      </h1>
      <img
        src="https://aminmana.com/wp-content/uploads/2019/04/shiraz.jpg"
        alt="شیراز"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.shiraz_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.shiraz_data["city_description"]}</p>
      </article>
    </div>
  );
}
function Mashhad() {
  return (
    <div className="Mashhad">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.mashhad_data["city_name"]}
      </h1>
      <img
        src="http://mashadmag.ir/wp-content/uploads/2019/01/Mashad-1.jpg"
        alt="مشهد"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.mashhad_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.mazandaran_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Tabriz() {
  return (
    <div className="Tabriz">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.tabriz_data["city_name"]}
      </h1>
      <img
        src="https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1394/06/03/13940603114647695955824.jpg"
        alt="تبریز"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.tabriz_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.tabriz_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Yazd() {
  return (
    <div className="Yazd">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.yazd_data["city_name"]}
      </h1>
      <img
        src="https://www.bultannews.com/files/fa/news_albums/654356/8251/resized/resized_1236704_194.jpg"
        alt="یزد"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.yazd_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.yazd_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Ardebil() {
  return (
    <div className="Ardebil">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.ardebil_data["city_name"]}
      </h1>
      <img
        src="https://safarmarket.com/blog/data/uploaded_files/d762334fbcc5c0a8b561b504.jpg"
        alt="اردبیل"
        width={1100}
        height={600}
        style={{ justifyContent: "center" }}
        textAlign="center"
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.ardebil_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.ardebil_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Gilan() {
  return (
    <div className="Gilan">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.gilan_data["city_name"]}
      </h1>
      <img
        src="https://shahrak-arash.com/wp-content/uploads/2021/01/gilan-11.jpg"
        alt="گیلان"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.gilan_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.gilan_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Mazandaran() {
  return (
    <div className="Mazandaran">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.mazandaran_data["city_name"]}
      </h1>
      <img
        src="https://www.finds.ir/img/2020042876011819.jpg"
        alt="مازندران"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.mazandaran_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.mazandaran_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Bandarabbas() {
  return (
    <div className="Bandarabbas">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.bandarabbas_data["city_name"]}
      </h1>
      <img
        src="https://media.mehrnews.com/d/2017/12/24/3/2672251.jpg"
        alt="بندرعباس"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.bandarabbas_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.bandarabbas_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Kerman() {
  return (
    <div className="Kerman">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.kerman_data["city_name"]}
      </h1>
      <img
        src="https://cdn.mehrbooking.net/general/Images/Cities/kerman-ganjalikhan-mosque.jpg"
        alt="کرمان"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.kerman_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.kerman_data["city_description"]}</p>
      </article>
    </div>
  );
}

function Semnan() {
  return (
    <div className="Semnan">
      {/* getiing city name and city description from state */}
      <h1 style={{ textAlign: "center" }}>
        {this.state.semnan_data["city_name"]}
      </h1>
      <img
        src="https://www.alaedin.travel/Files/cities/semnan/Alaedin-Travel-Semnan-City-1.jpg"
        alt="سمنان"
        width={1100}
        height={600}
        style={{ textAlign: "center" }}
      ></img>
      <article className="blog-post">
        <h2 className="blog-post-title">
          درمورد {this.state.semnan_data["city_name"]}
        </h2>
        <p className="blog-post-meta">نوشته شده در 24 دی 99</p>

        {/* the description of the city goes into this p tag */}
        <p>{this.state.semnan_data["city_description"]}</p>
      </article>
    </div>
  );
}
export default App;
