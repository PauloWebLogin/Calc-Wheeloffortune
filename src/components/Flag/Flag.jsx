import './Flag.css';

function Flag(flagConfig) {
  return (
    <div className={`flagDivs ${flagConfig.orientation === 'horizontal' ? 'horizontalFlag' : 'verticalFlag'}`}>
      { flagConfig.lines.map((line, index) =>
        <div className='flagLines' key={ line.color + index } style={{ backgroundColor: line.color }}>
          {line.circle && <div className='circle' style={line.circle}></div>}
        </div>
      ) }
    </div>
  )
}

export default Flag

