import { useActions } from "../hooks/use-actions";
import "./action-bar.css";

interface AcitonBarProps {
  id: string;
}

export const ActionBar: React.FC<AcitonBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className="action-bar">
      <button
        onClick={() => moveCell(id, "up")}
        className="button color-me  is-small"
      >
        <span className="icon">
          <i className="fas fa-arrow-up"></i>
        </span>
      </button>
      <button
        className="button color-me is-small"
        onClick={() => moveCell(id, "down")}
      >
        <span className="icon">
          <i className="fas fa-arrow-down"></i>
        </span>
      </button>
      <button
        className="button  color-me is-small"
        onClick={() => deleteCell(id)}
      >
        <span className="icon">
          <i className="fas fa-times"></i>
        </span>
      </button>
    </div>
  );
};

export default ActionBar;
