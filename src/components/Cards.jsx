export default function Cards(props) {
  return (
    <section className="card">
      <div className="icon-container">
        <div className="icon">{props.icon}</div>
      </div>
      <div className="card-title">{props.title}</div>
      <div className="card-content">{props.content}</div>
    </section>
  );
}
