const Main = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="center">Programación de Sitios Web</h1>
                <br />
                <h2 className="center">Grupo Número 301127_54</h2>
                <div className="container mt-3">
                    <h2>Tabla de Integrantes del grupo</h2>
                    <p>Esta tabla contiene la relación de los estudiantes que programaron el sitio web:</p>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jenni Carolina</td>
                                <td>Ruiz Prieto</td>
                                <td>jcruizp@unadvirtual.edu.co</td>
                            </tr>
                            <tr>
                                <td>Sergio Yamid</td>
                                <td>Buitrago León</td>
                                <td>sybuitragol@unadvirtual.edu.co</td>
                            </tr>
                            <tr>
                                <td>Carlos Hernan</td>
                                <td>Cruz Lopez</td>
                                <td>chcruzl@unadvirtual.edu.co</td>
                            </tr>
                            <tr>
                                <td>Juan David</td>
                                <td>Avellaneda Molina</td>
                                <td>jdavellanedam@unadvirtual.edu.co</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Main