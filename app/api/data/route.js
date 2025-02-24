"use client";
import { useEffect, useState } from "react";

export default function DataPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
