<template>
  <vuestic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <main slot="content" id="content" class="content" role="main">
      <!-- <app-breadcrumbs/> -->
      <vuestic-pre-loader v-show="isLoading" class="pre-loader"></vuestic-pre-loader>
      <router-view></router-view>
      <router-link style="margin-right:15px" v-if="$store.state.app.u_type=='Admin'" to="/admin/admin" class="btn btn-secondary btn-micro">
         Admin
      </router-link>
      <router-link v-if="$store.state.app.u_type=='Admin'" to="/admin/dashboard" class="btn btn-secondary btn-micro">
         Mercaderista
      </router-link>
      <div class="clearfix"></div>
    </main>

    <span slot="footer">©2018. Made by&nbsp;<a href="https://socialandloyal.com" target="_blank">SocialAndLoyal </a></span>
  </vuestic-layout>
</template>
<script>

import VuesticLayout from '../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppSidebar from './app-sidebar/AppSidebar'
import AppBreadcrumbs from './app-breadcrumbs/AppBreadcrumbs'
import Layout from 'vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',

  components: {
    VuesticLayout,
    AppNavbar,
    AppSidebar,
    AppBreadcrumbs
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>
