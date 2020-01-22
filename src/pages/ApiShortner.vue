<template>
  <q-page class="flex flex-center">
    <div style="max-width: 600px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="obj.url" label="URL" hint="Digite a URL" />

        <q-input
          filled
          type="alias"
          v-model="obj.custom_alias"
          label="Alias"
          hint="Digite o alias"
          v-if="aliasVisible"
        />

        <q-toggle v-model="aliasVisible" label="Custom Alias ?" />

        <div>
          <q-btn label="Submeter" type="submit" color="primary" />
          <q-btn label="Resetar" type="reset" color="primary" flat class="q-ml-sm" />
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
      top10: [],
      prodUrl: "https://api-shortner.herokuapp.com/",
      obj: {
        url: "",
        custom_alias: ""
      },
      aliasVisible: false,
      error: ""
    };
  },
  methods: {
    onSubmit() {
      var params = {};
      if (this.obj.url || this.obj.custom_alias) {
        if (this.obj.url && this.obj.custom_alias) {
          params = {
            url: this.obj.url,
            custom_alias: this.obj.custom_alias
          };

          this.$axios
            .put(this.prodUrl + "api-shortner", null, { params })
            .then(r => {
              this.$q.notify({
                color: "green-4",
                textColor: "white",
                icon: "cloud_done",
                message: "Submetido"
              });
            })
            .catch(e => this.showError());
        } else if (this.obj.url) {
          params = {
            url: this.obj.url
          };

          this.$axios
            .put(this.prodUrl + "api-shortner", null, { params })
            .then(r => {
              this.$q.notify({
                color: "green-4",
                textColor: "white",
                icon: "cloud_done",
                message: "Submetido"
              });
            })
            .catch(e => this.showError());
        }
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Preencha pelo menos um dos campos"
        });
      }
    },
    onReset() {
      this.obj.url = "";
      this.obj.custom_alias = "";
    },
    showError() {
      this.$q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message:
          "Ocorreu um erro: Verifique se já existe um ALIAS ou um URL já cadastrado"
      });
    }
  }
};
</script>
