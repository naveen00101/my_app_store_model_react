// Write your code here
import './index.css'

const TabItem = props => {
  const {item, active, onClickTab} = props
  const {displayText} = item
  const activeBtn = active ? 'active' : ' '
  const activeLine = active ? 'activeLine' : ' line'
  console.log(activeBtn)
  const clickItem = () => {
    onClickTab(item)
  }

  return (
    <li className="tabItem">
      <button type="button" onClick={clickItem} className={`btn ${activeBtn}`}>
        {displayText}
      </button>
      <hr className={`${activeLine}`} />
    </li>
  )
}

export default TabItem
