export function Box({ item }) {
  console.log(item);
  return (
    <div className="box">
      {item.article.map((article) => {
        return (
          <div className="row">
            <span>{article.name}</span>
            <span>{article.price}</span>
          </div>
        );
      })}
    </div>
  );
}
