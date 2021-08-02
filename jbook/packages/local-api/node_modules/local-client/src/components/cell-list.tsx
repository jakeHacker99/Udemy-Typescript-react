import { Fragment, useEffect } from "react";
import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { saveCells } from "../state/action-creators";
import { Cell } from "../state/cell";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";
import "./cell-list.css";

const CellList: React.FC = () => {
  // @ts-ignore
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: string | number) => data[id])
  );
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  useEffect(() => {
    saveCells();
  }, [JSON.stringify(cells)]);

  const renderCells = cells.map((cell: Cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderCells}
    </div>
  );
};

export default CellList;
