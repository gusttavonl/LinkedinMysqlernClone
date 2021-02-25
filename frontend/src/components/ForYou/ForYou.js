import { Avatar } from '@material-ui/core';
import React from 'react';
import './ForYou.css';

function ForYou() {
  return (
    <div className="forYou">
      <div className="forYouHeader">
        <h3>Sugestões para voce</h3>
        <p>Ver todos</p>
      </div>
      <div className="forYouBody">
          <ul>
              <li> 
                <Avatar className="forYouBodyAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
                <div className="forYouBodyText">
                    <h3>@gustavoNoronha0</h3>
                    <h4>Gustavo Noronha</h4>
                </div>
                <p className="forYouBodyFollow">Seguir</p>
              </li>
              <li> 
                <Avatar className="forYouBodyAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
                <div className="forYouBodyText">
                    <h3>@gustavoNoronha0</h3>
                    <h4>Gustavo Noronha</h4>
                </div>
                <p className="forYouBodyFollow">Seguir</p>
              </li>
              <li> 
                <Avatar className="forYouBodyAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
                <div className="forYouBodyText">
                    <h3>@gustavoNoronha0</h3>
                    <h4>Gustavo Noronha</h4>
                </div>
                <p className="forYouBodyFollow">Seguir</p>
              </li>
              <li> 
                <Avatar className="forYouBodyAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
                <div className="forYouBodyText">
                    <h3>@gustavoNoronha0</h3>
                    <h4>Gustavo Noronha</h4>
                </div>
                <p className="forYouBodyFollow">Seguir</p>
              </li>
          </ul>
         
      </div>

    </div>
  );
}
 
export default ForYou;
