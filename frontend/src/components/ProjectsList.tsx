import { useState, MouseEventHandler, useCallback } from "react";
import "./ProjectsList.css";
import tabItems from "../data";
import React from "react";


  type Data = typeof tabItems;

  type SortKeys = keyof Data[0];

  type SortOrder = "ascn" | "desc";

  function sortData({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) {
    if (!sortKey) return tableData;

    const sortedData = tabItems.sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }

    return sortedData;
  }

  function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) {
    return (
      <button
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === "desc"
            ? "sort-button sort-reverse"
            : "sort-button"
        }`}
      >
        ▲
      </button>
    );
  }

  function ProjectsList({ data }: { data: Data }) {
    const [sortKey, setSortKey] = useState<SortKeys>("agence");
    const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

    const headers: { key: SortKeys; label: string }[] = [
      { key: "logo", label: "logo" },
      { key: "agence", label: "agence" },
      { key: "name", label: "name" },
      { key: "tech", label: "tech" },
      { key: "priority", label: "priority" },
      { key: "deadline", label: "deadline" },
      { key: "date", label: "date" },
      { key: "state", label: "state" },
    ];

    const sortedData = useCallback(
      () =>
        sortData({
          tableData: data,
          sortKey,
          reverse: sortOrder === "desc",
        }),
      [data, sortKey, sortOrder]
    );

    function changeSort(key: SortKeys) {
      setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

      setSortKey(key);
    }

    return (
      <div className="list-page">
        <table className="bloc-table">
          <thead>
            <tr>
              {headers.map((row) => {
                return (
                  <td key={row.key}>
                    {row.label}{" "}
                    <SortButton
                      columnKey={row.key}
                      onClick={() => changeSort(row.key)}
                      {...{
                        sortOrder,
                        sortKey,
                      }}
                    />
                  </td>
                );
              })}
              {/* <th>LOGO ENTREPRISE</th>
            <th>AGENCE
            </th>
            <th>NOM</th>
            <th>TECHNO</th>
            <th>PRIORITE</th>
            <th>DEADLINE</th>
            <th>DATE DE PUBLICATION</th>
            <th>AVANCEMENT</th> */}
            </tr>
          </thead>
          <tbody>
            {sortedData().map((item) => {
            return (
                <tr key={item.id}>
                  <td>{item.logo}</td>
                  <td>{item.agence}</td>
                  <td>{item.name}</td>
                  <td>{item.tech}</td>
                  <td>{item.priority}</td>
                  <td>{item.deadline}</td>
                  <td>{item.date}</td>
                  <td>{item.state}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

export default ProjectsList;
