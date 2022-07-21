import React, { Suspense } from "react";
// import Landing from "./Components/Landing/Landing";
import Loading from "./Components/Loading/Loading";

const Landing = React.lazy(()=> import("./Components/Landing/Landing"))

function App() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Landing />
      </Suspense>
    </div>
  );
}

export default App;
