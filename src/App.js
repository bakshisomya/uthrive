import React,{useState} from "react";
import Landing from "./Components/Landing/Landing";

function App() {
  //this loader shows when only html is loaded and react is not rendered
  //for this you need to put the image in index.html
  const [loading, setloading] = useState(true);
  const spinner = document.getElementById('loading')
  if(spinner){
    setTimeout(() => {
      spinner.style.display = 'none';
      setloading(false)
    }, 2000);
  }
  return (
    !loading && (<div>
      <Landing/>
      </div>)
  );
}

export default App;
