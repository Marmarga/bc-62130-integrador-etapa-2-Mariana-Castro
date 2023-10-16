
export const get = async (url) => {

    try {
        const respuesta = await fetch(url) // objeto respuesta.
        console.log(respuesta)
        if ( !respuesta.ok ) {
            throw new Error(`Algo paso: ${respuesta.status}, ${respuesta.statusText}`)
        }
        const data = await respuesta.json()
        return data

    } catch (error) {
        console.error(`ERROR GET:`, error)
    }

}
export const post = async (url, dato) => { 
    try {
        const config = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(dato)
        }
        const respuesta = await fetch(url, config)
        if ( !respuesta.ok ) {
            throw new Error(`Algo paso: ${respuesta.status}, ${respuesta.statusText}`)
        }
        const productoGuardado = await respuesta.json()
        return productoGuardado

    } catch (error) {
        console.error(`ERROR POST`, error)
    }

}

export const put = async (url, id, dato) => {
    try {
        const config = {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(dato)
        }
        const urlFull = url + id
        const respuesta = await fetch(urlFull, config)
        if( !respuesta.ok ) {
            throw new Error(`Algo ocurrió, ${respuesta.status} ${respuesta.statusText}`)
        }
        const productoEditado = await respuesta.json()

        return productoEditado

    } catch (error) {
        console.error("ERROR PUT", error)
    }
}
export const del = async (url, id) => {

      const config = {
            method: 'DELETE'
        }
        const urlFull = url + id
        console.warn(urlFull)

    try {
      
        const respuesta = await fetch (urlFull , config)
        if ( !respuesta.ok ) {
            throw new Error(`Algo paso: ${respuesta.status} ${respuesta.statusText}`)
        }
        const resultado = await respuesta.json()
        return resultado
    } catch (error) {
        console.error('ERROR DELETE', error)
    }

}