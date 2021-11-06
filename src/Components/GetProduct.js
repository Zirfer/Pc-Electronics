import { useState } from 'react'

const GetProduct = () => {
    const [data, setData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInput = (e) => {
        setData(e.target.value.replace(/[^0-9]/g, ""))
    }

    const handleRegister = () => {
        if (data !== '') {
            window.alert("Se ha encontrado un producto")
            handleClear()
        } else {
            window.alert("Debe ingresar un codigo de producto")
        }
    }

    const handleClear = () => {
        setData('')
    }

    return (
        <div className="container p-4">
            <h1 className="center" style={{ width: '100%' }}>Consultar producto</h1>
            <hr />
            <div className="center">
                <div className="row col-md-4" style={{ width: '400px' }}>
                    <form onSubmit={handleSubmit}>
                        <label className="col-md-4">Código </label>
                        <input name="codigo" value={data} type="text" onChange={handleInput} className="col-md-5 form-control" placeholder="Ingrese el código"></input>
                        <div className="clr"></div>
                        <br />
                        <div className="center">
                            <button type="button" className="col-md-5 btn btn-success" onClick={handleRegister}>Consultar</button>
                            <button type="button" className="col-md-5 btn btn-primary" onClick={handleClear}>Limpiar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default GetProduct