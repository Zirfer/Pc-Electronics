import { useState } from 'react'

const CreateProduct = () => {
    const [data, setData] = useState({
        codigo: '',
        nombre: '',
        marca: '',
        precio: '',
        cantidad: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInput = (e, isNumber) => {
        if (isNumber) {
            setData({
                ...data,
                [e.target.name]: e.target.value.replace(/[^0-9]/g, "")
            })
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleRegister = () => {
        if (data.codigo !== '') {
            window.alert("Se ha actualizado un producto")
            handleClear()
        } else {
            window.alert("Debe ingresar un codigo de producto")
        }
    }

    const handleClear = () => {
        setData({
            codigo: '',
            nombre: '',
            marca: '',
            precio: '',
            cantidad: ''
        })
    }

    return (
        <div className="container p-4">
            <h1 className="center" style={{ width: '100%' }}>Actualizar producto</h1>
            <hr />
            <div className="center">
                <div className="row col-md-4" style={{ width: '400px' }}>
                    <form onSubmit={handleSubmit}>
                        <label className="col-md-4">Código </label>
                        <input name="codigo" value={data.codigo} type="text" onChange={(e) => handleInput(e, 1)} className="col-md-5 form-control" placeholder="Ingrese el código"></input>
                        <div className="clr"></div>
                        <label className="col-md-4">Nombre </label>
                        <input name="nombre" value={data.nombre} type="text" onChange={(e) => handleInput(e, 0)} className="col-md-5 form-control" placeholder="Ingrese el nombre"></input>
                        <div className="clr"></div>
                        <label className="col-md-4">Marca </label>
                        <input name="marca" value={data.marca} type="text" onChange={(e) => handleInput(e, 0)} className="col-md-5 form-control" placeholder="Ingrese la marca"></input>
                        <div className="clr"></div>
                        <div className="clr"></div>
                        <label className="col-md-4">Precio </label>
                        <input name="precio" value={data.precio} type="text" onChange={(e) => handleInput(e, 1)} className="col-md-5 form-control" placeholder="Ingrese el precio"></input>
                        <div className="clr"></div>
                        <label className="col-md-4">Cantidad </label>
                        <input name="cantidad" value={data.cantidad} stype="text" onChange={(e) => handleInput(e, 1)} className="col-md-5 form-control" placeholder="Ingrese la cantidad"></input>
                        <div className="clr"></div>
                        <div className="center">
                            <button type="button" className="col-md-5 btn btn-success" onClick={handleRegister}>Guardar</button>
                            <button type="button" className="col-md-5 btn btn-primary" onClick={handleClear}>Limpiar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default CreateProduct