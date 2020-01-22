<template>
  <q-page class="flex flex-center">
    <p>Top 10 mais Acessados:</p>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">URL</th>
          <th class="text-left">ALIAS</th>
          <th class="text-right">ACESSOS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="e in top10" :key="e.url">
          <td v-if="e.url" class="text-left">{{ e.url }}</td>
          <td v-if="e.custom_alias" class="text-right">{{ e.custom_alias }}</td>
          <td v-if="e.acessos" class="text-right">{{ e.acessos }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data: function() {
    return {
      top10: [],
      prodUrl: "https://api-shortner.herokuapp.com/"
    };
  },
  mounted() {
    this.$axios
      .get(this.prodUrl + "ver/top10")
      .then(response =>
        Object.entries(response.data[0]).forEach(e =>
          e.forEach(i => this.top10.push(i))
        )
      );
  }
};
</script>
