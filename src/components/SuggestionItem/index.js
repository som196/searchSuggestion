import './index.css'

const SuggestionItem = props => {
  const {suggestionObject, inputValue} = props
  const {suggestion} = suggestionObject

  const changeValue = () => {
    inputValue(suggestion)
  }

  return (
    <li className="eachSuggestion">
      <p className="suggestionName">{suggestion}</p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={changeValue}
      />
    </li>
  )
}

export default SuggestionItem
