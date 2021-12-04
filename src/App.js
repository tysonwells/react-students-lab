import './App.css';
import Student from './Student';
import studentsArr from './data'


console.log(studentsArr)

function App() {

  const students = studentsArr.map((ele, idx) => {
    return (
      <Student
        name={ele.name}
        bio={ele.bio}
        scores={ele.scores}
        key={idx}
      />
    )
  })


  return (
    <div className="App">
      <section>
        {students}
      </section>
    </div>
  );
}

export default App;