import { Navbar } from "./Navbar.jsx";
export function App() {
  return (
    <>
      <Navbar />
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Caffe Retro</title>
        <link rel="stylesheet" href="index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Spirax&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <section id="hot">
          <article>
            <h1>Hot</h1>
            <p class="p-1">
              Hot freshly ground black coffee or a cup of exquisite tea?
            </p>
            <p class="p-2">We give you that perfect cup every time.</p>
            <div class="box">
              <div class="row">
                <span>Mocha Latte</span>
                <span>€ 7.50</span>
              </div>
              <div class="row">
                <span>Caffe Formaggio</span> <span>€ 5.00</span>
              </div>
              <div class="row">
                <span>Espresso</span> <span>€ 3.50</span>
              </div>
              <div class="row">
                <span>Chai Verde Latte</span> <span>€ 5.50</span>
              </div>
            </div>
          </article>
        </section>

        <section id="juicy">
          <article>
            <h1>Juicy</h1>
            <p class="p-1">Ripe fruit - freshly squeezed.</p>
            <p class="p-2">
              It's as simple as that. Chunky or smooth - it's your choice.
            </p>
            <div class="box">
              <div class="row">
                <span>Branched Apricots</span>
                <span>€ 4.20</span>
              </div>
              <div class="row">
                <span> Deep Rasberries</span> <span>€ 3.50</span>
              </div>
              <div class="row">
                <span>Smooth Oranges</span> <span>€ 6.50</span>
              </div>
            </div>
          </article>
        </section>

        <section id="cosy">
          <article>
            <h1>Cosy</h1>
            <p class="p-1">Hang around. Enjoy the settings.</p>
            <p class="p-2">Use our fast WiFi. Borrow a newspaper or a novel.</p>
            <div class="box">
              <div class="row">
                <span>Mon-Sun </span>
                <span>8am – 11pm</span>
              </div>
              <div class="row">
                <span>Caffe Retro</span> <span>Canto VI</span>
              </div>
              <div class="row">
                <span>0123-45 67 89</span> <span>caffe@lorem.pge</span>
              </div>
            </div>
          </article>
        </section>
      </body>
    </>
  );
}
