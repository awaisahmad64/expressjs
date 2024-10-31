import { useState } from 'react';
import ShowUsers from './ShowUsers';
function App() {
  const [refresh, setRefresh] = useState(false);
  


  return (
    <div>
      <center>
       
        <ShowUsers refreshTrigger={refresh} setRefresh={setRefresh}/>
      </center>
    </div>
  );
}

export default App;
