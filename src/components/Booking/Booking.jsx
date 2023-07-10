
function Booking(bookingConfig) {
  return (
    <div>
      { bookingConfig.lines.map((line, index) =>
        <div className='bookingLines' key={ line.date + index }>
        </div>
      ) }
    </div>
  )
}

export default Booking