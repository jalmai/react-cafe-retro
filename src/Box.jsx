export function Box({ item }) {
  console.log(item);
  return (
    <div className="box">
      {item.article.map((article, i) => {
        return (
          <div className="row" key={i}>
            <span key={i}>{article.name}</span>
            <span>{article.price}</span>
          </div>
        );
      })}
    </div>
  );
}
