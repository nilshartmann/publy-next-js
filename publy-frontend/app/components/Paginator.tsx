import * as React from "react";
import ButtonBar from "@/app/components/ButtonBar";
import Button from "@/app/components/Button";

type PageInfo = {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  totalPages: number;
};

type PaginatorProps = {
  onPageClick(pageNumber: number): void;
  pageInfo: PageInfo;
};

export default function Paginator({
  onPageClick,
  pageInfo: { currentPage, hasNext, hasPrev, totalPages },
}: PaginatorProps) {
  return (
    <ButtonBar align="center">
      <Button disabled={!hasPrev} onClick={() => onPageClick(currentPage - 1)}>
        Prev
      </Button>

      {[...Array(totalPages)].map((_, pageNo) => (
        <Button
          key={pageNo}
          disabled={pageNo === currentPage}
          onClick={() => onPageClick(pageNo)}
        >
          {pageNo + 1}
        </Button>
      ))}

      <Button disabled={!hasNext} onClick={() => onPageClick(currentPage + 1)}>
        Next
      </Button>
    </ButtonBar>
  );
}
