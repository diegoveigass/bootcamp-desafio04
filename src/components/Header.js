import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/83AyEys.png"/>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;