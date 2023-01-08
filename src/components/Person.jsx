import {useDispatch, useSelector} from "react-redux";
import {setWinAuction} from "../redux/slice/timerSlice";

export const Person = ({obj}) => {

    const dispatch = useDispatch()
    const {minutes, seconds} = useSelector(state => state.timer)

    const handleClick = (id) => {
        dispatch(setWinAuction(id))
    }

    return (
        <div className={'person'}>
            <div className={'hide'}>
                <p className={'namePerson'}> </p>
            </div>
            <p>{obj.name}</p>
            <p>{obj.params}</p>
            <p>{obj.increase_manufacturing}</p>
            <p>{obj.prod_period}</p>
            <p>{obj.warranty_obligations}</p>
            <div className={'price'}>
                <p className={'blue'}>{obj.cost_of_manufacturing[0]}</p>
                <p className={'red'}>{obj.cost_of_manufacturing[1]}</p>
                <p className={'green'}>{obj.cost_of_manufacturing[2]}</p>
            </div>
            {seconds > 0 || minutes > 0
                ?  <button onClick={() => handleClick(obj.name)} className={'btnPut'}> сделать ставку </button>
                : <button disabled onClick={() => handleClick(obj.name)} className={'btnPut'}> сделать ставку </button>
            }

        </div>
    )
}