export const Tags=({tag,children}:{tag:string,children:JSX.Element})=>{
    switch(tag){
        case 'p':
            return <p key={Date.now()+Math.random()}>{children}</p>
        case 'h1':
            return <h1 key={Date.now()+Math.random()}>{children}</h1>
        default:
            return <p key={Date.now()+Math.random()}>No hay nada</p>
    }
}