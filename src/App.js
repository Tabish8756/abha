import Adhaar from './component/Adhaar/AdhaarDetails';
import Details from './component/userdetails/UserDetails';
import {Route, Routes} from 'react-router-dom'
import Otp from './component/AdhaarOtp.jsx/Otp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Details/>}/>
        <Route path="/AdhaarDetails" element={<Adhaar/>}/>
      </Routes>
      {/* <Otp/> */}
     
    </div>
  )
}

export default App;
