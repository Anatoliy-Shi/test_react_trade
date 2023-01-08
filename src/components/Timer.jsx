import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {takeMinutes, takeSeconds, visible} from "../redux/slice/timerSlice";
import {min, sec} from "../assets/assetTimer";

export const Timer = () => {

    const {value, minutes, seconds, winAuction} = useSelector(state => state.timer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (value) {
            const countDate = new Date('May 30, 2020').getTime()
            const newDate = new Date('May 30, 2020').setMinutes(minutes, seconds)
            let distance = newDate - countDate
            const interval = setInterval(() => {
                distance -= 1000
                const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
                const second = Math.floor((distance % (60 * 1000)) / 1000)
                if (distance < 0) {
                    clearInterval(interval)
                    dispatch(visible(false))
                    if (winAuction) {
                        alert('выиграл ' + winAuction)
                    } else {
                        alert('никто не делал ставки')
                    }
                } else {

                    dispatch(takeMinutes(minute))
                    dispatch(takeSeconds(second))
                }
            }, 1000)

            return () => {
                clearInterval(interval)
            }
        }
    }, [minutes, seconds, value, dispatch])

    const handleBet = () => {
        dispatch(visible(true))
        dispatch(takeMinutes(min))
        dispatch(takeSeconds(sec))
    }

    return (
        <div className={'block'}>
                <button className={'block__btn'} onClick={handleBet}>запустить таймер</button>
            {value &&
            <p className={'block__timer'}> {minutes} : {seconds} <span className={'icon'}>&#9203;</span> </p>}
        </div>

    )
}