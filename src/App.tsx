import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './components/MainRouter';
import MainProvider from './provider/MainProvider';




function App() {
  return (
    <MainProvider>
      <MainRouter />
    </MainProvider>
  );
}

export default App;
