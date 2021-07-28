import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell } from "../state/cell";
import AddCell from "./add-cell";
import CellListItem from "./cell-list-item";

const CellList: React.FC = () => {
  // @ts-ignore
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: string | number) => data[id])
  );

  const renderCells = cells.map((cell: Cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderCells}
    </div>
  );
};

export default CellList;
