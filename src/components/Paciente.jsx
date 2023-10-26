

const Paciente = ({paciente, SetPaciente}) => {

    const { nombre, propietario, email, date, sintomas} = paciente;
    return ( 
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:</p>
            <span className="font-normal normal-case">{nombre}</span>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:</p>
            <span className="font-normal normal-case">{propietario}</span>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email:</p>
            <span className="font-normal normal-case">{email}</span>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta::</p>
            <span className="font-normal normal-case">{date}</span>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:</p>
            <span className="font-normal normal-case">{sintomas}</span>

        </div>
     );
}
 
export default Paciente;