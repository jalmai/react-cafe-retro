import { Box } from "./Box.jsx";
export function Hot() {
  return (
    <section id="hot">
      <article>
        <h1>Hot</h1>
        <p className="p-1">
          Hot freshly ground black coffee or a cup of exquisite tea?
        </p>
        <p className="p-2">We give you that perfect cup every time.</p>
        <Box
          item={{
            article: [
              { id: 1, name: "Mocha Latte", price: "€ 7.50" },
              { id: 2, name: "Caffe Formaggio", price: "€ 5.00" },
              { id: 3, name: "Espresso", price: "€ 3.50" },
              { id: 4, name: "Chai Verde Latte", price: "€ 5.50" },
            ],
          }}
        />
      </article>
    </section>
  );
}
