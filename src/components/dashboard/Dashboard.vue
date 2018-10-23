<template>
  <div class="dashboard">
    <!-- <dashboard-bottom-widgets></dashboard-bottom-widgets>
    <dashboard-info-widgets></dashboard-info-widgets> -->
    <vuestic-widget id="widgetColmaderosContainer" v-if="mis_colmados" :headerText="$t('Colmados')">
        <!--<button id="addColmadero" class="btn btn-primary btn-micro">
          Agregar
        </button>  -->
        <vuestic-data-table 
            :tableFields="tableFields"
            :itemsPerPage="itemsPerPage"
            :tableData="mis_colmados"
            :sortFunctions="sortFunctions"
            :onEachSide="onEachSide"
            :apiMode="apiMode"
            :paginationPath="paginationPath"></vuestic-data-table>
      </vuestic-widget>
  </div>
</template>

<script>
import Vue from 'vue'
import DashboardInfoWidgets from './DashboardInfoWidgets'
import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
import FeaturesTab from './features-tab/FeaturesTab.vue'
import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'
import TableData from './data-visualisation-tab/TableData'
import TableActionsComalderos from 'components/tables/TableActionsComalderos.vue'
import BadgeColumn from 'components/tables/BadgeColumn.vue'
Vue.component('table-actions-comalderos', TableActionsComalderos)
Vue.component('badge-column', BadgeColumn)
const axios = require('axios')
var CryptoJS = require("crypto-js")
export default {
  name: 'dashboard',
  components: {
    DataVisualisationTab,
    DashboardInfoWidgets,
    UsersMembersTab,
    SetupProfileTab,
    FeaturesTab,
    DashboardBottomWidgets
  },
  data(){
    return{
      mis_colmados : null,
      u_id: this.$store.state.app.user_id,
      apiMode: false, // Choose api mode or just pass array in data-table component
      no_colmados_msg: 'No hay colmados',
      tableData: this.mis_colmados,
      dataModeFilterableFields: ['Nombre'],
      onEachSide: 1,
      no_colmados_msg: "<p>"+this.$t('Aún no tienes viajes con nosotros, ¿a qué esperas?')+"</p><a class='el-button el-button--success' href='http://monbus.es'>"+this.$t('Iniciar un viaje')+"</a>",
      mensaje_vacio: this.$t('Cargando tus viajes...'),
      tableFields: [
         {
           name: '__component:badge-column', // Object property name in your data e.g. (data[0].name)
           sortField: 'Nombre', // Object property name in your data which will be used for sorting
           title: 'Comaldero'
         },
         {
           name: '__component:table-actions-comalderos',
           title: 'Acciones'
         }
      ],
      itemsPerPage: [  // values in dropdown "Items Per Page"
        {
          value: 10
        },
        {
          value: 10
        },
        {
          value: 10
        }
      ],
      sortFunctions: {       // use custom sorting functions for prefered fields
        'name': function (item1, item2) {
          return item1 >= item2 ? 1 : -1
        },
        'email': function (item1, item2) {
          return item1 >= item2 ? 1 : -1
        }
      },
      paginationPath: ''
    }
  },
  mounted: function(){
    this.getColmados()
  },
  methods: {
    getColmados(){
        var timestamp = Date.now()
        var getHMAC = function(key, pkey, timestamp) {
          var hash = CryptoJS.HmacSHA1(key+timestamp, pkey)
          return hash.toString()
        }
        if (this.u_id == null){
          mensaje_vacio: this.no_colmados_msg
        }
        axios.get('https://api2.socialandloyal.com/users?client_name=colgateclub',
          {
            headers:{
              'X-MICROTIME': timestamp,
              'X-PUBLIC': this.$store.state.app.pu_k, 
              'X-HASH': getHMAC(this.$store.state.app.pu_k, this.$store.state.app.pr_k, timestamp)
            }
          }
        )
        .then(response => {
          let _colmados = response.data.data.filter( data => data['Tipo de usuario'] == 'Colmado')
          _colmados = _colmados.filter( data => data['Estatus'] != 'No Afiliado',)
          let data = _colmados
          this.mis_colmados = { data }
        })
      },
  }
}

</script>
<style lang="scss" scoped>
#widgetColmaderosContainer{
  position:relative;
}
#addColmadero{
  right: 10px;
  margin:-70px 0;
  position: absolute;
}
</style>
