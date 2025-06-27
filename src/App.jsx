import { Header, Main } from "./app.layout";
import ButtonGroups from "./components/ButtonGroups";
import ExtensionHeader from "./components/ExtensionHeader";
import MainHeader from "./components/MainHeader";
import Card from "./components/Card";
import data from "./lib/data.json";
import { useState } from "react";

function App() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    setExtensions(extensions.filter(ext => ext.id !== id));
  };

  const handleToggle = (id) => {
    setExtensions(extensions.map(ext => 
      ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
    ));  };

  const filteredExtensions = filter === "all" 
    ? extensions 
    : filter === "active" 
      ? extensions.filter(ext => ext.isActive)
      : extensions.filter(ext => !ext.isActive);

  return (
    <>
      <Header>
        <MainHeader />
      </Header>
      <Main>
        <ExtensionHeader>
          <h1 className="text-preset-1 text-neutral-950 dark:text-neutral-50">
            Extension List
          </h1>
          <ButtonGroups 
            activeFilter={filter}
            onFilterChange={setFilter}
          />
        </ExtensionHeader>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-start container mx-auto gap-4">
          {filteredExtensions.map((extension) => (
            <Card 
              key={extension.id} 
              extension={extension} 
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </Main>
    </>
  );
}

export default App;
