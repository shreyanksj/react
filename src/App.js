import Parent from "./Components/Parent.jsx";
import DataTable from "./Components/DataTable.jsx";
import UseEffectHook from "./Components/UseEffectHook.jsx";

const App = () => {
    const table1 = [
      {name: "Rishi", designation: "Engineer"},
      {name: "Skanda", designation: "Doctor"},
      {name: "Suhail", designation: "Rand"},
    ]

    const table2 = [
      {name: "R", designation: "Engi"},
      {name: "S", designation: "Doc"},
      {name: "S", designation: "Plu"},
    ]


    return (
        <>  
          <div className="App">
            <DataTable data={table1} />
            <br></br>
            <DataTable data={table2} />
            <br></br>
            <UseEffectHook />
          </div>
        </>
    )
};

export default App;