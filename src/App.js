
import './App.css';
import Component from './profil/Component';
import img1 from './image/imageInSrc.jpg';
function App() {
  const handleName  = (Fullname)=>alert(Fullname);
  return (
    <div className="App">
    <Component Fullname="Seddik" Bio="anything" profession="web dev" handleName ={handleName }>
      <img src={img1} alt='image'/>

    </Component>
    </div>
  );
}

export default App;
