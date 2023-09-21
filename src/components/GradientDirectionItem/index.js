import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {GradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = GradientDirectionDetails

  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
