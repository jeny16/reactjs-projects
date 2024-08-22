import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "absoulte",
    top: "70vh",
    width: "100%",
  }
  return (
    <footer className="bg-dark text-light py-1" style={footerStyle}>
        <p className="text-center ">
          copyright &copy; Mytodoslist.com 
        </p>
    </footer>
  )
}
