<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          API URL Shortner
        </q-toolbar-title>

        <div>por Francisco Borges</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>End Points</q-item-label>
        <q-item clickable tag="a" href="http://cliente-api-shortner.surge.sh/#/api-shortner">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>/api-shortner</q-item-label>
            <q-item-label caption>PUT: Criação de URL's com ou sem ALIAS</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://cliente-api-shortner.surge.sh/#/pesquisar-alias">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>/api-shortner/:alias</q-item-label>
            <q-item-label caption>GET: Requsisição de um documento pelo ALIAS</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://cliente-api-shortner.surge.sh/#/ver/top10">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>/ver/top10</q-item-label>
            <q-item-label caption>GET: Consulta das TOP 10 URL's mais acessadas</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable tag="a" href="https://github.com/Franciiss">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/Franciiss</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
