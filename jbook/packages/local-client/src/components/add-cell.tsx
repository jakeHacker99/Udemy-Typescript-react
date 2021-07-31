import React from "react";
import { useActions } from "../hooks/use-actions";
import "./add-cell.css";

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, previousCellId }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`add-cell ${forceVisible && "force-visible"} `}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-normal"
          onClick={() => insertCellAfter(previousCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span> Code</span>
        </button>
        <button
          className="button is-rounded is-normal"
          onClick={() => insertCellAfter(previousCellId, "text")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          Text
          <span></span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
