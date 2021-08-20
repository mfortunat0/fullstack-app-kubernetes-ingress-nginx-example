import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Home() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setData(await (await axios.get("/api")).data);
    } catch (error) {
      console.log(error);
    }
  };

  const send = async () => {
    try {
      await axios.post("/api", {
        tarefa: inputRef.current.value,
      });
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      <h1>Wellcome</h1>
      <form onSubmit={send}>
        <input
          type="text"
          required
          ref={inputRef}
          placeholder="Adicione uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <br />
      {data.length > 0 &&
        data.map((data) => {
          return (
            <>
              <p>{data.tarefa}</p>
              <br />
            </>
          );
        })}
    </main>
  );
}
