function Delete({ item, onDelete }) {
  return (
    <button
      type="button"
      className="delete-button"
      aria-label={`Delete ${item}`}
      title={`Delete ${item}`}
      onClick={(event) => {
        event.stopPropagation();
        onDelete();
      }}
    >
      &#128465;
    </button>
  );
}

export default Delete;
