import Card from './Card.jsx'

import {logo} from './data.js';

export default function App() {
  return (
    <div className="flex flex-wrap justify-center">
      {logo.map(item => (
        <Card
          key={item.title}
          img={item.img}
          title={item.title}
          description={item.description}
          link1={item.link1}
          link2={item.link2}
        />
      ))}
    </div>
  );
}   