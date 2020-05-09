import React from 'react';
import Layout from './hoc/Layout/Layout'
import Quiz from './Quiz/Quiz'

function App() {
  return (
    <div className="App">
      <Layout>
        <Quiz/>
      </Layout>
    </div>
  );
}

export default App;
