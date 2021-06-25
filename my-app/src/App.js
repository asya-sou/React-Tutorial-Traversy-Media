function App() {
  const name = 'Asya'
  const x = true

  return (
    <div className="container">
      <h1>Hello from React</h1>  
      <h2>Hello {x? name : 'no'}</h2>
    </div>
  );
}

export default App;
