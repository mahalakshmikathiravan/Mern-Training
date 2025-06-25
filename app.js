import React from 'react';
import BoxList from './components/BoxList';
import SubscribeForm from './components/SubscribeForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>📦 Monthly Subscription Boxes</h1>
      <p>Choose your curated box and subscribe today!</p>
      <BoxList />
      <SubscribeForm />
    </div>
  );
}

export default App;
