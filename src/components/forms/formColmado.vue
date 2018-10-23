<template>
  <form >
    <div class="row">
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" :value="colmado.colmado" required/>
              <label class="control-label" for="simple-input">Colmado</label><i class="bar"></i>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input"  :value="colmado.direccion" required/>
              <label class="control-label" for="simple-input">Dirección</label><i class="bar"></i>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input"  :value="colmado.telefono2" required/>
              <label class="control-label" for="simple-input">Teléfono</label><i class="bar"></i>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" :value="colmado.Nombre" required/>
              <label class="control-label" for="simple-input">Nombre</label><i class="bar"></i>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" :value="colmado.Apellidos" required/>
              <label class="control-label" for="simple-input">Apellido</label><i class="bar"></i>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <div class="form-group">
            <div class="input-group">
              <input id="simple-input" :value="colmado.Email" required/>
              <label class="control-label" for="simple-input">Correo electrónico</label><i class="bar"></i>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'formColmado',
  props: {
    colmado: {
      type: Object,
    }
  }
}
</script>
