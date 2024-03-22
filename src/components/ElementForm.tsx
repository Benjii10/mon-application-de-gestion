import React, { useState, useEffect } from 'react';
import { Element } from '../ElementInterface'; // Ajustez le chemin selon l'emplacement réel de votre fichier

interface Props {
  onSubmit: (element: Element) => void;
  element?: Element; // Élément optionnel pour la modification
}

const ElementForm: React.FC<Props> = ({ onSubmit, element }) => {
  const [formElement, setFormElement] = useState<Element>({ id: 0, name: '' });

  useEffect(() => {
    if (element) setFormElement(element);
  }, [element]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormElement((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formElement);
    setFormElement({ id: 0, name: '' }); // Réinitialiser après soumission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formElement.name}
        onChange={handleChange}
        required
      />
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default ElementForm;
