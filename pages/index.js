import { useEffect } from "react/cjs/react.production.min";
import useSWR from "swr";
import Person from "../components/Person";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/people", fetcher);

  const test = () => {
    console.log("test");
    alert("test");
  };
  let test2 = () => {
    console.log("test2");
    throw new Error("jghjhgj");
  };
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <ul>
        {data.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </ul>
      <button onClick={test}>click</button>
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}
      >
        Throw error
      </button>

      <button
        type="button"
        onClick={test2}
      >
        Throw error 2
      </button>
    </>
  );
}
