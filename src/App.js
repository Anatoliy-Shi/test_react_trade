import './App.css';
import {Person} from "./components/Person";
import {nanoid} from "nanoid";
import {data} from "./data/data";
import {Timer} from "./components/Timer";


function App() {

    return (
        <>
            <div className="App">
                <h1>Ход торгов</h1>
                <h2>Уважаемые участники, во время вашего хода вы можете изменять параметры торгов</h2>
                <div className={'position'}>
                    <div>
                        <div className={'hide'}><p className={'namePerson'}> Ход </p></div>
                        <p>Параметры и требования</p>
                        <p>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</p>
                        <p>Срок изготовление лота, дней</p>
                        <p>Гарантийные обязательства, мес</p>
                        <p>Условия оплаты</p>
                        <div className={'price'}>
                            <p>Стоимость изготовление лота</p>
                        </div>
                        <p>Действия</p>
                    </div>
                    {Object.keys(data).map((el, key) => (
                        <Person key={nanoid()} obj={data[el]}/>
                    ))}
                </div>
                <Timer/>
            </div>
        </>
    );
}

export default App;
