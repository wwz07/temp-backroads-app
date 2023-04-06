import React from 'react'

export default function Title({firstWord, secondWord}) {
  return (
    <div className="section-title">
        <h2>
          {firstWord} <span>{secondWord}</span>
        </h2>
    </div>
  )
}
