import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={639}
    viewBox="0 0 280 639"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="7" rx="0" ry="0" width="260" height="367" /> 
    <rect x="0" y="380" rx="31" ry="31" width="280" height="54" /> 
    <rect x="6" y="450" rx="19" ry="19" width="268" height="76" /> 
    <rect x="7" y="565" rx="5" ry="5" width="60" height="27" /> 
    <rect x="529" y="596" rx="0" ry="0" width="110" height="23" /> 
    <rect x="127" y="555" rx="22" ry="22" width="150" height="50" />
  </ContentLoader>
)

export default Skeleton

