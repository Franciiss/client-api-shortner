<template>
  <q-page class="flex flex-center">
    <div style="max-width: 600px">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-center">URL</th>
            <th class="text-left">ALIAS</th>
            <th class="text-right">ACESSOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-if="obj.url" class="text-left">{{ obj.url }}</td>
            <td v-if="obj.custom_alias" class="text-right">{{ obj.custom_alias }}</td>
            <td v-if="obj.acessos" class="text-right">{{ obj.acessos }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "UrlMasterDetail",
  created() {
    this.$axios
      .get(this.prodUrl + "api-shortner/" + this.alias)
      .then(response => (this.obj = Object.entries(response.data)[0][1]));
  },
  data: function() {
    return {
      alias: this.$route.params.alias,
      obj: null,
      prodUrl: "https://api-shortner.herokuapp.com/"
    };
  }
};
</script>
