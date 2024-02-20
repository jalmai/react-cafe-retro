import { Box } from "./Box.jsx";
export function Cosy() {
  return (
    <section id="cosy">
      <article>
        <h1>Cosy</h1>
        <p className="p-1">Hang around. Enjoy the settings.</p>
        <p className="p-2">Use our fast WiFi. Borrow a newspaper or a novel.</p>
        <Box
          item={{
            article: [
              { id: 1, name: "Mon-Sun", price: "8am – 11pm" },
              { id: 2, name: "Caffe Retro", price: "Canto VI" },
              { id: 3, name: "0123-45 67 89", price: "caffe@lorem.pge" },
            ],
          }}
        />
      </article>
    </section>
  );
}
