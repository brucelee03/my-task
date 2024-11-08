import {TagButton} from '../styledComponents'

const TagItem = props => {
  const {tag, activeTag, activeTagBtn} = props
  const {optionId, displayText} = tag

  const onClickTagButton = () => {
    activeTagBtn(optionId)
  }

  return (
    <li>
      <TagButton type="button" bgColor={activeTag} onClick={onClickTagButton}>
        {displayText}
      </TagButton>
    </li>
  )
}

export default TagItem
