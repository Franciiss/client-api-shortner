<template>
  <q-page class="flex flex-center">
    <div style="max-width: 600px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input filled v-model="customAlias" label="alias" hint="Digite um ALIAS" />

        <div>
          <q-btn label="Submeter" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data: function() {
    return {
      customAlias: "",
      error: "",
      prodUrl: "https://api-shortner.herokuapp.com/"
    };
  },
  methods: {
    onSubmit() {
      if (this.customAlias) {
        this.$axios
          .get(this.prodUrl + "api-shortner/" + this.customAlias)
          .then(r => {
            this.$q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Documento Encontrado !"
            });

            this.$router.push("/api-shortner/" + this.customAlias);
          })
          .catch(e => {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Documento não encontrado"
            });
          });
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Preencha pelo menos um dos campos"
        });
      }
    }
  }
};
</script>
