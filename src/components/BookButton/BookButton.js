import React from 'react'
import Link from 'next/link'

function BookButton() {
  return (
    <div>
      <button
        className="btn"
        style={{
          position: 'fixed',
          bottom: '2%',
          right: '5%',
          zIndex: 99999,
          backgroundColor: "#D4B16D",
          color: "#141615",
        }}
      >
        <Link href='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>Book Now</Link>
      </button>
    </div >
  )
}

export default BookButton
