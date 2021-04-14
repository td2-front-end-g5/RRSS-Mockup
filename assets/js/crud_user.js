var firebaseConfig = {
      apiKey: "AIzaSyBvav-53w23fwCRLnZDhtaCNIXuCVewrRc",
      authDomain: "pruebafinal-17bb3.firebaseapp.com",
      projectId: "pruebafinal-17bb3",
      storageBucket: "pruebafinal-17bb3.appspot.com",
      messagingSenderId: "754403789308",
      appId: "1:754403789308:web:84e60a4912df6ca7268a79"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//base de datos
const db = firebase.firestore();

//Toma datos de los input para cargarlos a la base de datos
const form_usu = document.getElementById("formUsu");
const contenedor_usuarios = document.getElementById("contenedor_usuarios");


const guardar_usuario = (usu_rol, usu_usuario, usu_foto_perfil, usu_nombre, usu_apellido, usu_fecha_nacimiento, usu_telefono, usu_email, usu_contrasena, usu_gen_curso, usu_area, usu_sit_laboral) =>
    db.collection("pruebafinal").doc().set({
        usu_rol,
        usu_usuario,
        usu_foto_perfil,
        usu_nombre,
        usu_apellido,
        usu_fecha_nacimiento,
        usu_telefono,
        usu_email,
        usu_contrasena,
        usu_gen_curso,
        usu_area,
        usu_sit_laboral,
    });

//llamando la informacion de pruebafinal
const getUsuarios = () => db.collection("pruebafinal").get();

//actualización de la base de datos para que se refresque en el sitio
const onGetUsuarios = (callback) => db.collection("pruebafinal").onSnapshot(callback);

//borrar usuario
const borrar_usuario = (id) => db.collection("pruebafinal").doc(id).delete();

//refresca usuarios
const getUsuario = (id) => db.collection("pruebafinal").doc(id).get();

//actualizar usuario
const actualizar_usuario = (id, actualizarusu) => db.collection("pruebafinal").doc(id).update(actualizarusu);


let id = '';
let editStatus = false;

window.addEventListener("DOMContentLoaded", async (e) => {
    onGetUsuarios((querySnapshot) => {
        contenedor_usuarios.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const usuarioData = doc.data();
            contenedor_usuarios.innerHTML += `

                <tr>
                    <td>${usuarioData.usu_rol}</td>
                    <td>${usuarioData.usu_usuario}</td>
                    <td><img src="${usuarioData.usu_foto_perfil}" alt="" width="25%"></td>
                    <td>${usuarioData.usu_nombre}</td>
                    <td>${usuarioData.usu_apellido}</td>
                    <td>${usuarioData.usu_fecha_nacimiento}</td>
                    <td>${usuarioData.usu_telefono}</td>
                    <td>${usuarioData.usu_email}</td>
                    <td>${usuarioData.usu_contrasena}</td>
                    <td>${usuarioData.usu_gen_curso}</td>
                    <td>${usuarioData.usu_area}</td>
                    <td>${usuarioData.usu_sit_laboral}</td>
                    <td>
                    <button type="button" class="btn btn-warning btn-delete" data-id="${doc.id}">Editar</button>
                    <button type="button" class="btn btn-danger btn-edit" data-id="${doc.id}">Borrar</button>
                    </td>
                </tr>
               
            
            `;
        });

        const btnDelete = contenedor_usuarios.querySelectorAll("btn-delete");
        btnDelete.forEach((btn) =>
            btn.addEventListener("click", async (e) => {
                console.log(e.target.dataset.id);
                try {
                    await borrar_usuario(e.target.dataset.id);
                } catch (error) {
                    console.log(error);
                }
            })
        );

        const btnEdit = contenedor_usuarios.querySelectorAll("btn-edit");
        btnEdit.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                try {
                    const doc = await getUsuario(e.target.dataset.id);
                    const usuarioDatas = doc.data();
                    form_usu["usu_rol"].value = usuarioDatas.usu_rol;
                    form_usu["usu_username"].value = usuarioDatas.usu_usuario;
                    form_usu["usu_foto_perfil"].value = usuarioDatas.usu_foto_perfil;
                    form_usu["usu_nombre"].value = usuarioDatas.usu_nombre;
                    form_usu["usu_apellido"].value = usuarioDatas.usu_apellido;
                    form_usu["usu_fecha_nacimiento"].value = usuarioDatas.usu_fecha_nacimiento;
                    form_usu["usu_telefono"].value = usuarioDatas.usu_telefono;
                    form_usu["usu_email"].value = usuarioDatas.usu_email;
                    form_usu["usu_contrasena"].value = usuarioDatas.usu_contrasena;
                    form_usu["usu_gen"].value = usuarioDatas.usu_gen_curso;
                    form_usu["usu_area"].value = usuarioDatas.usu_area;
                    form_usu["usu_sit_laboral"].value = usuarioDatas.usu_sit_laboral;
                    editStatus = true;
                    id = doc.id;
                    form_usu["btn-accion"].innerText = "Actualizar"
                } catch (error) {
                    console.log(error);
                }
            });
        });
    });
});



form_usu.addEventListener("submit", async (e) => {
    e.preventDefault();

    const rol = form_usu["usu_rol"];
    const username = form_usu["usu_username"];
    const foto = form_usu["usu_foto_perfil"];
    const nombre = form_usu["usu_nombre"];
    const apellido = form_usu["usu_apellido"];
    const nacimiento = form_usu["usu_fecha_nacimiento"];
    const telefono = form_usu["usu_telefono"];
    const email = form_usu["usu_email"];
    const pass = form_usu["usu_contrasena"];
    const generacion = form_usu["usu_gen"];
    const area = form_usu["usu_area"];
    const situacionlaboral = form_usu["usu_sit_laboral"];

    try {
        if (!editStatus) {
            await guardar_usuario(
                rol.value,
                username.value,
                foto.value,
                nombre.value,
                apellido.value,
                nacimiento.value,
                telefono.value,
                email.value,
                pass.value,
                generacion.value,
                area.value,
                situacionlaboral.value,
            );
        } else {
            await actualizar_usuario(id, {
                usu_rol: rol.value,
                usu_usuario: username.value,
                usu_foto_perfil: foto.value,
                usu_nombre: nombre.value,
                usu_apellido: apellido.value,
                usu_fecha_nacimiento: nacimiento.value,
                usu_telefono: telefono.value,
                usu_email: email.value,
                usu_contrasena: pass.value,
                usu_gen_curso: generacion.value,
                usu_area: area.value,
                usu_sit_laboral: situacionlaboral.value,
            })
            editStatus = false;
            id = '';
            form_usu['btn-accion'].innerText = 'Guardar';
        }
        form_usu.reset();

    } catch (error) {
        console.log(error);
    }

});