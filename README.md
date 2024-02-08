# Lista de tarefas do dia

Tem como objetivo organizar as tarefas do dia

### Techs usadas / Dependências

- MongoDB
- Docker-compose
- Node.js

### Uso

#### Rotas

##### GET: '/'
##### Retorna todas as tarefas listadas no banco de dados

##### POST: '/'
##### |req.body { title }| -> Parâmetro requerido (JSON)
##### Retorna a tarefa criada