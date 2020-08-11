const Form = {

    data() {
        return {
            genero: '',
            ethnicity: '',
            studying: '',
            level: '',
            faculty: '',
            course: '',
            graduation: '',
            find_work: '',
            employed: '',
            salary: '',
            study_work: ''
        }


    },

    methods: {
        send: function () {

            /*
            axios.post('/user', {
                console.log("hello world");
                iziToast.success({
                    title: 'Todo bien',
                    message: 'Actualización exitosa',
                });
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            */
        }
    },

    template: `
    <div  class="own-form">
        <form v-on:submit.prevent="send">
            <div class="form-group">
                <label for="genero">Género</label>
                <select v-model="genero" class="form-control" id="genero" required>
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>No binario</option>
                </select>
            </div>
            <div class="form-group">
                <label for="ethnicity">¿Con cual minoría étnica te identificas?</label>
                <select v-model="ethnicity" class="form-control" id="ethnicity" required>
                    <option>Sin pertenencia étnica</option>
                    <option>Afrocolombiana, negra, raisal y palenquera</option>
                    <option>Indígena</option>
                </select>
            </div>
            <div class="form-group">
                <label for="studying">¿Estas actualmente estudiando?</label>
                <select v-model="studying" class="form-control" id="studying" required>
                    <option>Sí</option>
                    <option>No</option>
                </select>
            </div>
            <div class="form-group">
                <label for="level">Nivel academico</label>
                <select v-model="level" class="form-control" id="level" required>
                    <option>Pregrado</option>
                    <option>Posgrado</option>
                    <option>Doctorado</option>
                </select>
            </div>
            <div class="form-group">
                <label for="faculty">Facultad</label>
                <select v-model="faculty" class="form-control" id="faculty" required>
                    <option>Pregrado</option>
                    <option>Posgrado</option>
                    <option>Doctorado</option>
                </select>
            </div>
            <div class="form-group">
                <label for="course">Carrera</label>
                <select v-model="course" class="form-control" id="course" required>
                    <option>Pregrado</option>
                    <option>Posgrado</option>
                    <option>Doctorado</option>
                </select>
            </div>
            <div class="form-group">
                <label for="graduation">Año de graduación</label>
                <select v-model="graduation" class="form-control" id="graduation" required>
                    <option>Pregrado</option>
                    <option>Posgrado</option>
                    <option>Doctorado</option>
                </select>
            </div>
            <div class="form-group">
                <label for="find_work">¿Se te ha dificultado encontrar empleo?</label>
                <select v-model="find_work" class="form-control" id="work" required>
                    <option>SÍ</option>
                    <option>No</option>
                </select>
            </div>
            <div class="form-group">
                <label for="employed">¿Estas actualmente empleado?</label>
                <select v-model="employed" class="form-control" id="employed" required>
                    <option>Si</option>
                    <option>No</option>
                </select>
            </div>
            <div class="form-group">
                <label for="salary">¿Cuánto ganas?</label>
                <input v-model="salary" type="range" min="0" max="100000000" step="10000" class="form-control-range" id="salary" required>
            </div>
            <div id="own-last" class="form-group">
                <label for="study_work">¿Consideras que tu actual trabajo esta relacionado directamente con tu formación academica?</label>
                <select v-model="study_work" class="form-control" id="study_work" required>
                    <option>Si</option>
                    <option>No</option>
                </select>
            </div>
                <button type="submit" class="btn btn-primary own-button">Guardar</button>
        </form>
    </div>


    `
};

export default Form;