import { useState } from "react";
import "./../styles.css";

export default function Teste() {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState(null);
  const [orderDirection, setOrderDirection] = useState(null);

  // Exemplo de dados a serem exibidos na tabela
  const data = [
    { id: 1, name: "João", age: 20, city: "São Paulo" },
    { id: 2, name: "Maria", age: 25, city: "Rio de Janeiro" },
    { id: 3, name: "Pedro", age: 30, city: "Belo Horizonte" },
    { id: 4, name: "Ana", age: 35, city: "Curitiba" }
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    if (orderBy === key) {
      setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(key);
      setOrderDirection("asc");
    }
  };

  const filteredData = data
    .filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (orderBy !== null) {
        if (a[orderBy] < b[orderBy]) {
          return orderDirection === "asc" ? -1 : 1;
        }
        if (a[orderBy] > b[orderBy]) {
          return orderDirection === "asc" ? 1 : -1;
        }
      }
      return 0;
    });

  return (
    <div className="App">
      <div
        style={{ marginTop: "56px", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px"
          }}
        >
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleChange}
            className="search-bar"
            placeholder="Pesquisar"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>
                ID {orderBy === "id" && (orderDirection === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("name")}>
                Nome{" "}
                {orderBy === "name" && (orderDirection === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("age")}>
                Idade{" "}
                {orderBy === "age" && (orderDirection === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("city")}>
                Cidade{" "}
                {orderBy === "city" && (orderDirection === "asc" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
