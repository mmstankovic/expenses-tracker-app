import classes from './ExnpensesFilter.module.css'

const ExpensesFilter = (props) => {
    const changeFilterYear = (e) => {
        props.onSelectYear(e.target.value)
    }
    return (
        <div className={classes.filter}>
            <label>Filter by year: </label>
            <select value={props.selected} onChange={changeFilterYear}>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
            </select>
        </div>
    )
}
export default ExpensesFilter