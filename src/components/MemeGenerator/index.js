import {Component} from 'react'
import {
  MainContainer,
  ButtonEl,
  MainHeading,
  FormCont,
  InputEl,
  LabelEl,
  OptionEl,
  SelectEl,
  DisplayCont,
  DisplayText,
} from './styledComponents'
const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    isDisplayed: false,
    fontSize: '8px',
  }

  onClickBtn = event => {
    event.preventDefault()
    this.setState({isDisplayed: true})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onChangeUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  render() {
    const {imgUrl, topText, bottomText, isDisplayed, fontSize} = this.state
    return (
      <MainContainer>
        <FormCont onSubmit={this.onClickBtn}>
          <MainHeading>Meme Generator</MainHeading>

          <LabelEl htmlFor="imageUrl">Image URL</LabelEl>
          <InputEl placeholder="" id="imageUrl" onChange={this.onChangeUrl} />

          <LabelEl htmlFor='topText'>Top Text</LabelEl>
          <InputEl placeholder="" id="topText" onChange={this.onChangeTopText} />

          <LabelEl htmlFor="bottomText">Bottom Text</LabelEl>
          <InputEl placeholder="" id="bottomText" onChange={this.onChangeBottomText} />

          <LabelEl htmlFor="size" htmlFor="fontSize">Font Size</LabelEl>
          <SelectEl onChange={this.onChangeFontSize} id="fontSize" value={fontSize}>
            {fontSizesOptionsList.map(each => (
              <OptionEl value={`${each.optionId}px`} key={each.optionId}>
                {each.displayText}
              </OptionEl>
            ))}
          </SelectEl>

          <ButtonEl type="submit">Generate</ButtonEl>
        </FormCont>
        {isDisplayed ? (
          <DisplayCont bgImg={imgUrl} data-testid="meme">
            <DisplayText fontSizeText={fontSize}>{topText}</DisplayText>
            <DisplayText>{bottomText}</DisplayText>
          </DisplayCont>
        ) : (
          <DisplayCont bgImg="" data-testid="meme"></DisplayCont>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
