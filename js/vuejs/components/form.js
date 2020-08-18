const Form = {

    data() {
        return {


            gender: "",
            ethnicity: "",
            is_studying: "",
            level_id: "",
            faculty_id: "",
            graduation: "",
            is_employed: "",
            salary: 0,
            contract_type: "",
            is_work_related_to_study: ""
        }


    },

    methods: {
        send: function () {

            let data = {
                gender: this.gender,
                ethnicity: this.ethnicity,
                is_studying: this.is_studying,
                level_id: parseInt(this.level_id),
                faculty_id: parseInt(this.faculty_id),
                graduation: this.graduation,
                is_employed: this.is_employed,
                salary: this.salary,
                contract_type: this.contract_type,
                is_work_related_to_study: this.is_work_related_to_study
            };
            console.log(data);
            axios.post('http://127.0.0.1:8000/api/profile', data)
            .then(function (response) {
                console.log(response);
                iziToast.success({
                    title: 'Todo bien',
                    message: 'Actualización exitosa',
                });
            })
            .catch(function (error) {
                iziToast.error({
                    title: 'Error',
                    message: 'Hubo un problema',
                });
                console.log(error);
            });

        }
    },

    template: `
    <div  class="own-form">
        <form v-on:submit.prevent="send">
            <div class="form-group">
                <label for="gender">Género</label>
                <select v-model="gender" class="form-control" id="gender" required>
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
                <label for="is_studying">¿Estas actualmente estudiando?</label>
                <select v-model="is_studying" class="form-control" id="is_studying" required>
                    <option>Sí</option>
                    <option>No</option>
                </select>
            </div>
            <div class="form-group">
                <label for="level_id">Nivel academico</label>
                <select v-model="level_id" class="form-control" id="level_id" required>
                    <option value="1">Pregrado</option>
                    <option  value="2">Posgrado</option>
                    <option value="3">Doctorado</option>
                </select>
            </div>
            <div class="form-group">
                <label for="faculty_id">Facultad</label>
                <select v-model="faculty_id" class="form-control" id="faculty_id" required>
                    <option value="1">Artes</option>
                    <option value="2">Ciencias</option>
                </select>
            </div>
            <div class="form-group">
                <label for="graduation">¿En que año se gradua?</label>
                <input v-model="graduation" type="date" class="form-control" id="graduation" required>
            </div>
            <div class="form-group">
                <label for="is_employed">¿Estas actualmente empleado?</label>
                <select v-model="is_employed" class="form-control" id="is_employed" required>
                    <option>Si</option>
                    <option>No</option>
                </select>
            </div>
            <div class="form-group">
                <label for="salary">¿Cuánto ganas?</label>
                <input v-model="salary" type="range" min="0" max="100000000" step="10000" class="form-control-range" id="salary" required>
                {{new Intl.NumberFormat().format(salary)}}
            </div>
            <div class="form-group">
                <label for="contract_type">¿Se te ha dificultado encontrar empleo?</label>
                <select v-model="contract_type" class="form-control" id="contract_type" required>
                    <option>SÍ</option>
                    <option>No</option>
                </select>
            </div>
            <div id="own-last" class="form-group">
                <label for="is_work_related_to_study">¿Consideras que tu actual trabajo esta relacionado directamente con tu formación academica?</label>
                <select v-model="is_work_related_to_study" class="form-control" id="is_work_related_to_study" required>
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