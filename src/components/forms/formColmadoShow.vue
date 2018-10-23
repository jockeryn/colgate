<style lang="scss" scoped>
.form-group .control-label{
  top: -0.9rem;
  color: #CC2129;
}
</style>
<template>
  <form >
    <div class="row">
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" :value="colmado.colmado" disabled/>
              <label class="control-label" for="simple-input">Colmado</label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input"  :value="colmado.direccion" disabled/>
              <label class="control-label" for="simple-input">Dirección</label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input"  :value="colmado.telefono2" disabled/>
              <label class="control-label" for="simple-input">Teléfono</label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" :value="colmado.Nombre" disabled/>
              <label class="control-label" for="simple-input">Nombre</label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" :value="colmado.Apellidos" disabled/>
              <label class="control-label" for="simple-input">Apellido</label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" :value="colmado.Email" disabled/>
              <label class="control-label" for="simple-input">Correo electrónico</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'formColmadoShow',
  props: {
    colmado:{
      type: Object,
    }
  }
}
</script>
