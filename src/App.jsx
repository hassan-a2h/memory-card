import { useState } from 'react';
import Header from './components/Head';
import Body from './components/Body';

function App() {
  let [score, setScore] = useState(0);

  return(
    <>
      <div>
        <h1>Memory</h1>
        <Header score={score}/>
      </div>

      <div>
        <Body score={score} setScore={setScore}/>
      </div>
    </>
  );
}

export default App;



