<template>
  <span>
    <span class="c_name">{{rowData.colmado}}</span><br/>
    <small>{{rowData.direccion}}</small>
  </span>
</template>

<script>
export default {
  name: 'badgeColumn',
  props: {
    rowData: {
      type: Object,
      required: true
    },

    rowIndex: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
  .circle {
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    display: inline-block;
  }
  .c_name{
    font-weight:bold;
  }
</style>
