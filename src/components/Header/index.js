import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdFlight } from 'react-icons/md';
import './style.css';

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length);

  return (
    <header className="container">

      <Link to="/">
        <MdFlight size={64} color="#191919" />
      </Link>

      <Link className="reserve" to="/reserves">
        <div>
          <strong>My destinations</strong>
          <span>{reserveSize} {reserveSize > 1 ? 'trips' : 'trip'}</span>
        </div>
      </Link>

    </header>
  );
}