import React, { useState } from 'react';
import ElementList from './components/ElementList';
import ElementForm from './components/ElementForm';

import { Element } from './ElementInterface';

function App() {
  const [elements, setElements] = useState<Element[]>([]);
  const [editingElement, setEditingElement] = useState<Element | null>(null);

  const handleAddElement = (element: Omit<Element, 'id'>) => {
    const newElement = { ...element, id: Date.now() };
    setElements(prev => [...prev, newElement]);
  };

  const handleEditElement = (updatedElement: Element) => {
    setElements(prev => prev.map(el => el.id === updatedElement.id ? updatedElement : el));
    setEditingElement(null);
  };

  const handleRemoveElement = (id: number) => {
    setElements(prev => prev.filter(el => el.id !== id));
  };

  function handleInitEdit(id: number) {
    const elementToEdit = elements.find(el => el.id === id);
    setEditingElement(elementToEdit || null);
  }

  return (
    <div className="App">
      {editingElement ? (
        <ElementForm element={editingElement} onSubmit={handleEditElement} />
      ) : (
        <ElementForm onSubmit={handleAddElement} />
      )}
      <ElementList elements={elements} onRemove={handleRemoveElement} onEditInit={handleInitEdit} />
    </div>
  );
}

export default App;
