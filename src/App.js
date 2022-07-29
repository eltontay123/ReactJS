import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map(trip => {
    return (
      <Card 

        {...trip}
      />

    )
  })

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
