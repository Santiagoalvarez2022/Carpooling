import React from 'react'
import { useParams } from 'react-router-dom';

export default function Driver() {
    const { id } = useParams();
  return (
    <div>Driver</div>
  )
}
