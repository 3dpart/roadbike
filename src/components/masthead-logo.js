import React from "react"
import typography, { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "../components/gutters"
import SplitText from 'react-pose-text'


const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
}

class Logo extends React.Component {
  componentDidMount() {
    console.log(`hhhhhh`)
  }

  componentWillUnmount() {
    console.log(`bbbb`)
  }
  render() {
   return (
    <div
      css={{
        position: `absolute`,
        bottom: rhythm(2),
        right: rhythm(2),
        [presets.Mobile]: {
          bottom: rhythm(4),
        },
        [presets.Phablet]: {
          bottom: rhythm(2),
        },
      }}
    >
      <p
        css={{
          color: `#fff`,
          letterSpacing: `0.02em`,
          fontFamily: "webfontxiaoshujiang",
          fontSize: scale(3 / 5).fontSize,
          textShadow: `1px 1px 20px hsla(0,100%,100%,0.3)`,
          fontWeight: `bold`,
          marginBottom: 0,
          [presets.Phablet]: {
            fontSize: scale(3 / 5).fontSize,
            textAlign: `right`,
          },
          [presets.Desktop]: {
            fontSize: scale(6 / 5).fontSize,
          },
        }}
      >
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        小书匠
      </SplitText>
      </p>
    </div>
  )}
  }

export default Logo
