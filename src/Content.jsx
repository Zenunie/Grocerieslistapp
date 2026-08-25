import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ) : (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">✓</div>
          <h2>Your list is clear</h2>
          <p>Add your first item above and make the next grocery run effortless.</p>
        </div>
      )}
    </main>
  );
};

export default Content;
