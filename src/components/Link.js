import React from "react";

const Link = ({ href, className,children }) => {
  const Click = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault()
    window.history.pushState({},'', href)
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a onClick={Click} href = {href} className = {className} >
      {children}
    </a>
  )
}

export default Link;