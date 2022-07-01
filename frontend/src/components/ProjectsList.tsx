import {
  useState,
  MouseEventHandler,
  useCallback,
  useEffect,
  useContext,
} from "react";
import axios from "axios";
import "./ProjectsList.css";
import DataContext from "./Datacontext";
import Header from "./Header";
// import tabItems from "../data";
import React from "react";

type Data = Array<any>;

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

  const sortedData = tableData.sort((a, b) => {
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

function ProjectsList() {
  const { projects, setProjects } = useContext(DataContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/project/users")
      .then((res) => res.data)
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [sortKey, setSortKey] = useState<SortKeys>("agence");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
    useEffect(() => {
        axios
        .get("http://localhost:5002/project/users")
        .then((res) => res.data)
        .then((data) => {
            setProjects(data);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

  const headers: { key: SortKeys; label: string }[] = [
    { key: "logo", label: "logo" },
    { key: "city", label: "agence" },
    { key: "title", label: "name" },
    { key: "tech", label: "tech" },
    { key: "priorite", label: "priority" },
    { key: "deadline", label: "deadline" },
    { key: "datePublish", label: "date" },
    { key: "avancement", label: "state" },
  ];

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: projects,
        sortKey,
        reverse: sortOrder === "desc",
      }),
    [projects, sortKey, sortOrder]
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
                  <td>{item.city}</td>
                  <td>{item.title}</td>
                  <td><img className="url" src={item.url} /></td>
                  <td>{item.priorite}</td>
                  <td>{item.deadline}</td>
                  <td>{item.datePublish}</td>
                  <td>{item.avancement}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

export default ProjectsList;
