import { IReport } from "../../Interface/Report.interface"

export const Initial=({info}:{info:IReport})=>{
    return(
        <div className='document' style={{width:'100%',height:'100%',padding:'25px'}}>
            <div>
                <div className='compañia'>
                    <div className="info">
                        <h1>{info.infoCompanty.companyName}</h1>
                        <p>{info.slogan}</p>
                    </div>
                    <div className="data-company">
                        <p>Direccion: {info.infoCompanty.dir}</p>
                        <p>Correo: {info.infoCompanty.email}</p>
                        <p>Fax: {info.infoCompanty.fax}</p>
                        <p>Telefono: {info.infoCompanty.phone?.prefix+' - '+info.infoCompanty.phone?.number}</p>
                    </div>
                </div>
                <div className="document-data">
                    <h2>{info.typeReport.name}</h2>
                    {
                        info.managerCount?
                        <p>Numero de documento: {info.count}</p>
                        :
                        null
                    }
                </div>
            </div>
            {
                info.client?.required?
            <div className="infoClient">
                <h4>Cliente</h4>
                <p>{info.client.names+' '+info.client.lastnames}</p>
                <p>{info.client.email}</p>
                <p>{info.client.typeDoc+' '+info.client.dir}</p>
                <p>{info.client.phone}</p>
            </div>
            :null
            }
        </div>
    )
}