import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react'

export default function TypingAnimation({ skill }) {
  const el = useRef(null);
  const typed = useRef(null)
  const skillsList = skill => {
    const skills = []
    skill.map(item => skills.push(item.value))
    return skills
  }
  useEffect(() => {
    const options = {
      strings: skillsList(skill),
      typeSpeed: 250,
      backSpeed: 150,
      loop: true,
      showCursor: false,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, [skill])
  return (
    <span style={{ whiteSpace: 'pre' }} ref={el} />
  )
}
