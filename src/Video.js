import React from 'react';
import teste1 from './img/teste1.jpg';
import teste2 from './img/teste2.jpg';
import teste3 from './img/teste3.jpg';
import teste4 from './img/teste4.jpg';
import teste5 from './img/teste5.jpg';
import teste6 from './img/teste6.jpg';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Menubar } from 'primereact/menubar';
const axios = require('axios');

function App() {
  const api = axios.create({
    baseURL: 'https://BackEnd-DWM2021.leosbastos.repl.co',
  });
  api.get("/").then(data => {
    console.log("teste")
    console.log(data)
  })
  return (

    <div className="">
      <Menubar className="nav" model={items}/>
      <header className="App">
      
        <div className="row">
          <div className="col">
            <img src={teste1} className="teste1" alt="erro" />
            <div className="p-text-center textz titulo">Shingeki no Kyojin</div>
            <div className=" p-text-center textz episodio">Episódio 1</div>
          </div>
          <div className="col">
            <img src={teste2} className="teste2" alt="erro" />
            <div className="p-text-center textz titulo">Yakusoku no Neverland</div>
            <div className="p-text-center textz episodio">Episódio 5</div>
          </div>
          <div className="col">
            <img src={teste3} className="teste3" alt="erro" />
            <div className="p-text-center textz titulo">Dr. Stone</div>
            <div className="p-text-center textz episodio">Episódio 3</div>
          </div>
        </div>
        
        
       
        <div className="row">
          <div className="col">
            <img src={teste4} className="teste4" alt="erro" />
            <div className="p-text-center textz titulo">One Piece</div>
            <div className="p-text-center textz episodio">Episódio 990</div>
          </div>
          <div className="col">
            <img src={teste5} className="teste5" alt="erro" />
            <div className="p-text-center textz titulo">Gotoubun no Hanayome</div>
            <div className="p-text-center textz episodio">Episódio 12</div>
          </div>
          <div className="col"> 
            <img src={teste6} className="teste6" alt="erro" />
            <div className="p-text-center textz titulo">Tensei Shitara Slime Datta Ken</div>
            <div className="p-text-center textz episodio">Episódio 34</div>
          </div>
        </div>
        

      </header>
    </div>
    
  );
}
const items = [
    {
       label:'Animes',
       icon:'pi pi-fw pi-file',
       items:[
          {
             label:'New',
             icon:'pi pi-fw pi-plus',
             items:[
                {
                   label:'Bookmark',
                   icon:'pi pi-fw pi-bookmark'
                },
                {
                   label:'Video',
                   icon:'pi pi-fw pi-video'
                },

             ]
          },
          {
             label:'Filmes',
             icon:'pi pi-fw pi-trash'
          },
          {
             separator:true
          },
          {
             label:'Export',
             icon:'pi pi-fw pi-external-link'
          }
       ]
    },
    {
       label:'Calendário',
       icon:'pi pi-fw pi-pencil',
       items:[
          {
             label:'Left',
             icon:'pi pi-fw pi-align-left'
          },
          {
             label:'Right',
             icon:'pi pi-fw pi-align-right'
          },
          {
             label:'Center',
             icon:'pi pi-fw pi-align-center'
          },
          {
             label:'Justify',
             icon:'pi pi-fw pi-align-justify'
          },

       ]
    },
    {
       label:'Users',
       icon:'pi pi-fw pi-user',
       items:[
          {
             label:'New',
             icon:'pi pi-fw pi-user-plus',

          },
          {
             label:'Delete',
             icon:'pi pi-fw pi-user-minus',

          },
          {
             label:'Search',
             icon:'pi pi-fw pi-users',
             items:[
                {
                   label:'Filter',
                   icon:'pi pi-fw pi-filter',
                   items:[
                      {
                         label:'Print',
                         icon:'pi pi-fw pi-print'
                      }
                   ]
                },
                {
                   icon:'pi pi-fw pi-bars',
                   label:'List'
                }
             ]
          }
       ]
    },
    {
       label:'Gêneros',
       icon:'pi pi-fw pi-calendar',
       items:[
          {
             label:'Edit',
             icon:'pi pi-fw pi-pencil',
             items:[
                {
                   label:'Save',
                   icon:'pi pi-fw pi-calendar-plus'
                },
                {
                   label:'Delete',
                   icon:'pi pi-fw pi-calendar-minus'
                },

             ]
          },
          {
             label:'Archieve',
             icon:'pi pi-fw pi-calendar-times',
             items:[
                {
                   label:'Remove',
                   icon:'pi pi-fw pi-calendar-minus'
                }
             ]
          }
       ]
    },
    {
       label:'Logar',
       icon:'pi pi-fw pi-power-off'
    }
 ];
export default App;
