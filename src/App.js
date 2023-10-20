import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MonsterFilter from './MonsterFilter';
import MonsterDetail from './MonsterDetail';
import { MonsterData } from './MonsterData';

const App = () => {
  return (
    <Router basename="/tosBook">
      <div>
        <Routes>
          <Route path="/" element={<MonsterFilter data={MonsterData} />} />
          <Route path="/:id" element={<MonsterDetail data={MonsterData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
