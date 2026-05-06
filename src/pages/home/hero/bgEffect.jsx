import './style.css'

function bgEffect () {
  return (
    <>
      <div className="hero__bgGradient" />
        <div className="hero__bgBlobs">
          <div className="hero__blob hero__blob--orange" />
          <div className="hero__blob hero__blob--blue" />
          <div className="hero__blob hero__blob--center" />
        </div>
      <div className="hero__bgGrid" />
    </>
  )
}

export default bgEffect