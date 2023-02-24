import app from '../back/src/app.js'
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutanto em http://localhost:${port}`);
})