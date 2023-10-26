import Pacientes from "./Paciente";

const ListadoPacientes = ( pacientes, setPacientes ) => {
    console.log(pacientes)
    return ( 
        

      
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="texrt-xl mt-5 mb-10 text-center">Pacientes y Citas</p>

            {
                pacientes.pacientes.map( paciente => (
                    <Pacientes
                        key={paciente.id}
                        paciente={paciente}
                        setPacientes={setPacientes}
                    />
                ))}
        </div>
     
     );
}
 
export default ListadoPacientes;