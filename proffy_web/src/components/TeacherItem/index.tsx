import React from 'react'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/36867823?s=460&u=247143eb1bccd7a98f86439d4b25da2917062153&v=4" alt="Maicon Boer"/>
            <div>
              <strong>Maicon Boer</strong>
              <span>Química</span>
            </div>
          </header>

          <p>Lorem ipsum dolor sit amet consectetur 
            <br/><br/>
            Adipisicing elit. Voluptatem iste repudiandae autem est eos sit consequatur voluptates nisi voluptatum libero ipsam veritatis, aperiam esse. Nihil velit tenetur dolor eius. Dolorum.
          </p>

          <footer>
            <p>
              Preço/hora 
              <strong> R$ 80,00</strong>
            </p>

            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>

        </article>
  )
}

export default TeacherItem;
