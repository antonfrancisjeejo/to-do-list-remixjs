import { useEffect, useState } from "react";
import InputArea from "~/components/InputArea";
import ToDoItem from "~/components/ToDoItem";

export default function Index() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      const arrType = JSON.parse(items);
      setItems(arrType);
    }
  }, []);

  const addItems = (item) => {
    setItems((currentItems) => {
      const newItemList = [...currentItems, item];
      const stringType = JSON.stringify(newItemList);
      localStorage.setItem("items", stringType);
      return newItemList;
    });
  };

  const deleteItem = (id) => {
    setItems((currentItems) => {
      const updatedListItem = currentItems.filter((_, index) => {
        return index !== id;
      });
      const stringType = JSON.stringify(updatedListItem);
      localStorage.setItem("items", stringType);
      return updatedListItem;
    });
  };

  return (
    <div className="app">
      <h1 className="app__title">To-Do List</h1>
      <InputArea addItems={addItems} />
      <div className="itemsContainer">
        {items.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>No Items Added</h1>
        ) : (
          items.map((item, index) => {
            return (
              <ToDoItem
                key={index}
                itemText={item}
                deleteItem={() => deleteItem(index)}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
