const Formulario = () => {
    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <p>Añade pacientes y {''}
                <span className="text-indigo-600 font-bold"> Administralos</span>
            </p>

            <form>
                <div className="mb-5">
                    <label>Nombre Mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label>Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label>Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label>Fecha de ingreso</label>
                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md"
                    />
                </div>


                <div className="mb-5">
                    <label>Sintomas</label>
                    <textarea
                        id="sintomas"
                        type="text"
                        placeholder="Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md resize-none"
                        
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