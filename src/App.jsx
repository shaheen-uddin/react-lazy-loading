import { Suspense, useState } from "react";
import demos from "./data/demo";
import importDemo from "./utils/importDemo";
/* import ShapeDemo from "./components/ShapeDemo";
import ColorDemo from "./components/ColorDemo";
import SizeDemo from "./components/SizeDemo"; */

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const loadDemo = async (file) => {
    const Demo = await importDemo(file);
    return <Demo />;
  };

  const selectDemo = async (file) => {
    const DemoComponent = await loadDemo(file);
    setSelectedDemo(DemoComponent);

    console.log(DemoCompnent);
  };
  return (
    <div className="container h-screen py-5 mx-auto space-y-4">
      <h1 className="text-4xl font-semibold text-teal-950">
        React Lazy Load Explained
      </h1>
      <div className="space-x-3">
        {demos.map((demo) => (
          <button
            className="btn-orange"
            onClick={() => selectDemo(demo.file)}
            key={demo.id}
          >
            {demo.name}
          </button>
        ))}
      </div>
      <div>
        <Suspense
          fallback={
            <h2 className="text-3xl font-semibold">Loading componets...</h2>
          }
        >
          {selectedDemo}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
