import './dropDown.css';

export default function DropDown({ options, setter, defaultValue, placeholder }) {
    return (
        <select value={defaultValue} onChange={e => setter(e.target.value)} className="form-control">
            <option>{placeholder}</option>
            {
                options.map(option => (
                    <option key={option}>{option}</option>
                ))
            }
        </select>   
    )
}