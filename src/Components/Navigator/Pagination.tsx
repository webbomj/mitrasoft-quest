import { FC, useState } from "react";
import { Pagination as PaginationComponent } from "react-bootstrap";
import { IPaginationProps } from "./interface";
import { useAppDispatch } from "../../Store/hook";
import { setCurrentPage } from "../../Store/slices/postSlice";

import "./Pagination.scss";

const Pagination: FC<IPaginationProps> = ({ paginatePage }) => {
  const [active, setActive] = useState<number>(1);

  const dispatch = useAppDispatch();

  const paginationItemClick = (number: number) => {
    setActive(number);
    dispatch(setCurrentPage(number));
  };

  let items = [];

  for (let number = 1; number <= paginatePage; number++) {
    items.push(
      <PaginationComponent.Item
        key={number}
        active={number === active}
        onClick={() => paginationItemClick(number)}
      >
        {number}
      </PaginationComponent.Item>
    );
  }

  return (
    <PaginationComponent size="sm" className="pagination">
      {items}
    </PaginationComponent>
  );
};

export default Pagination;
