import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

function App() {
  const [hello, setHello] = useState<string>("");

  useEffect(() => {
    axios.get("/api/test").then((res: AxiosResponse<string>) => {
      setHello(res.data);
    });
  }, []);
  return <div>백엔드 데이터 : {hello}</div>;
}

export default App;
