import './App.css';
import Button from './Concepts/HOC/Button';
import withHoc from './Concepts/HOC/withHOC';
const Enhanced = withHoc(Button);
function App() {
  return (
    <div className="App">
      <Button label='This is a button'/>
      <br/>
      <Enhanced label='This is a button'/>
    </div>
  );
}

export default App;
