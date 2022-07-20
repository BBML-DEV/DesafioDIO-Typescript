// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?

// A ideia dessa atividade é criar um aplicativo que: 
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela

// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction

// var apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
// let apiKey;
// let requestToken;
// let username;
// let password;
// let sessionId;
// let listId = '7101979';

// let loginButton = document.getElementById('login-button');
// let searchButton = document.getElementById('search-button');
// let searchContainer = document.getElementById('search-container');

// loginButton.addEventListener('click', async () => {
//   await criarRequestToken();
//   await logar();
//   await criarSessao();
// })

// searchButton.addEventListener('click', async () => {
//   let lista = document.getElementById("lista");
//   if (lista) {
//     lista.outerHTML = "";
//   }
//   let query = document.getElementById('search').value;
//   let listaDeFilmes = await procurarFilme(query);
//   let ul = document.createElement('ul');
//   ul.id = "lista"
//   for (const item of listaDeFilmes.results) {
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(item.original_title))
//     ul.appendChild(li)
//   }
//   console.log(listaDeFilmes);
//   searchContainer.appendChild(ul);
// })

// function preencherSenha() {
//   password = document.getElementById('senha').value;
//   validateLoginButton();
// }

// function preencherLogin() {
//   username =  document.getElementById('login').value;
//   validateLoginButton();
// }

// function preencherApi() {
//   apiKey = document.getElementById('api-key').value;
//   validateLoginButton();
// }

// function validateLoginButton() {
//   if (password && username && apiKey) {
//     loginButton.disabled = false;
//   } else {
//     loginButton.disabled = true;
//   }
// }

// class HttpClient {
//   static async get({url, method, body = null}) {
//     return new Promise((resolve, reject) => {
//       let request = new XMLHttpRequest();
//       request.open(method, url, true);

//       request.onload = () => {
//         if (request.status >= 200 && request.status < 300) {
//           resolve(JSON.parse(request.responseText));
//         } else {
//           reject({
//             status: request.status,
//             statusText: request.statusText
//           })
//         }
//       }
//       request.onerror = () => {
//         reject({
//           status: request.status,
//           statusText: request.statusText
//         })
//       }

//       if (body) {
//         request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//         body = JSON.stringify(body);
//       }
//       request.send(body);
//     })
//   }
// }

// async function procurarFilme(query) {
//   query = encodeURI(query)
//   console.log(query)
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
//     method: "GET"
//   })
//   return result
// }

// async function adicionarFilme(filmeId) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
//     method: "GET"
//   })
//   console.log(result);
// }

// async function criarRequestToken () {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
//     method: "GET"
//   })
//   requestToken = result.request_token
// }

// async function logar() {
//   await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
//     method: "POST",
//     body: {
//       username: `${username}`,
//       password: `${password}`,
//       request_token: `${requestToken}`
//     }
//   })
// }

// async function criarSessao() {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
//     method: "GET"
//   })
//   sessionId = result.session_id;
// }

// async function criarLista(nomeDaLista, descricao) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
//     method: "POST",
//     body: {
//       name: nomeDaLista,
//       description: descricao,
//       language: "pt-br"
//     }
//   })
//   console.log(result);
// }

// async function adicionarFilmeNaLista(filmeId, listaId) {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
//     method: "POST",
//     body: {
//       media_id: filmeId
//     }
//   })
//   console.log(result);
// }

// async function pegarLista() {
//   let result = await HttpClient.get({
//     url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
//     method: "GET"
//   })
//   console.log(result);
// }

// {/* <div style="display: flex;">
//   <div style="display: flex; width: 300px; height: 100px; justify-content: space-between; flex-direction: column;">
//       <input id="login" placeholder="Login" onchange="preencherLogin(event)">
//       <input id="senha" placeholder="Senha" type="password" onchange="preencherSenha(event)">
//       <input id="api-key" placeholder="Api Key" onchange="preencherApi()">
//       <button id="login-button" disabled>Login</button>
//   </div>
//   <div id="search-container" style="margin-left: 20px">
//       <input id="search" placeholder="Escreva...">
//       <button id="search-button">Pesquisar Filme</button>
//   </div>
// </div>*/}

//Desafio compilado 
"use strict";
let apiKey: string = "cea51a3e83f0f54f54f08e8786d845ae";
let requestToken: string;
let username: string;
let password: string;
let sessionId: string;
let listId: string;

let loginContainer = document.getElementById('login-container') as HTMLDivElement;
let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button') as HTMLButtonElement;
let searchContainer = document.getElementById('search-container') as HTMLDivElement;
let searchInput = document.getElementById('search') as HTMLInputElement;
let btnAddlist = document.getElementById('addToList') as HTMLButtonElement;
let inputIdFilme = document.getElementById('listIdFilme') as HTMLInputElement;
let listContainer = document.getElementById('list-container') as HTMLDivElement;

loginButton.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
})

searchButton.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let query = searchInput.value;
  let listaDeFilmes = await procurarFilme(query);
  let ul = document.createElement('ul');
  ul.id = "lista"
  for (const item of listaDeFilmes.results) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${item.id} - ${item.original_title}`));
    ul.appendChild(li);
  }
  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
})

btnAddlist.addEventListener('click', async () => {
  await criarLista('teste', 'lista de teste');
  let resultAddMovie = await adicionarFilmeNaLista(inputIdFilme.value, listId)
  let resultAllMovies = await pegarLista();

  let ul = document.getElementById('listaFilmesUsuario') as HTMLUListElement;
  ul.id = "listaFilmesUsuario"
  for (const item of resultAllMovies.items) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${item.id} - ${item.original_title}`));
    ul.appendChild(li);
  }
  console.log(resultAddMovie);
  
})

// Função de Login 
function preencherSenha() {
  return document.getElementById('senha') as HTMLInputElement;
}

function preencherLogin() {
  return document.getElementById('login') as HTMLInputElement;
}

function preencherApi() {
  return document.getElementById('api-key') as HTMLInputElement;
}

function validateLoginButton() {
  username = preencherLogin().value;
  password = preencherSenha().value;
  apiKey = preencherApi().value;
  if (password != "" && username != "" && apiKey ) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {
  static async get<T>({ url, method, body = null }: IGetReturn) {
    return new Promise<T>((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        body = JSON.stringify(body);
      }
      request.send(body);
    })
  }
}

async function criarRequestToken() {
  let result = await HttpClient.get<IGetToken>({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET"
  })
  requestToken = result.request_token
}

async function logar() {
  let result = await HttpClient.get<IGetAutenticationLogin>({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
  })

  if(result.success){
    localStorage.setItem("login","true");
    loginContainer.style.display = "none";
    searchContainer.style.display = "block";
    listContainer.style.display = "block";
  }

  else{
    localStorage.setItem("login", "false");
  }

  return result
}


async function criarSessao() {
  let result = await HttpClient.get<IGetSession>({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
    method: "POST",
    body:{
      request_token:requestToken
    }
  })
  sessionId = result.session_id;
  console.log(result);
  
  return result;
}


async function procurarFilme(query: string): Promise<IFilmeResposta> {
  query = encodeURI(query)
  console.log(query)
  let result = await HttpClient.get<IFilmeResposta>({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET"
  })
  return result
}



async function criarLista(nomeDaLista: string, descricao: string) {
  let result = await HttpClient.get<ICreateList>({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br"
    }
  })
  listId = result.list_id
}

async function adicionarFilmeNaLista(filmeId: string, listaId: string) {
  let result = await HttpClient.get<IAddMovieToList> ({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId
    }
  })
  console.log(result);

  if(result.success){
    alert("Filme adicionado a lista");
  }
  else if(result.status_code == 34) {
    alert("Erro ao adicionar filme a lista");
  }

}

async function pegarLista() {
  let result = await HttpClient.get<IGetList>({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET"
  })
  console.log(result);
  return result
}