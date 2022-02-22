const ToDoItem = ({ itemText, deleteItem }) => {
  return (
    <div className="toDoItem">
      <p>{itemText}</p>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default ToDoItem;
