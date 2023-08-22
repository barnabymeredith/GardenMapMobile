import Map from './components/Map';
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <Map imageURL={ require('./assets/gardenBig.png') } />
  );
}