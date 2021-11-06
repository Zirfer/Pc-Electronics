import { useState } from 'react'

const ValueCalculator = () => {

    const [data, setData] = useState({
        valorCompra: '',
        utilidad: '',
        iva: '',
        valorVenta: '',
        ganancia: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value.replace(/[^0-9]/g, "")
        })
    }

    const handleSales = () => {
        if (data.valorCompra === '') {
            window.alert('Debe ingresar un valor de compra')
            return false
        }
        if (data.utilidad === '') {
            window.alert('Debe ingresar un valor de utilidad')
            return false
        }
        if (data.iva === '') {
            window.alert('Debe ingresar un valor de IVA')
            return false
        }
        let venta = parseFloat(data.valorCompra) + parseFloat((data.valorCompra * data.utilidad / 100)) + parseFloat((data.valorCompra * data.iva / 100))
        setData({
            ...data,
            valorVenta: '$' + venta,
            ganancia: '$' + (data.valorCompra * data.utilidad) / 100
        })
    }

    const handleClear = () => {
        setData({
            valorCompra: '',
            utilidad: '',
            iva: '',
            valorVenta: '',
            ganancia: ''
        })
    }

    return (
        <div className="container p-4">
            <h1 className="center" style={{ width: '100%' }}>Calculadora de valor</h1>
            <hr />
            <div className="center">
                <div className="row col-md-4" style={{ width: '400px' }}>
                    <form onSubmit={handleSubmit}>
                        <label className="col-md-4">Valor compra </label>
                        <input name="valorCompra" value={data.valorCompra} type="text" onChange={handleInput} className="col-md-5 form-control" placeholder="Valor compra"></input>
                        <div className="clr"></div>
                        <label className="col-md-4">Utilidad </label>
                        <input name="utilidad" value={data.utilidad} type="text" onChange={handleInput} className="col-md-5 form-control" placeholder="Utilidad"></input>
                        <div className="clr"></div>
                        <label className="col-md-4">IVA </label>
                        <input name="iva" value={data.iva} type="text" onChange={handleInput} className="col-md-5 form-control" placeholder="IVA"></input>
                        <div className="clr"></div>
                        <div className="center">
                            <button type="button" className="col-md-5 btn btn-success" onClick={handleSales}>Calcular</button>
                            <button type="button" className="col-md-5 btn btn-primary" onClick={handleClear}>Limpiar</button>
                        </div>
                        <div className="clr"></div>
                        <label className="col-md-4">Valor venta </label>
                        <input name="valorVenta" value={data.valorVenta} type="text" className="col-md-5 form-control" placeholder="Valor venta" disabled></input>
                        <div className="clr"></div>
                        <label className="col-md-4">Ganancia </label>
                        <input name="ganancia" value={data.ganancia} stype="text" className="col-md-5 form-control" placeholder="Ganancia" disabled></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ValueCalculator