import React from 'react';
import { Input } from './components/Input';


function App() {
  const properties: React.CSSProperties = {
    display: 'flex',
    flexWrap: "wrap",
  }
  const [colors, setColors] = React.useState<string[]>([])
  function creatingDivs(value: string): string {
    const colors: string[] = value.split("#")
    setColors(colors.slice());

    return ''
  }

  function getDivs(arrColors: string[]):JSX.Element[]{
    return arrColors.map(color => <div style={{width: "3vw", height:"3vw", backgroundColor: color}}></div>)
  }

  return <section style={{ display: "flex", flexDirection: "column" }}>
    <Input placeHolder={'enter colors separeted by #'} inputProcess={creatingDivs} ></Input>
    <section style={properties}>
      {getDivs(colors)}
    </section>
  </section >
}

export default App;
