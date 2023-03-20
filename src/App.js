import { Route, Routes } from 'react-router-dom';
import { JobList, JobDetails } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/description" element={<JobDetails />} />
    </Routes>
  );
}

export default App;
