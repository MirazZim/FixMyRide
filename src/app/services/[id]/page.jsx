import React from 'react'

export default async function ServiceDetailsPage({ params }) {
    const p = await params
  return (
    <div>Service Detail : {p.id}</div>
  )
}
