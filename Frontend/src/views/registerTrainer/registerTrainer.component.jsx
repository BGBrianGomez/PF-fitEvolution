//Components

//Commons imports
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validate from './validate'    //Styles
import style from "./registerTrainer.module.css";
import axios from "axios";
//import firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/firebase/firebase';


function RegisterTrainer() {
    const navigate = useNavigate();

    const volverInicio = () => {
        navigate('/login');
    };

    const changeAccount = () => {
        navigate('/select');
    }


    const [errors, setErrors] = useState({})
<<<<<<< HEAD
    const [form,setForm]= useState({
            forename:"",
            surname:"",
            // password:"",
            // repeatpassword:"",
            image:"",
            email:"",
            phoneN:"",
            nationality:"",
            dateOfBirth:null,
            dni:"",
            gender:"",
            description:""
        })
      console.log(form)
            const handleChange = (e) => {
                const  property = e.target.name
                const  value  = e.target.value;
        
                setForm((previo) => {
                    const nuevoS = {
                         ...previo,
                    [property]: value
                };
                    setErrors(validate(nuevoS));
                    return nuevoS;  
                });
              
            };
        const handleSubmit =  (e) => {
            e.preventDefault();
            const checkErr = validate(form)
            if (Object.values(checkErr).some(error => error)) {
                alert("DEBÉS COMPLETAR TODOS LOS CAMPOS!");
                return;
            }
    alert(`seguro quiere crear el Entrenador ${form.forename} ${""} ${form.surname}?`)
    try {
        
        axios.post("http://localhost:3001/fitevolution/trainers", form)
    } catch (error) {
        console.error("Error al enviar el formulario:", error)
    }
    }


        return (<div className={style.conteinerRegister}>
            <div className={style.menuregister}>
                <div className={style.titleSup}>
                    <button onClick={changeAccount} className={style.btregister}>{'< Cambiar tipo de cuenta'}</button>
                    <h1 className={style.titleregister}>Crea una cuenta de entrenador</h1>
                </div>
                <div className={style.inputsRegister}>
                    <form className={style.RegForms} onSubmit={handleSubmit}>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Nombre</label>
                            <input placeholder=" Nombre" className={style.inputNom} name="forename" onChange={handleChange}  />
                            {errors.forename &&<p className={style.p1}>{errors.forename}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Apellido</label>
                            <input placeholder=" Apellido" className={style.inputNom} name="surname" onChange={handleChange} />
                            {errors.surname &&<p className={style.p1}>{errors.surname}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Contraseña</label>
                            <input placeholder="Contraseña" className={style.inputNom} name="password" type="password" />
                            {errors.password && <p className={style.p1}>{errors.password}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Repetir contraseña</label>
                            <input placeholder="Contraseña" className={style.inputNom} name="repeatpassword" type="password"  />
                            {errors.repeatpassword &&<p className={style.p1}>{errors.repeatpassword}</p>}
                        </div>
                        <div className={style.labelCorreo}>
                            <label className={style.label1}> Correo electronico</label>
                            <input placeholder=" Correo electronico" className={style.inputCorreo} name="email" onChange={handleChange} />
                        { errors.email &&<p className={style.p1}>{errors.email}</p>}
                        </div>
                        
                        <div className={style.labelform1}>
                            <label className={style.label1}> Nacionalidad</label>
                            <input  placeholder=" Nacionalidad" className={style.inputNom} name="nationality" onChange={handleChange} />
                            {errors.nationality && <p className={style.p1}>{errors.nationality}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> DNI</label>
                            <input placeholder=" DNI" className={style.inputNom} name="dni" onChange={handleChange} />
                            {errors.dni && <p className={style.p1}>{errors.dni}</p>}
                        </div>
                        
                        <div className={style.labelform1}>
                            <label className={style.label1}> Imagen</label>
                            <input placeholder=" Imagen" className={style.inputNom} name="image" onChange={handleChange} />
                            {errors.image && <p className={style.p1}>{errors.image}</p>}
                        </div>
                        <div className={style.labelform1}>
=======
    const [form, setForm] = useState({
        forename: "",
        password: "",
        repeatpassword: "",
        image: "",
        email: "",
        description: ""
    })
    console.log(form)
    const handleChange = (e) => {
        const property = e.target.name
        const value = e.target.value;

        setForm((previo) => {
            const newS = {
                ...previo,
                [property]: value
            };
            setErrors(validate(newS));
            return newS;
        });

    };
    const handleSubmit = async (e) => {
        console.log("dsdsdsd")
        e.preventDefault();
        const checkErr = validate(form)
        if (Object.values(checkErr).some(error => error)) {
            alert("DEBÉS COMPLETAR TODOS LOS CAMPOS!");
            return;
        }
        alert(`seguro quiere crear el Entrenador ${form.forename} ${""}?`)
        try {
            //firebase registro de usuario 
            const userCredentials = await createUserWithEmailAndPassword(auth, form.email, form.password) //esto se envia a firebase y puede llevar tiempo por ello usamos async y await
            console.log(userCredentials)
            if (userCredentials.operationType) {
                window.alert("Usuario registrado con exito")
                navigate('/login')
            } else { throw Error("Error al registrar el usuario") }
            //----------------------------

            //envio de formulario al servidor
            // await axios.post("http://localhost:3001/fitevolution/trainers", form)
            //-------------------------------
        } catch (error) {
            //window.alert(error.code)    //error.name "firebase error(tipo de error)", error.code "nombre del error", error.message "descripcion del error"
            if (error.code === "auth/email-already-in-use") window.alert("Email ya esta registrado")
            else if (error.code === "auth/invalid-email") window.alert("Email invalido")
            else if (error.code === "auth/weak-password") window.alert("La contraseña debe tener un minimo de 6 caracteres")
            else if (error.code) window.alert("Error al enviar el formulario:", error.message)
        }
    }


    return (<div className={style.conteinerRegister}>
        <div className={style.menuregister}>
            <div className={style.titleSup}>
                <button onClick={changeAccount} className={style.btregister}>{'< Cambiar tipo de cuenta'}</button>
                <h1 className={style.titleregister}>Crea una cuenta de entrenador</h1>
            </div>
            <div className={style.inputsRegister}>
                <form className={style.RegForms} onSubmit={handleSubmit}>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Nombre</label>
                        <input placeholder=" Nombre" className={style.inputNom} name="forename" onChange={handleChange} />
                        {errors.forename && <p className={style.p1}>{errors.forename}</p>}
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Contraseña</label>
                        <input placeholder="Contraseña" className={style.inputNom} name="password" type="password" onChange={handleChange} />
                        {errors.password && <p className={style.p1}>{errors.password}</p>}
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Repetir contraseña</label>
                        <input placeholder="Repetir contraseña" className={style.inputNom} name="repeatpassword" type="password" onChange={handleChange} />
                        {errors.repeatpassword && <p className={style.p1}>{errors.repeatpassword}</p>}
                    </div>
                    <div className={style.labelCorreo}>
                        <label className={style.label1}> Correo electronico</label>
                        <input placeholder=" Correo electronico" className={style.inputCorreo} name="email" onChange={handleChange} />
                        {errors.email && <p className={style.p1}>{errors.email}</p>}
                    </div>

                    <div className={style.labelform1}>
                        <label className={style.label1}> Certificaciones</label>
                        <input placeholder=" Arrastrar aqui( .jpg,.pdf)" className={style.inputNom} name="image" onChange={handleChange} />
                        {errors.image && <p className={style.p1}>{errors.image}</p>}
                    </div>
                    { /* <div className={style.labelform1}>
>>>>>>> 423cdb35823a7c88197e5ce51249de3f82ae4e0c
                            <label className={style.label1}> Genero</label>
                          <select placeholder="Genero" className={style.inputNom} name="gender" onChange={handleChange}>
                            <option value="">Selecciona...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                            </select>
                        {errors.gender && <p className={style.p1}>{errors.gender}</p>}
                        </div>*/}
                    <div className={style.labelDescription}>
                        <label className={style.label1}> Experiencia</label>
                        <textarea placeholder=" Agrega una descripcion" type='string' className={style.inputDescription} name="description" onChange={handleChange} />
                        {errors.description && <p className={style.p1}>{errors.description}</p>}
                    </div>

                    <div className={style.titleInf}>
                        <button type="submit" className={style.btCreateAccount}>Crear cuenta</button>
                        <span >¿Ya tienes cuenta?  <button onClick={volverInicio} className={style.spanButton}> inicio de sesion</button></span>
                    </div>
                </form >

            </div>

        </div>
    </div>)
}

export default RegisterTrainer