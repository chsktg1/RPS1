import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {CustomRuleButton, BDiv} from './StyledComponents'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <CustomRuleButton type="button" className="trigger-button">
          Rules
        </CustomRuleButton>
      }
    >
      {close => (
        <BDiv>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <RiCloseLine />
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              style={{width: '40vw'}}
              alt="rules"
            />
          </button>
        </BDiv>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
