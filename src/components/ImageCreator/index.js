const ImageCreator = props => {
  const {e, sender} = props
  const {id, image} = e
  console.log(props)

  const clickedMe = () => {
    console.log(id)
    sender(id)
  }

  return (
    <button data-testid={`${id.toLowerCase()}Button`}>
      <img onClick={clickedMe} src={image} style={{width: '20vw'}} />
    </button>
  )
}

export default ImageCreator
