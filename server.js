const express = require('express');
const path = require('path');
const app = express();

// Middleware para definir os cabeçalhos corretos com base no tipo de arquivo
app.use((req, res, next) => {
  const url = req.url;

  // Define cabeçalhos específicos para tipos de arquivo
  if (url.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
  } else if (url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=UTF-8');
  } else if (url.endsWith('.json')) {
    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
  }

  next();
});

// Serve os arquivos estáticos da pasta "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Rota padrão para qualquer outra requisição (como o SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Inicia o servidor na porta 3000 (ou qualquer outra que preferir)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
