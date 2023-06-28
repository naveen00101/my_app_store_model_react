// Write your code here
import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item

  return (
    <li className="app-item box">
      <img className="logo" src={imageUrl} alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
