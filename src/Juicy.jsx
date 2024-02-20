import { Box } from "./Box.jsx";
export function Juicy() {
  return (
    <section id="juicy">
      <article>
        <h1>Juicy</h1>
        <p className="p-1">Ripe fruit - freshly squeezed.</p>
        <p className="p-2">
          It's as simple as that. Chunky or smooth - it's your choice.
        </p>
        <Box
          item={{
            article: [
              { id: 1, name: "Branched Apricots", price: "€ 4.20" },
              { id: 2, name: "Deep Rasberries", price: "€ 3.50" },
              { id: 3, name: "Smooth Oranges", price: "€6.50" },
            ],
          }}
        />
      </article>
    </section>
  );
}
