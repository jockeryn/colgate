<template>
  <span class="d-flex  text-center">
    <button @click="$store.commit('setMercaderista', rowData.id)" class="btn btn-primary rounded-icon btn-micro">
      <div class="btn-with-icon-content"><i class="ion ion-ios-eye"></i> Ver</div>
    </button>

    <!--MODAL ACTIVATE-->
    <vuestic-modal :show.sync="show" ref="activateModal" v-bind:small="true" :cancelClass="'btn btn-secondary btn-micro'"
                  :okClass="'btn btn-primary btn-micro'" :okText="'Confirmar'" :cancelText="'Cancelar'" :okAction="activateColmado">
      <div slot="title"><b>Activar colmadero</b></div>
      <div>
        <form-colmado :colmado="rowData"></form-colmado>
      </div>
    </vuestic-modal>

    <!--MODAL DISCARD-->
    <vuestic-modal :show.sync="show" ref="binModal" v-bind:small="true" :cancelClass="'btn btn-secondary btn-micro'"
                    :okClass="'btn btn-warning btn-micro'" :okText="'Confirmar'" :cancelText="'Cancelar'" :okAction="discardColmado">
        <div slot="title"><b>Descartar colmado</b></div>
        <div>
          Estas seguro que deseas descartar a:<h3>{{ rowData.name }}?</h3>
        </div>
    </vuestic-modal>
  </span>

</template>

<script>

import Vue from 'vue'
import formColmado from 'components/forms/formColmado.vue'
Vue.component('form-colmado', formColmado)

const axios = require('axios')
var CryptoJS = require('crypto-js')
export default {
  name: 'TableActionsComalderos',
  data () {
    return {
      notiSuccess: false,
      show: true,
    }
  },
  props: {
    rowData: {
      type: Object,
      required: true
    },

    rowIndex: {
      type: Number
    }
  },
  methods: {
    showActivateModal () {
      this.$refs.activateModal.open()
    },
    showViewModal () {
      this.$refs.viewModal.open()
    },
    showBinModal () {
      this.$refs.binModal.open()
    },
    activateColmado () {
      var timestamp = Date.now()
      var getHMAC = function (key, pkey, timestamp) {
        var hash = CryptoJS.HmacSHA1(key + timestamp, pkey)
        return hash.toString()
      }
      const params = new URLSearchParams()
      params.append('client_name', 'colgateclub')
      params.append('id', this.$store.state.app.u_id)
      params.append('2695', 'Afiliado')

      if (this.u_id == null) {
        mensaje_vacio: this.no_colmados_msg
      }
      axios.put('https://api2.socialandloyal.com/users/user_id/' + this.$store.state.app.u_id, params,
        {
          headers: {
            'X-MICROTIME': timestamp,
            'X-PUBLIC': this.$store.state.app.pu_k,
            'X-HASH': getHMAC(this.$store.state.app.pu_k, this.$store.state.app.pr_k, timestamp)
          }
        }
      )
        .then(response => {
          this.notiSuccess = true
          setTimeout(function () { location.reload() }, 2000)
          console.log(response)
        })
    },
    discardColmado () {
      var timestamp = Date.now()
      var getHMAC = function (key, pkey, timestamp) {
        var hash = CryptoJS.HmacSHA1(key + timestamp, pkey)
        return hash.toString()
      }
      const params = new URLSearchParams()
      params.append('client_name', 'colgateclub')
      params.append('id', this.$store.state.app.u_id)
      params.append('2695', 'No Afiliado')

      if (this.u_id == null) {
        mensaje_vacio: this.no_colmados_msg
      }
      axios.put('https://api2.socialandloyal.com/users/user_id/' + this.$store.state.app.u_id, params,
        {
          headers: {
            'X-MICROTIME': timestamp,
            'X-PUBLIC': this.$store.state.app.pu_k,
            'X-HASH': getHMAC(this.$store.state.app.pu_k, this.$store.state.app.pr_k, timestamp)
          }
        }
      )
        .then(response => {
          this.notiSuccess = true
          setTimeout(function () { location.reload() }, 2000)
          console.log(response)
        })
    },
  }
}
</script>

<style lang="scss" scoped>
  .btn.btn-micro{
    margin-right:10px;
  }
  .btn.btn-with-icon .btn-with-icon-content{
    margin-left: 0;
  }
  .btn.btn-with-icon i{
    position:initial;
  }
  #notiSuccess{
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
</style>
<style  lang="scss" >
 .vuestic-data-table {
    .form-group {margin-bottom:0}
    .datatable-controls { height: 10px; }
  }
</style>
