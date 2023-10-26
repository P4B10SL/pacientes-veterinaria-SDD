import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes} ) => {
    console.log(pacientes)
    return ( 
        

      
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="texrt-xl mt-5 mb-10 text-center">Pacientes y Citas</p>

            {
                pacientes.map( paciente => (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                
                    />
                ))}
        </div>
     
     );
}
 
export default ListadoPacientes;