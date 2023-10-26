import { useState } from 'react';
import Error from './Error';

const Formulario = (pacientes, setPacientes ) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
            if ( [nombre, propietario, email, date, sintomas].includes('') ) {
               setError(true);
               return
            }
            setError(false);

            // Objeto Paciente
            const objetoPaciente = {
                nombre,
                propietario,
                email,
                date,
                sintomas
            }
           setPacientes(...pacientes.pacientes, objetoPaciente);

            // Reiniciar el formulario
            setNombre('');
            setPropietario('');
            setEmail('');
            setDate('');
            setSintomas('');
    }



    
    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {' '}
                <span className="text-indigo-600 font-bold"> Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={ handleSubmit }
                >
                { error  &&
                    <Error />
                }
                <div className="mb-5">
                    <label>Nombre Mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label>Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label>Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label>Fecha de ingreso</label>
                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
                        value={date}
                        onChange={ (e) => setDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label>Sintomas</label>
                    <textarea
                        id="sintomas"
                        type="text"
                        placeholder="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md resize-none"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                        
                    />
                </div>
                    <input
                        type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                        id="paciente"
                        value='Agregar Pacinente'
                     />
            </form>
        </div>
     );
}
 
export default Formulario;