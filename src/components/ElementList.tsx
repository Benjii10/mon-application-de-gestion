import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { Element } from '../ElementInterface'; // Ajustez le chemin selon l'emplacement réel de votre fichier

interface Props {
  elements: Element[];
  onRemove: (id: number) => void;
  onEditInit: (id: number) => void;
}


const ElementList: React.FC<Props> = ({ elements, onRemove, onEditInit }) => {
  return (
    <ul>
{elements.map((element) => (        <li key={element.id}>
          {element.name}
          <button onClick={() => onEditInit(element.id)}>Modifier</button>
          <button onClick={() => onRemove(element.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default ElementList;