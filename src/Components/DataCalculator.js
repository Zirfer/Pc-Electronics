import { useState } from 'react'

const ValueCalculator = () => {

    const [exp, setExp] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleInput = (e) => {
        if (e.target.value === 0) {
            setExp(0)
        } else {
            setExp(e.target.id)
        }
    }

    const calcData = () => {
        let Rels = new Array(1, 8, 8192, 8388608, 8589934592, 8796093022208);
        for (let i = 0; i < Rels.length; i++) {
            if (i == exp) {
                let givenValue = document.getElementById(exp).value.replace(",", ".");
                let newVal = eval(givenValue * Rels[i])
                document.getElementById("0").value = newVal;
            }
        }
        for (let i = 1; i < Rels.length; i++) {
            let newVal = eval(document.getElementById("0").value / Rels[i]);
            let neg = 0;
            if (newVal < 0) {
                newVal *= -1;
                neg = 1;
            }
            let j = 0;
            while (newVal < 1 && newVal > 0) {
                j++;
                newVal *= 10;
            }
            newVal *= 100000;
            newVal = Math.round(newVal);
            newVal /= 100000;
            newVal /= Math.pow(10, j);
            newVal = "a" + newVal;
            let cache = 0;
            if (newVal.indexOf("e") != -1) {
                cache = newVal.substr(newVal.indexOf("e"), 5);
                newVal = newVal.substring(0, newVal.indexOf("e"));
            }
            let dig = new Array;
            for (j = 1; j < 5; j++)
                dig[j] = newVal.substr(newVal.length - j - 1, 1);
            if (dig[1] == 9 && dig[2] == 9 && dig[3] == 9 && dig[4] == 9) {
                let rest = newVal.substring(newVal.indexOf("."), 100).length - 1;
                newVal = newVal.substring(1, newVal.length - 1);
                newVal = "a" + eval(eval(newVal) + Math.pow(10, -rest + 2));
            }
            for (j = 1; j < 5; j++)
                dig[j] = newVal.substr(newVal.length - j - 1, 1);
            if (dig[1] == 0 && dig[2] == 0 && dig[3] == 0 && dig[4] == 0) {
                let check = 0;
                for (j = 0; j < newVal.length - 5; j++) {
                    if (newVal.substr(j, 1) != 0)
                        check++;
                }
                if (check > 2)
                    newVal = newVal.substring(0, newVal.length - 1);
            }
            if (cache)
                newVal = newVal + cache;
            newVal = newVal.substring(1, newVal.length);
            if (neg)
                newVal *= -1;
            document.getElementById(i).value = eval(newVal);
        }
    }

    const handleClear = () => {
        for (let i = 0; i <= 5; i++) {
            document.getElementById(i).value = ''
        }
    }

    return (
        <div className="container p-4">
            <h1 className="center" style={{ width: '100%' }}>Calculadora de equivalencia entre tamaño de datos</h1>
            <hr />
            <div className="center">
                <div className="row col-md-6" style={{ width: '600px' }}>
                    <form onSubmit={handleSubmit}>
                        <label className="col-md-3">bit (b):</label>
                        <input className="col-md-3 form-control" id="0" type="text" onChange={handleInput}></input>
                        <label className="col-md-3">Ej: 4194304000</label>
                        <div className="clr"></div>
                        <label className="col-md-3">Byte (B):</label>
                        <input className="col-md-3 form-control" id="1" type="text" onChange={handleInput}></input>
                        <label className="col-md-3">Ej: 524288000</label>
                        <div className="clr"></div>
                        <label className="col-md-3">Kilobyte (KB):</label>
                        <input className="col-md-3 form-control" id="2" type="text" onChange={handleInput}></input>
                        <label className="col-md-3">Ej: 512000</label>
                        <div className="clr"></div>
                        <label className="col-md-3">Megabyte (MB):</label>
                        <input className="col-md-3 form-control" id="3" type="text" onChange={handleInput}></input>
                        <label className="col-md-3">Ej: 500</label>
                        <div className="clr"></div>
                        <label className="col-md-3">Gigabyte (GB):</label>
                        <input className="col-md-3 form-control" id="4" type="text" onChange={handleInput}></input>
                        <label className="col-md-3">Ej: 0.488281</label>
                        <div className="clr"></div>
                        <label className="col-md-3">Terabyte (TB):</label>
                        <input className="col-md-3 form-control" id="5" type="text" onChange={handleInput}></input>
                        <label className="col-md-3">Ej: 0.000476837</label>
                        <div className="clr"></div>
                        <label className="center">Ingrese un solo valor en cualquier casilla y presione "Calcular"</label>
                        <div className="clr"></div>
                        <div className="center">
                            <button type="button" className="col-md-5 btn btn-success" onClick={calcData}>Calcular</button>
                            <button type="button" className="col-md-5 btn btn-primary" onClick={handleClear}>Limpiar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default ValueCalculator